import { ExternalLink, Github } from 'lucide-react'
import { projects, Project } from '../data/projects'

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
      {project.image && (
        <div style={{ width: '100%', height: '200px', overflow: 'hidden', background: '#f8f8f8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      )}
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ marginBottom: '0.75rem' }}>{project.title}</h3>
        <p style={{
          color: 'var(--text-light)',
          marginBottom: '1rem',
          lineHeight: 1.6,
          whiteSpace: 'pre-line',
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
