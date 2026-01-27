import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  Globe2, 
  Users, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  Rocket,
  Gift,
  TrendingUp
} from 'lucide-react';

const benefits = [
  { icon: Gift, title: 'Exclusive Rewards', description: 'Earn commission on every successful referral' },
  { icon: Star, title: 'VIP Access', description: 'Early access to new features and services' },
  { icon: Globe2, title: 'Global Network', description: 'Connect with professionals worldwide' },
  { icon: TrendingUp, title: 'Career Growth', description: 'Develop your professional network' },
];

const steps = [
  { step: '01', title: 'Apply', description: 'Fill out the application form with your details' },
  { step: '02', title: 'Get Approved', description: 'Our team reviews your application' },
  { step: '03', title: 'Start Referring', description: 'Share your unique referral link' },
  { step: '04', title: 'Earn Rewards', description: 'Get rewarded for successful referrals' },
];

const AmbassadorProgram = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  Ambassador Program
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Become a Data Experts <span className="gradient-text">Ambassador</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Join our exclusive ambassador program and earn rewards while helping 
                  businesses discover the power of data-driven solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    <Link to="/join/become-data-ambassador" className="flex items-center gap-2">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/join/data-ambassadors">Meet Our Ambassadors</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Program <span className="gradient-text">Benefits</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Enjoy exclusive perks and rewards as a Data Experts 360 Ambassador
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <div className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 text-center h-full">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  How It <span className="gradient-text">Works</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Getting started is easy. Follow these simple steps to become an ambassador.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <ScrollReveal key={step.step} delay={index * 0.1}>
                  <div className="relative text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                    
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent to-transparent" />
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <Rocket className="w-12 h-12 mx-auto mb-6" />
                <h2 className="text-3xl font-display font-bold mb-4">
                  Ready to Join?
                </h2>
                <p className="text-primary-foreground/80 mb-8">
                  Start your journey as a Data Experts 360 Ambassador today and unlock exclusive benefits.
                </p>
                <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link to="/join/become-data-ambassador">Apply Now</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AmbassadorProgram;
