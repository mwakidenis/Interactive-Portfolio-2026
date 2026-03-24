
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, LucideIcon } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Replace with your Formspree endpoint
      const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xayrjvbp';
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '2.5rem 1rem' }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>Get In Touch</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '1.15rem' }}>
        Have a question or want to work together? I'd love to hear from you. Fill out the form below or reach out through other channels.
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        {/* Contact Information */}
        <div style={{ flex: '1 1 320px', minWidth: 280, maxWidth: 370 }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Contact Information</h2>
          <ContactInfo Icon={Mail} title="Email" content="mwakidenice@gmail.com" href="mailto:mwakidenice@gmail.com" />
          <ContactInfo Icon={Phone} title="Phone" content="+254 798 750 585" href="tel:+254798750585" />
          <ContactInfo Icon={MapPin} title="Location" content="Nairobi, Kenya" />
          <div style={{ marginTop: '2.5rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Let's Connect</h3>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out if you have a question or just want to say hi!
            </p>
          </div>
        </div>
        {/* Contact Form */}
        <div style={{ flex: '2 1 500px', minWidth: 340 }}>
          <h2 style={{ marginBottom: '2rem' }}>Send a Message</h2>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              width: '100%',
              minWidth: 0,
            }}
          >
            <InputField label="Name" name="name" value={formData.name} onChange={handleChange} required />
            <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            <div style={{ gridColumn: '1 / 3' }}>
              <InputField label="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div style={{ gridColumn: '1 / 3' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
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
                  background: 'var(--surface, #fff)',
                  color: 'var(--text)',
                  transition: 'background-color 0.2s, color 0.2s',
                }}
              />
            </div>
            <div style={{ gridColumn: '1 / 3', display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
                <p style={{ color: '#10b981', fontWeight: 500, margin: 0 }}>
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


function InputField({ label, name, type = 'text', value, onChange, required }: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
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
          background: 'var(--surface, #fff)',
          color: 'var(--text)',
          transition: 'background-color 0.2s, color 0.2s',
        }}
      />
    </div>
  );
}

function ContactInfo({ Icon, title, content, href }: {
  Icon: LucideIcon;
  title: string;
  content: string;
  href?: string;
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
          <a href={href} style={{ color: 'var(--text-light)' }}>{content}</a>
        ) : (
          <p style={{ color: 'var(--text-light)' }}>{content}</p>
        )}
      </div>
    </div>
  );
}

