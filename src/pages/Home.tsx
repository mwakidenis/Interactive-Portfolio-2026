import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code2,
  Zap,
  Shield,
  Laptop,
  Globe,
  Terminal,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '@/data/socialLinks';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Section, SectionTitle, AnimateItem } from '@/components/ui/section';

const features = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Building responsive, performant web applications with React, Next.js, and Node.js. Focused on clean UI and scalable architecture.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Improving load speed, rendering efficiency, and backend performance through profiling, caching, and optimized algorithms.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description:
      'Ensuring reliable systems through testing, debugging, and clean coding practices. Prioritizing maintainability and scalability.',
  },
  {
    icon: Laptop,
    title: 'Backend Development',
    description:
      'Designing secure and scalable APIs using Node.js, Express, and database systems like MongoDB and MySQL.',
  },
  {
    icon: Globe,
    title: 'Blockchain Research',
    description:
      'Exploring on-chain and off-chain systems, smart contract integration, and decentralized application architecture.',
  },
  {
    icon: Terminal,
    title: 'API Integration',
    description:
      'Integrating third-party services like payment gateways, authentication systems, and cloud APIs.',
  },
];

export default function Home() {
  const [isTyped, setIsTyped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsTyped(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-text transition-colors duration-500">
      {/* Animated background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] dark:bg-primary/10"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[120px] dark:bg-purple-600/10"
        />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[80px] dark:bg-blue-500/5" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-primary font-medium text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for collaboration
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-text"
              >
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                  Mwaki Denis
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg"
              >
                {isTyped
                  ? `I build modern, performant web applications with React, TypeScript, and Node.js. Passionate about cloud-native systems, blockchain research, and crafting exceptional developer experiences.`
                  : `I build modern, performant web applications`}
              </motion.p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="group relative"
                >
                  <Button size="lg" className="w-auto">
                    View My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact" className="group relative">
                  <Button variant="outline" size="lg" className="w-auto">
                    Get In Touch
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <span className="text-xs text-text-muted">Connect:</span>
                <div className="flex gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-text-muted hover:text-primary hover:scale-110 transition-all focus-visible:ring-2 focus-visible:ring-focus"
                      aria-label={s.label}
                    >
                      <s.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20 rounded-2xl blur-xl" />
                <img
                  src="https://res.cloudinary.com/dqv8dlj2s/image/upload/v1772750502/1760560045314_uunnsg.jpg"
                  alt="Mwaki Denis profile"
                  className="relative rounded-2xl border border-border shadow-2xl object-cover w-full h-[400px] md:h-[480px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section>
        <div className="container mx-auto px-4">
          <SectionTitle
            title="What I Do"
            description="Crafting digital experiences that are performant, accessible, and built to scale."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <AnimateItem key={feature.title} delay={idx * 0.1} variant="slide">
                <Card hoverable className="group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2">{feature.title}</h3>
                  <p className="text-text-muted leading-relaxed">{feature.description}</p>
                </Card>
              </AnimateItem>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 dark:bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimateItem variant="fade">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Let's build something great
            </h2>
            <p className="text-text-muted mb-8 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I&rsquo;d love to
              hear from you.
            </p>
            <Link to="/contact">
              <Button size="lg">Contact Me</Button>
            </Link>
          </AnimateItem>
        </div>
      </section>
    </div>
  );
}


