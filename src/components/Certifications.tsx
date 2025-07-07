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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="bg-text-gradient bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Validated expertise in cloud technologies and data engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{cert.logo}</div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <Award className="w-4 h-4" />
                      {cert.issuer}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
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