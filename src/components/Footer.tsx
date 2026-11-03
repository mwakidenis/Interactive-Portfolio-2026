import { Github } from 'lucide-react';
import { GitHubProfile } from '@/components/github/githubProfile';
import { GitHubRepos } from '@/components/github/githubRepos';
import { socialLinks } from '@/data/socialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface text-text transition-colors duration-500">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Github size={24} className="text-primary" />
              <span className="font-bold text-xl tracking-tight text-text">mwakidenis</span>
            </div>
            <p className="text-text-muted max-w-xs leading-relaxed">
              Software engineer building modern, performant web applications
              with React, TypeScript, and Node.js.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-text-muted hover:text-primary hover:bg-surface-hover transition-colors focus-visible:ring-2 focus-visible:ring-focus"
                  aria-label={s.label}
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex flex-col">
            <h3 className="font-bold text-text mb-6">GitHub</h3>
            <GitHubProfile username="mwakidenis" className="mb-6" />
          </div>

          <div className="hidden lg:flex flex-col">
            <h3 className="font-bold text-text mb-6">Recent Repositories</h3>
            <GitHubRepos username="mwakidenis" />
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            &copy; {currentYear} Mwaki Denis. All rights reserved.
          </p>
          <div className="text-xs text-text-muted">
            Built with <span className="text-primary">React</span> &{' '}
            <span className="text-primary">TypeScript</span> • Deployed on{' '}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Vercel
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
