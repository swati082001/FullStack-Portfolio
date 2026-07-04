export const hero = {
  name: "Swati Mohanty",
  role: "Full Stack Developer",
  tagline: "Building systems that scale. Crafting experiences that matter.",
  cta: "Explore My Work",
};

export const about = {
  bio: "I’m a full-stack product engineer who builds SaaS products that make complex operations feel simple. From multi-tenant platforms and payment systems to real-time integrations and intuitive dashboards, I work across Node.js, TypeScript, React, and MongoDB to turn product workflows into reliable software.",
  traits: [
  "Product-Minded Engineer",
  "Workflow Automation Builder",
  "API & Integration Specialist"
  ],
  location: "Bengaluru, Karnataka, India",
  available: true,
  };
  
  

  export interface Skill {
    name: string;
    category: "frontend" | "backend" | "infra" | "tools";
    level: number; // 0-1
    }
    
    export const skills: Skill[] = [
    { name: "JavaScript (ES6+)", category: "frontend", level: 0.9 },
    { name: "TypeScript", category: "frontend", level: 0.9 },
    { name: "React.js", category: "frontend", level: 0.85 },
    { name: "Next.js", category: "frontend", level: 0.75 },
    { name: "Redux Toolkit", category: "frontend", level: 0.7 },
    { name: "Tailwind CSS", category: "frontend", level: 0.75 },
    { name: "Chakra UI", category: "frontend", level: 0.7 },
    
    { name: "Node.js", category: "backend", level: 0.9 },
    { name: "Express.js", category: "backend", level: 0.85 },
    { name: "Nest.js", category: "backend", level: 0.7 },
    { name: "REST APIs", category: "backend", level: 0.9 },
    { name: "MongoDB", category: "backend", level: 0.85 },
    { name: "MySQL", category: "backend", level: 0.75 },
    { name: "RBAC & Authentication", category: "backend", level: 0.85 },
    { name: "Webhooks & Integrations", category: "backend", level: 0.85 },
    
    { name: "AWS", category: "infra", level: 0.7 },
    { name: "Docker", category: "infra", level: 0.7 },
    { name: "CI/CD", category: "infra", level: 0.7 },
    { name: "GitHub Actions", category: "infra", level: 0.7 },
    { name: "Kubernetes", category: "infra", level: 0.45 },
    { name: "Vercel", category: "infra", level: 0.7 },
    
    { name: "Git", category: "tools", level: 0.9 },
    { name: "Postman", category: "tools", level: 0.85 },
    { name: "Swagger", category: "tools", level: 0.8 },
    { name: "Jira", category: "tools", level: 0.75 },
    { name: "Bitbucket", category: "tools", level: 0.7 },
    { name: "SOAP UI", category: "tools", level: 0.65 },
    ];
    

    export interface Project {
      title: string;
      description: string;
      tech: string[];
      github?: string;
      live?: string;
      highlight: string;
      }
      
      export const projects: Project[] = [
      {
      title: "HotelOps",
      description:
      "Multi-tenant hotel operations platform with modules for front desk, housekeeping, preventive maintenance, and asset management.",
      tech: [
      "Node.js",
      "TypeScript",
      "REST APIs",
      "MongoDB",
      "RBAC",
      "Google OAuth",
      "Background Jobs",
      ],
      // github: "https://github.com/swati082001",
      highlight: "4 core hospitality modules across multiple hotel properties",
      },
      {
      title: "Annotation Automation Application",
      description:
      "Enterprise document-annotation platform that automates FileNet XML-to-JSON transformation and integrates with OpenText Intelligent Viewer.",
      tech: [
      "Node.js",
      "TypeScript",
      "REST APIs",
      "XML",
      "FileNet",
      "OpenText xECM",
      "PDF Annotation APIs",
      ],
      // github: "https://github.com/swati082001",
      highlight: "Reduced manual data-processing effort by 60%",
      },
      {
      title: "Restaurant Order Integration Platform",
      description:
      "Real-time order ingestion pipeline connecting Swiggy and Zomato with multi-location restaurant operations.",
      tech: [
      "Node.js",
      "TypeScript",
      "REST APIs",
      "Webhooks",
      "Third-Party Integrations",
      ],
      // github: "https://github.com/swati082001",
      highlight: "Increased online order throughput by 50%",
      },
      ];
      
      export interface Experience {
      company: string;
      role: string;
      period: string;
      impact: string;
      type: "full-time" | "contract" | "intern";
      }
      
      export const experience: Experience[] = [
      {
      company: "ITProFound",
      role: "Full Stack Developer",
      period: "June 2025 – Present",
      impact:
      "Built multi-tenant SaaS products, payment workflows, and real-time integrations; supported 5K+ monthly payment transactions.",
      type: "full-time",
      },
      {
      company: "Reva Solutions",
      role: "Software Engineer",
      period: "August 2024 – June 2025",
      impact:
      "Automated enterprise document-processing workflows, reducing manual effort by 60% and improving operational efficiency by 40%.",
      type: "full-time",
      },
      {
      company: "Kalvium",
      role: "Technical Mentor",
      period: "May 2023 – June 2024",
      impact:
      "Mentored 30+ learners and led a 7-member engineering team across full-stack product builds and hackathons.",
      type: "full-time",
      },
      ];
      
      export interface OpenSourceContrib {
      repo: string;
      description: string;
      link: string;
      type: "PR" | "issue" | "maintainer";
      stars?: string;
      }
      
      export const openSource: OpenSourceContrib[] = [
        {
        repo: "Project-Nexus",
        description:
        "Resolved Issue #507 by replacing static feedback messages with toast notifications for success and error states, creating a more responsive and user-friendly interface.",
        link: "https://github.com",
        type: "PR",
        },
        {
        repo: "Zen-Note",
        description:
        "Resolved Issue #6 by integrating SweetAlert2 to replace default browser alerts with customizable, user-friendly notifications and clearer feedback messages.",
        link: "https://github.com",
        type: "PR",
        },
        ];
        
      
      export const contact = {
      headline: "Let’s build useful software",
      subline:
      "Open to full-stack and backend product engineering roles, SaaS platform work, and API integration projects.",
      github: "https://github.com/swati082001",
      linkedin: "https://www.linkedin.com/in/swati-mohanty08",
      email: "[swatisucharitamohanty1@gmail.com](mailto:swatisucharitamohanty1@gmail.com)",
      };
      