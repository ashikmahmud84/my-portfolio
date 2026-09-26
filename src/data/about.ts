export interface EducationItem {
  degree: string;
  department?: string;
  institution?: string;
  board?: string;
  passingYear?: string;
  periodOrYear?: string;
  currentSemester?: string;
  expectedGraduation?: string;
  result?: string;
}

export interface DeveloperInfo {
  name: string;
  role: string;
  location: string;
  education: string;
  currentStatus: string;
  languages: string;
}

export interface JourneyMilestone {
  title: string;
  description: string;
  technologies?: string[];
  isCurrent?: boolean;
}

export const aboutContent = {
  sectionLabel: "01 — Background",
  sectionTitle: "About Me",
  subtitle:
    "Computer Science & Technology student and Web Developer focused on modern full-stack web applications.",
  paragraphs: [
    "I am ASHIK AHAMMED, a Computer Science & Technology student and Web Developer based in Mymensingh, Bangladesh. I enjoy building modern, responsive, and user-centric web applications with clean, maintainable code.",
    "My primary development direction is modern full-stack engineering with the MERN Stack (React, Node.js, Express.js, MongoDB), along with Next.js, robust REST APIs, and modern responsive web architectures.",
    "I am actively strengthening my full-stack development skills through hands-on project development, continuous problem solving, and exploring modern production practices to create impactful digital experiences.",
  ],
  focusTechnologies: [
    "MERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "REST APIs",
    "Responsive Web Development",
  ],
  developerInfo: {
    name: "ASHIK AHAMMED",
    role: "Web Developer / MERN Stack Developer",
    location: "Dhaka, Bangladesh",
    education: "Diploma in Engineering — Computer Science & Technology",
    currentStatus: "Student / Web Developer",
    languages: "Bengali (Native), English (Intermediate)",
  },
  // Backward compatibility object
  quickInfo: {
    name: "ASHIK AHAMMED",
    role: "Web Developer / MERN Stack Developer",
    location: "Dhaka, Bangladesh",
    education: "Diploma in Engineering — Computer Science & Technology",
    currentStatus: "Student / Web Developer",
    languages: "Bengali (Native), English (Intermediate)",
    careerLevel: "Student / Web Developer",
    focus: "MERN Stack & Full-Stack Web Development",
    status: "Available for Opportunities",
  },
  education: [
    {
      degree: "Diploma in Engineering",
      department: "Computer Science & Technology",
      institution: "Mymensingh Polytechnic Institute",
      currentSemester: "8th Semester",
      expectedGraduation: "2026",
      periodOrYear: "8th Semester (2026)",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      board: "Mymensingh Board",
      passingYear: "2022",
      result: "GPA 5.00",
      periodOrYear: "2022",
    },
  ] as EducationItem[],
  journey: [
    {
      title: "Started Learning Programming & Web Development",
      description:
        "Began exploring computer science fundamentals and started the journey of software engineering with curiosity and dedication.",
      technologies: ["Programming Fundamentals", "Problem Solving", "Git"],
    },
    {
      title: "Learned HTML, CSS and JavaScript",
      description:
        "Mastered semantic HTML5, responsive CSS3 layouts, modern design principles, and core JavaScript fundamentals.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Responsive Web Design",
      ],
    },
    {
      title: "Progressed into React & Modern Frontend Development",
      description:
        "Transitioned into component-driven development with React, dynamic state management, custom hooks, and Tailwind CSS.",
      technologies: [
        "React",
        "React Hooks",
        "Tailwind CSS",
        "Vite",
        "Component Architecture",
      ],
    },
    {
      title: "Learned Node.js, Express & MongoDB",
      description:
        "Expanded into backend development, constructing modular RESTful APIs with Node.js and Express, and persistent database schemas with MongoDB.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Database Modeling"],
    },
    {
      title: "Built Full-Stack Projects",
      description:
        "Applied full-stack knowledge to real-world applications, integrating responsive frontends with database-backed server endpoints.",
      technologies: ["MERN Stack", "Full-Stack Integration", "CRUD Workflows"],
    },
    {
      title: "Worked with Authentication, APIs & Databases",
      description:
        "Implemented secure user authentication, token-based authorization (JWT), RESTful API design, and robust database management.",
      technologies: [
        "JWT Authentication",
        "REST APIs",
        "Security Practices",
        "Database Queries",
      ],
    },
    {
      title: "Currently Exploring Next.js & Improving Full-Stack Skills",
      description:
        "Expanding full-stack development skills with Next.js, server components, production optimization, and modern architectural standards.",
      technologies: [
        "Next.js",
        "Full-Stack Web Development",
        "Clean Architecture",
      ],
      isCurrent: true,
    },
  ] as JourneyMilestone[],
};
