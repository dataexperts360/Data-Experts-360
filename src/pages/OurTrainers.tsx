import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { GraduationCap, Linkedin, Twitter, Globe, ArrowRight } from 'lucide-react';

const trainers = [
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    role: 'AI & Machine Learning Expert',
    bio: 'Former Google AI researcher with 15+ years of experience in deep learning and neural networks.',
    expertise: ['Machine Learning', 'Deep Learning', 'Python'],
    avatar: 'SM',
  },
  {
    id: 2,
    name: 'James Rodriguez',
    role: 'Full-Stack Development Lead',
    bio: 'Ex-Amazon engineer specializing in scalable web architectures and cloud solutions.',
    expertise: ['React', 'Node.js', 'AWS'],
    avatar: 'JR',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Data Science Director',
    bio: 'Data science leader with experience at Fortune 500 companies, specializing in predictive analytics.',
    expertise: ['Data Analysis', 'Statistics', 'Visualization'],
    avatar: 'EC',
  },
  {
    id: 4,
    name: 'Michael Thompson',
    role: 'Project Management Expert',
    bio: 'PMP-certified project manager with 20+ years of experience delivering complex enterprise projects.',
    expertise: ['Agile', 'Scrum', 'Leadership'],
    avatar: 'MT',
  },
  {
    id: 5,
    name: 'Lisa Patel',
    role: 'Digital Marketing Strategist',
    bio: 'Former VP of Marketing at a leading tech startup, expert in growth hacking and brand strategy.',
    expertise: ['SEO', 'PPC', 'Content Strategy'],
    avatar: 'LP',
  },
  {
    id: 6,
    name: 'David Kim',
    role: 'Mobile Development Expert',
    bio: 'iOS and Android specialist who has launched 50+ apps with millions of downloads.',
    expertise: ['React Native', 'Swift', 'Kotlin'],
    avatar: 'DK',
  },
];

const OurTrainers = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                  <GraduationCap className="w-4 h-4" />
                  Expert Trainers
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Learn from the <span className="gradient-text">Best</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our trainers are industry veterans with proven track records at 
                  leading tech companies and organizations worldwide.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Trainers Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainers.map((trainer) => (
                <StaggerItem key={trainer.id}>
                  <div className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                    {/* Avatar */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-110 transition-transform">
                        {trainer.avatar}
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-semibold">{trainer.name}</h3>
                        <p className="text-accent text-sm">{trainer.role}</p>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {trainer.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {trainer.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2 pt-4 border-t border-border">
                      <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                        <Twitter className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                        <Globe className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* CTA */}
            <ScrollReveal delay={0.5}>
              <div className="mt-16 text-center">
                <p className="text-muted-foreground mb-4">
                  Want to share your expertise with others?
                </p>
                <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Link to="/trainer/apply" className="flex items-center gap-2">
                    Become a Trainer
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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

export default OurTrainers;
