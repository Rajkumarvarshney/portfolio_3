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
    id: 'kushagra',
    name: 'Kushagra Singhal',
    role: 'Backend / Systems Engineer',
    tagline: 'Result-driven software developer with 1+ years of experience building RESTful APIs, optimizing backend performance, and delivering scalable solutions with Spring Boot.',
    avatar: 'KS',
    avatarColor: '#7B8FF7',
    education: [
      {
        degree: 'B.Tech Information Technology',
        institution: 'Jaypee University of Information Technology',
        year: '2020–2024',
      },
      {
        degree: 'Senior Secondary (CBSE)',
        institution: 'Dayawati Modi Academy',
        year: '2019–2020',
      },
    ],
    experience: [
      {
        company: 'Oodles Technologies',
        role: 'Software Developer',
        period: 'Jan 2026–Present',
        highlights: [
          'Built Spring Boot RESTful APIs automating ticket assignment & complaints resolution',
          'Designed and optimized MySQL schemas for users, tickets, and departments',
          'Implemented JWT-based authentication & role-based access control via Spring Security',
          'Collaborated cross-functionally on ticket workflow tracking and reporting dashboards',
        ],
      },
      {
        company: 'JIL Information Technology (Jaypee Group)',
        role: 'Software Developer',
        period: 'Aug 2024–Jul 2025',
        highlights: [
          'Developed UMS backend services & Angular frontends serving 10,000+ students and staff across 3 universities',
          'Designed modular REST APIs for student records, faculty data, and course management using MVC architecture',
          'Optimized database queries and schemas for high-volume operations',
        ],
      },
    ],
    skills: ['Java', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Spring Boot', 'Spring Cloud', 'Spring Data JPA', 'Hibernate', 'Angular', 'MySQL', 'Git', 'GitHub', 'VS Code'],
    topSkills: ['Spring Boot', 'Java', 'Angular'],
    projects: ['ecommerce-platform', 'complaint-system', 'university-system'],
    interests: ['Systems Design', 'LeetCode (100+ solved)', 'Open Source', 'Backend Architecture'],
    contact: {
      email: 'kushagrasinghal11@gmail.com',
      github: 'https://github.com/kushagrasinghal11',
      linkedin: 'https://linkedin.com/in/kushagrasinghal11',
    },
  },
];
