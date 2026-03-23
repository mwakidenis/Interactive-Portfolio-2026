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
    description: `A comprehensive WiFi billing system with M-Pesa integration, loan management, and MikroTik hotspot control.\n\nFeatures:\n- 🔐 Secure Authentication (JWT)\n- 💳 M-Pesa Integration\n- 💰 Loan System\n- 🌐 MikroTik Integration\n- 📊 Admin Dashboard\n- 📱 Responsive UI (React/Next.js)\n- 🔄 Real-time Updates (WebSocket)\n\nQuick Deploy to Render, Docker, PM2, or manual Node.js.\n\nSee README for full setup, deployment, and environment variable details.\n\nFor support, create an issue in the GitHub repository. Paid consultations only.`,
    technologies: [
      'React', 'Node.js', 'Next.js', 'JavaScript', 'MySQL', 'MikroTik', 'mpesa', 'prisma', 'TypeScript'
    ],
    github: 'https://github.com/mwakidenis/Mpesa-Based_Wi-Fi-Hotspot_Billing_System',
    demo: 'https://anotherone-production-dcdb.up.railway.app',
    image: 'https://res.cloudinary.com/dqv8dlj2s/image/upload/v1774303182/Screenshot_2026-01-09_213840_1_w2846r.png',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart, checkout, and payment integration.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/mwakidenis/ecommerce',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/mwakidenis/taskmanager',
  },
  {
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with forecasts and location-based data.',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com/mwakidenis/weather',
    demo: 'https://weather.mwakidenis.com',
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
