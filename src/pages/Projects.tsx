import {
  ExternalLink,
  Github,
  Code2,
  Filter,
  X,
  Search,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projects, Project } from '@/data/projects';
import { Section, SectionTitle, AnimateItem } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies)),
).sort();

const filterOptions = [
  { label: 'All', value: 'all' },
  ...allTechnologies.map((t) => ({ label: t, value: t })),
];

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [open, setOpen] = useState(false);

  const filtered: Project[] =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.technologies.includes(filter));

  return (
    <div className="min-h-[calc(100vh-80px)] relative overflow-hidden bg-background text-text transition-colors duration-500">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] dark:bg-primary/5" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[100px] dark:bg-purple-600/5" />
      </div>

      <Section padded>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
            <div>
              <SectionTitle
                title="Projects"
                description="A selection of projects I&rsquo;ve built. Each one solves a specific problem."
                className="text-left mb-0"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                onClick={() => setOpen((o) => !o)}
                className="flex items-center gap-2"
              >
                <Filter size={18} />
                {open ? <X size={18} /> : 'Filter'}
              </Button>
              <Button variant="ghost" className="hidden sm:flex">
                <Search size={18} />
                <span className="ml-2">Search projects</span>
              </Button>
            </div>
          </div>

          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-8 flex flex-wrap gap-3"
            >
              {filterOptions.map((opt) => (
                <Button
                  key={opt.value}
                  variant={filter === opt.value ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setFilter(opt.value);
                    setOpen(false);
                  }}
                >
                  {opt.label}
                </Button>
              ))}
            </motion.div>
          )}

          <AnimatePresence>
            {filtered.map((project) => (
              <AnimateItem
                key={project.title}
                variant="slide"
                delay={0.05}
                className="opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
              >
                <ProjectCard project={project} />
              </AnimateItem>
            ))}
            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Code2 size={48} opacity={20} className="mb-4" />
                <h3 className="text-lg font-bold text-text mb-2">
                  No projects found
                </h3>
                <p className="text-text-muted">Try a different filter.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      hoverable
      className="group relative overflow-hidden"
      padded={false}
    >
      <div className="relative h-48 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-surface flex items-center justify-center">
            <Code2 size={32} opacity={30} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-text-muted hover:text-primary hover:bg-surface transition-colors"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={20} />
          </a>
        </div>
        <p className="text-text-secondary leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <Github size={16} /> View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Live Demo <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
