export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: 'Mpesa-Based Wi-Fi Hotspot Billing System',
    description: `A comprehensive WiFi billing system with M-Pesa integration, loan management, and MikroTik hotspot control.`,
    technologies: [
      'React', 'Node.js', 'Next.js', 'JavaScript', 'MySQL', 'MikroTik', 'mpesa', 'prisma', 'TypeScript'
    ],
    github: 'https://github.com/mwakidenis/Mpesa-Based_Wi-Fi-Hotspot_Billing_System',
    demo: 'https://anotherone-production-dcdb.up.railway.app',
    image: 'https://res.cloudinary.com/dqv8dlj2s/image/upload/v1774303182/Screenshot_2026-01-09_213840_1_w2846r.png',
  },
  {
    title: 'KibandaPOS (Point Of Sale)',
    description: `KibandaPOS is a premium utility for mess managers and small-scale food vendors. Track daily expenses, manage members, and settle debts instantly.`,
    technologies: [
      'React.js', 'Vite', 'Ant Design', 'Ant Design Charts', 'SheetJS', 'Day.js', 'JavaScript', 'CSS'
    ],
    github: 'https://github.com/mwakidenis/Kibanda-POS',
    demo: 'https://kibandapoa.vercel.app',
    image: 'https://res.cloudinary.com/dqv8dlj2s/image/upload/v1774304443/Screenshot_2026-03-24_012021_valxzu.png',
  },
  {
    title: 'TendaN301-Billing-System',
    description: `A lightweight system that turns a Tenda router into a mini-ISP controller by reverse-engineering its internal API. Centralized control, device billing, and real-time access management for micro-ISP setups.`,
    technologies: [
      'PHP', 'JavaScript', 'HTML', 'SQLite', 'Hack'
    ],
    github: 'https://github.com/mwakidenis/TendaN301-Billing-System',
    image: 'https://res.cloudinary.com/dqv8dlj2s/image/upload/v1774304866/Screenshot_31_tcbkm7.png',
  },
  {
    title: 'MikroTik Hotspot Billing System',
    description: `A comprehensive WiFi billing system for Kenya with M-Pesa integration, MikroTik router control, and a modern web-based admin dashboard. Real-time analytics, plan management, and secure payments.`,
    technologies: [
      'TypeScript', 'JavaScript', 'React', 'Node.js', 'PostgreSQL', 'MikroTik', 'mpesa'
    ],
    github: 'https://github.com/mwakidenis/miktrotik-hotspot-billing',
    image: 'https://res.cloudinary.com/dqv8dlj2s/image/upload/v1774306274/images_u7uzns.jpg',
  },
  {
    title: 'Blog Platform',
    description: 'A content management system for publishing articles and blog posts.',
    technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/mwakidenis/blog',
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat application with rooms, direct messaging, and file sharing.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/mwakidenis/chatapp',
  },
];
