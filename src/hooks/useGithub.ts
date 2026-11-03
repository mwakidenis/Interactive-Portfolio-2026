import { useState, useEffect, useCallback } from 'react';

export interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  company: string | null;
  blog: string | null;
  twitter_username: string | null;
  created_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  pushed_at: string;
  archived: boolean;
  disabled: boolean;
  topics: string[];
}

interface UseGithubReturn {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

const GITHUB_API = 'https://api.github.com';
const CACHE_KEY = 'github-cache';
const CACHE_TTL = 1000 * 60 * 30; // 30 minutes

function getCached<T>(key: string): T | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const { value, timestamp } = JSON.parse(raw);
    if (Date.now() - timestamp > CACHE_TTL) return null;
    return value;
  } catch {
    return null;
  }
}

function setCached<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify({ value, timestamp: Date.now() }));
  } catch {
    // ignore quota errors
  }
}

export function useGithub(username: string): UseGithubReturn {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    if (!username) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);

    const cache = getCached<{ user: GitHubUser; repos: GitHubRepo[] }>(CACHE_KEY);
    if (cache) {
      setUser(cache.user);
      setRepos(cache.repos);
      setLoading(false);
      return;
    }

    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`${GITHUB_API}/users/${encodeURIComponent(username)}`, {
          headers: { Accept: 'application/vnd.github+json' },
        }),
        fetch(
          `${GITHUB_API}/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=6`,
          { headers: { Accept: 'application/vnd.github+json' } },
        ),
      ]);

      if (!userRes.ok) {
        if (userRes.status === 403) {
          setError('GitHub API rate limit reached. Please try again later.');
        } else if (userRes.status === 404) {
          setError('GitHub profile not found.');
        } else {
          setError(`Failed to load profile (${userRes.status}).`);
        }
        setLoading(false);
        return;
      }

      const userData: GitHubUser = await userRes.json();

      let repoData: GitHubRepo[] = [];
      if (reposRes.ok) {
        repoData = (await reposRes.json()).filter(
          (r: GitHubRepo) => !r.archived && !r.disabled,
        );
      }

      setUser(userData);
      setRepos(repoData);
      setCached(CACHE_KEY, { user: userData, repos: repoData });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An unexpected error occurred.',
      );
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { user, repos, loading, error, refetch: fetchData };
}
