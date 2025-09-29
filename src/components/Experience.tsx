
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Chicago Education Advocacy Cooperative (ChiEAC)",
    role: "Cloud Data Engineer (via Data Science Alliance)",
    period: "Jul 2025 - Present",
    location: "Remote, USA",
    achievements: [
      "Designed FHIR-compliant data architecture for standardized nonprofit EHR ingestion and analytics on AWS.",
      "Developed AWS Glue ETL jobs, Lambda triggers, and Athena queries to support secure healthcare reporting.",
      "Built Power BI dashboards surfacing student performance and operational metrics, reducing manual reporting by 60%.",
      "Automated incremental ingestion and workflow orchestration with Airflow, reducing runtime and manual effort.",
      "Implemented data lineage, metadata management, and governance policies for HIPAA compliance.",
      "Created monitoring solutions for ETL pipeline performance, cost control, and anomaly detection, Configured IAM roles, RBAC, and audit logging for sensitive data."
    ],
    technologies: ["AWS Glue", "Lambda", "Athena", "Power BI", "FHIR", "Airflow", "HIPAA"]
  },
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Data Engineer",
    period: "Aug 2021 - Jun 2023",
    location: "Hyderabad, India",
    achievements: [
      "Built Kafka + Spark Structured Streaming pipelines processing 10M+ events/sec for real-time financial analytics.",
      "Designed Snowflake warehouses and Redshift clusters, creating 50+ Airflow DAGs and dbt models.",
      "Implemented data quality checks, reconciliation frameworks, and automated testing improving accuracy by 40%.",
      "Enhanced performance of ETL/ELT pipelines, partitioning and clustering strategies, reducing query time by 30%.",
      "Established CI/CD pipelines with GitHub Actions and Jenkins for automated data pipeline deployments.",
      "Conducted root cause analysis and production support for pipeline failures, reducing downtime by 20%."
    ],
    technologies: ["Kafka", "Spark", "Snowflake", "Redshift", "Airflow", "DBT", "GitHub Actions", "Jenkins"]
  },
  {
    company: "TeamTech Solutions",
    role: "Data Analyst",
    period: "May 2020 - Jun 2021",
    location: "Hyderabad, India",
    achievements: [
      "Automated ingestion of 1TB+ daily financial data using Azure Data Factory, Databricks, and Delta Lake, reducing runtimes by 25% and ensuring ACID-compliant analytics with the Medallion Architecture (Bronze→Silver→Gold).",
      "Built fraud detection model in PySpark (82% accuracy) and integrated them with Power BI for real-time monitoring, delivering actionable insights and high-volume financial transactions.",
      "Developed Snowflake ELT workflows and dimensional models (star schema, fact and dimension tables) to support financial reporting, trend analysis, and executive KPI dashboards.",
      "Partnered with stakeholders through UAT sessions, requirements gathering, and workshops, while authoring data dictionaries, ETL documentation, and reporting standards to ensure alignment and maintainability."
    ],
    technologies: ["Azure Data Factory", "Databricks", "Delta Lake", "PySpark", "Power BI", "Snowflake"]
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
