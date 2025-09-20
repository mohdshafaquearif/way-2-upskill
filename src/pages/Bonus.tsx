
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Bonus = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 md:pt-28 pb-16 bg-accent">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Value Added Bonuses</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Enroll in our AI/ML program and get these exclusive bonuses completely free
          </p>
        </div>
      </div>
      
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Free Industry Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get access to valuable industry certifications to boost your resume and career prospects
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="overflow-hidden hover-card">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/17dc6950-05b4-433b-bf94-f1f88d5a8758.png" 
                  alt="IBM Certification" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">IBM AI/ML Certification</h3>
                <p className="text-muted-foreground">
                  Complete official IBM certification courses in AI fundamentals and machine learning
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover-card">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/8cbd9232-f593-4b1e-a312-034997327719.png" 
                  alt="DeepLearning.AI Certification" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">DeepLearning.AI Certification</h3>
                <p className="text-muted-foreground">
                  Access to Andrew Ng's specialized courses on deep learning and neural networks
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover-card">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/26487cc9-223b-42f9-8d54-0c959298f493.png" 
                  alt="AWS ML Certification" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">AWS Machine Learning</h3>
                <p className="text-muted-foreground">
                  Learn cloud-based machine learning deployment with industry-recognized AWS certification
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Additional Free Bonuses</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Coursera Premium Access</h3>
                <p className="text-muted-foreground">Free access to Coursera courses worth $399</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">LinkedIn Profile Optimization</h3>
                <p className="text-muted-foreground">Expert review and optimization of your LinkedIn profile</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Free API Access Training</h3>
                <p className="text-muted-foreground">Learn to use commercial APIs effectively without costs</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">LLM Models Workshop</h3>
                <p className="text-muted-foreground">Learn to leverage large language models for AI applications</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Canva Pro Subscription</h3>
                <p className="text-muted-foreground">Free Canva Pro access for creating professional AI visualizations</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">ChatGPT Prompt Engineering</h3>
                <p className="text-muted-foreground">Expert training on crafting effective prompts for AI models</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Portfolio Development</h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              You'll build more than 15 real-life projects that will be added to your GitHub portfolio by the end of the course.
              These projects demonstrate your skills to potential employers and clients.
            </p>
            <p className="text-muted-foreground mb-8">
              <strong>Note:</strong> If you choose to learn for just 1 month (5 weeks of material), 
              you still receive all these bonuses!
            </p>
            <Button asChild size="lg">
              <Link to="/enroll">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Total Value: Over $5,000</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            All these bonuses are included for free when you enroll in our Professional AI/ML 
            & Generative AI Career Accelerator program.
          </p>
          <Button asChild variant="outline" className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900">
            <Link to="/enroll">Get Started Today</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Bonus;
