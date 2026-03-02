"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Clock,
    MessageSquare,
    CheckCircle2
} from 'lucide-react';

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'info@dataexperts360.com', href: 'mailto:info@dataexperts360.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, label: 'Address', value: '123 Data Street, Tech City, TC 12345', href: '#' },
    { icon: Clock, label: 'Hours', value: 'Mon-Fri: 9:00 AM - 6:00 PM', href: '#' },
];

export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsLoading(false);
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-background">
            <AnimatedBackground />
            <Navbar />

            <main className="pt-20">
                {/* Hero */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <ScrollReveal>
                            <div className="max-w-3xl mx-auto text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                                    <MessageSquare className="w-4 h-4" />
                                    Get in Touch
                                </div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                                    Let's Start a <span className="gradient-text">Conversation</span>
                                </h1>
                                <p className="text-lg text-muted-foreground">
                                    Have a project in mind? We'd love to hear from you.
                                    Send us a message and we'll respond as soon as possible.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Contact Form & Info */}
                <section className="pb-20">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
                            {/* Contact Info */}
                            <div className="lg:col-span-2">
                                <ScrollReveal>
                                    <div className="space-y-6">
                                        <h2 className="text-2xl font-display font-bold mb-8">Contact Information</h2>

                                        {contactInfo.map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 group"
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                                    <item.icon className="w-5 h-5 text-accent" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-muted-foreground">{item.label}</p>
                                                    <p className="font-medium">{item.value}</p>
                                                </div>
                                            </a>
                                        ))}

                                        {/* Map placeholder */}
                                        <div className="mt-8 h-48 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-border">
                                            <MapPin className="w-8 h-8 text-accent" />
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>

                            {/* Contact Form */}
                            <div className="lg:col-span-3">
                                <ScrollReveal delay={0.2}>
                                    <div className="p-8 md:p-12 rounded-2xl bg-card border border-border">
                                        {isSubmitted ? (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="text-center py-12"
                                            >
                                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                                                    <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
                                                </div>
                                                <h3 className="text-2xl font-display font-bold mb-4">Message Sent!</h3>
                                                <p className="text-muted-foreground mb-6">
                                                    Thank you for reaching out. We'll get back to you within 24 hours.
                                                </p>
                                                <Button onClick={() => setIsSubmitted(false)}>
                                                    Send Another Message
                                                </Button>
                                            </motion.div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <h2 className="text-2xl font-display font-bold mb-6">Request a Proposal</h2>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Full Name *</label>
                                                        <Input
                                                            required
                                                            placeholder="John Doe"
                                                            value={formState.name}
                                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                                            className="bg-background"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Email Address *</label>
                                                        <Input
                                                            required
                                                            type="email"
                                                            placeholder="john@example.com"
                                                            value={formState.email}
                                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                            className="bg-background"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Company</label>
                                                        <Input
                                                            placeholder="Your Company"
                                                            value={formState.company}
                                                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                                            className="bg-background"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Phone Number</label>
                                                        <Input
                                                            type="tel"
                                                            placeholder="+1 (555) 123-4567"
                                                            value={formState.phone}
                                                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                                            className="bg-background"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Service of Interest</label>
                                                    <Input
                                                        placeholder="e.g., Web Application, Data Science/AI"
                                                        value={formState.service}
                                                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                                                        className="bg-background"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Message *</label>
                                                    <Textarea
                                                        required
                                                        placeholder="Tell us about your project..."
                                                        rows={5}
                                                        value={formState.message}
                                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                                        className="bg-background resize-none"
                                                    />
                                                </div>

                                                <Button
                                                    type="submit"
                                                    size="lg"
                                                    disabled={isLoading}
                                                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                                                >
                                                    {isLoading ? (
                                                        <motion.div
                                                            animate={{ rotate: 360 }}
                                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                            className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                                                        />
                                                    ) : (
                                                        <>
                                                            <Send className="w-4 h-4 mr-2" />
                                                            Send Message
                                                        </>
                                                    )}
                                                </Button>
                                            </form>
                                        )}
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
