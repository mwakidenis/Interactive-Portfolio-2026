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
