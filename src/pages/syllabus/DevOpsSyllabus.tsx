import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WeekCard from '@/components/WeekCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const syllabusData = [
  {
    week: 1,
    title: "DevOps Fundamentals & Culture",
    objective: "Understand DevOps principles, culture, and the foundation of modern software delivery practices.",
    coreConcepts: [
      "DevOps Culture and Principles",
      "Agile and Lean Methodologies",
      "Software Development Lifecycle (SDLC)",
      "Linux Command Line Mastery",
      "Shell Scripting and Automation Basics"
    ],
    deliverables: [
      "Linux Server Setup and Configuration",
      "Bash Script Collection for Automation",
      "DevOps Assessment Report"
    ],
    salesHook: "Build the foundation that powers modern software delivery at companies like Netflix and Google.",
    projectImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176"
  },
  {
    week: 2,
    title: "Version Control & Collaboration with Git",
    objective: "Master Git workflows and collaboration strategies for team-based development.",
    coreConcepts: [
      "Git Fundamentals and Best Practices",
      "Branching Strategies (GitFlow, GitHub Flow)",
      "Merge Conflicts and Resolution",
      "GitHub/GitLab Advanced Features",
      "Code Review Processes"
    ],
    deliverables: [
      "Multi-branch Project Repository",
      "Git Workflow Documentation",
      "Automated Git Hooks Setup"
    ],
    salesHook: "Master the collaboration tools that every tech team depends on daily.",
    projectImage: "https://images.unsplash.com/photo-1556075798-4825dfaaf498"
  },
  {
    week: 3,
    title: "Containerization with Docker",
    objective: "Learn containerization concepts and master Docker for consistent application deployment.",
    coreConcepts: [
      "Container Fundamentals vs Virtual Machines",
      "Docker Images and Containers",
      "Dockerfile Best Practices",
      "Docker Compose for Multi-service Apps",
      "Container Registry and Image Management"
    ],
    deliverables: [
      "Dockerized Web Application",
      "Multi-container App with Docker Compose",
      "Custom Docker Images Repository"
    ],
    salesHook: "Package applications like modern companies do - consistently and reliably.",
    projectImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    week: 4,
    title: "Continuous Integration & Continuous Deployment",
    objective: "Implement CI/CD pipelines for automated testing and deployment.",
    coreConcepts: [
      "CI/CD Principles and Benefits",
      "GitHub Actions and GitLab CI",
      "Automated Testing in Pipelines",
      "Deployment Strategies (Blue-Green, Canary)",
      "Pipeline Security and Secrets Management"
    ],
    deliverables: [
      "Complete CI/CD Pipeline",
      "Automated Testing Suite Integration",
      "Multi-environment Deployment Setup"
    ],
    salesHook: "Automate deployments like tech giants - from code commit to production in minutes.",
    projectImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  },
  {
    week: 5,
    title: "Infrastructure as Code (IaC) with Terraform",
    objective: "Automate infrastructure provisioning and management using Infrastructure as Code principles.",
    coreConcepts: [
      "Infrastructure as Code Principles",
      "Terraform Fundamentals and HCL",
      "Resource Management and State Files",
      "Terraform Modules and Best Practices",
      "Multi-cloud Infrastructure Management"
    ],
    deliverables: [
      "AWS Infrastructure with Terraform",
      "Reusable Terraform Modules",
      "Infrastructure Automation Scripts"
    ],
    salesHook: "Manage infrastructure like code - scalable, version-controlled, and reproducible.",
    projectImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
  },
  {
    week: 6,
    title: "Cloud Platforms & Container Orchestration",
    objective: "Deploy and manage applications on cloud platforms with Kubernetes orchestration.",
    coreConcepts: [
      "AWS/Azure/GCP Core Services",
      "Kubernetes Architecture and Components",
      "Pod, Service, and Deployment Management",
      "Helm Charts for Package Management",
      "Kubernetes Networking and Storage"
    ],
    deliverables: [
      "Kubernetes Cluster Setup",
      "Microservices Deployment with K8s",
      "Helm Chart Repository"
    ],
    salesHook: "Orchestrate containers at scale like companies managing millions of users.",
    projectImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
  },
  {
    week: 7,
    title: "Monitoring, Logging & Observability",
    objective: "Implement comprehensive monitoring and observability solutions for production systems.",
    coreConcepts: [
      "Monitoring vs Observability",
      "Prometheus and Grafana Stack",
      "Centralized Logging with ELK Stack",
      "Application Performance Monitoring (APM)",
      "Alerting and Incident Response"
    ],
    deliverables: [
      "Complete Monitoring Dashboard",
      "Centralized Logging System",
      "Alerting and Notification Setup"
    ],
    salesHook: "Monitor systems like SREs at top tech companies - proactive, not reactive.",
    projectImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  },
  {
    week: 8,
    title: "Security & Compliance in DevOps",
    objective: "Integrate security practices throughout the DevOps pipeline (DevSecOps).",
    coreConcepts: [
      "DevSecOps Principles and Practices",
      "Security Scanning in CI/CD Pipelines",
      "Container Security and Image Scanning",
      "Secrets Management and Vault",
      "Compliance and Governance Automation"
    ],
    deliverables: [
      "Secure CI/CD Pipeline",
      "Security Scanning Integration",
      "Secrets Management Implementation"
    ],
    salesHook: "Build security into every step - the way modern enterprises protect their systems.",
    projectImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
  }
];

const DevOpsSyllabus = () => {
  const weekRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToWeek = (weekNumber: number) => {
    const index = weekNumber - 1;
    if (weekRefs.current[index]) {
      weekRefs.current[index]?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 md:pt-28 pb-16 bg-accent">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">DevOps Engineering</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Our comprehensive 8-week journey from DevOps fundamentals to advanced automation and orchestration, 
            with hands-on projects and industry best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/checkout/devops">Enroll Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Learning Journey</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              From DevOps basics to deploying AI systems, master the complete AI/ML stack used by leading tech companies.
            </p>
          </div>
          
          {/* Roadmap Journey Visual */}
          <div className="relative mb-16 hidden md:block">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/30 -translate-x-1/2"></div>
            
            {syllabusData.map((week, index) => (
              <div 
                key={week.week} 
                className={`relative mb-24 flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-10 h-10 rounded-full bg-primary absolute left-1/2 -translate-x-1/2 flex items-center justify-center text-white font-bold z-10`}>
                  {week.week}
                </div>
                <div className={`w-1/2 p-2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-2">{week.title}</h3>
                    <p className="mb-4 text-muted-foreground">{week.objective}</p>
                    <div className="flex justify-between items-center">
                      <span className="pill-tag">WEEK {week.week}</span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => scrollToWeek(week.week)}
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Week Cards */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {syllabusData.map((week, index) => (
              <div 
                key={week.week} 
                id={`week-${week.week}`}
                ref={el => weekRefs.current[week.week - 1] = el}
              >
                <WeekCard
                  week={week.week}
                  title={week.title}
                  objective={week.objective}
                  coreConcepts={week.coreConcepts}
                  deliverables={week.deliverables}
                  salesHook={week.salesHook}
                  projectImage={week.projectImage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 animated-gradient-bg text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Master DevOps?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our comprehensive DevOps program and learn the automation skills that power modern software delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/checkout/devops">Enroll Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900">
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DevOpsSyllabus;
