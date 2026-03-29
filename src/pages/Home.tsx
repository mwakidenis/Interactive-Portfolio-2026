import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Smartphone,
  Server,
  Globe,
  Shield,
  Link2,
  HeadphonesIcon,
  FileText,
  X,
  Check,
  ArrowRight
} from 'lucide-react'

/* ---------------- TYPES ---------------- */
type Service = {
  id: number
  title: string
  description: string
  icon: any
  color: string
  features: string[]
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
mwakidenis-patch-3
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
=======
    <section className="min-h-screen flex items-center py-20 bg-background-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* TEXT */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hi, I'm <span className="text-neon-orange">Mwaki Denis</span>
            </h1>

            <p className="text-gray-300 text-lg leading-8 mb-8">
              A passionate software engineer contributing to organizational growth
              through quality software. I specialize in building modern web applications
              with React, TypeScript, and cloud technologies. I’m proficient in JavaScript,
              C++, Python, Node.js, and Java — and I enjoy working across both backend and frontend stacks.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                to="/projects"
                className="px-6 py-3 bg-neon-orange text-black font-semibold rounded-lg flex items-center gap-2"
              >
                View My Work <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 border border-gray-500 text-white rounded-lg hover:border-neon-orange transition"
              >
                Get In Touch
              </Link>
   </div>
            </div>
        
      {/* Features Section (ONLY THIS PART IMPROVED) */}
      <section>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
            What I Do
          </h2>

          {/* FIXED 3 COLUMN GRID */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}>
            <FeatureCard
              I
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
          {/* IMAGE */}
          <img
            src="https://res.cloudinary.com/dqv8dlj2s/image/upload/v1772750502/1760560045314_uunnsg.jpg"
            alt="Mwaki Denis"
            className="w-64 h-64 object-cover rounded-2xl border border-white/10 shadow-lg"
          /> main

        </div>

      </section>
    </div>
  )
}

/* KEEPED EXACTLY SAME (NO BREAKING YOUR UI) */
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

      </div>
    </section>
  )
}

/* ---------------- SERVICES ---------------- */
const services: Service[] = [
  {
    id: 1,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications built with cutting-edge technologies.',
    icon: Smartphone,
    color: 'hsl(115, 100%, 50%)',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps']
  },
  {
    id: 2,
    title: 'Hosting Services',
    description: 'Reliable and scalable hosting solutions for your applications and websites.',
    icon: Server,
    color: '#00FFB2',
    features: ['Cloud Hosting', 'VPS', 'Dedicated Servers', 'CDN Integration']
  },
  {
    id: 3,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications.',
    icon: Globe,
    color: '#FF6A00',
    features: ['React/Next.js', 'E-commerce', 'CMS', 'API Development']
  },
  {
    id: 4,
    title: 'Cyber Security',
    description: 'Security solutions to protect digital assets.',
    icon: Shield,
    color: '#FF0033',
    features: ['Security Audits', 'Pen Testing', 'Encryption', 'Consulting']
  },
  {
    id: 5,
    title: 'API Integration',
    description: 'Seamless third-party API integration.',
    icon: Link2,
    color: '#FFFF00',
    features: ['REST APIs', 'GraphQL', 'Payments', 'Integrations']
  },
  {
    id: 6,
    title: 'Support',
    description: '24/7 system support and monitoring.',
    icon: HeadphonesIcon,
    color: '#FFD000',
    features: ['24/7 Support', 'Priority Help', 'Remote Fixes', 'Monitoring']
  },
  {
    id: 7,
    title: 'Documentation',
    description: 'Clean technical documentation.',
    icon: FileText,
    color: '#39FF14',
    features: ['API Docs', 'User Guides', 'Tech Docs', 'Comments']
  }
]

/* ---------------- MAIN PAGE ---------------- */
export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <section className="py-20 bg-background-primary">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neon-orange">
              Our Services
            </h2>
            <p className="text-gray-400 mt-2">
              Premium development & infrastructure solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedService(service)}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl cursor-pointer"
              >
                <service.icon
                  className="w-8 h-8 mb-4"
                  style={{ color: service.color }}
                />
                <h3 className="text-white font-semibold text-lg">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {service.description}
                </p>
                <p className="text-xs text-gray-500 mt-4">
                  Click for details →
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setSelectedService(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg p-8 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-xl relative"
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-white"
              >
                <X />
              </button>

              {/* HEADER */}
              <div className="flex items-center gap-4 mb-6">
                {selectedService && (
                  <selectedService.icon
                    className="w-10 h-10"
                    style={{ color: selectedService.color }}
                  />
                )}

                <div>
                  <h3 className="text-2xl text-white font-bold">
                    {selectedService?.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Full service breakdown
                  </p>
                </div>
              </div>

              {/* DESC */}
              <p className="text-gray-300 mb-6">
                {selectedService?.description}
              </p>

              {/* FEATURES */}
              <div className="space-y-2">
                {selectedService?.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <Check className="text-green-400 w-4 h-4" />
                    {f}
                  </div>
                ))}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
main
  )
          }
