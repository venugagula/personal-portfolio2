import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Wrench, BarChart3 } from "lucide-react";

const techStacks = {
  languages: ["Python", "SQL", "R", "Scala", "Java", "JavaScript", "TypeScript"],
  cloud: ["AWS (Glue, S3, Redshift, Lambda)", "Azure (Data Factory, Databricks)", "GCP", "Snowflake"],
  tools: ["Apache Spark", "PySpark", "Kafka", "Docker", "Kubernetes", "Git", "Jenkins", "Terraform"],
  visualization: ["Power BI", "Tableau", "Looker", "Grafana", "Excel"]
};

const stackIcons = {
  languages: Code,
  cloud: Cloud,
  tools: Wrench,
  visualization: BarChart3
};

const TechStack = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="bg-text-gradient bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive toolkit for building scalable data solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(techStacks).map(([category, technologies]) => {
            const IconComponent = stackIcons[category as keyof typeof stackIcons];
            return (
              <Card key={category} className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg capitalize">{category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;