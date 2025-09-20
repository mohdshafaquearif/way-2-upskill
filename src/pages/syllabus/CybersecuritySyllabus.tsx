
import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WeekCard from '@/components/WeekCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const syllabusData = [
  {
    week: 1,
    title: "Cybersecurity Fundamentals & Threat Landscape",
    objective: "Understand core cybersecurity concepts, threat actors, and the current security landscape.",
    coreConcepts: [
      "CIA Triad: Confidentiality, Integrity, Availability",
      "Threat Actors and Attack Vectors",
      "Risk Assessment and Management",
      "Security Frameworks (NIST, ISO 27001)",
      "Cybersecurity Career Paths and Certifications"
    ],
    deliverables: [
      "Threat Landscape Analysis Report",
      "Risk Assessment Framework",
      "Security Policy Template"
    ],
    salesHook: "Build the foundation that protects organizations from cyber threats worth billions in damages.",
    projectImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
  },
  {
    week: 2,
    title: "Network Security & Architecture",
    objective: "Master network protocols, security architectures, and defensive mechanisms.",
    coreConcepts: [
      "TCP/IP Protocol Suite and OSI Model",
      "Network Security Devices (Firewalls, IDS/IPS)",
      "VPNs and Secure Communication Protocols",
      "Network Segmentation and DMZ Design",
      "Wireless Security (WPA3, Enterprise WiFi)"
    ],
    deliverables: [
      "Network Security Architecture Design",
      "Firewall Configuration Lab",
      "Wireless Security Assessment"
    ],
    salesHook: "Protect the digital highways that connect our modern world.",
    projectImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
  }
  // ... add remaining weeks with similar structure
];

const CybersecuritySyllabus = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cybersecurity</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Our comprehensive 12-week journey from cybersecurity fundamentals to advanced threat detection, 
            with hands-on labs and real-world security scenarios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/checkout/cybersecurity">Enroll Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Master Cybersecurity?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our comprehensive cybersecurity program and build the skills needed to protect digital assets.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/checkout/cybersecurity">Enroll Now</Link>
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

export default CybersecuritySyllabus;
