import { Skill, Project, ExperienceItem, EducationItem } from '../types';
import shopkaruBanner from '../assets/images/shopkaru_banner_1786555607594.jpg';
import snapscoresBanner from '../assets/images/snapscores_banner_1786554842741.jpg';
import alwaadBanner from '../assets/images/alwaad_banner_1786554865839.jpg';
import snapManagerBanner from '../assets/images/snap_manager_banner_1786554885539.jpg';
import portfolioBanner from '../assets/images/portfolio_banner_1786554902075.jpg';

export const PERSONAL_INFO = {
  name: 'Muhammad Umar Waheed',
  fullName: 'Muhammad Umar Waheed',
  shortName: 'Umar',
  highlightName: 'Umar',
  title: 'React Developer & Digital Marketer',
  subtitle: 'Software Engineer & Marketing Specialist',
  bio: 'Building scalable web applications and high-conversion e-commerce stores combined with strategic Snapchat & Meta Ads campaigns for maximum reach.',
  detailedBio: 'Web developer and freelance digital marketing specialist with expertise in React, Next.js, e-commerce web applications, Snapchat Ads, Meta/Facebook Ads, and technical SEO optimization.',
  email: 'omerrana1422@gmail.com',
  secondaryEmail: 'omerrana1422@gmail.com',
  phone: '+92 305 649 0157',
  whatsapp: '+923056490157',
  whatsappUrl: 'https://wa.me/923056490157',
  facebook: 'https://facebook.com/ranaomerwaheed',
  linkedin: 'https://linkedin.com/in/ranaomerwaheed',
  github: 'https://github.com/ranaomerwaheed',
  profilePic: 'https://i.postimg.cc/sDjS0Nr7/profile.jpg',
  cvUrl: 'https://drive.google.com/uc?export=download&id=15kRCNP2Jr3HDoL0cJZrqyDN3FESwubCb',
  location: 'Multan, Pakistan',
  secondaryLocation: 'Multan, Pakistan',
  currentRole: 'Freelance Web Developer & Marketer',
  educationShort: 'BS CS - Univ of Central Punjab',
  experienceYears: 'Freelance Web Developer & Digital Marketer',
  stats: [
    { label: 'YEARS EXPERIENCE', value: '2+' },
    { label: 'PROJECTS COMPLETED', value: '10+' },
    { label: 'EXPECTED DEGREE', value: 'BS CS (2028)' },
  ]
};

export const SKILL_PROGRESS_BARS = [
  { name: 'React.js & Next.js', percentage: 95 },
  { name: 'Snapchat Ads & Growth', percentage: 92 },
  { name: 'Meta & Facebook Ads', percentage: 90 },
  { name: 'TypeScript & JavaScript', percentage: 92 },
  { name: 'SEO & GBP Optimization', percentage: 94 },
  { name: 'Tailwind CSS & UI Design', percentage: 95 },
];

export const SKILLS_DATA: Skill[] = [
  // Languages & Frontend
  { id: '1', name: 'JavaScript (ES6+)', level: 'Advanced', category: 'Languages', iconName: 'FaJs', iconType: 'fa', color: '#f7df1e' },
  { id: '2', name: 'TypeScript', level: 'Advanced', category: 'Languages', iconName: 'SiTypescript', iconType: 'si', color: '#3178c6' },
  { id: '3', name: 'Python', level: 'Advanced', category: 'Languages', iconName: 'FaPython', iconType: 'fa', color: '#3776ab' },
  { id: '4', name: 'C++', level: 'Advanced', category: 'Languages', iconName: 'SiCplusplus', iconType: 'si', color: '#00599c' },
  { id: '5', name: 'HTML5', level: 'Advanced', category: 'Languages', iconName: 'FaHtml5', iconType: 'fa', color: '#e34c26' },
  { id: '6', name: 'CSS3 / SASS', level: 'Advanced', category: 'Languages', iconName: 'FaCss3Alt', iconType: 'fa', color: '#264de4' },
  { id: '7', name: 'React.js', level: 'Advanced', category: 'Frontend & Frameworks', iconName: 'FaReact', iconType: 'fa', color: '#61dafb' },
  { id: '8', name: 'Next.js', level: 'Advanced', category: 'Frontend & Frameworks', iconName: 'SiNextdotjs', iconType: 'si', color: '#000000' },
  { id: '9', name: 'Tailwind CSS', level: 'Advanced', category: 'Frontend & Frameworks', iconName: 'SiTailwindcss', iconType: 'si', color: '#06b6d4' },
  { id: '10', name: 'Bootstrap', level: 'Advanced', category: 'Frontend & Frameworks', iconName: 'SiBootstrap', iconType: 'si', color: '#7952b3' },
  { id: '11', name: 'Electron', level: 'Advanced', category: 'Frontend & Frameworks', iconName: 'SiElectron', iconType: 'si', color: '#472980' },

  // Digital Marketing & Ads (with Snapchat, Meta, Facebook, Google Ads logos)
  { id: '12', name: 'Snapchat Ads', level: 'Pro', category: 'Marketing & SEO', iconName: 'FaSnapchatGhost', iconType: 'fa', color: '#fffc00' },
  { id: '13', name: 'Meta / Facebook Ads', level: 'Pro', category: 'Marketing & SEO', iconName: 'SiMeta', iconType: 'si', color: '#0081fb' },
  { id: '14', name: 'Google Ads & PPC', level: 'Advanced', category: 'Marketing & SEO', iconName: 'SiGoogleads', iconType: 'si', color: '#4285f4' },
  { id: '15', name: 'SEO & Web Vitals', level: 'Pro', category: 'Marketing & SEO', iconName: 'Search', iconType: 'lucide', color: '#ec4899' },
  { id: '16', name: 'Google Business Profile (GBP)', level: 'Pro', category: 'Marketing & SEO', iconName: 'MapPin', iconType: 'lucide', color: '#ea4335' },
  { id: '17', name: 'Social Media Growth', level: 'Pro', category: 'Marketing & SEO', iconName: 'Megaphone', iconType: 'lucide', color: '#f43f5e' },
  { id: '18', name: 'WordPress', level: 'Pro', category: 'Marketing & SEO', iconName: 'SiWordpress', iconType: 'si', color: '#21759b' },
];

export const SERVICES_DATA = [
  {
    id: 'frontend',
    title: 'Frontend & Web App Development',
    description: 'Building modern, high-performance user interfaces and web apps with React, Next.js, TypeScript, and Tailwind CSS.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'marketing',
    title: 'Snapchat & Meta Ads Campaigns',
    description: 'Designing and managing targeted ad campaigns on Snapchat, Facebook, and Instagram to boost brand visibility, leads, and sales.',
    tags: ['Snapchat Ads', 'Meta Ads', 'Facebook Ads', 'ROAS Strategy'],
  },
  {
    id: 'seo',
    title: 'Technical SEO & GBP Optimization',
    description: 'Optimizing websites for Google search rankings, speed, and Google Business Profile (GBP) local business traffic.',
    tags: ['Technical SEO', 'GBP Local', 'Keywords', 'Multi-lingual'],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    description: 'Developing fast, responsive online stores with seamless checkout workflows and optimized mobile user experience.',
    tags: ['Shopify', 'Vite E-Commerce', 'Cart UI', 'Payment Gateways'],
  },
  {
    id: 'uiux',
    title: 'UI/UX & Motion Design',
    description: 'Crafting engaging web pages with clean layouts, interactive motion transitions, and accessibility standards.',
    tags: ['Framer Motion', 'Tailwind', 'Figma', 'Responsive UI'],
  },
  {
    id: 'performance',
    title: 'Speed & Conversion Optimization',
    description: 'Enhancing page load speeds, Google Web Vitals, and conversion rates across all screen sizes.',
    tags: ['Core Web Vitals', 'Conversion Rate', 'Mobile First'],
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'shopkaru',
    title: 'Shopkaru - E-Commerce Platform',
    description: 'Modern e-commerce shopping platform featuring dynamic product catalog, instant search filters, cart management, and mobile responsive UI.',
    link: 'https://shopkaru.vercel.app',
    tags: ['React', 'Next.js', 'E-Commerce', 'Tailwind CSS', 'Redux'],
    category: 'E-commerce & Web Apps',
    featured: true,
    type: 'E-Commerce Web App',
    bannerImage: shopkaruBanner,
    highlights: [
      'High-performance online store built with React and Next.js',
      'Real-time search, category filtering, and cart state management',
      'Hosted live on Vercel: https://shopkaru.vercel.app'
    ]
  },
  {
    id: 'snapscores-store',
    title: 'Snapscores Store',
    description: 'Modern e-commerce platform for digital growth products featuring fast responsive catalog, cart management, and seamless UI.',
    link: 'https://snapscores.store',
    tags: ['TypeScript', 'Vite', 'E-commerce', 'Tailwind CSS', 'React'],
    category: 'E-commerce & Web Apps',
    featured: true,
    type: 'E-Commerce Platform',
    bannerImage: snapscoresBanner,
    highlights: [
      'High-performance e-commerce store built with TypeScript & Vite',
      'Optimized shopping workflow with real-time state management',
      'Hosted live: https://snapscores.store'
    ]
  },
  {
    id: 'alwaad-service',
    title: 'Alwaad Service',
    description: 'Comprehensive business digital presence platform optimized for search engine ranking, GBP local visibility, and multi-lingual support.',
    link: 'https://alwaadservice.com',
    tags: ['SEO', 'GBP Optimization', 'Multi-lingual', 'Next.js', 'Tailwind'],
    category: 'SEO & Web Platforms',
    featured: true,
    type: 'Business & SEO Platform',
    bannerImage: alwaadBanner,
    highlights: [
      'Advanced technical SEO and Google Business Profile (GBP) optimization',
      'Multi-lingual web layout for international client reach',
      'Hosted live: https://alwaadservice.com'
    ]
  },
  {
    id: 'snap-account-manager',
    title: 'Snap Account Manager',
    description: 'Desktop management software for account handling, session tracking, and automated task execution built with Electron and Next.js.',
    tags: ['Electron', 'Next.js', 'Desktop App', 'TypeScript'],
    category: 'Desktop & Automation',
    featured: true,
    type: 'Desktop Application',
    bannerImage: snapManagerBanner,
    highlights: [
      'Cross-platform desktop application powered by Electron & Next.js',
      'Intuitive account management dashboard with automated workflows',
      'Local encrypted data persistence and high security'
    ]
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    description: 'Clean, responsive personal portfolio website showcasing web projects, technical expertise, and direct contact options.',
    link: 'https://umarrajput.vercel.app',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    category: 'Websites & Portfolios',
    featured: true,
    type: 'Portfolio Website',
    bannerImage: portfolioBanner,
    highlights: [
      'Semantic HTML5 & custom CSS3 layout with smooth responsive styling',
      'Direct contact form integration and modern typography',
      'Hosted live on Vercel: https://umarrajput.vercel.app'
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Freelance Web Developer',
    company: 'Self-Employed / Remote',
    period: 'Jan 2024 – Present',
    description: 'Designing and building modern, responsive web applications and e-commerce platforms for global clients. Tech stack includes React, Next.js, Vite, TypeScript, and Tailwind CSS.',
    skillsUsed: ['TypeScript', 'Vite', 'React', 'Next.js', 'Tailwind CSS', 'Electron']
  },
  {
    id: 'exp-2',
    role: 'Freelance Digital Marketer',
    company: 'Self-Employed / Remote',
    period: 'Jun 2023 – Present',
    description: 'Executing data-driven digital marketing strategies, Snapchat Ads, Meta/Facebook Ads, technical SEO audits, and Google Business Profile (GBP) local optimization.',
    skillsUsed: ['Snapchat Ads', 'Meta Ads', 'SEO', 'GBP Optimization', 'Google Analytics']
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: '1',
    quote: '"Umar delivered a fast, responsive e-commerce platform for Shopkaru and Snapscores Store. Exceptional speed and clean React architecture."',
    author: 'Client',
    role: 'E-Commerce Platform',
    initials: 'SK',
    rating: 5
  },
  {
    id: '2',
    quote: '"Great experience working with Umar on Alwaad Service. Our local search visibility and multi-lingual outreach improved significantly."',
    author: 'Marketing Lead',
    role: 'Alwaad Service',
    initials: 'AS',
    rating: 5
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'BS Computer Science',
    institution: 'University of Central Punjab',
    logo: 'https://i.postimg.cc/W3BxvRvR/UCP.jpg',
    period: 'Expected: 2028',
    details: 'Bachelor of Science in Computer Science focusing on Software Development, Data Structures, Algorithms, and Web Engineering.'
  }
];

