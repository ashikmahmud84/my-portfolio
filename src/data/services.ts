export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  supportedBy: string[];
  technologies: string[];
  icon: 'layers' | 'layout' | 'calendar' | 'store' | 'database' | 'rocket';
}

export const servicesData: ServiceItem[] = [
  {
    id: 'fullstack-apps',
    title: 'Full-Stack Web Applications',
    description:
      'Building complete web applications with modern frontend interfaces, backend APIs, databases, authentication, and application logic.',
    supportedBy: ['Library Management System', 'TravelEase', 'PlantNet'],
    technologies: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB'],
    icon: 'layers'
  },
  {
    id: 'frontend-dev',
    title: 'Responsive Frontend Development',
    description:
      'Creating responsive and interactive interfaces that provide a consistent experience across mobile, tablet, and desktop devices.',
    supportedBy: ['3D Model Hub', 'TravelEase', 'PlantNet'],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript' ],
    icon: 'layout'
  },
  {
    id: 'booking-systems',
    title: 'Booking & Management Systems',
    description:
      'Developing application workflows for bookings, records, dashboards, and management operations.',
    supportedBy: ['TravelEase', 'Library Management System'],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    icon: 'calendar'
  },
  {
    id: 'marketplace-features',
    title: 'Marketplace & E-Commerce Features',
    description:
      'Building marketplace functionality including product management, user roles, ordering workflows, and online payment integration.',
    supportedBy: ['PlantNet'],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Stripe'],
    icon: 'store'
  },
  {
    id: 'api-database-auth',
    title: 'API, Authentication & Database Integration',
    description:
      'Connecting frontend applications with backend APIs, authentication systems, and database operations for real-world application workflows.',
    supportedBy: ['Library Management System', 'TravelEase', 'PlantNet'],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'REST APIs'],
    icon: 'database'
  },
  {
    id: 'modern-ui-deployment',
    title: 'Modern Web UI & Deployment',
    description:
      'Building polished web interfaces and preparing applications for modern deployment workflows using current development tools.',
    supportedBy: ['3D Model Hub', 'TravelEase', 'PlantNet', 'Library Management System'],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Git', 'GitHub', 'Vercel'],
    icon: 'rocket'
  }
];
