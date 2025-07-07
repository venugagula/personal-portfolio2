import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Let's <span className="bg-text-gradient bg-clip-text text-transparent">Connect</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md text-sm">
              Ready to discuss data engineering opportunities and build amazing solutions together.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">Email</div>
                  <a 
                    href="mailto:venugangula44@gmail.com" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    venugangula44@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">Phone</div>
                  <a 
                    href="tel:+18722586626" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    872-258-6626
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">Location</div>
                  <div className="text-sm text-muted-foreground">Chicago, Illinois 60616</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center lg:text-right">
            <div className="inline-block p-6 rounded-2xl bg-hero-gradient border border-border/50">
              <h4 className="text-lg font-bold mb-3">Ready to Start?</h4>
              <p className="text-muted-foreground mb-4 max-w-sm text-sm">
                Available for opportunities and consulting projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end">
                <Button 
                  className="bg-primary-gradient hover:opacity-90 transition-opacity"
                  onClick={() => window.open('mailto:venugangula44@gmail.com', '_blank')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-primary/20 hover:border-primary/40"
                  onClick={() => window.open('https://www.linkedin.com/in/venugopal-reddy-gangula-3a69b222b/', '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 Venugopal Reddy Gangula. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;