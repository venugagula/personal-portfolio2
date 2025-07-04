import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";

const Header = () => {
  return (
    <header className="relative bg-hero-gradient border-b border-border/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="relative container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-gradient rounded-full blur-xl opacity-30 scale-110" />
              <img 
                src="/lovable-uploads/529fda67-26f7-441b-a699-150eb3c76555.png"
                alt="Venugopal Reddy Gangula"
                className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-card shadow-card-hover"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="bg-text-gradient bg-clip-text text-transparent">
                Venugopal Reddy
              </span>
              <br />
              <span className="text-foreground">Gangula</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-6 font-medium">
              Senior Data Engineer
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Highly skilled Data Engineer with 4+ years of experience designing and implementing 
              high-performance data solutions. Specialized in building scalable ETL pipelines, 
              real-time data processing systems, and cloud-based data platforms.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Chicago, Illinois 60616
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                872-258-6626
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                venugangula44@gmail.com
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-primary-gradient hover:opacity-90 transition-opacity">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              
              <Button variant="outline" className="border-primary/20 hover:border-primary/40">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </Button>
              
              <Button variant="outline" className="border-primary/20 hover:border-primary/40">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;