import React from 'react';
import { Code2, BookOpen, Users, Laptop, Code, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { skills, bio, experience, values } from '@/data/about';
import { Section, SectionTitle, AnimateItem } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillIcons: Record<string, React.ElementType> = {
  React: Code,
  TypeScript: Code2,
  'Node.js': Laptop,
  Python: Code,
  PostgreSQL: Database,
  GraphQL: Code,
  AWS: Database,
  Docker: Laptop,
  Git: Code,
  'Tailwind CSS': Code2,
};

export default function About() {
  return (
    <div className="min-h-[calc(100vh-80px)] relative overflow-hidden bg-background text-text transition-colors duration-500">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] dark:bg-primary/5" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[100px] dark:bg-purple-600/5" />
      </div>

      {/* Bio Section */}
      <Section padded>
        <div className="container mx-auto px-4">
          <SectionTitle
            title="About Me"
            description="Software engineer passionate about building quality software and exceptional developer experiences."
          />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimateItem variant="slide" delay={0.1}>
              <div className="space-y-6">
                <p className="text-lg text-text-secondary leading-relaxed">
                  {bio}
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  When I'm not coding, I contribute to open source, write
                  technical articles, and mentor aspiring developers. I believe
                  in continuous learning and sharing knowledge with the
                  community.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href="https://github.com/mwakidenis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface hover:bg-surface-hover text-text font-medium transition-colors"
                  >
                    <Code2 size={18} /> GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/denisit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface hover:bg-surface-hover text-text font-medium transition-colors"
                  >
                    <Users size={18} /> LinkedIn
                  </a>
                </div>
              </div>
            </AnimateItem>

            <AnimateItem variant="fade" delay={0.2}>
              <div className="relative h-[400px] w-full flex items-center justify-center">
                <div className="relative w-full max-w-xs">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-[#a855f7] to-[#ec4899] rounded-2xl blur opacity-30 animate-pulse" />
                  <div className="relative rounded-2xl border border-border bg-surface p-8 shadow-lg">
                    <Laptop className="w-16 h-16 text-primary mb-6" />
                    <h3 className="text-xl font-bold text-text mb-3">Full-Stack Developer</h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      Building modern web applications with a focus on
                      performance, accessibility, and clean architecture.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateItem>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section padded inverse className="bg-surface">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Skills & Technologies"
            description="A curated set of tools and technologies I work with regularly."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateItem variant="slide" delay={0.1}>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {skillIcons[skill] ? (
                        React.createElement(skillIcons[skill], { size: 20 })
                      ) : (
                        <Code2 size={20} />
                      )}
                    </div>
                    <Badge variant="primary" className="flex-1 text-center">
                      {skill}
                    </Badge>
                  </div>
                ))}
              </div>
            </AnimateItem>
            <AnimateItem variant="slide" delay={0.2}>
              <Card padded>
                <h3 className="text-lg font-bold text-text mb-4">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-text-secondary">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Frontend</span>
                  </div>
                    <div className="flex items-center gap-2 text-text-secondary">
                      <span className="w-2 h-2 rounded-full bg-[#a855f7]" />
                      <span>Backend</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span>Databases</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>DevOps</span>
                  </div>
                </div>
              </Card>
            </AnimateItem>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section padded>
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Experience"
            description="Professional journey and key achievements."
          />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative pl-12 pb-12"
              >
                <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                <div className="flex flex-col md:flex-row md:items-end gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-text">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-xs font-mono text-text-muted bg-surface/50 px-2 py-1 rounded border border-border">
                    {exp.period}
                  </span>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section padded inverse className="bg-surface">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="What I Value"
            description="Principles that guide how I work and collaborate."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <AnimateItem key={value.title} delay={idx * 0.1} variant="fade">
                <Card hoverable padded>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {idx === 0 ? <Code2 size={20} /> : idx === 1 ? <BookOpen size={20} /> : <Users size={20} />}
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2">{value.title}</h3>
                  <p className="text-text-muted leading-relaxed">{value.description}</p>
                </Card>
              </AnimateItem>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
