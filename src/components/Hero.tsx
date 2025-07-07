import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Venugopal Reddy
            </span>
          </h1>
          <div className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground mb-8">
            Senior Data Engineer
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building scalable ETL pipelines and real-time analytics solutions with{" "}
            <span className="text-primary font-semibold">4+ years</span> of experience in AWS, Azure, and Databricks
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-primary-gradient hover:opacity-90 transition-opacity text-white px-8 py-3 text-lg font-medium shadow-lg"
            onClick={() => window.open('https://github.com/venugagula/myresume', '_blank')}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 hover:border-primary hover:bg-primary/5 px-8 py-3 text-lg font-medium"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown 
            className="w-6 h-6 mx-auto text-muted-foreground cursor-pointer hover:text-primary transition-colors"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;