import { useState, useCallback } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  AlertCircle,
  CheckCircle,
  Info,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/section';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialData: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  );
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>(
    {},
  );

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (name: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validate = useCallback((): boolean => {
    const next: FieldErrors = {};
    if (!formData.name.trim()) next.name = 'Name is required';
    if (!formData.email.trim()) next.email = 'Email is required';
    else if (!EMAIL_REGEX.test(formData.email)) next.email = 'Enter a valid email';
    if (!formData.subject.trim()) next.subject = 'Subject is required';
    if (!formData.message.trim()) next.message = 'Message is required';
    setErrors(next);
    return Object.keys(next).length === 0;
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/xaqpraep', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
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
        setFormData(initialData);
        setErrors({});
        setTouched({});
        toast.success('Message sent! I&rsquo;ll get back to you soon.');
      } else {
        setStatus('error');
        toast.error('Failed to send message. Please try again.');
      }
    } catch {
      setStatus('error');
      toast.error('Network error. Please check your connection and retry.');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'mwakidenice@gmail.com',
      href: 'mailto:mwakidenice@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+254 798 750 585',
      href: 'tel:+254798750585',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Nairobi, Kenya',
      href: undefined,
    },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] relative overflow-hidden bg-background text-text transition-colors duration-500">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] dark:bg-primary/5" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[100px] dark:bg-purple-600/5" />
      </div>

      <Section padded>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-text mb-4"
              >
                Get In Touch
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-text-muted max-w-xl mx-auto leading-relaxed"
              >
                Have a question or want to work together? Fill out the form or
                reach out through the channels below.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-lg font-bold text-text">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-primary border border-border">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-text">{info.title}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-text-muted hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-text-muted">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="pt-6 border-t border-border">
                  <h3 className="font-medium text-text mb-3">Let&rsquo;s Connect</h3>
                  <p className="text-text-muted leading-relaxed">
                    I&rsquo;m always open to discussing new projects, creative
                    ideas, or opportunities. Feel free to reach out if you have
                    a question or just want to say hi!
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <Card padded>
                  <h2 className="text-lg font-bold text-text mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <Field
                        label="Name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(v) => handleChange('name', v)}
                        onBlur={() => handleBlur('name')}
                        error={touched.name ? errors.name : undefined}
                      />
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(v) => handleChange('email', v)}
                        onBlur={() => handleBlur('email')}
                        error={touched.email ? errors.email : undefined}
                      />
                    </div>
                    <Field
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(v) => handleChange('subject', v)}
                      onBlur={() => handleBlur('subject')}
                      error={touched.subject ? errors.subject : undefined}
                    />
                    <Field
                      label="Message"
                      name="message"
                      as="textarea"
                      rows={6}
                      value={formData.message}
                      onChange={(v) => handleChange('message', v)}
                      onBlur={() => handleBlur('message')}
                      error={touched.message ? errors.message : undefined}
                    />
                    <div className="pt-4 flex items-center gap-3">
                      <Button
                        type="submit"
                        variant="primary"
                        disabled={status === 'sending'}
                        className="w-auto"
                      >
                        {status === 'sending' ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <>
                            Send Message <Send size={18} className="ml-2" />
                          </>
                        )}
                      </Button>
                      {status === 'sent' && (
                        <div className="flex items-center gap-2 text-success">
                          <CheckCircle size={20} />
                          <span className="font-medium">Message sent successfully!</span>
                        </div>
                      )}
                      {status === 'error' && (
                        <div className="flex items-center gap-2 text-error">
                          <AlertCircle size={20} />
                          <span className="font-medium">Failed to send. Try again.</span>
                        </div>
                      )}
                    </div>
                  </form>
                </Card>

                {status === 'idle' && (
                  <div className="rounded-lg bg-surface border border-border p-4">
                    <div className="flex items-start gap-3">
                      <Info size={20} className="text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-text">Prefer email directly?</p>
                        <p className="text-sm text-text-muted">
                          Reach me at <a href="mailto:mwakidenice@gmail.com" className="text-primary hover:underline">mwakidenice@gmail.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  as?: 'input' | 'textarea';
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error?: string;
  rows?: number;
}

function Field({
  label,
  name,
  type = 'text',
  as = 'input',
  value,
  onChange,
  onBlur,
  error,
  rows,
}: FieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-text">{label}</label>
      {as === 'textarea' ? (
        <textarea
          name={name}
          rows={rows}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`w-full px-4 py-2.5 rounded-lg border text-text bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-focus ${
            error ? 'border-error focus:ring-error' : 'border-border'
          }`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`w-full px-4 py-2.5 rounded-lg border text-text bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-focus ${
            error ? 'border-error focus:ring-error' : 'border-border'
          }`}
        />
      )}
      {error && (
        <p className="text-xs text-error flex items-center gap-1">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}
