import { Link } from 'react-router-dom'
import { ArrowRight, LucideIcon } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, white 100%)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Profile Image Top Right */}
        <img
          src="https://res.cloudinary.com/dqv8dlj2s/image/upload/v1772750502/1760560045314_uunnsg.jpg"
          alt="Mwaki Denis"
          style={{
            position: 'absolute',
            top: '2.5rem',
            right: '3rem',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
            border: '4px solid white',
            zIndex: 2,
          }}
        />
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '1.5rem' }}>
              Hi, I'm <span style={{ color: 'var(--primary)' }}>Mwaki Denis</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-light)',
              marginBottom: '2rem',
              lineHeight: 1.8,
            }}>
              A passionate software engineer contributing to organizational growth
              through quality software. I specialize in building modern web applications 
              with React, TypeScript, and cloud technologies. I’m proficient in JavaScript,
              C++, Python, Node.js, and Java — and I enjoy working across both backend and 
              frontend stacks.

              My key areas of interest include developing Web Applications, exploring Hashing 
              and Dictionary patterns used at Google & Microsoft and constant research on new 
              ways to bridge on-chain and off-chain systems.
              Whenever possible, I love building projects with Node.js and modern frameworks
              like React.js and Next.js
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/projects" className="btn btn-primary">
                View My Work <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Let's Work Together</h2>
          <p style={{
            color: 'var(--text-light)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem',
          }}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  )
}

