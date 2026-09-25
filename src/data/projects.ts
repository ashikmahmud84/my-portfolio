export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string; // Retained for compatibility
  fullDescription?: string;
  technologies: string[];
  category: "Full Stack" | "Frontend" | string;
  features: string[];
  image: string; // Path to local asset, e.g. /src/assets/projects/library-management.svg
  githubUrl?: string; // GitHub repository URL (button hidden if empty or undefined)
  liveUrl?: string; // Live deployment URL (button hidden if empty or undefined)
  featured?: boolean; // Highlighted project banner
  mockUrl?: string;
  accent?: "emerald" | "cyan" | "teal" | "amber" | "purple";
  type?: "library" | "travel" | "plant" | "3d" | "tea" | "book";
}

export const projectsData: Project[] = [
  // {
  //   id: "library-management",
  //   title: "Library Management System",
  //   shortDescription:
  //     "A full-stack library management application designed to organize book catalogs, handle user permissions, track borrowing cycles, and provide an administrative control center.",
  //   description:
  //     "A full-stack library management application designed to organize book catalogs, handle user permissions, track borrowing cycles, and provide an administrative control center.",
  //   fullDescription:
  //     "Comprehensive library management solution built with Next.js and MongoDB. Features catalog indexing, member management, automated overdue calculations, and administrative analytics.",
  //   technologies: ["Next.js", "React", "MongoDB", "Tailwind CSS", "Node.js"],
  //   category: "Full Stack",
  //   features: [
  //     "Book cataloging and real-time inventory tracking",
  //     "User membership and borrowing history logs",
  //     "Admin control dashboard with analytics",
  //     "Responsive, mobile-optimized interface",
  //   ],
  //   image: "/src/assets/projects/library-management.svg",
  //   githubUrl: "",
  //   liveUrl: "",
  //   featured: true,
  //   mockUrl: "library-sys.internal",
  //   accent: "emerald",
  //   type: "library",
  // },
  {
    id: "my-green-earth",

    title: "My Green Earth — Tree Plantation Campaign",

    shortDescription:
      "A tree plantation campaign platform where users can explore trees, learn about environmental impact, and contribute to a greener future.",

    description:
      "A tree plantation campaign platform where users can explore trees, learn about environmental impact, and contribute to a greener future.",

    fullDescription:
      "A responsive tree plantation campaign website designed to encourage environmental awareness and make tree planting more accessible. Users can explore different types of trees, learn about the campaign, view its environmental impact, and participate in tree plantation initiatives.",

    technologies: ["React", "Tailwind CSS", "JavaScript", "Firebase"],

    category: "Frontend",

    features: [
      "Responsive tree plantation campaign landing page",
      "Tree category browsing and selection",
      "Environmental impact and campaign information",
      "Interactive navigation and call-to-action sections",
    ],

    image:
      "https://i.postimg.cc/zfVzgDxP/Chat-GPT-Image-Sep-25-2026-10-22-11-AM.png",

    githubUrl: "https://github.com/ashikmahmud84/Assignment-6",

    liveUrl: "https://my-green-earth-assignment-6.netlify.app/",

    featured: true,

    mockUrl: "my-green-earth.internal",

    accent: "green",

    type: "environment",
  },
  {
    id: "plantnet",
    title: "PlantNet — Plant Management & Marketplace",
    shortDescription:
      "A full-stack botanical marketplace and plant care management platform featuring multi-role access control for customers, sellers, and administrators.",
    description:
      "A full-stack botanical marketplace and plant care management platform featuring multi-role access control for customers, sellers, and administrators.",
    fullDescription:
      "E-commerce and botanical asset platform featuring distinct portals for plant buyers, certified nursery sellers, and store managers with integrated payment workflows.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Stripe",
    ],
    category: "Full Stack",
    features: [
      "Botanical species marketplace catalog",
      "Three-tier role-based access (Customer / Seller / Admin)",
      "Seller inventory management and order lifecycle",
      "Secure Stripe checkout integration",
    ],
    image: "https://i.postimg.cc/T3zBYRWf/plantnet.png",
    githubUrl: "https://github.com/ashikmahmud84/Plant-Net-client",
    liveUrl: "https://plant-net-775a0.web.app/",
    featured: true,
    mockUrl: "plantnet-market.internal",
    accent: "emerald",
    type: "plant",
  },
  {
    id: "3d-model-hub",
    title: "3D Model Hub",
    shortDescription:
      "A modern web application for discovering, inspecting, and managing 3D model resources through a clean interactive interface with instant search and filtering.",
    description:
      "A modern web application for discovering, inspecting, and managing 3D model resources through a clean interactive interface with instant search and filtering.",
    fullDescription:
      "Interactive 3D model discovery platform designed for designers and 3D artists. Provides fast resource filtering, metadata inspectors, and asset categorization.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    category: "Frontend",
    features: [
      "Interactive 3D model asset gallery",
      "Real-time category filtering and dynamic search",
      "Detailed card inspectors with asset metadata",
      "Clean geometric design with smooth transitions",
    ],
    image:
      "https://i.postimg.cc/PJppdzw3/Chat-GPT-Image-Sep-25-2026-11-22-10-AM.png",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    mockUrl: "3dmodelhub.internal",
    accent: "teal",
    type: "3d",
  },
  {
    id: "lotus-game",

    title: "Lotus Game",

    shortDescription:
      "An engaging gaming platform with a modern interface designed for an immersive and interactive online gaming experience.",

    description:
      "An engaging gaming platform with a modern interface designed for an immersive and interactive online gaming experience.",

    fullDescription:
      "Lotus Game is a modern web-based gaming platform focused on providing users with an engaging and visually appealing experience through interactive gameplay, responsive design, and a clean user interface.",

    technologies: ["HTML5", "CSS3", "JavaScript"],

    category: "Frontend",

    features: [
      "Interactive and engaging gaming experience",
      "Fully responsive across mobile, tablet, and desktop",
      "Modern and user-friendly interface",
      "Smooth interactions and intuitive navigation",
    ],

    image: "https://i.postimg.cc/FsHw08TC/Chat-GPT-Image-Sep-25-2026-07-37-17-PM.png",

    githubUrl: "https://github.com/ashikmahmud84/Assignment-9",

    liveUrl: "https://lotus-game.web.app/",

    featured: false,

    mockUrl: "lotus-game.web.app",

    accent: "emerald",

    type: "game",
  },
  {
    id: "boi-poka",
    title: "Boi-Poka (Bookworm)",
    shortDescription:
      "A book discovery and reading list management application for book lovers to explore genres, track reading progress, and bookmark favorite titles.",
    description:
      "A book discovery and reading list management application for book lovers to explore genres, track reading progress, and bookmark favorite titles.",
    fullDescription:
      "Personal reading tracking application allowing users to curate customized reading shelves, mark books currently being read, and search a broad catalog.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "REST API"],
    category: "Full Stack",
    features: [
      "Dynamic book catalog search and genre browsing",
      "Personal reading shelf & bookmarking system",
      "Reading progress tracker with status badges",
      "Lightweight, high-performance responsive interface",
    ],
    image:
      "https://i.postimg.cc/VvR0qdLr/Chat-GPT-Image-Sep-25-2026-07-07-56-PM.png",
    githubUrl: "https://github.com/ashikmahmud84/Boi-Poka",
    liveUrl: "https://boi-poka-kappa.vercel.app/",
    featured: false,
    mockUrl: "boipoka.internal",
    accent: "purple",
    type: "book",
  },
];
