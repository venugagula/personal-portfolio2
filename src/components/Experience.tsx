
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Chicago Education Advocacy Cooperative (ChiEAC)",
    role: "Data Engineer (via Data Science Alliance)",
    period: "Jul 2025 - Present",
    location: "Remote, USA",
    achievements: [
      "Volunteering as a Data Engineer under the Data Science Alliance Fellowship to support ChiEAC's nonprofit mission.",
      "Began documenting FHIR-compliant data architecture and assisting with AWS Glue pipeline audits.",
      "Initiated collaboration on early-stage Power BI dashboards for tracking student performance."
    ],
    technologies: ["AWS Glue", "Power BI", "FHIR", "Data Architecture"]
  },
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Data Engineer",
    period: "Jul 2021 - Jun 2023",
    location: "Hyderabad, Telangana",
    achievements: [
      "Engineered ultra-low latency market data pipelines processing 10M+ messages/sec using Python and Apache Kafka, reducing tick-to-trade latency by 75% for quantitative trading strategies.",
      "Modeled Snowflake data warehouse with DBT and deployed 50+ Airflow DAGs, accelerating analytics by 90% and enabling near real-time risk reporting for $500M+ trading positions.",
      "Built automated data validation framework using Great Expectations that reduced reconciliation errors by 40% across 20+ critical trading datasets."
    ],
    technologies: ["Python", "Apache Kafka", "Snowflake", "DBT", "Airflow", "Great Expectations"]
  },
  {
    company: "TeamTech Solutions",
    role: "Data Engineer",
    period: "May 2020 - Jun 2021",
    location: "Hyderabad, Telangana",
    achievements: [
      "Automated 1TB+ financial data processing using Azure Data Factory and Databricks; developed PySpark fraud detection model with 82% accuracy and integrated real-time dashboards in Power BI.",
      "Built ELT pipelines in Snowflake for daily-refreshed investor dashboards, saving 15+ hours/week; implemented data governance standards and unified data dictionary to streamline collaboration and accelerate due diligence by 30%.",
      "Implemented Snowflake ELT pipelines and validation frameworks to maintain 99.9% data reliability, reducing pipeline failures by 40% with custom Delta Lake merge logic improving upsert performance by 40%."
    ],
    technologies: ["Azure Data Factory", "Databricks", "PySpark", "Power BI", "Snowflake", "Delta Lake"]
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="bg-text-gradient bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven track record of delivering high-impact data solutions across healthcare, finance, and technology sectors
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {exp.role}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-primary font-semibold text-lg">
                      <Building className="w-5 h-5" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col lg:text-right gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-gradient rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/50 hover:bg-secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
