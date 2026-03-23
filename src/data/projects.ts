export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and TypeScript.',
    technologies: ['React', 'TypeScript', 'Vite'],
    github: 'https://github.com/mwakidenis/mwakidenis.com',
    demo: 'https://mwakidenis.com',
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
