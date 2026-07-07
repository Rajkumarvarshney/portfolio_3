import { TeamMember } from '@/types';

// ─── Team Member Data ─────────────────────────────────────────────────────────
// To update: replace avatar initials with real photo URLs, update contact links.

export const teamMembers: TeamMember[] = [
  {
    id: 'rajkumar',
    name: 'Rajkumar Varshney',
    role: 'ML / Backend Engineer',
    tagline: 'Trains models that see what humans miss — from plant disease pixels to classification patterns.',
    avatar: 'RV',
    avatarColor: '#4ECDC4',
    education: [
      {
        degree: 'M.Tech CSE',
        institution: 'Dr. B.R. Ambedkar NIT Jalandhar',
        year: '2024–2026',
        cgpa: '7.52',
      },
      {
        degree: 'B.Tech Information Technology',
        institution: 'NSUT West Campus',
        year: 'Graduated 2022',
        cgpa: '7.9',
      },
    ],
    experience: [
      {
        company: 'Manilla Technologies',
        role: 'Frontend Developer',
        period: 'Aug – Oct 2022',
        highlights: [
          'Built and migrated web components from class-based to functional React patterns',
          'Resolved cross-device layout and rendering inconsistencies',
          'Delivered production UI features within a fast-paced startup environment',
        ],
      },
    ],
    skills: ['Java', 'JavaScript', 'React', 'Redux', 'Context API', 'HTML/CSS', 'Python', 'Deep Learning', 'Machine Learning'],
    topSkills: ['React / Redux', 'Deep Learning', 'Java'],
    projects: ['amazon-clone', 'plant-disease', 'research-paper'],
    interests: ['Cricket', 'Poetry', 'Technology', 'Reading'],
    contact: {
      email: 'raj1511aryan@gmail.com',
      github: 'https://github.com/', // TODO: replace with real GitHub URL
      linkedin: 'https://linkedin.com/in/', // TODO: replace with real LinkedIn URL
    },
  },
  {
    id: 'yash',
    name: 'Yash Garg',
    role: 'Full-Stack Developer',
    tagline: 'Builds the real-time systems that make collaboration feel instant — from code editors to PDF pipelines.',
    avatar: 'YG',
    avatarColor: '#FF9B3C',
    education: [
      {
        degree: 'M.Tech CSE',
        institution: 'Dr. B.R. Ambedkar NIT Jalandhar',
        year: '2024–present',
        cgpa: '8.52',
      },
      {
        degree: 'B.Tech CSE',
        institution: 'Jaypee University of Information Technology',
        year: '2020–2024',
        cgpa: '8.7',
      },
    ],
    experience: [
      {
        company: 'Benthon Labs Pvt. Ltd',
        role: 'Web Developer Intern',
        period: 'Jun – Aug 2023',
        highlights: [
          'Built a web-based attendance management system using React and MongoDB',
          'Developed backend logic for automated working-hours calculation',
          'Collaborated cross-functionally to debug and ship features on deadline',
        ],
      },
    ],
    skills: ['C', 'C++', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'Git'],
    topSkills: ['Node.js / Express', 'Socket.IO', 'React.js'],
    projects: ['codecast', 'pdf-merger', 'cpu-scheduler'],
    interests: ['Competitive Programming', 'System Design', 'Open Source'],
    contact: {
      email: 'yashgarg7302@gmail.com',
      github: 'https://github.com/', // TODO: replace with real GitHub URL
      linkedin: 'https://linkedin.com/in/', // TODO: replace with real LinkedIn URL
    },
  },
  {
    id: 'aditya',
    name: 'Aditya Mehra',
    role: 'Frontend Engineer & UI/UX Specialist',
    tagline: 'Bridges the gap between Figma and production — building interfaces that are both beautiful and bulletproof.',
    avatar: 'AM',
    avatarColor: '#7B8FF7',
    // ⚠️ PLACEHOLDER — replace with real details when available
    education: [
      {
        degree: 'M.Tech CSE',
        institution: 'Dr. B.R. Ambedkar NIT Jalandhar',
        year: '2024–present',
      },
      {
        degree: 'B.Tech CSE',
        institution: 'Delhi Technological University',
        year: '2020–2024',
        cgpa: '8.4',
      },
    ],
    experience: [
      {
        company: 'Pixel Nest Studios',
        role: 'Frontend Intern',
        period: 'May – Jul 2023',
        highlights: [
          'Built responsive marketing sites and design-system components for client products',
          'Translated Figma designs into pixel-perfect, accessible React components',
          'Introduced component documentation practices adopted by the full team',
        ],
      },
    ],
    skills: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Figma', 'GraphQL', 'REST APIs'],
    topSkills: ['Next.js / TypeScript', 'Figma → React', 'Framer Motion'],
    projects: ['designsync', 'taskflow', 'weatherly'],
    interests: ['Design Systems', 'Motion Design', 'Typography'],
    contact: {
      email: 'aditya.mehra.dummy@email.com', // ⚠️ PLACEHOLDER
      github: 'https://github.com/', // TODO: replace with real GitHub URL
      linkedin: 'https://linkedin.com/in/', // TODO: replace with real LinkedIn URL
    },
  },
];
