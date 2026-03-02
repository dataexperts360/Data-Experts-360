"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import {
    Briefcase,
    MapPin,
    Clock,
    ArrowRight,
    CheckCircle2,
    Users,
    Rocket,
    Heart,
    GraduationCap
} from 'lucide-react';

const benefits = [
    { icon: Rocket, title: 'Career Growth', description: 'Clear progression paths and mentorship' },
    { icon: GraduationCap, title: 'Learning Budget', description: 'Annual budget for courses and certifications' },
    { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health insurance' },
    { icon: Users, title: 'Team Culture', description: 'Collaborative and inclusive environment' },
];

const openPositions = [
    {
        id: 1,
        title: 'Senior Full-Stack Developer',
        department: 'Engineering',
        location: 'Remote / Tech City',
        type: 'Full-time',
        description: 'Build and scale our enterprise web applications using modern technologies.',
    },
    {
        id: 2,
        title: 'Data Scientist',
        department: 'Data & AI',
        location: 'Remote / Tech City',
        type: 'Full-time',
        description: 'Develop machine learning models and extract insights from complex datasets.',
    },
    {
        id: 3,
        title: 'Product Designer',
        department: 'Design',
        location: 'Remote',
        type: 'Full-time',
        description: 'Create beautiful, intuitive user experiences for our products.',
    },
    {
        id: 4,
        title: 'Project Manager',
        department: 'Operations',
        location: 'Tech City',
        type: 'Full-time',
        description: 'Lead cross-functional teams to deliver complex projects on time.',
    },
    {
        id: 5,
        title: 'Digital Marketing Specialist',
        department: 'Marketing',
        location: 'Remote',
        type: 'Full-time',
        description: 'Drive our digital marketing campaigns and grow our brand presence.',
    },
];

export default function Career() {
    return (
        <div className="min-h-screen bg-background">
            <AnimatedBackground />
            <Navbar />

            <main className="pt-20">
                {/* Hero */}
                <section className="py-20 relative overflow-hidden">
                    <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

                    <div className="container mx-auto px-4 relative z-10">
                        <ScrollReveal>
                            <div className="max-w-4xl mx-auto text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                                    <Briefcase className="w-4 h-4" />
                                    Join Our Team
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                                    Build Your <span className="gradient-text">Future</span> With Us
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    Join a team of passionate experts dedicated to transforming businesses
                                    through innovative technology and data-driven solutions.
                                </p>
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
                                    Why Join <span className="gradient-text">Data Experts 360</span>?
                                </h2>
                                <p className="text-muted-foreground max-w-2xl mx-auto">
                                    We believe in investing in our people. Here's what you can expect when you join our team.
                                </p>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit) => (
                                <StaggerItem key={benefit.title}>
                                    <div className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 h-full">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <benefit.icon className="w-7 h-7 text-accent" />
                                        </div>
                                        <h3 className="text-xl font-display font-semibold mb-2">{benefit.title}</h3>
                                        <p className="text-muted-foreground">{benefit.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* Open Positions */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                                    Open <span className="gradient-text">Positions</span>
                                </h2>
                                <p className="text-muted-foreground max-w-2xl mx-auto">
                                    Find your next opportunity and make an impact with us.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="max-w-4xl mx-auto space-y-4">
                            {openPositions.map((position, index) => (
                                <ScrollReveal key={position.id} delay={index * 0.1}>
                                    <div className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-xl font-display font-semibold group-hover:text-accent transition-colors">
                                                        {position.title}
                                                    </h3>
                                                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                                                        {position.department}
                                                    </span>
                                                </div>
                                                <p className="text-muted-foreground text-sm mb-3">
                                                    {position.description}
                                                </p>
                                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="w-4 h-4" />
                                                        {position.location}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        {position.type}
                                                    </div>
                                                </div>
                                            </div>
                                            <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shrink-0">
                                                <Link href="/contact" className="flex items-center gap-2">
                                                    Apply Now
                                                    <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Don't see a role */}
                        <ScrollReveal delay={0.5}>
                            <div className="max-w-4xl mx-auto mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/20 text-center">
                                <h3 className="text-xl font-display font-semibold mb-3">
                                    Don't see a role that fits?
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    We're always looking for talented individuals. Send us your resume and let's talk.
                                </p>
                                <Button asChild variant="outline">
                                    <Link href="/contact">Get in Touch</Link>
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
