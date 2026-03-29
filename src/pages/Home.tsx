import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Zap, Shield, LucideIcon } from 'lucide-react'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        padding: '6rem 0',
      }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
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
                and Dictionary patterns and constant research on new ways to bridge on-chain 
                and off-chain systems in block-chain technology.
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

            <img
              src="https://res.cloudinary.com/dqv8dlj2s/image/upload/v1772750502/1760560045314_uunnsg.jpg"
              alt="Mwaki Denis profile"
              style={{
                width: '260px',
                height: '260px',
                objectFit: 'cover',
                borderRadius: '1.5rem',
                boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
                background: 'var(--surface)',
                flexShrink: 0,
                marginLeft: 'auto',
                marginRight: 0,
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* Features Section (UPDATED & EXPANDED) */}
      <section>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
            What I Do
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
            }}
          >
            <FeatureCard
              Icon={Code2}
              title="Web Development"
              description="Building responsive, performant web applications with modern frameworks like React, Next.js, and Node.js. Focused on clean UI and scalable architecture."
            />

            <FeatureCard
              Icon={Zap}
              title="Performance Optimization"
              description="Improving load speed, rendering efficiency, and backend performance through profiling, caching strategies, and optimized algorithms."
            />

            <FeatureCard
              Icon={Shield}
              title="Quality Assurance"
              description="Ensuring reliable systems through testing, debugging, and clean coding practices. I prioritize maintainability and scalability."
            />

            <FeatureCard
              Icon={Code2}
              title="Backend Development"
              description="Designing secure and scalable APIs using Node.js, Express, and database systems like MongoDB and MySQL."
            />

            <FeatureCard
              Icon={Zap}
              title="Blockchain Research"
              description="Exploring on-chain and off-chain systems, smart contract integration, and decentralized application architecture."
            />

            <FeatureCard
              Icon={Shield}
              title="Cybersecurity Awareness"
              description="Applying ethical hacking principles, vulnerability analysis, and system hardening techniques to improve security."
            />

            <FeatureCard
              Icon={Code2}
              title="API Integration"
              description="Integrating third-party services like payment gateways (M-Pesa, Stripe), authentication systems, and cloud APIs."
            />

            <FeatureCard
              Icon={Zap}
              title="UI/UX Focus"
              description="Designing clean and user-friendly interfaces with attention to accessibility, responsiveness, and smooth user experience."
            />

            <FeatureCard
              Icon={Shield}
              title="System Design"
              description="Architecting scalable software systems using microservices, modular design, and efficient data structures like hashing & dictionaries."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
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

/* KEEPED EXACTLY SAME (NO BREAKING YOUR UI) */
function FeatureCard({
  Icon,
  title,
  description,
}: {
  Icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <div
      style={{
        padding: '2rem',
        borderRadius: '1rem',
        border: '1px solid var(--border)',
        backgroundColor: 'white',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'
        ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)'
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'none'
        ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
      }}
    >
      <div
        style={{
          width: '3rem',
          height: '3rem',
          borderRadius: '0.75rem',
          backgroundColor: 'var(--surface)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
        }}
      >
        <Icon size={24} color="var(--primary)" />
      </div>

      <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-light)' }}>{description}</p>
    </div>
  )
}
