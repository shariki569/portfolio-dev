/** Single source of truth — site + PDF both read from here. Update this file to refresh everything. */
export const resumeMeta = {
  // Bump this when you edit resume content — site preview + PDF both read from this file
  lastUpdated: '2026-09-08',
  fileName: 'Clint_Sepalon_Resume.pdf',
};

export const personal = {
  fullName: 'Clint Airol T. Sepalon',
  displayName: 'Clint Sepalon',
  title: 'Front-End Developer',
  location: 'Talisay City, Cebu 6045, Philippines',
  phone: '+63 949 960 3438',
  email: 'sepalonclintairol@gmail.com',
  linkedin: 'https://www.linkedin.com/in/clint-sepalon-189768247/',
  portfolio: 'https://shariki569.github.io/portfolio-dev/',
  github: 'https://github.com/shariki569',
};

export const summary =
  'Front-end focused web developer with hands-on experience building and maintaining responsive WordPress and modern JavaScript interfaces. Strong in HTML, CSS, and JavaScript with solid UI implementation, performance awareness, and cross-browser quality. Currently deepening React skills and growing toward full-stack delivery.';

export const skills = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'UI Implementation'],
  Platforms: ['WordPress', 'Theme Customization', 'Elementor'],
  BackendBasics: ['MySQL', 'Node.js (basic)', 'ASP.NET', 'C#'],
  Practices: ['Cross-browser Compatibility', 'Performance Optimization', 'Troubleshooting', 'UI/UX Collaboration'],
};

export const experience = [
  {
    year: 2024,
    title: 'Front-End Developer',
    company: 'Proweaver Inc.',
    location: 'Talisay City, Philippines',
    duration: '2024 – Present',
    details:
      'Build and maintain responsive WordPress websites, implement UI designs and custom features, optimize performance, and partner with the team to ship client-ready projects.',
    bullets: [
      'Built and maintained responsive WordPress websites for client delivery.',
      'Implemented UI designs and custom front-end features with attention to consistency and usability.',
      'Improved page performance and verified cross-browser compatibility before release.',
      'Collaborated with designers and teammates to deliver polished production projects on schedule.',
    ],
  },
  {
    year: 2022,
    title: 'Web Developer',
    company: 'Contact Center Solution Philippines',
    location: 'Mandaue City, Philippines',
    duration: '2022 – 2023',
    details:
      'Developed and managed WordPress sites, customized themes and plugins, ran quality checks, and supported troubleshooting for live issues.',
    bullets: [
      'Developed and managed WordPress websites from setup through ongoing updates.',
      'Customized themes and plugins to match project requirements.',
      'Performed functional testing to protect quality before handoff.',
      'Supported troubleshooting and issue resolution for production sites.',
    ],
  },
  {
    year: 2019,
    title: 'Graphic Illustrator',
    company: 'Freelance / Creative Projects',
    location: 'Cebu, Philippines',
    duration: '2019 (7 months)',
    details:
      'Created digital illustrations for a children’s storybook and other creative assets, strengthening visual communication and design craft.',
    bullets: [
      'Produced digital illustrations for a children’s storybook project.',
      'Delivered creative assets with attention to composition, clarity, and brand feel.',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Science in Information Technology (BSIT)',
  school: 'Asian College of Technology – International Educational Foundation',
  location: 'Cebu City, Philippines',
  duration: '2020 – 2024',
  coursework: [
    'Advanced Web Development',
    'Object-Oriented Programming',
    'Database Systems',
    'Human-Computer Interaction (UI/UX)',
    'Mobile Applications Development',
    'Systems Analysis and Design',
  ],
  thesis: 'Management Information System of Aqua Cainta Talisay Cebu',
};

export const projects = [
  {
    title: 'MIS Website (Capstone)',
    stack: 'React, Node.js, MySQL, Chatbot',
    description:
      'Full-stack Management Information System with chatbot support for Aqua Cainta operations.',
    url: 'https://aquacaintacapstone.netlify.app/',
    imageKey: 'mis',
  },
  {
    title: 'MIT School Website',
    stack: 'WordPress',
    description: 'Institutional school website built and maintained with WordPress.',
    url: 'https://mit-edu.ph',
    imageKey: 'mit',
  },
  {
    title: 'Movie Explorer App',
    stack: 'React, Tailwind CSS, Movie API',
    description: 'Movie browsing experience powered by a public movie API.',
    url: 'https://shariki569.github.io/Movie-App/',
    imageKey: 'movie',
  },
  {
    title: 'Model Blog Site',
    stack: 'HTML, CSS',
    description: 'Clean marketing/blog layout focused on structure and visual hierarchy.',
    url: 'https://shariki569.github.io/sepalon-blog-project-1/',
    imageKey: 'model',
  },
  {
    title: 'Digital Art Portfolio',
    stack: 'Carrd',
    description: 'Personal art portfolio highlighting illustration and creative work.',
    url: 'https://shariki569.carrd.co/',
    imageKey: 'art',
  },
];

export const socials = [
  { label: 'LinkedIn', href: personal.linkedin },
  { label: 'Portfolio', href: personal.portfolio },
  { label: 'GitHub', href: personal.github },
];
