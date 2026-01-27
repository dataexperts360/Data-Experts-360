import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Award, Linkedin, Twitter, MapPin, ArrowRight } from 'lucide-react';

const ambassadors = [
  {
    id: 1,
    name: 'Alexandra Williams',
    title: 'Tech Evangelist',
    location: 'San Francisco, USA',
    bio: 'Passionate about democratizing data literacy and helping startups leverage AI.',
    referrals: 45,
    avatar: 'AW',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    title: 'Business Development Lead',
    location: 'London, UK',
    bio: 'Connecting enterprises with innovative data solutions across Europe.',
    referrals: 38,
    avatar: 'MJ',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    title: 'Data Community Builder',
    location: 'Mumbai, India',
    bio: 'Building the largest data science community in South Asia.',
    referrals: 52,
    avatar: 'PS',
  },
  {
    id: 4,
    name: 'Carlos Mendez',
    title: 'Startup Advisor',
    location: 'São Paulo, Brazil',
    bio: 'Helping Latin American startups scale with data-driven strategies.',
    referrals: 31,
    avatar: 'CM',
  },
  {
    id: 5,
    name: 'Yuki Tanaka',
    title: 'Innovation Consultant',
    location: 'Tokyo, Japan',
    bio: 'Bridging traditional industries with modern data technologies in Asia-Pacific.',
    referrals: 29,
    avatar: 'YT',
  },
  {
    id: 6,
    name: 'Emma Schmidt',
    title: 'Enterprise Solutions Expert',
    location: 'Berlin, Germany',
    bio: 'Specializing in digital transformation for manufacturing companies.',
    referrals: 34,
    avatar: 'ES',
  },
];

const DataAmbassadors = () => {
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
                  <Award className="w-4 h-4" />
                  Our Ambassadors
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Meet Our <span className="gradient-text">Data Ambassadors</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our global network of ambassadors helps businesses discover the 
                  power of data-driven solutions worldwide.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Ambassadors Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ambassadors.map((ambassador) => (
                <StaggerItem key={ambassador.id}>
                  <div className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform">
                          {ambassador.avatar}
                        </div>
                        <div>
                          <h3 className="text-lg font-display font-semibold">{ambassador.name}</h3>
                          <p className="text-accent text-sm">{ambassador.title}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        <Award className="w-3 h-3" />
                        {ambassador.referrals}
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4" />
                      {ambassador.location}
                    </div>

                    {/* Bio */}
                    <p className="text-muted-foreground text-sm mb-4">
                      {ambassador.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-2 pt-4 border-t border-border">
                      <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                        <Twitter className="w-4 h-4" />
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
                  Want to join our global network?
                </p>
                <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Link to="/join/become-data-ambassador" className="flex items-center gap-2">
                    Become an Ambassador
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

export default DataAmbassadors;
