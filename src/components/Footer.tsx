import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/mwakidenis', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/mwakidenis', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/mwakidenis', label: 'Twitter' },
  { icon: Mail, href: 'mailto:me@mwakidenis.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      padding: '2rem 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {socialLinks.map(social => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              style={{ color: 'var(--text-light)' }}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
        <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} Mwaki Denis. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
