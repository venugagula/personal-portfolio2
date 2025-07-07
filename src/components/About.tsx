import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Cloud, 
  BarChart3, 
  Shield,
  TrendingUp,
  Clock
} from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "ETL Pipelines",
    description: "50K+ daily records processed with optimized data workflows"
  },
  {
    icon: Cloud,
    title: "Cloud Architecture", 
    description: "AWS, Azure, and Databricks expertise for scalable solutions"
  },
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description: "Healthcare data security and regulatory compliance"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Data observability and CI/CD best practices"
  },
  {
    icon: TrendingUp,
    title: "Cost Optimization",
    description: "Reduced operational costs through efficient architectures"
  },
  {
    icon: Clock,
    title: "4+ Years Experience",
    description: "Proven track record in enterprise data engineering"
  }
];

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image and intro */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1 mb-6">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-6xl font-bold bg-text-gradient bg-clip-text text-transparent">
                  VG
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                About <span className="bg-text-gradient bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Senior Data Engineer with expertise in building scalable ETL pipelines, 
                real-time analytics, and HIPAA-compliant systems. I specialize in cloud 
                technologies including AWS, Azure, and Databricks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing a Master's in Computer/Information Technology Administration 
                and Management at Lindsey Wilson College, while delivering enterprise-grade 
                data solutions that reduce operational costs and improve system reliability.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                Chicago, IL
              </Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                Available for Hire
              </Badge>
            </div>
          </div>
          
          {/* Right: Key highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary-gradient">
                      <highlight.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;