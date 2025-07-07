import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";

const Header = () => {
  return (
    <section className="relative py-16 bg-hero-gradient border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Venugopal Reddy Gangula
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6">
            Senior Data Engineer
          </h2>
          
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Data Engineer with 4+ years building scalable ETL pipelines, real-time analytics, 
            and HIPAA-compliant systems using AWS, Azure, and Databricks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary-gradient hover:opacity-90 text-white px-8"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/20 hover:border-primary/40 px-8"
              onClick={() => window.open('https://www.linkedin.com/in/venugopal-reddy-gangula-3a69b222b/', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/20 hover:border-primary/40 px-8"
              onClick={() => window.open('https://github.com/venugagula/myresume', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;