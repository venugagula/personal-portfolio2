import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden" style={{backgroundImage: "url('./lovable-uploads/b45fcac7-79a5-4a0d-9980-5e1f5363ca38.png')"}}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          I am <span className="text-primary">Venugopal Reddy</span>
          <br />
          Gangula
        </h1>
        
        <div className="text-2xl lg:text-3xl mb-8 font-light">
          Data Engineer|
        </div>
        
        <div className="max-w-2xl mx-auto text-lg mb-12 leading-relaxed opacity-90">
          Highly skilled Data Engineer with 4+ years of experience designing and implementing 
          high-performance data solutions. Specialized in building scalable ETL pipelines, 
          real-time data processing systems, and cloud-based data platforms.
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <MapPin className="w-6 h-6 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm opacity-80">Chicago, Illinois 60616</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Phone className="w-6 h-6 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <a 
              href="tel:+18722586626" 
              className="text-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
            >
              872-258-6626
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Mail className="w-6 h-6 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Email</h3>
            <a 
              href="mailto:venugangula44@gmail.com" 
              className="text-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
            >
              venugangula44@gmail.com
            </a>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10 px-8"
            onClick={() => window.open('https://www.linkedin.com/in/venugopal-reddy-gangula-3a69b222b/', '_blank')}
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn Profile
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10 px-8"
            onClick={() => window.open('https://github.com/venugagula/myresume', '_blank')}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;