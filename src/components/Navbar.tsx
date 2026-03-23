import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Code2, Sun, Moon, Search } from 'lucide-react'
import { useState } from 'react'
import { projects } from '../data/projects';
import { skills, experience } from '../data/about';

import { socialLinks } from '../data/socialLinks';
import { useTheme } from '../hooks/useTheme'


// Build a global autosuggest dictionary from all keywords/phrases
const autosuggestSet = new Set<string>();
// Projects
projects.forEach(p => {
  p.title.split(/\W+/).forEach(w => autosuggestSet.add(w));
  p.description.split(/\W+/).forEach(w => autosuggestSet.add(w));
  (p.technologies || []).forEach(t => t.split(/\W+/).forEach(w => autosuggestSet.add(w)));
});
// Skills
skills.forEach(skill => skill.split(/\W+/).forEach(w => autosuggestSet.add(w)));
// Experience
experience.forEach(exp => {
  exp.company.split(/\W+/).forEach(w => autosuggestSet.add(w));
  exp.role.split(/\W+/).forEach(w => autosuggestSet.add(w));
  exp.description.split(/\W+/).forEach(w => autosuggestSet.add(w));
});
// Social links
socialLinks.forEach(link => {
  link.label.split(/\W+/).forEach(w => autosuggestSet.add(w));
  link.href.split(/\W+/).forEach(w => autosuggestSet.add(w));
});
// About text
const aboutText = `A passionate software engineer contributing to organizational growth through quality software. I specialize in building modern web applications with React, TypeScript, and cloud technologies. I’m proficient in JavaScript, C++, Python, Node.js, and Java — and I enjoy working across both backend and frontend stacks. My key areas of interest include developing Web Applications, exploring Hashing and Dictionary patterns and constant research on new ways to bridge on-chain and off-chain systems in block-chain technology. Whenever possible, I love building projects with Node.js and modern frameworks like React.js and Next.js`;
aboutText.split(/\W+/).forEach(w => autosuggestSet.add(w));

function getAutosuggestResults(keyword: string): string[] {
  const kw = keyword.toLowerCase();
  if (!kw) return [];
  // Suggest any word/phrase that starts with the input
  return Array.from(autosuggestSet)
    .filter(w => w && w.toLowerCase().startsWith(kw))
    .sort((a, b) => a.localeCompare(b));
}

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]




  function Navbar() {
    // Only keep state and hooks that are actually used in the JSX below
    const [isOpen, setIsOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    return (
      <nav style={{
        backgroundColor: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Link to="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1.25rem',
              fontWeight: '700',
              color: 'var(--text)',
              textTransform: 'lowercase',
            }}>
              <Code2 size={28} color="var(--primary)" />
              <span>mwakidenis</span>
            </Link>
            <div style={{ position: 'relative', marginLeft: '0.5rem' }}>
              <button
                onClick={() => setShowSearch((v) => !v)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text)',
                  transition: 'background-color 0.2s',
                }}
                aria-label="Search"
              >
                <Search size={22} />
              </button>
              {showSearch && (
                <div style={{ position: 'absolute', left: '110%', top: 0, zIndex: 1000 }}>
                  <input
                    type="text"
                    autoFocus
                    value={searchValue}
                    onChange={e => {
                      const val = e.target.value;
                      setSearchValue(val);
                      setSearchResults(val ? getAutosuggestResults(val) : []);
                    }}
                    placeholder="Search..."
                    style={{
                      width: '180px',
                      padding: '0.4rem 0.8rem',
                      fontSize: '1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid var(--border)',
                      background: 'var(--surface)',
                      color: 'var(--text)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      outline: 'none',
                    }}
                    onBlur={() => setShowSearch(false)}
                  />
                  {searchResults.length > 0 && (
                    <div style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: '0.5rem',
                      marginTop: '0.25rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      maxHeight: '260px',
                      overflowY: 'auto',
                      width: '100%',
                    }}>
                      {searchResults.map((result, idx) => (
                        <div key={idx} style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid var(--border)', cursor: 'pointer' }}>
                          {result}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  color: location.pathname === link.path ? 'var(--primary)' : 'var(--text)',
                  fontWeight: location.pathname === link.path ? 600 : 500,
                }}
              >
                {link.label}
              </Link>
            ))}
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text)',
                transition: 'background-color 0.2s',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-nav" style={{
            padding: '1rem',
            borderTop: '1px solid var(--border)',
            backgroundColor: 'var(--surface)',
          }}>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.75rem',
                  color: location.pathname === link.path ? 'var(--primary)' : 'var(--text)',
                  fontWeight: location.pathname === link.path ? 600 : 500,
                }}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleTheme()
                setIsOpen(false)
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text)',
                fontSize: '1rem',
              }}
            >
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
          </div>
        )}

        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .mobile-menu-btn { display: block !important; }
          }
        `}</style>
      </nav>
    )
  }
  export default Navbar;
