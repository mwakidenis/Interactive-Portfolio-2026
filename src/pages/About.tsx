import { Code2, BookOpen, Users, LucideIcon } from 'lucide-react'

const skills = [
  'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'GraphQL', 'AWS', 'Docker', 'Git', 'Tailwind CSS'
]

const experience = [
  {
    company: 'Tech Company',
    role: 'Senior Software Engineer',
    period: '2022 - Present',
    description: 'Leading development of cloud-native applications and mentoring junior developers.'
  },
  {
    company: 'Startup Inc',
    role: 'Software Engineer',
    period: '2020 - 2022',
    description: 'Built and maintained full-stack web applications using React and Node.js.'
  },
  {
    company: 'Freelance',
    role: 'Full-Stack Developer',
    period: '2020 - 2022',
    description: 'Delivered custom web solutions for clients across various industries.'
  }
]

export default function About() {
  return (
    <div>
      <section>
        <div className="container">
          <h1 style={{ marginBottom: '2rem' }}>About Me</h1>
          
          <div style={{ maxWidth: '800px' }}>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-light)',
              marginBottom: '2rem',
              lineHeight: 1.8,
            }}>
              I'm a software engineer with a passion for building great products and helping 
              others do the same. With several years of experience in web development, I 
              specialize in creating performant, accessible, and user-friendly applications.
            </p>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-light)',
              marginBottom: '3rem',
              lineHeight: 1.8,
            }}>
              When I'm not coding, you can find me contributing to open source, writing 
              technical articles, or mentoring aspiring developers. I believe in 
              continuous learning and sharing knowledge with the community.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem' }}>Skills & Technologies</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {skills.map(skill => (
              <span
                key={skill}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: '2rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <div className="container">
          <h2 style={{ marginBottom: '2rem' }}>Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experience.map((exp, index) => (
              <div
                key={index}
                style={{
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  border: '1px solid var(--border)',
                  backgroundColor: 'white',
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '0.5rem',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}>
                  <h3>{exp.role}</h3>
                  <span style={{
                    color: 'var(--text-light)',
                    fontSize: '0.875rem',
                  }}>
                    {exp.period}
                  </span>
                </div>
                <p style={{
                  color: 'var(--primary)',
                  fontWeight: 500,
                  marginBottom: '0.75rem',
                }}>
                  {exp.company}
                </p>
                <p style={{ color: 'var(--text-light)' }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Love Section */}
      <section style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem' }}>What I Love</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}>
            <ValueCard
              Icon={Code2}
              title="Building Products"
              description="Creating software that solves real problems and delights users."
            />
            <ValueCard
              Icon={BookOpen}
              title="Learning & Teaching"
              description="Continuously expanding my knowledge and helping others grow."
            />
            <ValueCard
              Icon={Users}
              title="Collaboration"
              description="Working with diverse teams to build something great together."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ Icon, title, description }: {
  Icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <Icon size={32} color="var(--primary)" />
      </div>
      <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-light)' }}>{description}</p>
    </div>
  )
}
