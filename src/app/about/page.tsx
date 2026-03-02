"use client";

import { motion } from 'framer-motion';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { Target, Eye, Lightbulb, Users, Award, Shield, Clock, Heart } from 'lucide-react';

const values = [
    { icon: Lightbulb, title: 'Innovation', description: 'Pushing boundaries with cutting-edge solutions' },
    { icon: Users, title: 'Collaboration', description: 'Working together to achieve greatness' },
    { icon: Award, title: 'Excellence', description: 'Committed to delivering the highest quality' },
    { icon: Shield, title: 'Integrity', description: 'Honest and transparent in all we do' },
    { icon: Clock, title: 'Reliability', description: 'Dependable partners you can count on' },
    { icon: Heart, title: 'Passion', description: 'Driven by our love for what we do' },
];

const timeline = [
    { year: '2018', title: 'Founded', description: 'Data Experts 360 was established with a vision to transform businesses through data.' },
    { year: '2019', title: 'First 100 Clients', description: 'Reached our first major milestone, serving clients across 10 countries.' },
    { year: '2020', title: 'AI Division Launch', description: 'Expanded our services to include cutting-edge AI and machine learning solutions.' },
    { year: '2021', title: 'Global Expansion', description: 'Opened offices in Europe and Asia, serving clients in 30+ countries.' },
    { year: '2022', title: 'Industry Recognition', description: 'Won multiple awards for innovation and customer satisfaction.' },
    { year: '2023', title: '500+ Clients', description: 'Celebrated serving over 500 enterprise clients worldwide.' },
];

export default function About() {
    return (
        <div className="min-h-screen bg-background">
            <AnimatedBackground />
            <Navbar />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-20 relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <ScrollReveal>
                            <div className="max-w-4xl mx-auto text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                                    About Us
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                                    Empowering Businesses Through{' '}
                                    <span className="gradient-text">Data Excellence</span>
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    We are a team of passionate experts dedicated to transforming
                                    businesses through innovative data solutions and cutting-edge technology.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20 bg-secondary/30">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8">
                            <ScrollReveal delay={0.1}>
                                <div className="p-8 md:p-12 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                                        <Target className="w-8 h-8 text-primary-foreground" />
                                    </div>
                                    <h2 className="text-2xl font-display font-bold mb-4">Our Mission</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        To democratize data expertise by providing accessible, innovative,
                                        and impactful solutions that empower organizations of all sizes to
                                        harness the full potential of their data for sustainable growth and success.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <div className="p-8 md:p-12 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-cyan-300 flex items-center justify-center mb-6">
                                        <Eye className="w-8 h-8 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-display font-bold mb-4">Our Vision</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        To be the global leader in data-driven transformation, recognized
                                        for our innovative approach, exceptional talent, and unwavering
                                        commitment to client success in an increasingly data-centric world.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                                    Our <span className="gradient-text">Core Values</span>
                                </h2>
                                <p className="text-muted-foreground max-w-2xl mx-auto">
                                    The principles that guide everything we do
                                </p>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {values.map((value) => (
                                <StaggerItem key={value.title}>
                                    <div className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg text-center">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                            <value.icon className="w-7 h-7 text-accent" />
                                        </div>
                                        <h3 className="font-display font-semibold mb-2">{value.title}</h3>
                                        <p className="text-sm text-muted-foreground">{value.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* Timeline */}
                <section className="py-20 bg-secondary/30">
                    <div className="container mx-auto px-4">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                                    Our <span className="gradient-text">Journey</span>
                                </h2>
                                <p className="text-muted-foreground max-w-2xl mx-auto">
                                    From humble beginnings to global impact
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="max-w-4xl mx-auto">
                            {timeline.map((item, index) => (
                                <ScrollReveal key={item.year} delay={index * 0.1}>
                                    <div className="flex gap-8 mb-8 last:mb-0">
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                                                {item.year}
                                            </div>
                                            {index < timeline.length - 1 && (
                                                <div className="w-0.5 h-full bg-gradient-to-b from-accent to-transparent mt-2" />
                                            )}
                                        </div>
                                        <div className="flex-1 pb-8">
                                            <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
