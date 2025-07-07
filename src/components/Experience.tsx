import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Innovaccer",
    role: "Data Engineer",
    period: "Jan 2024 - Apr 2025",
    location: "Remote, USA",
    achievements: [
      "Architected HIPAA-compliant data pipelines on AWS Glue and Redshift processing 12M+ daily patient records, achieving 99.99% uptime for critical care analytics.",
      "Spearheaded FHIR/HL7 standardization across 5 hospital networks, reducing interoperability costs by $320K/year through automated message transformation (Python, Mirth Connect).",
      "Redesigned Databricks clusters using Delta Lake optimizations and auto-scaling, cutting healthcare analytics runtime by 35% ($85K annual cloud savings).",
      "Deployed enterprise data quality framework with Great Expectations, eliminating 28% patient record mismatches and reducing ICU reporting errors by 19%."
    ],
    technologies: ["AWS Glue", "Redshift", "Python", "FHIR/HL7", "Databricks", "Delta Lake", "Great Expectations"]
  },
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Data Engineer",
    period: "Jul 2021 - Jun 2023",
    location: "Hyderabad, Telangana",
    achievements: [
      "Engineered ultra-low latency market data pipelines processing 10M+ messages/sec using Python and Apache Kafka, reducing tick-to-trade latency by 75% for quantitative trading strategies.",
      "Designed and implemented a Snowflake-based dimensional data model with dbt-core that accelerated portfolio analytics queries by 90%, enabling real-time risk assessment for $500M+ positions.",
      "Developed 50+ production Airflow DAGs orchestrating ETL workflows for options pricing data, improving data freshness from hourly to near-real-time (15-second intervals).",
      "Built automated data validation framework using Great Expectations that reduced reconciliation errors by 40% across 20+ critical trading datasets."
    ],
    technologies: ["Python", "Apache Kafka", "Snowflake", "dbt-core", "Airflow", "Great Expectations"]
  },
  {
    company: "TeamTech Solutions",
    role: "Data Engineer",
    period: "May 2020 - Jun 2021",
    location: "Hyderabad, Telangana",
    achievements: [
      "Automated 1TB+ of monthly financial transactions using Azure Data Factory ETL pipelines, improving data delivery speed by 70% and enabling real-time reporting.",
      "Developed a PySpark-based fraud detection MVP with 82% accuracy from limited historical data, leveraging creative feature engineering that laid the groundwork for the company's risk analytics platform.",
      "Built ELT workflows in Snowflake to transform raw financial data into daily-refreshed investor dashboards, saving 15+ hours weekly and streamlining executive reporting via Power BI.",
      "Established startup-wide data governance and lineage standards, including a unified data dictionary, accelerating due diligence efforts by 30% and supporting seamless collaboration across the full data stack—from ingestion to reporting.",
      "Designed and implemented a data quality monitoring framework that reduced pipeline failures by 40% through automated validation checks (using PySpark and Azure Functions), ensuring 99.9% reliability for critical financial reports."
    ],
    technologies: ["Azure Data Factory", "PySpark", "Snowflake", "Power BI", "Azure Functions"]
  }
];

const Experience = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-left mb-4">
            Professional <span className="bg-text-gradient bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl text-left">
            Proven track record of delivering high-impact data solutions across healthcare, finance, and technology sectors
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 rounded-lg">
              <CardHeader className="pb-3">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {exp.role}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-primary font-semibold text-base">
                      <Building className="w-4 h-4" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col lg:text-right gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-4">
                  {exp.achievements.slice(0, 3).map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-gradient rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/50 hover:bg-secondary text-xs">
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