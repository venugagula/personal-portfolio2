import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, GitBranch, TrendingUp, ArrowRight, Github, ExternalLink } from "lucide-react";
import patientArchitecture from "@/assets/patient-pipeline-architecture.jpg";
import azureArchitecture from "@/assets/azure-etl-architecture.jpg";
import dataMetrics from "@/assets/data-metrics-visual.jpg";
import powerbiDashboard from "@/assets/powerbi-dashboard.jpg";

const projects = [
  {
    title: "Patient Readmission Prediction Pipeline",
    period: "Dec 2024",
    technologies: ["Python", "PySpark", "AWS Glue", "FHIR", "HL7"],
    description: "End-to-end predictive analytics pipeline processing 50K+ daily FHIR EHR records, reducing preventable readmissions by 28% in major hospitals with HIPAA compliance.",
    achievements: [
      "Developed end-to-end predictive analytics pipeline processing 50K+ daily FHIR EHR records, reducing preventable readmissions by 28% in major hospitals.",
      "Engineered features from unstructured clinical notes using Python/PySpark, improving model accuracy to 83% with Logistic Regression + SMOTE for class imbalance.",
      "Automated reporting with AWS Glue jobs generating daily risk scorecards (S3 → Power BI), saving 10+ hours/week for care teams.",
      "Ensured HIPAA compliance with Great Expectations validation checks, reducing data quality issues by 35%."
    ],
    impact: "28% reduction in preventable readmissions",
    metrics: ["83% model accuracy", "50K+ daily records processed", "10+ hours saved weekly"],
    link: "https://github.com/venugagula/Patient-Readmission-Prediction-Pipeline",
    githubLink: "https://github.com/venugagula/Patient-Readmission-Prediction-Pipeline",
    image: patientArchitecture,
    visualImage: powerbiDashboard
  },
  {
    title: "ETL Pipeline for E-Commerce on Azure",
    period: "Nov 2022", 
    technologies: ["Azure Data Factory", "Databricks", "Delta Lake", "PySpark", "CI/CD"],
    description: "Cloud-based data pipeline on Azure processing 15GB+ of daily e-commerce data, reducing processing time by 25% through Spark optimizations and cloud cost optimization.",
    achievements: [
      "Designed and deployed cloud-based data pipeline on Azure processing 15GB+ daily e-commerce data, reducing processing time by 25% through Spark optimizations (partition pruning, caching).",
      "Implemented medallion architecture in Azure Data Lake (Bronze→Silver→Gold) using Delta Lake for ACID compliance, enabling reliable near-real-time analytics.",
      "Orchestrated workflows with Azure Data Factory, automating data ingestion from multiple sources with CI/CD pipelines for data observability.",
      "Built custom Delta Lake merge operations improving upsert performance by 40% for frequently updated product inventory data."
    ],
    impact: "25% reduction in processing time",
    metrics: ["15GB+ daily data processed", "40% upsert performance improvement", "Near real-time analytics"],
    link: "https://github.com/venugagula/azure-ecommerce-etl-pipeline",
    githubLink: "https://github.com/venugagula/azure-ecommerce-etl-pipeline", 
    image: azureArchitecture,
    visualImage: dataMetrics
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="bg-text-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world implementations delivering measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 group">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={`${project.title} Architecture`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/90 text-accent-foreground font-semibold text-sm">
                    <TrendingUp className="w-4 h-4" />
                    {project.impact}
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {project.period}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                {/* Visual Image */}
                <div className="mb-6">
                  <img 
                    src={project.visualImage} 
                    alt={`${project.title} Dashboard`}
                    className="w-full h-32 object-cover rounded-lg border border-border/50"
                  />
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <GitBranch className="w-4 h-4" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary-gradient rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border/50 pt-4 mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Metrics</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-muted-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-primary-gradient hover:opacity-90 transition-opacity"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code on GitHub
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-primary/20 hover:border-primary/40"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-primary-gradient hover:opacity-90 transition-opacity"
            onClick={() => window.open('https://github.com/venugagula', '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;