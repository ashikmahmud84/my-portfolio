export interface SkillItem {
  name: string;
  badge?: string; // e.g. "Currently Exploring" for Next.js
  iconKey?: string;
  isCore?: boolean; // Highlight for React, Node.js, Express.js, MongoDB
  role?: string; // Concise role / specialty description
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: 'frontend' | 'backend' | 'database' | 'tools';
  technologies: SkillItem[];
}

export interface CoreStackItem {
  name: string;
  role: string;
  badge: string;
  description: string;
  category: 'Frontend' | 'Backend' | 'Database';
  capabilities: string[];
}

export const coreStackItems: CoreStackItem[] = [
  {
    name: 'React',
    role: 'Frontend Library',
    badge: 'Core UI',
    category: 'Frontend',
    description: 'Interactive component architecture, state management with modern hooks, and responsive SPA interfaces.',
    capabilities: ['Hooks & State', 'Component Architecture', 'Vite & SPA Tooling']
  },
  {
    name: 'Node.js',
    role: 'Backend Runtime',
    badge: 'Core Runtime',
    category: 'Backend',
    description: 'Event-driven, non-blocking JavaScript server runtime powering scalable network applications and micro-services.',
    capabilities: ['Asynchronous I/O', 'Server Execution', 'NPM Ecosystem']
  },
  {
    name: 'Express.js',
    role: 'Server Framework',
    badge: 'Core API',
    category: 'Backend',
    description: 'Fast, unopinionated routing engine for building robust RESTful APIs, custom middleware, and error pipelines.',
    capabilities: ['RESTful Endpoints', 'Middleware Pipeline', 'Route Handlers']
  },
  {
    name: 'MongoDB',
    role: 'NoSQL Database',
    badge: 'Core Data',
    category: 'Database',
    description: 'Document-based flexible JSON-like data store utilizing Mongoose ODM for validation, relations, and fast queries.',
    capabilities: ['Mongoose Models', 'Document Storage', 'Atlas Cloud DB']
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and interactive user interfaces with modern frontend technologies and component systems.',
    iconName: 'frontend',
    technologies: [
      { name: 'HTML5', role: 'Semantic Markup & Web Standards' },
      { name: 'CSS3', role: 'Modern Layouts & Animations' },
      { name: 'JavaScript', role: 'ES6+ Logic & Async Programming' },
      
      { name: 'React', isCore: true, role: 'Component Architecture & Hooks' },
      { name: 'Next.js', badge: 'Currently Exploring', role: 'Full-Stack React Framework' },
      { name: 'Tailwind CSS', role: 'Utility-First Responsive Styling' },
      { name: 'DaisyUI', role: 'Accessible Tailwind UI Components' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Developing reliable server-side applications, modular middleware, and RESTful APIs with clean architecture.',
    iconName: 'backend',
    technologies: [
      { name: 'Node.js', isCore: true, role: 'Event-Driven Server Runtime' },
      { name: 'Express.js', isCore: true, role: 'RESTful API Routing & Middleware' },
      { name: 'REST API', role: 'Structured HTTP Endpoints & JSON Payloads' }
    ]
  },
  {
    id: 'database-auth',
    title: 'Database & Authentication',
    description: 'Working with document databases, cloud database services, and modern authentication and security workflows.',
    iconName: 'database',
    technologies: [
      { name: 'MongoDB', isCore: true, role: 'Document Database & Schema Design' },
      { name: 'MongoDB Atlas', role: 'Cloud Cluster & Database Management' },
      { name: 'Firebase Authentication', role: 'Secure User Auth & Social Providers' }
    ]
  },
  {
    id: 'tools-workflow',
    title: 'Tools & Developer Workflow',
    description: 'Using modern development tools for version control, API testing, debugging, cloud deployment, and team workflow.',
    iconName: 'tools',
    technologies: [
      { name: 'Git', role: 'Distributed Version Control' },
      { name: 'GitHub', role: 'Code Collaboration & Versioning' },
      { name: 'VS Code', role: 'Primary Development Environment' },
      { name: 'Postman', role: 'API Testing & Request Validation' },
      { name: 'Vercel', role: 'Frontend & Edge Cloud Hosting' },
      { name: 'Firebase', role: 'Backend Services & Cloud Hosting' }
    ]
  }
];

export const coreStackSummary = 'Core stack: React • Node.js • Express.js • MongoDB';
