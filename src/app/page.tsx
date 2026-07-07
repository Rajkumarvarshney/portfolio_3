import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import TeamMembers from '@/components/sections/TeamMembers';
import DocuFlow from '@/components/sections/DocuFlow';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import TechStack from '@/components/sections/TechStack';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <TeamMembers />
        <DocuFlow />
        <ProjectsGrid />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
