import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/20 border-t border-border/50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Venugopal Reddy Gangula. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="mailto:venugangula44@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              venugangula44@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/venugopal-reddy-gangula-3a69b222b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com/venugagula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;