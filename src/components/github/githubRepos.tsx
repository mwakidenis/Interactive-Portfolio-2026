import { useGithub } from '@/hooks/useGithub';
import { ExternalLink, Code2, Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader } from '@/components/ui/loader';

export interface GitHubReposProps {
  username: string;
  className?: string;
}

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const GitHubRepos: React.FC<GitHubReposProps> = ({ username, className }) => {
  const { repos, loading, error } = useGithub(username);

  if (loading) {
    return (
      <Card className={className} padded>
        <div className="flex flex-col items-center justify-center py-12 gap-3">
          <Loader size={32} />
          <p className="text-text-muted text-sm">Loading repositories…</p>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className={className} padded>
        <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
          <Code2 size={32} opacity={40} />
          <p className="text-text-muted text-sm">{error}</p>
        </div>
      </Card>
    );
  }

  if (!repos || repos.length === 0) {
    return (
      <Card className={className} padded>
        <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
          <Code2 size={32} opacity={40} />
          <p className="text-text-muted text-sm">No public repositories found.</p>
        </div>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={className}
    >
      <Card padded>
        <div className="grid gap-4">
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              whileHover={{ y: -4 }}
              className="group flex flex-col sm:flex-row sm:items-center gap-3 p-3 rounded-lg border border-border bg-surface transition-colors hover:bg-surface-hover"
            >
              <div className="flex-1 min-w-0">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text font-semibold hover:text-primary transition-colors"
                >
                  {repo.name}
                </a>
                {repo.description && (
                  <p className="text-text-muted text-sm mt-1 line-clamp-2">
                    {repo.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mt-2">
                  {repo.language && (
                    <Badge variant="primary" className="text-[10px] px-2 py-1">
                      {repo.language}
                    </Badge>
                  )}
                  {repo.topics.slice(0, 3).map((topic) => (
                    <Badge key={topic} variant="outline" className="text-[10px] px-2 py-1">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 text-xs text-text-muted">
                <div className="flex items-center gap-1">
                  <Star size={12} /> {repo.stargazers_count}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={12} /> {formatDate(repo.updated_at)}
                </div>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-xs font-medium hover:underline ml-auto sm:ml-0"
              >
                View <ExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default GitHubRepos;
