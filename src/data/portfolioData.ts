import { Project, SkillGroup, ExperienceItem, ServiceItem, JournalNote } from '../types/portfolio';

export const PERSONAL_INFO = {
  fullName: 'Mohammed Waseem A',
  brandName: 'WASEEM',
  headline: 'Building digital experiences with code, creativity, and curiosity.',
  positioning: 'Computer Science and Engineering student, aspiring software developer, web developer, and UI/UX designer.',
  email: 'alanjiwaseem@gmail.com',
  phone: '+91 8248682077',
  formattedPhone: '+91 82486 82077',
  location: 'Melvisharam, Tamil Nadu, India',
  college: 'C. Abdul Hakeem College of Engineering and Technology',
  degree: 'B.E. Computer Science and Engineering',
  gradYear: '2024 – 2028',
  languages: ['Tamil', 'English'],
  linkedin: 'https://linkedin.com/in/mohammed-waseem-921239376',
  github: 'https://github.com/Waseem2211-ul',
  portraitAsset: '/assets/aistudio/IMG20250506171008_da129702.jpg',
  resumeAsset: '/assets/aistudio/Waseem_Resume_29d6da45.pdf',
};

export const PROJECTS: Project[] = [
  {
    id: 'careerverse-ai',
    name: 'CareerVerse AI',
    tagline: 'AI-assisted career navigation & course guidance engine for students.',
    category: 'AI & Career Tools',
    description: 'An AI-powered career exploration platform developed to guide students toward academic pathways and professional options aligned with their unique skills, strengths, and curiosities.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'OpenRouter API', 'Render', 'Vercel'],
    liveUrl: 'https://careerverseai-one.vercel.app/',
    githubUrl: 'https://github.com/Waseem2211-ul/Career-Verse-AI',
    featured: true,
    canEmbed: true,
    purpose: 'Demystify post-secondary education and modern tech career choices by providing contextual recommendations and an interactive AI Assistant.',
    intendedUsers: 'Secondary and undergraduate students seeking transparent academic pathways, career transitions, and skill requirements.',
    keyFeatures: [
      'Tailored career matching based on academic background, interests, and technical skills',
      'AI-powered chat assistant providing contextual career counseling and curriculum queries',
      'Structured pathways highlighting required competencies and real-world roles',
      'Decoupled Express.js backend integrated with OpenRouter LLM API hosted on Render',
      'Ultra-responsive, clean front-end built with Vite and Tailwind CSS'
    ],
    designAndTechDecisions: [
      'Built with a client-server architecture to keep API keys secure on the backend while maintaining instant frontend responsiveness.',
      'Designed with an encouraging, distraction-free aesthetic to lower cognitive load for students exploring high-stakes decisions.'
    ],
    accentColor: '#38bdf8'
  },
  {
    id: 'jobora',
    name: 'Jobora',
    tagline: 'Comprehensive career and interview readiness ecosystem.',
    category: 'AI & Career Tools',
    description: 'A career readiness and interview preparation web application featuring automated resume review capabilities, skill-gap analysis, job discovery, and interview practice tools.',
    technologies: ['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'REST APIs', 'Vercel'],
    liveUrl: 'https://joboraa.vercel.app/',
    featured: true,
    canEmbed: true,
    purpose: 'Bridge the preparation gap between formal education and tech industry interviews through hands-on analysis and curated recommendations.',
    intendedUsers: 'Job seekers, college students, and prospective interns preparing for technical interviews and resume submissions.',
    keyFeatures: [
      'Resume analysis engine evaluating formatting, keyword density, and key competencies',
      'Actionable career recommendations mapped to modern job market requisites',
      'Targeted interview preparation modules with common technical & behavioral questions',
      'Streamlined job exploration interface with responsive search and filtering'
    ],
    designAndTechDecisions: [
      'Engineered with rapid client-side filtering and intuitive component cards to ensure frictionless browsing on mobile devices.',
      'Prioritized clear typography and strong contrast to maintain readability across long practice sessions.'
    ],
    accentColor: '#10b981'
  },
  {
    id: 'atelier',
    name: 'Atelier',
    tagline: 'Luxury interior architecture & bespoke spatial design showcase.',
    category: 'UI/UX Concepts',
    description: 'An editorial digital identity concept for a high-end interior architecture and spatial design studio, centered on proportion, refined serif typography, and tactile visual composition.',
    technologies: ['UI/UX Design', 'Figma', 'Editorial Layout', 'Responsive Grid', 'Typography System'],
    featured: true,
    canEmbed: false,
    purpose: 'Explore luxury digital brand storytelling, spacious editorial layouts, and high-craft UI/UX paradigms without relying on conventional web templates.',
    intendedUsers: 'Discerning clients, private homeowners, and architects looking for bespoke interior renovation and furniture curations.',
    keyFeatures: [
      'Editorial magazine-style layout featuring intentional whitespace and asymmetrical balance',
      'Curated typographic scale balancing refined classic serifs with clean minimalist grotesques',
      'Tactile project showcase focusing on natural materials: stone, warm wood, and cast brass',
      'Subtle navigation interactions designed to feel like browsing an architectural monograph'
    ],
    designAndTechDecisions: [
      'Created deliberately without bright saturation to let material textures and architectural light dominate the composition.',
      'Crafted custom grid systems that break standard columnar repetition while preserving structured reading rhythm.'
    ],
    accentColor: '#d97706'
  },
  {
    id: 'waseem-gym',
    name: 'Waseem Gym',
    tagline: 'Dynamic athletic club & high-performance fitness web platform.',
    category: 'Business Websites',
    description: 'A modern, high-energy web application designed for a premier fitness and athletic training center, showcasing custom workout programs, coaching staff, and flexible membership tiers.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Vercel'],
    liveUrl: 'https://waseem-gym.vercel.app/',
    featured: false,
    canEmbed: true,
    purpose: 'Provide a motivating, high-conversion digital presence for fitness enthusiasts looking to join training programs and connect with trainers.',
    intendedUsers: 'Athletes, fitness beginners, and gym members looking for schedules, trainers, and registration.',
    keyFeatures: [
      'High-contrast athletic visual identity with motivating callouts',
      'Comprehensive program overview spanning bodybuilding, cardio conditioning, and personal training',
      'Interactive pricing tier cards detailing membership benefits and perks',
      'Mobile-first responsive layout with direct contact and membership enquiry integration'
    ],
    designAndTechDecisions: [
      'Used deep charcoal backgrounds with energetic accents to invoke discipline and athletic intensity.',
      'Optimized lightweight CSS transitions for fast performance on mobile screens used in the gym.'
    ],
    accentColor: '#ef4444'
  },
  {
    id: 'envie-salon',
    name: 'Envie Salon',
    tagline: 'Upscale hair styling & boutique beauty salon experience.',
    category: 'Business Websites',
    description: 'An elegant digital storefront and booking interface for a boutique beauty and hair salon, presenting curated services, artisan stylist portfolios, and salon ambiance.',
    technologies: ['HTML5', 'Modern CSS3', 'JavaScript', 'Responsive Layout', 'Vercel'],
    liveUrl: 'https://enviesalon.vercel.app/',
    featured: false,
    canEmbed: true,
    purpose: 'Convey hospitality, elegance, and grooming artistry while streamlining client discovery of specialized salon treatments.',
    intendedUsers: 'Clients looking to explore salon offerings, view hair/styling galleries, and schedule visits.',
    keyFeatures: [
      'Curated treatment catalog detailing hair styling, skin therapies, and grooming packages',
      'Artisanal aesthetic featuring muted tones and soft luxury typography',
      'Stylist showcase highlighting experience and specialty styling techniques',
      'Direct appointment reservation flow and salon visit guide'
    ],
    designAndTechDecisions: [
      'Developed with soft warm neutrals to establish an immediate sense of calm and pampering.',
      'Designed cards with graceful hover feedback that mirrors the gentle luxury of salon hospitality.'
    ],
    accentColor: '#ec4899'
  },
  {
    id: 'skyflies-cosmetics',
    name: 'Skyflies Cosmetics',
    tagline: 'Clean skincare & botanical cosmetics e-commerce storefront.',
    category: 'Business Websites',
    description: 'A vibrant beauty and personal care website showcasing cruelty-free skincare formulas, ingredient transparency, customer reviews, and routine regimens.',
    technologies: ['Front-End Architecture', 'HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    liveUrl: 'https://skyflies-cosmetics-and-skincar.vercel.app/',
    featured: false,
    canEmbed: true,
    purpose: 'Offer skincare enthusiasts an honest, visually captivating exploration of botanical ingredients and gentle formulas.',
    intendedUsers: 'Consumers looking for natural skincare routines, product breakdowns, and organic remedies.',
    keyFeatures: [
      'Product catalog highlighting key botanicals, usage instructions, and skin benefits',
      'Skin routine builder suggestions for different skin concerns',
      'Customer testimonial and real-use review displays',
      'Smooth responsive grid built for effortless mobile browsing'
    ],
    designAndTechDecisions: [
      'Utilized fresh, airy pastel aesthetics paired with crisp product photography framing.',
      'Implemented clean modular card architecture allowing easy expansion into full e-commerce checkout.'
    ],
    accentColor: '#06b6d4'
  },
  {
    id: 'alanji-computers',
    name: 'Alanji Computers',
    tagline: 'Computer hardware, custom rigs & IT hardware service hub.',
    category: 'Business Websites',
    description: 'A commercial technology portal for a computer sales, custom PC assembly, and hardware repair business, helping clients find systems and technical support.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Layout', 'Vercel'],
    liveUrl: 'https://alanji-computers.vercel.app/',
    featured: false,
    canEmbed: true,
    purpose: 'Provide a local technology business with a clear online hub for custom builds, repairs, and hardware accessories.',
    intendedUsers: 'Gamers, professionals, students, and businesses looking for dependable PC builds and maintenance.',
    keyFeatures: [
      'Custom PC configuration guidance for gaming, editing, and office workloads',
      'Transparent diagnostic and repair service overview',
      'Featured component catalog for processors, graphics cards, and storage upgrades',
      'Direct customer enquiry channel for repair bookings and custom quotes'
    ],
    designAndTechDecisions: [
      'Prioritized clarity and technical trust with clean badges, clear specs, and upfront service lists.',
      'Constructed with fast-loading semantic markup for rapid access on low-bandwidth connections.'
    ],
    accentColor: '#6366f1'
  },
  {
    id: 'previous-portfolio',
    name: 'Previous Portfolio Milestone',
    tagline: 'Archived foundational personal website and development milestone.',
    category: 'Archive',
    description: 'The previous iteration of Mohammed Waseem’s personal portfolio website, maintained as a recorded milestone of growth, foundational web development skills, and continuous learning.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    liveUrl: 'https://waseem-portfolio-seven.vercel.app/',
    featured: false,
    canEmbed: true,
    purpose: 'Document the starting point of web development, tracking the evolution toward advanced full-stack engineering and modern UI/UX design.',
    intendedUsers: 'Visitors and peers interested in the chronological progression of skills and design maturity.',
    keyFeatures: [
      'Early project showcase and personal bio introduction',
      'Pure CSS layout foundations and interactive anchor links',
      'Preserved as an authentic milestone in the software developer journey'
    ],
    designAndTechDecisions: [
      'Kept untouched in its original deployment on Vercel to honor genuine progress and learning transparency.'
    ],
    accentColor: '#8b5cf6'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming Languages',
    description: 'Foundational languages used for algorithms, problem solving, and software development.',
    skills: [
      { name: 'Python', level: 'Core', highlight: true },
      { name: 'C Programming', level: 'Core', highlight: true },
      { name: 'JavaScript (ES6+)', level: 'Core', highlight: true },
      { name: 'TypeScript', level: 'Practicing', highlight: false },
    ]
  },
  {
    category: 'Front-End Development',
    description: 'Modern component-driven web frameworks, styling engines, and responsive architecture.',
    skills: [
      { name: 'React', level: 'Core', highlight: true },
      { name: 'HTML5 Semantic Markup', level: 'Core', highlight: true },
      { name: 'CSS3 & Modern Layouts', level: 'Core', highlight: true },
      { name: 'Tailwind CSS', level: 'Core', highlight: true },
      { name: 'Vite', level: 'Core', highlight: true },
      { name: 'Responsive Web Development', level: 'Core', highlight: true },
    ]
  },
  {
    category: 'Back-End & APIs',
    description: 'Server-side runtime, routing, REST architectures, and cloud services.',
    skills: [
      { name: 'Node.js', level: 'Core', highlight: true },
      { name: 'Express.js', level: 'Core', highlight: true },
      { name: 'REST API Integration', level: 'Core', highlight: true },
      { name: 'SQL', level: 'Practicing', highlight: false },
      { name: 'MongoDB', level: 'Practicing', highlight: false },
    ]
  },
  {
    category: 'AI & API Integration',
    description: 'Practical implementation of large language models and smart interfaces into web apps.',
    skills: [
      { name: 'OpenRouter API', level: 'Core', highlight: true },
      { name: 'AI/LLM Integration', level: 'Core', highlight: true },
      { name: 'AI API Integration', level: 'Core', highlight: true },
      { name: 'Prompt Engineering & Chat Assistants', level: 'Practicing', highlight: false },
    ]
  },
  {
    category: 'UI/UX & Digital Design',
    description: 'Design thinking, layout hierarchy, accessibility, and high-fidelity wireframing.',
    skills: [
      { name: 'UI/UX Design Principles', level: 'Core', highlight: true },
      { name: 'Wireframing & Prototyping', level: 'Core', highlight: true },
      { name: 'Visual Hierarchy & Typography', level: 'Core', highlight: true },
      { name: 'User-Centered Design', level: 'Core', highlight: true },
      { name: 'Consistency & Usability Auditing', level: 'Core', highlight: true },
    ]
  },
  {
    category: 'Tools, Workflow & Blockchain Learning',
    description: 'Version control, developer tooling, deployment environments, and Web3 exploration.',
    skills: [
      { name: 'Git & GitHub', level: 'Core', highlight: true },
      { name: 'Visual Studio Code', level: 'Core', highlight: true },
      { name: 'Vercel & Render Deployment', level: 'Core', highlight: true },
      { name: 'Solidity', level: 'Learning', highlight: false },
      { name: 'MetaMask & Remix', level: 'Learning', highlight: false },
      { name: 'Ganache', level: 'Learning', highlight: false },
    ]
  }
];

export const TIMELINE_ITEMS: ExperienceItem[] = [
  {
    id: 'internship-codsoft',
    role: 'UI/UX Designer Intern',
    organization: 'CodSoft',
    duration: '4 Weeks (01/07/2026 – 31/07/2026)',
    type: 'internship',
    summary: 'Virtual internship focused on user interface and experience design, applying design principles to improve layout, navigation, and usability.',
    highlights: [
      'Designed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript',
      'Applied UI/UX principles to improve layout, navigation, consistency, and usability',
      'Created interactive components for responsive web experiences',
      'Translated design concepts into functional frontend interfaces'
    ],
    credentialAsset: '/assets/aistudio/1785595778964_e59b30b7.jpeg',
    credentialType: 'image'
  },
  {
    id: 'internship-codealpha',
    role: 'Front-End Development Intern',
    organization: 'CodeAlpha',
    duration: '1 Month',
    type: 'internship',
    summary: 'Virtual internship in front-end development, focusing on component design, interactive client-side logic, and responsive layouts.',
    highlights: [
      'Developed responsive web pages using HTML, CSS, and JavaScript',
      'Built interactive frontend components and implemented client-side functionality',
      'Worked on responsive layouts and user-friendly web interfaces',
      'Applied structured development practices to create organized and maintainable code'
    ]
  },
  {
    id: 'education-degree',
    role: 'B.E. in Computer Science and Engineering',
    organization: 'C. Abdul Hakeem College of Engineering and Technology',
    duration: '2024 – 2028',
    periodText: 'Melvisharam, Tamil Nadu, India',
    type: 'education',
    summary: 'Undergraduate engineering curriculum emphasizing core computer science fundamentals, data structures, algorithms, system architecture, and software engineering.',
    highlights: [
      'Active focus on full-stack web technologies and AI integrations',
      'Department of Computer Science and Engineering',
      'Previous Background: State Board, Computer Science with Mathematics'
    ]
  },
  {
    id: 'cert-infosys-html',
    role: 'HTML5 - The Language',
    organization: 'Infosys Springboard',
    duration: 'Course Completion',
    type: 'certification',
    summary: 'Comprehensive certification covering modern semantic HTML5 architecture, structural elements, forms, multimedia integration, and web standards.',
    highlights: [
      'Issued through Infosys Springboard',
      'Verified online via QR verification: verify.onwingspan.com',
      'Mastered semantic elements, accessibility tags, and clean DOM structuring'
    ],
    credentialAsset: '/assets/aistudio/d9b4542c-c780-4497-9ea6-71035580cf89_a2be4795.pdf',
    credentialType: 'pdf'
  },
  {
    id: 'cert-infosys-css',
    role: 'CSS3',
    organization: 'Infosys Springboard',
    duration: 'Course Completion',
    type: 'certification',
    summary: 'In-depth course on CSS3 layout paradigms, Flexbox, CSS Grid, media queries, animations, transitions, and responsive styling techniques.',
    highlights: [
      'Issued through Infosys Springboard',
      'Verified online via QR verification: verify.onwingspan.com',
      'Advanced selectors, cascading logic, typography control, and responsive design'
    ],
    credentialAsset: '/assets/aistudio/9949f440-6cd6-4e11-8034-8634aad1916a_7220f8a4.pdf',
    credentialType: 'pdf'
  },
  {
    id: 'cert-microsoft-marketing',
    role: 'Digital Marketing Course',
    organization: 'Microsoft & Great Learning',
    duration: 'Course Completion',
    type: 'certification',
    summary: 'Specialized training covering digital brand positioning, search optimization, audience targeting, and online communication strategy.',
    highlights: [
      'Presented by Microsoft in partnership with Great Learning',
      'Verified credential ID with authenticity seal',
      'Provides commercial perspective on user acquisition, SEO foundations, and conversion UX'
    ],
    credentialAsset: '/assets/aistudio/1783148657558_59cdd2e2.jpeg',
    credentialType: 'image'
  },
  {
    id: 'activity-sih',
    role: 'Smart India Hackathon Participant',
    organization: 'Smart India Hackathon',
    duration: 'Participant',
    type: 'activity',
    summary: 'Participated in nationwide innovation hackathon solving real-world technological challenges with collaborative problem solving and agile ideation.',
    highlights: [
      'Gained hands-on experience in rapid problem identification and technology-driven solution ideation',
      'Collaborated in multi-disciplinary team environments under competitive deadlines',
      'Formulated technological roadmaps addressing practical societal pain points'
    ]
  },
  {
    id: 'activity-ai-sprint',
    role: 'AI for Society: Ethical & Sustainable Idea Sprint',
    organization: 'CSE Dept, C. Abdul Hakeem College of Engineering & Technology',
    duration: 'Participant',
    type: 'activity',
    summary: 'Engaged in specialized ideation sprint focused on the ethical implications, green computing, and social impact of emerging AI systems.',
    highlights: [
      'Explored ethical, transparent, and sustainable applications of Artificial Intelligence',
      'Presented conceptual frameworks prioritizing accessibility, bias mitigation, and data privacy',
      'Engaged with faculty and peers on responsible software development standards'
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'frontend-dev',
    title: 'Responsive Front-End Development',
    shortDesc: 'Crafting responsive, performant web applications with React, Vite, and modern CSS.',
    deliverables: ['Custom React components', 'Tailwind CSS styling', 'Fluid mobile-first responsiveness', 'Clean cross-browser compatibility'],
    idealFor: 'Startups, personal brands, and companies needing dependable, fast front-end web interfaces.'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Implementation',
    shortDesc: 'Translating concepts and wireframes into elegant, intuitive user interfaces with strong typographic hierarchy.',
    deliverables: ['Component design systems', 'Layout wireframing', 'Interactive micro-interactions', 'Accessibility & usability optimization'],
    idealFor: 'Products requiring modern, non-generic visual identity with intuitive navigation.'
  },
  {
    id: 'ai-integration',
    title: 'AI & API Integration Prototypes',
    shortDesc: 'Connecting web applications to AI models, OpenRouter, and REST backends for smart interactive features.',
    deliverables: ['API endpoint integration', 'AI assistant interfaces', 'Backend Express.js proxy setup', 'Dynamic data visualization'],
    idealFor: 'Innovative tools seeking AI-assisted recommendations, chatbots, or automated analysis.'
  },
  {
    id: 'business-portfolios',
    title: 'Business & Portfolio Websites',
    shortDesc: 'High-impact digital showcases for services, gyms, salons, boutique brands, and professional individuals.',
    deliverables: ['Editorial brand presentation', 'Service catalogs & pricing cards', 'Contact and lead enquiry workflows', 'Speed-optimized static deployment'],
    idealFor: 'Local businesses, creators, and freelancers who need a memorable digital presence.'
  }
];

export const JOURNAL_NOTES: JournalNote[] = [
  {
    id: 'note-careerverse',
    title: 'Architecting CareerVerse AI: Lessons in Contextual LLM Integration',
    tag: 'Engineering Note',
    readingTime: '4 min read',
    date: '2026',
    excerpt: 'How separating backend LLM orchestration from a lightweight React frontend creates a responsive, secure experience for students exploring academic paths.',
    fullContent: [
      'When building CareerVerse AI, one of the primary engineering challenges was shielding API credentials while ensuring sub-second UI interactions for students browsing careers.',
      'By decoupling an Express.js backend on Render from a Vite-powered React frontend, we eliminated client-side token exposure. We also structured prompt guidelines so recommendations remained grounded in actual degree requirements rather than generic advice.',
      'The lesson: in AI web apps, reliable guardrails and minimal latency build far more user trust than flashy, unbounded text streams.'
    ]
  },
  {
    id: 'note-editorial-ui',
    title: 'The Balance Between Editorial Restraint and Functional Code',
    tag: 'Design Philosophy',
    readingTime: '3 min read',
    date: '2026',
    excerpt: 'Why typography, negative space, and disciplined contrast communicate confidence far better than arbitrary gradients or template clutter.',
    fullContent: [
      'During my UI/UX internship at CodSoft and front-end work at CodeAlpha, I observed a common trap: developers often compensate for unclear hierarchy by adding glowing borders and excessive animations.',
      'Real luxury and clarity come from the opposite: choosing an intentional typographic scale, respecting whitespace, and letting real project work and authentic photography take center stage.',
      'Code is the medium; user comprehension is the actual objective.'
    ]
  },
  {
    id: 'note-learning-journey',
    title: 'Progressing from State Board CS to Engineering Fundamentals',
    tag: 'Academic Reflection',
    readingTime: '3 min read',
    date: '2026',
    excerpt: 'Reflecting on building solid foundations in C, Python, and JavaScript at C. Abdul Hakeem College of Engineering and Technology.',
    fullContent: [
      'Transitioning from Tamil Nadu State Board Computer Science into B.E. Computer Science and Engineering provided a structured appreciation for low-level concepts.',
      'Understanding memory allocation and pointers in C informs how I write efficient JavaScript closures and React hooks today. Every high-level abstraction eventually rests on sound algorithmic foundations.'
    ]
  }
];
