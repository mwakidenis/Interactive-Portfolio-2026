import { useGithub } from '@/hooks/useGithub';
import { Github, MapPin, Building2, Link, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Loader } from '@/components/ui/loader';

export interface GitHubProfileProps {
  username: string;
  className?: string;
}

export const GitHubProfile: React.FC<GitHubProfileProps> = ({
  username,
  className,
}) => {
  const { user, loading, error } = useGithub(username);

  if (loading) {
    return (
      <Card className={className} padded>
        <div className="flex flex-col items-center justify-center py-12 gap-3">
          <Loader size={32} />
          <p className="text-text-muted text-sm">Loading GitHub profile…</p>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className={className} padded>
        <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
          <Github size={32} opacity={40} />
          <p className="text-text-muted text-sm">{error}</p>
        </div>
      </Card>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={className}
    >
      <Card padded>
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex-shrink-0">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-24 h-24 rounded-full object-cover border border-border/60 shadow-lg"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 mb-1">
              <h3 className="text-xl font-bold text-text">{user.name || user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm flex items-center gap-1"
              >
                <Github size={14} /> @{user.login}
              </a>
            </div>
            {user.bio && (
              <p className="text-text-secondary mb-4 leading-relaxed">{user.bio}</p>
            )}
            <div className="flex flex-wrap gap-4 mb-6 text-sm">
              {user.location && (
                <div className="flex items-center gap-1.5 text-text-muted">
                  <MapPin size={14} /> {user.location}
                </div>
              )}
              {user.company && (
                <div className="flex items-center gap-1.5 text-text-muted">
                  <Building2 size={14} /> {user.company}
                </div>
              )}
              <div className="flex items-center gap-1.5 text-text-muted">
                <Clock size={14} />
                <time dateTime={user.created_at}>
                  Joined {new Date(user.created_at).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                  })}
                </time>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-border bg-surface-hover text-text font-medium hover:bg-surface transition-colors"
              >
                <Link size={16} /> Profile
              </a>
              {user.blog && (
                <a
                  href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-border bg-surface-hover text-text font-medium hover:bg-surface transition-colors"
                >
                  Blog
                </a>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="px-4 py-3 rounded-lg border border-border bg-surface text-center">
              <div className="text-2xl font-bold text-text">{user.public_repos}</div>
              <div className="text-xs text-text-muted">Repositories</div>
            </div>
            <div className="px-4 py-3 rounded-lg border border-border bg-surface text-center">
              <div className="text-2xl font-bold text-text">{user.followers}</div>
              <div className="text-xs text-text-muted">Followers</div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default GitHubProfile;
