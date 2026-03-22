import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and TypeScript.',
    technologies: ['React', 'TypeScript', 'Vite'],
    github: 'https://github.com/mwakidenis/mwakidenis.com',
    demo: 'https://mwakidenis.com',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart, checkout, and payment integration.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/mwakidenis/ecommerce',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/mwakidenis/taskmanager',
  },
  {
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with forecasts and location-based data.',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com/mwakidenis/weather',
    demo: 'https://weather.mwakidenis.com',
  },
  {
    title: 'Blog Platform',
    description: 'A content management system for publishing articles and blog posts.',
    technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/mwakidenis/blog',
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat application with rooms, direct messaging, and file sharing.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/mwakidenis/chatapp',
  },
]

export default function Projects() {
  return (
    <div>
      <section>
        <div className="container">
          <h1 style={{ marginBottom: '1rem' }}>Projects</h1>
          <p style={{
            color: 'var(--text-light)',
            fontSize: '1.125rem',
            marginBottom: '3rem',
            maxWidth: '600px',
          }}>
            Here are some of the projects I've worked on. Each project is a unique 
            piece of development, designed and built to solve specific problems.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem',
          }}>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article style={{
      border: '1px solid var(--border)',
      borderRadius: '1rem',
      overflow: 'hidden',
      backgroundColor: 'white',
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}>
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ marginBottom: '0.75rem' }}>{project.title}</h3>
        <p style={{
          color: 'var(--text-light)',
          marginBottom: '1rem',
          lineHeight: 1.6,
        }}>
          {project.description}
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1.5rem',
        }}>
          {project.technologies.map(tech => (
            <span
              key={tech}
              style={{
                padding: '0.25rem 0.75rem',
                backgroundColor: 'var(--surface)',
                borderRadius: '1rem',
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'var(--primary)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              <Github size={16} /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              <ExternalLink size={16} /> Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
