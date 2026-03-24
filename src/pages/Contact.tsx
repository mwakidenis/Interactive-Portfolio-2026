import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Send, Mail, Phone, MapPin, LucideIcon } from 'lucide-react';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqpraep";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      if (response.ok) {
        toast.success('Message sent successfully!', {
          description: 'Thanks for reaching out. I\'ll get back to you shortly.'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        toast.error('Failed to send message', {
          description: 'Please try again or contact me directly via email.'
        });
      }
    } catch (error) {
      toast.error('Something went wrong', {
        description: 'Please try again or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass p-4 sm:p-6 rounded-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email"
          />
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Subject"
        />
      </div>
      <div className="space-y-2 mb-6">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your message"
          rows={4}
          className="resize-none"
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          "Sending message..."
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
};

export default function Contact() {
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
          <ContactForm />
        </div>
      </div>
    </section>
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

