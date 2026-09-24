export interface Milestone {
  id: string;
  step: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  icon: 'code' | 'monitor' | 'layers' | 'briefcase' | 'rocket' | 'target';
  status?: string;
}

export const careerMilestones: Milestone[] = [
  {
    id: 'milestone-1',
    step: '01',
    title: 'Started Web Development',
    category: 'Beginning',
    description: 'Started learning the fundamentals of web development, including HTML, CSS, JavaScript, and responsive web design.',
    highlights: [
      'HTML & semantic structure',
      'CSS fundamentals',
      'Responsive layouts',
      'JavaScript fundamentals'
    ],
    icon: 'code',
    status: 'Foundation'
  },
  {
    id: 'milestone-2',
    step: '02',
    title: 'Frontend Development',
    category: 'Growth',
    description: 'Moved into modern frontend development and began building interactive interfaces with React and reusable component-based architecture.',
    highlights: [
      'React',
      'Components',
      'Hooks',
      'State management',
      'API integration',
      'Tailwind CSS'
    ],
    icon: 'monitor',
    status: 'Expansion'
  },
  {
    id: 'milestone-3',
    step: '03',
    title: 'Full-Stack Development',
    category: 'Development',
    description: 'Expanded into backend development and learned how frontend applications communicate with APIs, databases, and authentication systems.',
    highlights: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'Authentication',
      'CRUD operations'
    ],
    icon: 'layers',
    status: 'Core Stack'
  },
  {
    id: 'milestone-4',
    step: '04',
    title: 'Real-World Projects',
    category: 'Practical Experience',
    description: 'Applied my skills by building complete web applications involving authentication, dashboards, database operations, booking systems, marketplaces, and other practical features.',
    highlights: [
      'Library Management System',
      'TravelEase',
      'PlantNet',
      '3D Model Hub'
    ],
    icon: 'briefcase',
    status: 'Applied Work'
  },
  {
    id: 'milestone-5',
    step: '05',
    title: 'Modern Web Development',
    category: 'Current Focus',
    description: 'Currently improving my full-stack development skills and exploring modern technologies and production-ready development practices.',
    highlights: [
      'Next.js',
      
      'API architecture',
      'Deployment',
      'Git & GitHub',
      'Performance and responsive design'
    ],
    icon: 'rocket',
    status: 'In Progress'
  },
  {
    id: 'milestone-6',
    step: '06',
    title: 'Preparing for Professional Opportunities',
    category: 'Next Chapter',
    description: 'Focused on strengthening my portfolio, improving problem-solving skills, gaining practical experience, and preparing for professional opportunities as a web developer.',
    highlights: [
      'Portfolio development',
      'Practical projects',
      'Code quality',
      'Team collaboration',
      'Continuous learning'
    ],
    icon: 'target',
    status: 'Next Chapter'
  }
];

export const journeyPhilosophy = {
  heading: 'Always Learning. Always Building.',
  text: 'I believe consistent learning and practical projects are the foundation for becoming a better developer.'
};
