import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, BarChart, Shield, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Skills",
    icon: Code,
    skills: [
      "Python (NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, Tensorflow)",
      "PySpark",
      "SQL (PostgreSQL)",
      "R, VBA, SAS",
      "Bash, Python, Lambda"
    ]
  },
  {
    title: "Databases/Technologies",
    icon: Database,
    skills: [
      "Apache Spark",
      "HDFS",
      "Hive",
      "Kafka",
      "Github (Actions)",
      "CI/CD",
      "MongoDB",
      "Airflow",
      "Hadoop",
      "AWS Glue"
    ]
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: [
      "Snowflake",
      "Redshift",
      "Azure Data Factory",
      "Databricks",
      "ADLS Gen 2",
      "Synapse",
      "AWS S3",
      "EMR,EC2",
      "RDS",
      "BigQuery"
    ]
  },
  {
    title: "Data Modeling & Warehousing",
    icon: BarChart,
    skills: [
      "Star & Snowflake Schema",
      "Dimensional Modeling",
      "DBT",
      "Medallion Architecture"
    ]
  },
  {
    title: "BI & Visualization",
    icon: BarChart,
    skills: [
      "Power BI",
      "Tableau",
      "Looker",
      "Excel (Pivot Tables, Power Query)"
    ]
  },
  {
    title: "Data Governance",
    icon: Shield,
    skills: [
      "Great Expectations",
      "Unity Catalog",
      "HIPAA Compliance",
      "FHIR/HL7 Standards"
    ]
  }
];

const coursework = [
  "Data Structures",
  "Applied Statistics",
  "Database Management",
  "Artificial Intelligence",
  "Python",
  "Java",
  "Project Management",
  "Cyber Security"
];

const Skills = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Technical <span className="bg-text-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the data engineering stack
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary-gradient">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent text-accent-foreground">
                <Settings className="w-5 h-5" />
              </div>
              <CardTitle className="text-xl font-bold">Education</CardTitle>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">Master's in Computer/Information Technology</h3>
              <p className="text-muted-foreground">Lindsey Wilson College • 2023 – 2025</p>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {coursework.slice(0, 6).map((course, i) => (
                <Badge 
                  key={i} 
                  variant="outline" 
                  className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-colors"
                >
                  {course}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;