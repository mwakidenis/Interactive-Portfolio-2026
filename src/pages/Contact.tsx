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
      return (
      />
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
              </div>
              <div style={{ marginTop: '3rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Let's Connect</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>
                  I'm always open to discussing new projects, creative ideas, 
                  or opportunities to be part of your visions. Feel free to 
                  reach out if you have a question or just want to say hi!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Send a Message</h2>
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
