import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Zap, Shield, LucideIcon } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, white 100%)',
        padding: '6rem 0',
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
              with React, TypeScript, and cloud technologies. I’m proficient in JavaScript,
              C++, Python, Node.js, and Java — and I enjoy working across both backend and 
              frontend stacks.
              <img
  src="https://res.cloudinary.com/dqv8dlj2s/image/upload/w_300,q_auto,f_auto/v1772145844/20250810_163412_wrgkmr.jpg"
  alt="Project preview"
  className="w-24 h-32 rounded-lg object-contain bg-gray-100"
/>
              My key areas of interest include developing Web Applications, exploring Hashing 
              and Dictionary patterns used at Google & Microsoft and constant research on new 
              ways to bridge on-chain and off-chain systems.
              Whenever possible, I love building projects with Node.js and modern frameworks
              like React.js and Next.js
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

      {/* Features Section */}
      <section>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>What I Do</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}>
            <FeatureCard
              Icon={Code2}
              title="Web Development"
              description="Building responsive, performant web applications with modern frameworks like React and Next.js."
            />
            <FeatureCard
              Icon={Zap}
              title="Performance Optimization"
              description="Optimizing applications for speed and efficiency to deliver the best user experience."
            />
            <FeatureCard
              Icon={Shield}
              title="Quality Assurance"
              description="Writing tests and following best practices to ensure reliable, maintainable code."
            />
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

function FeatureCard({ Icon, title, description }: {
  Icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <div style={{
      padding: '2rem',
      borderRadius: '1rem',
      border: '1px solid var(--border)',
      backgroundColor: 'white',
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}>
      <div style={{
        width: '3rem',
        height: '3rem',
        borderRadius: '0.75rem',
        backgroundColor: 'var(--surface)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem',
      }}>
        <Icon size={24} color="var(--primary)" />
      </div>
      <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-light)' }}>{description}</p>
    </div>
  )
}
