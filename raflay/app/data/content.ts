export const company = {
  name: "Raflay",
  tagline: "Building Software That Moves",
  description:
    "Raflay is a B2B & B2C software company crafting digital products that solve real problems. We build fast, scalable, and beautiful software for businesses and consumers alike.",
  founded: "2025",
  location: "Islamabad, Pakistan",
  email: "hello@raflay.com",
};

export const projects = [
  {
    id: 1,
    name: "Grab",
    tag: "B2C",
    status: "In Development",
    description:
      "A powerful and feature-rich POS app with features like low stock alerts sent directly to your WhatsApp or automatic restock messages to suppliers.",
    tech: ["Electron", "Golang", "PostgreSQL"],
    color: "yellow",
  },
  {
    id: 2,
    name: "Radio",
    tag: "B2C",
    status: "Research Phase",
    description:
      "A voice-based social media app where users can post voice notes and listen to their friends' and family's voice notes in a feed. It's like Instagram, but with voice.",
    tech: ["React and React Native", "Golang"],
    color: "red",
  },
  {
    id: 3,
    name: "Roll",
    tag: "B2C",
    status: "Planning",
    description:
      "An e-attendance app for schools and colleges. Teachers can take attendance by scanning QR codes on ID cards or automatically calling student names one by one based on roll numbers. Teachers can mark each student as present, absent, or on leave with just one click.",
    tech: ["React Native", "Golang", "PostgreSQL"],
    color: "black",
  },
];

export const team = [
  {
    id: 1,
    name: "Rafay Ahmed",
    role: "Founder & CEO",
    email: "founder@raflay.com",
    bio: "Visionary behind Raflay. Passionate about building software that genuinely helps people and businesses grow.",
    isFounder: true,
    image: "https://pub-2bbed4cb70334d47bdd2825ee931d263.r2.dev/prof.jpg",
  },
  {
    id: 2,
    name: "Aymen Gul",
    role: "Human Resources",
    email: "hr@raflay.com",
    bio: "Building the Raflay culture one hire at a time. Focused on finding and developing exceptional talent.",
    isFounder: false,
    image: null,
  },
  {
    id: 3,
    name: "Rafay Ahmed",
    role: "Founder & Head of Backend Engineering",
    email: "backend.department@raflay.com",
    bio: "Architecting the systems that power Raflay's products. Obsessed with performance and reliability.",
    isFounder: false,
    image: null,
  },
  {
    id: 4,
    name: "Ahmad Rayyan Saeed",
    role: "Head of Frontend Engineering",
    email: "frontend.department@raflay.com",
    bio: "Crafting pixel-perfect interfaces that users love. Where design meets engineering precision.",
    isFounder: false,
    image: null,
  },
  {
    id: 5,
    name: "Sarah Farooq",
    role: "Head of Sales & Partnerships",
    email: "sales@raflay.com",
    bio: "Connecting Raflay's solutions with the right businesses. Building relationships that last.",
    isFounder: false,
    image: null,
  },
];

export const jobs = [
  {
    id: 1,
    title: "Senior Backend Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Islamabad",
    tag: "Engineering",
    description:
      "We're looking for a Senior Backend Engineer to help architect and scale our core platform. You'll work closely with the founding team to build robust, high-performance systems.",
    requirements: [
      "3+ years of backend development experience",
      "Proficiency in Node.js or Golang",
      "Experience with PostgreSQL or MongoDB",
      "Knowledge of REST APIs and microservices",
      "Familiarity with cloud platforms (AWS/GCP)",
    ],
    nice: ["Experience with Redis", "Open source contributions", "Startup experience"],
  },

  {
    id: 2,
    title: "Frontend Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Islamabad",
    tag: "Engineering",
    description:
      "Join our frontend team to build beautiful, fast, and accessible user interfaces. You'll shape the visual experience of Raflay's products.",
    requirements: [
      "2+ years of frontend development",
      "Strong proficiency in React or Next.js",
      "Good understanding of CSS and responsive design",
      "Experience with TypeScript",
      "Strong eye for UI and design details",
    ],
    nice: ["Experience with Tailwind CSS", "Figma skills", "Performance optimization knowledge"],
  },

  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote / Islamabad",
    tag: "Design",
    description:
      "We need a talented designer to shape the visual identity and user experience of Raflay's products. You'll work directly with engineering to ship exceptional experiences.",
    requirements: [
      "2+ years of product design experience",
      "Proficiency in Figma",
      "Strong portfolio with web/mobile projects",
      "Understanding of user-centered design principles",
      "Ability to create design systems",
    ],
    nice: ["Motion design skills", "Frontend HTML/CSS knowledge", "B2B SaaS experience"],
  },

  {
    id: 4,
    title: "Sales Development Representative",
    department: "Sales",
    type: "Full-time",
    location: "Islamabad (On-site)",
    tag: "Sales",
    description:
      "Help us grow Raflay's B2B pipeline. You'll prospect leads, qualify opportunities, and schedule meetings for the sales team.",
    requirements: [
      "1+ years of sales or business development experience",
      "Excellent communication skills in English and Urdu",
      "Self-motivated and target-driven",
      "Understanding of SaaS business models",
    ],
    nice: ["Experience selling software", "LinkedIn Sales Navigator knowledge", "Tech background"],
  },

  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Islamabad",
    tag: "Engineering",
    description:
      "Help us maintain scalable infrastructure, automate deployments, and improve system reliability across Raflay's platforms.",
    requirements: [
      "Experience with Docker and Kubernetes",
      "Knowledge of CI/CD pipelines",
      "Familiarity with AWS or GCP",
      "Understanding of Linux systems",
      "Problem-solving mindset",
    ],
    nice: ["Terraform experience", "Monitoring tools knowledge", "Security best practices"],
  },

  {
    id: 6,
    title: "Mobile App Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    tag: "Engineering",
    description:
      "Join our mobile team to build fast and reliable cross-platform applications used by thousands of users.",
    requirements: [
      "Experience with React Native or Flutter",
      "Understanding of mobile app architecture",
      "Experience integrating APIs",
      "Knowledge of app deployment processes",
      "Good debugging skills",
    ],
    nice: ["Published apps on Play Store/App Store", "Firebase experience", "UI animation knowledge"],
  },

  {
    id: 7,
    title: "QA Engineer",
    department: "Quality Assurance",
    type: "Full-time",
    location: "Islamabad / Remote",
    tag: "QA",
    description:
      "We're looking for a QA Engineer to ensure our products remain stable, reliable, and bug-free before release.",
    requirements: [
      "Experience with manual or automated testing",
      "Strong attention to detail",
      "Understanding of software development lifecycle",
      "Ability to write clear bug reports",
      "Basic API testing knowledge",
    ],
    nice: ["Selenium or Cypress experience", "Performance testing knowledge", "Startup experience"],
  },

  {
    id: 8,
    title: "Technical Support Specialist",
    department: "Support",
    type: "Full-time",
    location: "Islamabad (Hybrid)",
    tag: "Support",
    description:
      "Help customers resolve technical issues and ensure they have a smooth experience using Raflay's products.",
    requirements: [
      "Strong communication skills",
      "Basic technical troubleshooting knowledge",
      "Patience and customer-focused mindset",
      "Ability to document issues clearly",
      "Good English and Urdu communication",
    ],
    nice: ["Experience with SaaS products", "CRM software knowledge", "Technical background"],
  },

  {
    id: 9,
    title: "Office Driver",
    department: "Operations",
    type: "Full-time",
    location: "Islamabad (On-site)",
    tag: "Operations",
    description:
      "Responsible for transporting staff, handling office-related travel, and ensuring safe and timely transportation.",
    requirements: [
      "Valid driving license",
      "Good knowledge of local routes",
      "Punctual and professional attitude",
      "Clean driving record",
    ],
    nice: ["Previous corporate driving experience", "Basic vehicle maintenance knowledge"],
  },

  {
    id: 10,
    title: "Office Assistant",
    department: "Operations",
    type: "Full-time",
    location: "Islamabad (On-site)",
    tag: "Operations",
    description:
      "Assist with daily office operations, administrative tasks, and maintaining a productive workplace environment.",
    requirements: [
      "Good organizational skills",
      "Basic computer knowledge",
      "Professional communication skills",
      "Ability to multitask efficiently",
    ],
    nice: ["Previous office experience", "Microsoft Office familiarity"],
  },
];