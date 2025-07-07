import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Add padding to account for fixed navigation */}
      <div className="pt-16">
        <section id="about">
          <Header />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="tech-stack">
          <TechStack />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="certifications">
          <Certifications />
        </section>
        
        <section id="contact">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Index;
