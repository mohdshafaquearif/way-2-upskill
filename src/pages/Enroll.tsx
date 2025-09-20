
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle, CreditCard, Calendar, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { apiClient } from '@/integrations/api/client';

const paymentPlans = [
  {
    id: "full",
    name: "Full Payment",
    price: "$300",
    description: "One-time payment for the complete program",
    features: [
      "Full access to 8-week program",
      "All course materials and resources",
      "One-to-one mentorship",
      "Lifetime access to course updates",
      "Capstone project guidance",
      "Career support"
    ]
  },
  {
    id: "installment",
    name: "Installment Plan",
    price: "$300",
    description: "One-time payment for the complete program",
    features: [
      "Full access to 8-week program",
      "All course materials and resources",
      "One-to-one mentorship",
      "Lifetime access to course updates",
      "Capstone project guidance",
      "Career support"
    ]
  },
  {
    id: "seat",
    name: "Reserve Your Seat",
    price: "$25",
    description: "Secure your spot with a small deposit",
    features: [
      "Reserve your place in the next cohort",
      "Fully credited towards your tuition",
      "Risk-free cancellation policy",
      "Priority enrollment when full payment is made",
      "Course materials preview access"
    ]
  }
];

interface FormData {
  step: number;
  personal: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  background: {
    education: string;
    field: string;
    employmentStatus: string;
    programmingExperience: string;
    goals: string;
    linkedin: string;
    github: string;
  };
  payment: {
    plan: string;
    method: string;
  };
}

const Enroll = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(paymentPlans[0].id);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    step: 1,
    personal: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: ''
    },
    background: {
      education: '',
      field: '',
      employmentStatus: 'full-time',
      programmingExperience: 'beginner',
      goals: '',
      linkedin: '',
      github: ''
    },
    payment: {
      plan: 'full',
      method: 'card'
    }
  });

  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [id]: value
      }
    }));
  };

  const handleBackgroundChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      background: {
        ...prev.background,
        [id]: value
      }
    }));
  };

  const handleSelectChange = (field: string, value: string, step: 'personal' | 'background' | 'payment') => {
    setFormData(prev => ({
      ...prev,
      [step]: {
        ...prev[step],
        [field]: value
      }
    }));
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    setFormData(prev => ({ ...prev, step: currentStep + 1 }));
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    setFormData(prev => ({ ...prev, step: currentStep - 1 }));
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // For now, we'll use a placeholder course ID
      // In a real application, you'd get this from the course selection
      const courseId = '00000000-0000-0000-0000-000000000001'; // Default to first course
      
      const enrollment = await apiClient.createEnrollment({
        userId: '00000000-0000-0000-0000-000000000000', // Placeholder user ID
        courseId: courseId,
        firstName: formData.personal.firstName,
        lastName: formData.personal.lastName,
        email: formData.personal.email,
        phone: formData.personal.phone,
        address: formData.personal.address,
        city: formData.personal.city,
        state: formData.personal.state,
        zip: formData.personal.zip,
        country: formData.personal.country,
        education: formData.background.education,
        field: formData.background.field,
        employmentStatus: formData.background.employmentStatus,
        programmingExperience: formData.background.programmingExperience,
        goals: formData.background.goals,
        linkedin: formData.background.linkedin,
        github: formData.background.github,
        paymentPlan: selectedPlan,
        paymentMethod: formData.payment.method,
        totalAmount: selectedPlan === 'seat' ? 25 : 300
      });
      
      console.log('Enrollment submitted successfully:', data);
      
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you soon. Thank you for your interest in our program!",
      });
      
      // Simulate payment processing
      setTimeout(() => {
        toast({
          title: "Payment Processing",
          description: "Your payment details are being processed. You'll receive a confirmation email shortly.",
        });
      }, 1500);
      
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 md:pt-28 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Enroll Now</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Start your journey to becoming a tech expert. Complete the application process to secure your spot in our upcoming cohort.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      step < currentStep ? 'bg-primary text-white' : step === currentStep ? 'bg-primary/80 text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      {step < currentStep ? <CheckCircle size={20} /> : step}
                    </div>
                    <div className="text-sm font-medium">
                      {step === 1 ? 'Personal Info' : step === 2 ? 'Background & Goals' : 'Payment'}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                />
              </div>
            </div>
            
            {currentStep === 1 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          required 
                          value={formData.personal.firstName}
                          onChange={handlePersonalChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          required 
                          value={formData.personal.lastName}
                          onChange={handlePersonalChange}
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john.doe@example.com" 
                          required 
                          value={formData.personal.email}
                          onChange={handlePersonalChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                        <Input 
                          id="phone" 
                          placeholder="+1 (555) 123-4567" 
                          required 
                          value={formData.personal.phone}
                          onChange={handlePersonalChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="address" className="text-sm font-medium">Address</label>
                      <Input 
                        id="address" 
                        placeholder="123 Main St" 
                        required 
                        value={formData.personal.address}
                        onChange={handlePersonalChange}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="city" className="text-sm font-medium">City</label>
                        <Input 
                          id="city" 
                          placeholder="New York" 
                          required 
                          value={formData.personal.city}
                          onChange={handlePersonalChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="state" className="text-sm font-medium">State/Province</label>
                        <Input 
                          id="state" 
                          placeholder="NY" 
                          required 
                          value={formData.personal.state}
                          onChange={handlePersonalChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="zip" className="text-sm font-medium">ZIP/Postal Code</label>
                        <Input 
                          id="zip" 
                          placeholder="10001" 
                          required 
                          value={formData.personal.zip}
                          onChange={handlePersonalChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="country" className="text-sm font-medium">Country</label>
                      <Select 
                        onValueChange={(value) => handleSelectChange('country', value, 'personal')}
                        value={formData.personal.country}
                      >
                        <SelectTrigger id="country">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="in">India</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="pt-4">
                      <Button onClick={nextStep} className="w-full">
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
            
            {currentStep === 2 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Your Background & Goals</h2>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="education" className="text-sm font-medium">Highest Level of Education</label>
                      <Select
                        onValueChange={(value) => handleSelectChange('education', value, 'background')}
                        value={formData.background.education}
                      >
                        <SelectTrigger id="education">
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high-school">High School</SelectItem>
                          <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                          <SelectItem value="masters">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD or Doctorate</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="field" className="text-sm font-medium">Field of Study/Major</label>
                      <Input 
                        id="field" 
                        placeholder="e.g., Computer Science, Engineering, etc."
                        value={formData.background.field}
                        onChange={handleBackgroundChange} 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Current Employment Status</label>
                      <RadioGroup 
                        defaultValue="full-time"
                        value={formData.background.employmentStatus}
                        onValueChange={(value) => handleSelectChange('employmentStatus', value, 'background')}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="full-time" id="full-time" />
                          <Label htmlFor="full-time">Full-time employed</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="part-time" id="part-time" />
                          <Label htmlFor="part-time">Part-time employed</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="student" id="student" />
                          <Label htmlFor="student">Student</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unemployed" id="unemployed" />
                          <Label htmlFor="unemployed">Unemployed</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other-status" />
                          <Label htmlFor="other-status">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Programming Experience</label>
                      <RadioGroup 
                        defaultValue="beginner"
                        value={formData.background.programmingExperience}
                        onValueChange={(value) => handleSelectChange('programmingExperience', value, 'background')}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="none" id="none" />
                          <Label htmlFor="none">None</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="beginner" id="beginner" />
                          <Label htmlFor="beginner">Beginner (less than 1 year)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="intermediate" id="intermediate" />
                          <Label htmlFor="intermediate">Intermediate (1-3 years)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="advanced" id="advanced" />
                          <Label htmlFor="advanced">Advanced (3+ years)</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="goals" className="text-sm font-medium">What are your goals for taking this course?</label>
                      <Textarea 
                        id="goals" 
                        placeholder="Tell us what you hope to achieve with this program..."
                        rows={4}
                        value={formData.background.goals}
                        onChange={handleBackgroundChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="linkedin" className="text-sm font-medium">LinkedIn Profile (Optional)</label>
                      <Input 
                        id="linkedin" 
                        placeholder="https://linkedin.com/in/yourusername" 
                        value={formData.background.linkedin}
                        onChange={handleBackgroundChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="github" className="text-sm font-medium">GitHub Profile (Optional)</label>
                      <Input 
                        id="github" 
                        placeholder="https://github.com/yourusername" 
                        value={formData.background.github}
                        onChange={handleBackgroundChange}
                      />
                    </div>
                    
                    <div className="pt-4 flex justify-between">
                      <Button variant="outline" onClick={prevStep}>
                        Back
                      </Button>
                      <Button onClick={nextStep}>
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
            
            {currentStep === 3 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Select Payment Plan</h2>
                  
                  <div className="space-y-8">
                    <Tabs defaultValue="plans" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="plans">Payment Plans</TabsTrigger>
                        <TabsTrigger value="methods">Payment Methods</TabsTrigger>
                      </TabsList>
                      <TabsContent value="plans" className="pt-4">
                        <div className="space-y-4">
                          {paymentPlans.map((plan) => (
                            <div
                              key={plan.id}
                              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                                selectedPlan === plan.id ? 'border-primary bg-primary/5' : 'border-border'
                              }`}
                              onClick={() => setSelectedPlan(plan.id)}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="text-lg font-bold">{plan.name}</h3>
                                  <p className="text-muted-foreground">{plan.description}</p>
                                </div>
                                <div className="text-xl font-bold">{plan.price}</div>
                              </div>
                              
                              <ul className="mt-4 space-y-2">
                                {plan.features.map((feature, i) => (
                                  <li key={i} className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                                    <span className="text-sm">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="methods" className="pt-4">
                        <div className="space-y-4">
                          <div className="border rounded-lg p-4 cursor-pointer border-primary bg-primary/5">
                            <div className="flex items-center">
                              <CreditCard className="h-6 w-6 mr-3" />
                              <div>
                                <h3 className="font-medium">Credit/Debit Card</h3>
                                <p className="text-sm text-muted-foreground">Secure payment via Stripe</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="border rounded-lg p-4 cursor-pointer">
                            <div className="flex items-center">
                              <Calendar className="h-6 w-6 mr-3" />
                              <div>
                                <h3 className="font-medium">Bank Transfer</h3>
                                <p className="text-sm text-muted-foreground">Manual payment option</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                    
                    <div className="border-t pt-6">
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>{selectedPlan === 'full' ? '$300.00' : 
                                selectedPlan === 'installment' ? '$300.00' : '$25.00'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Taxes</span>
                          <span>$0.00</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span>{selectedPlan === 'full' ? '$300.00' : 
                                selectedPlan === 'installment' ? '$300.00' : '$25.00'}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-between">
                      <Button variant="outline" onClick={prevStep}>
                        Back
                      </Button>
                      <Button onClick={handleSubmit} disabled={isSubmitting}>
                        {isSubmitting ? 'Processing...' : 'Complete Enrollment'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Enroll With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our intensive programs offer unparalleled value with personalized mentorship and real-world projects across all tech domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">One-to-one Learning</h3>
                <p className="text-muted-foreground">
                  Personalized sessions scheduled at your convenience, with additional self-paced learning materials.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Industry Oriented</h3>
                <p className="text-muted-foreground">
                  Curriculum designed for real-world application with projects that reflect actual industry challenges.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Flexible Payment</h3>
                <p className="text-muted-foreground">
                  Multiple payment options including full payment, installments, or seat reservation.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/bonus">View Free Bonuses</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Enroll;
