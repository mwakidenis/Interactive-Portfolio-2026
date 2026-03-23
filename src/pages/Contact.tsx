import { useState } from 'react'
import { Mail, Phone, MapPin, Send, LucideIcon } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('sent')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div>
      <section>
        <div className="container">
          <h1 style={{ marginBottom: '1rem' }}>Get In Touch</h1>
          <p style={{
            color: 'var(--text-light)',
            fontSize: '1.125rem',
            marginBottom: '3rem',
            maxWidth: '600px',
          }}>
            Have a question or want to work together? I'd love to hear from you. 
            Fill out the form below or reach out through other channels.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '4rem',
          }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Contact Information</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <ContactInfo
                  Icon={Mail}
                  title="Email"
                  content="mwakidenice@gmail.com"
                  href="mailto:mwakidenice@gmail.com"
                />
                <ContactInfo
                  Icon={Phone}
                  title="Phone"
                  content="+254 798 750 585"
                  href="tel:+254798750585"
                />
                <ContactInfo
                  Icon={MapPin}
                  title="Location"
                  content="Nairobi, Kenya"
                />
              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <InputField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <InputField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 500,
                  }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid var(--border)',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      backgroundColor: 'var(--surface)',
                      color: 'var(--text)',
                      transition: 'background-color 0.2s, color 0.2s',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{ alignSelf: 'flex-start' }}
                >
                  {status === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} />
                    </>
                  )}
                </button>
                {status === 'sent' && (
                  <p style={{ color: '#10b981', fontWeight: 500 }}>
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactInfo({ Icon, title, content, href }: {
  Icon: LucideIcon
  title: string
  content: string
  href?: string
}) {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <div style={{
        width: '3rem',
        height: '3rem',
        borderRadius: '0.75rem',
        backgroundColor: 'var(--surface)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon size={20} color="var(--primary)" />
      </div>
      <div>
        <p style={{ fontWeight: 500, marginBottom: '0.25rem' }}>{title}</p>
        {href ? (
          <a
            href={href}
            style={{ color: 'var(--text-light)' }}
          >
            {content}
          </a>
        ) : (
          <p style={{ color: 'var(--text-light)' }}>{content}</p>
        )}
      </div>
    </div>
  )
}

function InputField({ label, name, type = 'text', value, onChange, required }: {
  label: string
  name: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  required?: boolean
}) {
  return (
    <div>
      <label style={{
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: 500,
      }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          width: '100%',
          padding: '0.75rem 1rem',
          border: '1px solid var(--border)',
          borderRadius: '0.5rem',
          fontSize: '1rem',
          fontFamily: 'inherit',
        }}
      />
    </div>
  )
}
