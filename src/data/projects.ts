import { Project, Testimonial } from '@/types';

// ─── Project Data ─────────────────────────────────────────────────────────────

export const projects: Project[] = [
  // ─── Flagship ───────────────────────────────────────────────────────────────
  {
    id: 'docuflow',
    title: 'DocuFlow',
    description: 'Universal document-to-structured-data converter. Feed it PDFs, PPTX, DOCX, or video — get clean, schema-controlled JSON.',
    longDescription:
      'DocuFlow is TrioForge\'s core product. It ingests heterogeneous document formats and outputs clean, structured JSON that developers can immediately use in downstream pipelines. It handles OCR for scanned documents, video transcription with slide/scene extraction, batch processing, and provides an API for integration into your own toolchain.',
    techStack: ['Next.js', 'Node.js', 'Python', 'OCR', 'Socket.IO', 'REST API', 'MongoDB', 'FFmpeg'],
    category: ['flagship', 'full-stack', 'ml-ai'],
    teamMemberIds: ['rajkumar', 'yash', 'aditya'],
    github: '#', // TODO: replace with real repo URL
    demo: '#',   // TODO: replace with live demo URL
    featured: true,
  },

  // ─── Rajkumar's Projects ────────────────────────────────────────────────────
  {
    id: 'amazon-clone',
    title: 'Amazon Clone',
    description: 'Full-featured e-commerce platform with Redux state management and Stripe payment integration.',
    techStack: ['React', 'Redux', 'Stripe', 'CSS3', 'Firebase'],
    category: ['full-stack'],
    teamMemberIds: ['rajkumar'],
    github: '#',
    demo: '#',
  },
  {
    id: 'plant-disease',
    title: 'Plant Disease Segmentation',
    description: 'M.Tech thesis: improved MD-UNet model for plant disease image segmentation and severity estimation (Mean F1 ≈ 0.94, Mean IoU ≈ 0.89).',
    techStack: ['Python', 'PyTorch', 'Deep Learning', 'Computer Vision', 'UNet'],
    category: ['ml-ai'],
    teamMemberIds: ['rajkumar'],
    github: '#',
    demo: '#',
  },
  {
    id: 'research-paper',
    title: 'Student CGPA Classification (Research)',
    description: 'Published research on engineering student CGPA group classification using multiple ML algorithms, co-authored with Chitkara University faculty.',
    techStack: ['Python', 'Scikit-learn', 'Machine Learning', 'Data Analysis'],
    category: ['ml-ai'],
    teamMemberIds: ['rajkumar'],
    github: '#',
    demo: '#',
  },

  // ─── Yash's Projects ────────────────────────────────────────────────────────
  {
    id: 'codecast',
    title: 'CodeCast',
    description: 'Real-time collaborative code editor with multi-user rooms, live sync via Socket.IO, and UUID-based room management.',
    techStack: ['React', 'Node.js', 'Express', 'Socket.IO', 'CodeMirror', 'MongoDB'],
    category: ['full-stack'],
    teamMemberIds: ['yash'],
    github: '#',
    demo: '#',
  },
  {
    id: 'pdf-merger',
    title: 'PDF Files Merger',
    description: 'Server-side PDF merging tool with drag-and-drop UI, Multer file handling, and PDF-Lib for document composition.',
    techStack: ['Node.js', 'Express', 'Multer', 'PDF-Lib', 'React'],
    category: ['full-stack'],
    teamMemberIds: ['yash'],
    github: '#',
    demo: '#',
  },
  {
    id: 'cpu-scheduler',
    title: 'CPU Scheduler Visualisation',
    description: 'Interactive visualizer for FCFS, SJF, Round Robin, and Priority Scheduling with dynamic Gantt charts and metrics.',
    techStack: ['React', 'JavaScript', 'Algorithms', 'Data Visualization'],
    category: ['frontend'],
    teamMemberIds: ['yash'],
    github: '#',
    demo: '#',
  },

  // ─── Aditya's Projects (placeholder) ────────────────────────────────────────
  {
    id: 'designsync',
    title: 'DesignSync',
    description: 'Figma-to-React component generator with live preview — bridge the gap between design and production code.',
    techStack: ['TypeScript', 'Next.js', 'Figma API', 'React', 'Tailwind CSS'],
    category: ['frontend'],
    teamMemberIds: ['aditya'],
    github: '#',
    demo: '#',
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    description: 'Kanban-style team task manager with drag-and-drop, real-time sync, and collaborative workspace management.',
    techStack: ['React', 'TypeScript', 'Socket.IO', 'Node.js', 'Framer Motion'],
    category: ['full-stack'],
    teamMemberIds: ['aditya'],
    github: '#',
    demo: '#',
  },
  {
    id: 'weatherly',
    title: 'Weatherly',
    description: 'Location-aware weather dashboard with animated data visualizations and multi-day forecast panels.',
    techStack: ['Next.js', 'TypeScript', 'REST APIs', 'Framer Motion', 'Chart.js'],
    category: ['frontend'],
    teamMemberIds: ['aditya'],
    github: '#',
    demo: '#',
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
// ⚠️ PLACEHOLDER — swap for real client testimonials before launch

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'TrioForge delivered our document processing pipeline in three weeks. The JSON output schema exactly matched what we needed for our data warehouse ingestion. Exceptional engineers.',
    author: 'Sarah Mitchell',
    company: 'DataBridge Solutions',
    role: 'Head of Engineering',
    isPlaceholder: true,
  },
  {
    id: 't2',
    quote:
      'The real-time collaborative editor they built for our internal tooling handles 50+ concurrent users without a hiccup. Clean code, thorough documentation, shipped on time.',
    author: 'Arjun Kapoor',
    company: 'DevKit Labs',
    role: 'CTO',
    isPlaceholder: true,
  },
  {
    id: 't3',
    quote:
      'Their ML-backed plant analysis prototype gave our research team a 20% reduction in manual annotation time. Rare to find engineers who can move between full-stack and ML so fluidly.',
    author: 'Dr. Priya Nair',
    company: 'AgroTech Research Institute',
    role: 'Principal Researcher',
    isPlaceholder: true,
  },
];
