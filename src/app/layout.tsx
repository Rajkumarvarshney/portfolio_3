import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TrioForge — Full-Stack, ML & Real-Time Engineering Team',
  description:
    'TrioForge is a 3-person postgrad engineering team from NIT Jalandhar building full-stack apps, real-time systems, and ML-driven document tools. Our flagship product DocuFlow converts PDFs, PPTX, DOCX, and video files into structured JSON. Available for freelance projects.',
  keywords: [
    'freelance developers',
    'full-stack development',
    'machine learning',
    'document processing',
    'React',
    'Node.js',
    'NIT Jalandhar',
    'MERN stack',
    'real-time systems',
  ],
  openGraph: {
    title: 'TrioForge — Engineering Team',
    description: 'Full-stack apps, real-time systems, and ML-driven document tools.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="noise-overlay antialiased">
        {children}
      </body>
    </html>
  );
}
