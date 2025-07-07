import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Amazon Web Services Cloud Practitioner",
    issuer: "AWS",
    logo: "🟠", // AWS orange
    description: "Foundational cloud computing and AWS services knowledge"
  },
  {
    title: "Microsoft Azure AI Essentials Professional",
    issuer: "Microsoft",
    logo: "🔵", // Microsoft blue
    description: "AI and machine learning services on Azure platform"
  },
  {
    title: "SQL Certification",
    issuer: "HackerRank",
    logo: "🟢", // HackerRank green
    description: "Advanced SQL querying and database management skills"
  },
  {
    title: "Data Engineering Foundations",
    issuer: "LinkedIn Learning",
    logo: "🔗", // LinkedIn
    description: "Core principles and practices in data engineering"
  }
];

const Certifications = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-left mb-4">
            Professional <span className="bg-text-gradient bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl text-left">
            Validated expertise in cloud technologies and data engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 group rounded-lg">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{cert.logo}</div>
                  <div className="flex-1">
                    <CardTitle className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                      <Award className="w-3 h-3" />
                      {cert.issuer}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            className="bg-primary-gradient hover:opacity-90 transition-opacity"
            onClick={() => window.open('https://www.linkedin.com/in/venugopal-reddy-gangula-3a69b222b/details/certifications/', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View All Certifications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;