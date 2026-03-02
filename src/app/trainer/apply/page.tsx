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
    GraduationCap,
    CheckCircle2,
    ArrowRight,
    ArrowLeft,
    Send
} from 'lucide-react';

export default function TrainerApply() {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        expertise: '',
        experience: '',
        linkedin: '',
        portfolio: '',
        bio: '',
        motivation: '',
    });

    const totalSteps = 3;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitted(true);
    };

    const updateForm = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <div className="min-h-screen bg-background">
            <AnimatedBackground />
            <Navbar />

            <main className="pt-20">
                {/* Hero */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <ScrollReveal>
                            <div className="max-w-3xl mx-auto text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                                    <GraduationCap className="w-4 h-4" />
                                    Trainer Application
                                </div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                                    Become a <span className="gradient-text">Trainer</span>
                                </h1>
                                <p className="text-lg text-muted-foreground">
                                    Share your expertise and help shape the next generation of data professionals.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Application Form */}
                <section className="pb-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto">
                            <ScrollReveal>
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
                                            <h3 className="text-2xl font-display font-bold mb-4">Application Submitted!</h3>
                                            <p className="text-muted-foreground mb-6">
                                                Thank you for your interest in becoming a trainer.
                                                We'll review your application and get back to you within 5-7 business days.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <>
                                            {/* Progress Bar */}
                                            <div className="mb-8">
                                                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                                                    <span>Step {step} of {totalSteps}</span>
                                                    <span>{Math.round((step / totalSteps) * 100)}% Complete</span>
                                                </div>
                                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${(step / totalSteps) * 100}%` }}
                                                        className="h-full bg-gradient-to-r from-primary to-accent"
                                                    />
                                                </div>
                                            </div>

                                            <form onSubmit={handleSubmit}>
                                                {/* Step 1: Personal Info */}
                                                {step === 1 && (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="space-y-6"
                                                    >
                                                        <h2 className="text-xl font-display font-bold mb-6">Personal Information</h2>
                                                        <div className="grid md:grid-cols-2 gap-6">
                                                            <div className="space-y-2">
                                                                <label className="text-sm font-medium">First Name *</label>
                                                                <Input
                                                                    required
                                                                    placeholder="John"
                                                                    value={formData.firstName}
                                                                    onChange={(e) => updateForm('firstName', e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-sm font-medium">Last Name *</label>
                                                                <Input
                                                                    required
                                                                    placeholder="Doe"
                                                                    value={formData.lastName}
                                                                    onChange={(e) => updateForm('lastName', e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium">Email Address *</label>
                                                            <Input
                                                                required
                                                                type="email"
                                                                placeholder="john@example.com"
                                                                value={formData.email}
                                                                onChange={(e) => updateForm('email', e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium">Phone Number</label>
                                                            <Input
                                                                type="tel"
                                                                placeholder="+1 (555) 123-4567"
                                                                value={formData.phone}
                                                                onChange={(e) => updateForm('phone', e.target.value)}
                                                            />
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {/* Step 2: Experience */}
                                                {step === 2 && (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="space-y-6"
                                                    >
                                                        <h2 className="text-xl font-display font-bold mb-6">Experience & Expertise</h2>
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium">Area of Expertise *</label>
                                                            <Input
                                                                required
                                                                placeholder="e.g., Data Science, Machine Learning, Web Development"
                                                                value={formData.expertise}
                                                                onChange={(e) => updateForm('expertise', e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium">Years of Experience *</label>
                                                            <Input
                                                                required
                                                                placeholder="e.g., 5+ years"
                                                                value={formData.experience}
                                                                onChange={(e) => updateForm('experience', e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium">LinkedIn Profile</label>
                                                            <Input
                                                                type="url"
                                                                placeholder="https://linkedin.com/in/yourprofile"
                                                                value={formData.linkedin}
                                                                onChange={(e) => updateForm('linkedin', e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium">Portfolio/Website</label>
                                                            <Input
                                                                type="url"
                                                                placeholder="https://yourwebsite.com"
                                                                value={formData.portfolio}
                                                                onChange={(e) => updateForm('portfolio', e.target.value)}
                                                            />
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {/* Step 3: Bio & Motivation */}
                                                {step === 3 && (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="space-y-6"
                                                    >
                                                        <h2 className="text-xl font-display font-bold mb-6">About You</h2>
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium">Brief Bio *</label>
                                                            <Textarea
                                                                required
                                                                placeholder="Tell us about yourself and your background..."
                                                                rows={4}
                                                                value={formData.bio}
                                                                onChange={(e) => updateForm('bio', e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium">Why do you want to be a trainer? *</label>
                                                            <Textarea
                                                                required
                                                                placeholder="What motivates you to teach and share your knowledge..."
                                                                rows={4}
                                                                value={formData.motivation}
                                                                onChange={(e) => updateForm('motivation', e.target.value)}
                                                            />
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {/* Navigation Buttons */}
                                                <div className="flex justify-between mt-8 pt-6 border-t border-border">
                                                    {step > 1 ? (
                                                        <Button
                                                            type="button"
                                                            variant="outline"
                                                            onClick={() => setStep(step - 1)}
                                                        >
                                                            <ArrowLeft className="w-4 h-4 mr-2" />
                                                            Previous
                                                        </Button>
                                                    ) : (
                                                        <div />
                                                    )}

                                                    {step < totalSteps ? (
                                                        <Button
                                                            type="button"
                                                            onClick={() => setStep(step + 1)}
                                                            className="bg-gradient-to-r from-primary to-accent"
                                                        >
                                                            Next
                                                            <ArrowRight className="w-4 h-4 ml-2" />
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            type="submit"
                                                            className="bg-gradient-to-r from-primary to-accent"
                                                        >
                                                            <Send className="w-4 h-4 mr-2" />
                                                            Submit Application
                                                        </Button>
                                                    )}
                                                </div>
                                            </form>
                                        </>
                                    )}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
