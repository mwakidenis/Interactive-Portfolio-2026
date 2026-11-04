import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Code2,
  Sun,
  Moon,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { socialLinks } from '@/data/socialLinks';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'shadow-md border-b border-border bg-background/80 backdrop-blur-md dark:bg-background/80 dark:border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            onClick={closeMobile}
            className="flex items-center gap-2 group"
          >
            <Code2 size={24} className="text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-bold text-xl tracking-tight text-text">mwakidenis</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMobile}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-text-muted hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="px-3 py-1.5 text-sm"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="hidden md:block px-3 py-1.5 text-sm"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </Button>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg text-text-muted hover:text-primary hover:bg-surface transition-colors focus-visible:ring-2 focus-visible:ring-focus"
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed inset-0 z-40 bg-surface/95 backdrop-blur-sm dark:bg-surface/95"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-xl tracking-tight text-text">mwakidenis</span>
                <button
                  onClick={closeMobile}
                  className="p-2 rounded-lg text-text-muted hover:text-primary hover:bg-surface transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMobile}
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                      isActive(link.path)
                        ? 'bg-primary text-white'
                        : 'text-text-muted hover:text-primary hover:bg-surface-hover'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-6 pt-6 border-t border-border">
                  <button
                    onClick={() => {
                      toggleTheme();
                      closeMobile();
                    }}
                    className="w-full py-3 px-4 rounded-lg font-medium text-left transition-colors text-text-muted hover:text-primary hover:bg-surface-hover"
                  >
                    {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                  </button>
                </div>
                <div className="mt-6 flex gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-text-muted hover:text-primary hover:bg-surface transition-colors"
                      aria-label={s.label}
                    >
                      <s.icon size={18} />
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
