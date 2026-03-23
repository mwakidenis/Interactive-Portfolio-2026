import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

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

      {/* What I Do Section */}
      <section style={{ background: '#0a1733', padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'white' }}>What I Do</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '1rem',
              padding: '2rem',
              color: 'white',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <span style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#FFD600' }}>⚡</span>
              <h3 style={{ marginBottom: '0.75rem', color: 'white', textAlign: 'center' }}>Web Development</h3>
              <p style={{ color: '#c7d0e0', textAlign: 'center' }}>Building responsive, performant web applications with modern frameworks like React and Next.js.</p>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '1rem',
              padding: '2rem',
              color: 'white',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <span style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#00E676' }}>🟢</span>
              <h3 style={{ marginBottom: '0.75rem', color: 'white', textAlign: 'center' }}>Performance Optimization</h3>
              <p style={{ color: '#c7d0e0', textAlign: 'center' }}>Optimizing applications for speed and efficiency to deliver the best user experience.</p>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '1rem',
              padding: '2rem',
              color: 'white',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <span style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#FF69B4' }}>💗</span>
              <h3 style={{ marginBottom: '0.75rem', color: 'white', textAlign: 'center' }}>Quality Assurance</h3>
              <p style={{ color: '#c7d0e0', textAlign: 'center' }}>Writing tests and following best practices to ensure reliable, maintainable code.</p>
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

