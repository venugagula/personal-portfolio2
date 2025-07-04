import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
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
        
        <section id="experience">
          <Experience />
        </section>
        
        <Skills />
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Index;
