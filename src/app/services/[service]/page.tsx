"use client";

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    CheckCircle2,
    Globe,
    Smartphone,
    TrendingUp,
    FolderKanban,
    Leaf,
    Brain,
    ShieldCheck,
    TreePine,
    Code,
    Palette,
    Zap,
    Users,
    BarChart3,
    Lock
} from 'lucide-react';

interface ServiceData {
    icon: any;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    benefits: { icon: any; title: string; description: string }[];
    technologies: string[];
}

const servicesData: Record<string, ServiceData> = {
    'web-application': {
        icon: Globe,
        title: 'Web Application',
        subtitle: 'Custom Web Solutions',
        description: 'We build scalable, high-performance web applications tailored to your business needs. From complex enterprise systems to elegant customer-facing platforms, our solutions drive efficiency and growth.',
        features: [
            'Custom web application development',
            'Progressive Web Apps (PWAs)',
            'E-commerce platforms',
            'Enterprise resource planning (ERP)',
            'Content management systems',
            'API development & integration',
        ],
        benefits: [
            { icon: Zap, title: 'Lightning Fast', description: 'Optimized for speed and performance' },
            { icon: Lock, title: 'Secure', description: 'Enterprise-grade security measures' },
            { icon: Users, title: 'Scalable', description: 'Grows with your business needs' },
        ],
        technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    },
    'mobile-application': {
        icon: Smartphone,
        title: 'Mobile Application',
        subtitle: 'iOS & Android Development',
        description: 'Create stunning mobile experiences that engage users and drive business results. We specialize in both native and cross-platform development for iOS and Android.',
        features: [
            'Native iOS development (Swift)',
            'Native Android development (Kotlin)',
            'Cross-platform apps (React Native, Flutter)',
            'Mobile UI/UX design',
            'App store optimization',
            'Mobile app maintenance & support',
        ],
        benefits: [
            { icon: Palette, title: 'Beautiful Design', description: 'Intuitive and engaging interfaces' },
            { icon: Zap, title: 'High Performance', description: 'Smooth, responsive experiences' },
            { icon: BarChart3, title: 'Analytics', description: 'Built-in tracking and insights' },
        ],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    },
    'digital-marketing': {
        icon: TrendingUp,
        title: 'Digital Marketing',
        subtitle: 'Grow Your Brand Online',
        description: 'Data-driven marketing strategies that amplify your brand presence, engage your audience, and convert leads into loyal customers.',
        features: [
            'Search Engine Optimization (SEO)',
            'Pay-per-click advertising (PPC)',
            'Social media marketing',
            'Content marketing strategy',
            'Email marketing automation',
            'Analytics & reporting',
        ],
        benefits: [
            { icon: TrendingUp, title: 'Growth Focused', description: 'Strategies built for measurable results' },
            { icon: BarChart3, title: 'Data Driven', description: 'Decisions backed by analytics' },
            { icon: Users, title: 'Audience Targeting', description: 'Reach the right people' },
        ],
        technologies: ['Google Ads', 'Meta Ads', 'HubSpot', 'Mailchimp', 'Google Analytics', 'SEMrush'],
    },
    'project-management': {
        icon: FolderKanban,
        title: 'Project Management',
        subtitle: 'Deliver On Time, Every Time',
        description: 'Expert project management services ensuring your initiatives are delivered on time, within budget, and to the highest quality standards.',
        features: [
            'Agile project management',
            'Program & portfolio management',
            'Resource planning & allocation',
            'Risk management',
            'Stakeholder communication',
            'Quality assurance oversight',
        ],
        benefits: [
            { icon: CheckCircle2, title: 'On-Time Delivery', description: 'Meet deadlines consistently' },
            { icon: BarChart3, title: 'Budget Control', description: 'Stay within financial targets' },
            { icon: Users, title: 'Team Alignment', description: 'Keep everyone on the same page' },
        ],
        technologies: ['Jira', 'Asana', 'Monday.com', 'Microsoft Project', 'Confluence', 'Slack'],
    },
    'agri-business': {
        icon: Leaf,
        title: 'Agri-Business',
        subtitle: 'Agricultural Innovation',
        description: 'Leverage technology to revolutionize agricultural operations. From precision farming to supply chain optimization, we help agri-businesses thrive.',
        features: [
            'Precision agriculture solutions',
            'Farm management systems',
            'IoT sensor integration',
            'Supply chain optimization',
            'Crop yield prediction',
            'Sustainable farming practices',
        ],
        benefits: [
            { icon: TrendingUp, title: 'Increased Yield', description: 'Optimize production output' },
            { icon: Leaf, title: 'Sustainability', description: 'Environmentally conscious solutions' },
            { icon: BarChart3, title: 'Data Insights', description: 'Make informed decisions' },
        ],
        technologies: ['IoT Sensors', 'Drone Technology', 'GIS Mapping', 'Machine Learning', 'Cloud Computing', 'Mobile Apps'],
    },
    'data-science-ai': {
        icon: Brain,
        title: 'Data Science/AI',
        subtitle: 'Intelligent Solutions',
        description: 'Harness the power of artificial intelligence and machine learning to unlock insights, automate processes, and drive innovation.',
        features: [
            'Machine learning model development',
            'Natural language processing',
            'Computer vision solutions',
            'Predictive analytics',
            'Data pipeline engineering',
            'AI consulting & strategy',
        ],
        benefits: [
            { icon: Brain, title: 'Smart Automation', description: 'Automate complex decisions' },
            { icon: BarChart3, title: 'Predictive Power', description: 'Forecast trends accurately' },
            { icon: Zap, title: 'Efficiency Gains', description: 'Streamline operations' },
        ],
        technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Spark', 'Kubernetes'],
    },
    'quality-assurance': {
        icon: ShieldCheck,
        title: 'Quality Assurance',
        subtitle: 'Ensure Excellence',
        description: 'Comprehensive testing and QA services to ensure your software is reliable, performant, and ready for production.',
        features: [
            'Automated testing frameworks',
            'Performance testing',
            'Security testing',
            'Mobile app testing',
            'API testing',
            'Continuous integration testing',
        ],
        benefits: [
            { icon: ShieldCheck, title: 'Bug-Free Code', description: 'Catch issues before users do' },
            { icon: Zap, title: 'Performance', description: 'Ensure optimal speed' },
            { icon: Lock, title: 'Security', description: 'Identify vulnerabilities' },
        ],
        technologies: ['Selenium', 'Cypress', 'Jest', 'JMeter', 'Postman', 'OWASP Tools'],
    },
    'environmental-services': {
        icon: TreePine,
        title: 'Environmental Services',
        subtitle: 'Sustainable Solutions',
        description: 'Environmental monitoring, compliance, and sustainability solutions powered by modern technology and data analytics.',
        features: [
            'Environmental impact assessments',
            'Carbon footprint tracking',
            'Sustainability reporting',
            'Environmental compliance',
            'Resource optimization',
            'Green technology consulting',
        ],
        benefits: [
            { icon: TreePine, title: 'Eco-Friendly', description: 'Reduce environmental impact' },
            { icon: CheckCircle2, title: 'Compliance', description: 'Meet regulatory requirements' },
            { icon: BarChart3, title: 'Measurable Impact', description: 'Track sustainability goals' },
        ],
        technologies: ['IoT Monitoring', 'GIS Systems', 'Data Analytics', 'Cloud Platforms', 'AI/ML', 'Blockchain'],
    },
};

export default function ServicePage({ params }: { params: Promise<{ service: string }> }) {
    const { service: serviceKey } = use(params);
    const service = servicesData[serviceKey];

    if (!service) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Service not found</h1>
                    <Button asChild>
                        <Link href="/">Back to Home</Link>
                    </Button>
                </div>
            </div>
        );
    }

    const Icon = service.icon;

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
                            <div className="max-w-4xl">
                                {/* Breadcrumb */}
                                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                                    <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                                    <span>/</span>
                                    <Link href="/#services" className="hover:text-foreground transition-colors">Services</Link>
                                    <span>/</span>
                                    <span className="text-foreground">{service.title}</span>
                                </nav>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                        <Icon className="w-8 h-8 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <p className="text-accent font-medium">{service.subtitle}</p>
                                        <h1 className="text-4xl md:text-5xl font-display font-bold">{service.title}</h1>
                                    </div>
                                </div>

                                <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                                    {service.description}
                                </p>

                                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                                    <Link href="/contact" className="flex items-center gap-2">
                                        Get Started
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Features */}
                <section className="py-20 bg-secondary/30">
                    <div className="container mx-auto px-4">
                        <ScrollReveal>
                            <h2 className="text-3xl font-display font-bold mb-12 text-center">
                                What We <span className="gradient-text">Offer</span>
                            </h2>
                        </ScrollReveal>

                        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {service.features.map((feature) => (
                                <StaggerItem key={feature}>
                                    <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span className="text-foreground">{feature}</span>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <ScrollReveal>
                            <h2 className="text-3xl font-display font-bold mb-12 text-center">
                                Key <span className="gradient-text">Benefits</span>
                            </h2>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {service.benefits.map((benefit, index) => (
                                <ScrollReveal key={benefit.title} delay={index * 0.1}>
                                    <div className="text-center p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4">
                                            <benefit.icon className="w-8 h-8 text-accent" />
                                        </div>
                                        <h3 className="text-xl font-display font-semibold mb-2">{benefit.title}</h3>
                                        <p className="text-muted-foreground">{benefit.description}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technologies */}
                <section className="py-20 bg-secondary/30">
                    <div className="container mx-auto px-4">
                        <ScrollReveal>
                            <h2 className="text-3xl font-display font-bold mb-12 text-center">
                                Technologies We <span className="gradient-text">Use</span>
                            </h2>
                        </ScrollReveal>

                        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                            {service.technologies.map((tech, index) => (
                                <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="px-6 py-3 rounded-full bg-card border border-border hover:border-accent/50 transition-colors font-medium"
                                >
                                    {tech}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <ScrollReveal>
                            <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                                <h2 className="text-3xl font-display font-bold mb-4">
                                    Ready to Get Started?
                                </h2>
                                <p className="text-primary-foreground/80 mb-8">
                                    Let's discuss how our {service.title.toLowerCase()} services can help transform your business.
                                </p>
                                <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                                    <Link href="/contact">Contact Us Today</Link>
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
