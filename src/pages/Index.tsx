import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="bg-muted/30">
          <About />
        </section>
        
        <section id="projects" className="bg-background">
          <Projects />
        </section>
        
        <section id="skills" className="bg-muted/30">
          <Skills />
        </section>
        
        <section id="contact" className="bg-background">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
