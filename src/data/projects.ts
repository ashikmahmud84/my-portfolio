export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string; // Retained for compatibility
  fullDescription?: string;
  technologies: string[];
  category: 'Full Stack' | 'Frontend' | string;
  features: string[];
  image: string; // Path to local asset, e.g. /src/assets/projects/library-management.svg
  githubUrl?: string; // GitHub repository URL (button hidden if empty or undefined)
  liveUrl?: string; // Live deployment URL (button hidden if empty or undefined)
  featured?: boolean; // Highlighted project banner
  mockUrl?: string;
  accent?: 'emerald' | 'cyan' | 'teal' | 'amber' | 'purple';
  type?: 'library' | 'travel' | 'plant' | '3d' | 'tea' | 'book';
}

export const projectsData: Project[] = [
  {
    id: 'library-management',
    title: 'Library Management System',
    shortDescription: 'A full-stack library management application designed to organize book catalogs, handle user permissions, track borrowing cycles, and provide an administrative control center.',
    description: 'A full-stack library management application designed to organize book catalogs, handle user permissions, track borrowing cycles, and provide an administrative control center.',
    fullDescription: 'Comprehensive library management solution built with Next.js and MongoDB. Features catalog indexing, member management, automated overdue calculations, and administrative analytics.',
    technologies: ['Next.js', 'React', 'MongoDB', 'Tailwind CSS', 'Node.js'],
    category: 'Full Stack',
    features: [
      'Book cataloging and real-time inventory tracking',
      'User membership and borrowing history logs',
      'Admin control dashboard with analytics',
      'Responsive, mobile-optimized interface'
    ],
    image: '/src/assets/projects/library-management.svg',
    githubUrl: '',
    liveUrl: '',
    featured: true,
    mockUrl: 'library-sys.internal',
    accent: 'emerald',
    type: 'library'
  },
  {
    id: 'travelease',
    title: 'TravelEase — Vehicle Booking & Trip Management',
    shortDescription: 'A vehicle booking and trip management platform where users can explore available fleets, make reservations, and manage journeys with real-time status updates.',
    description: 'A vehicle booking and trip management platform where users can explore available fleets, make reservations, and manage journeys with real-time status updates.',
    fullDescription: 'A full-scale trip and vehicle reservation platform connecting travelers with verified vehicles. Built with React, Node.js, Express, and MongoDB with Firebase user authentication.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Tailwind CSS'],
    category: 'Full Stack',
    features: [
      'Vehicle fleet exploration with category filters',
      'Direct vehicle booking and reservation engine',
      'Secure Firebase authentication & user profiles',
      'Trip management and active reservation status'
    ],
    image: '/src/assets/projects/travelease.svg',
    githubUrl: 'https://github.com/ashikmahmud84/travelease',
    liveUrl: '',
    featured: true,
    mockUrl: 'travelease.internal',
    accent: 'cyan',
    type: 'travel'
  },
  {
    id: 'plantnet',
    title: 'PlantNet — Plant Management & Marketplace',
    shortDescription: 'A full-stack botanical marketplace and plant care management platform featuring multi-role access control for customers, sellers, and administrators.',
    description: 'A full-stack botanical marketplace and plant care management platform featuring multi-role access control for customers, sellers, and administrators.',
    fullDescription: 'E-commerce and botanical asset platform featuring distinct portals for plant buyers, certified nursery sellers, and store managers with integrated payment workflows.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Stripe'],
    category: 'Full Stack',
    features: [
      'Botanical species marketplace catalog',
      'Three-tier role-based access (Customer / Seller / Admin)',
      'Seller inventory management and order lifecycle',
      'Secure Stripe checkout integration'
    ],
    image: '/src/assets/projects/plantnet.svg',
    githubUrl: '',
    liveUrl: '',
    featured: true,
    mockUrl: 'plantnet-market.internal',
    accent: 'emerald',
    type: 'plant'
  },
  {
    id: '3d-model-hub',
    title: '3D Model Hub',
    shortDescription: 'A modern web application for discovering, inspecting, and managing 3D model resources through a clean interactive interface with instant search and filtering.',
    description: 'A modern web application for discovering, inspecting, and managing 3D model resources through a clean interactive interface with instant search and filtering.',
    fullDescription: 'Interactive 3D model discovery platform designed for designers and 3D artists. Provides fast resource filtering, metadata inspectors, and asset categorization.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    category: 'Frontend',
    features: [
      'Interactive 3D model asset gallery',
      'Real-time category filtering and dynamic search',
      'Detailed card inspectors with asset metadata',
      'Clean geometric design with smooth transitions'
    ],
    image: '/src/assets/projects/3d-model-hub.svg',
    githubUrl: '',
    liveUrl: '',
    featured: false,
    mockUrl: '3dmodelhub.internal',
    accent: 'teal',
    type: '3d'
  },
  {
    id: 'tea-house',
    title: 'Tea House',
    shortDescription: 'A specialty tea parlor website delivering an elegant browsing experience for organic tea blends, customer reviews, brewing guides, and parlor visits.',
    description: 'A specialty tea parlor website delivering an elegant browsing experience for organic tea blends, customer reviews, brewing guides, and parlor visits.',
    fullDescription: 'Refined presentation web app showcasing premium loose-leaf teas and specialty blends with nutritional highlights, reviews, and a parlor location explorer.',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    category: 'Frontend',
    features: [
      'Curated artisanal tea blend showcase',
      'Fully responsive across mobile, tablet, and desktop',
      'Interactive brewing guides & flavor profiles',
      'Harmonious warm typography and smooth interactions'
    ],
    image: '/src/assets/projects/tea-house.svg',
    githubUrl: '',
    liveUrl: '',
    featured: false,
    mockUrl: 'teahouse.internal',
    accent: 'amber',
    type: 'tea'
  },
  {
    id: 'boi-poka',
    title: 'Boi-Poka (Bookworm)',
    shortDescription: 'A book discovery and reading list management application for book lovers to explore genres, track reading progress, and bookmark favorite titles.',
    description: 'A book discovery and reading list management application for book lovers to explore genres, track reading progress, and bookmark favorite titles.',
    fullDescription: 'Personal reading tracking application allowing users to curate customized reading shelves, mark books currently being read, and search a broad catalog.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'REST API'],
    category: 'Frontend',
    features: [
      'Dynamic book catalog search and genre browsing',
      'Personal reading shelf & bookmarking system',
      'Reading progress tracker with status badges',
      'Lightweight, high-performance responsive interface'
    ],
    image: '/src/assets/projects/boi-poka.svg',
    githubUrl: '',
    liveUrl: '',
    featured: false,
    mockUrl: 'boipoka.internal',
    accent: 'purple',
    type: 'book'
  }
];
