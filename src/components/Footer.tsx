import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Let's <span className="bg-text-gradient bg-clip-text text-transparent">Connect</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md">
              Ready to discuss how my data engineering expertise can drive your organization's success. 
              Let's build something amazing together.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">venugangula44@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-sm text-muted-foreground">872-258-6626</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-sm text-muted-foreground">Chicago, Illinois 60616</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center lg:text-right">
            <div className="inline-block p-8 rounded-2xl bg-hero-gradient border border-border/50">
              <h4 className="text-xl font-bold mb-4">Ready to Start?</h4>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Available for full-time opportunities and consulting projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end">
                <Button className="bg-primary-gradient hover:opacity-90 transition-opacity">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                
                <Button variant="outline" className="border-primary/20 hover:border-primary/40">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Venugopal Reddy Gangula. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;