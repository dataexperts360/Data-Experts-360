"use client";

import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  TrendingUp,
  FolderKanban,
  Leaf,
  Brain,
  ShieldCheck,
  TreePine
} from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    icon: Globe,
    title: 'Web Application',
    description: 'Custom web solutions built with modern technologies for scalability and performance.',
    href: '/services/web-application',
  },
  {
    icon: Smartphone,
    title: 'Mobile Application',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    href: '/services/mobile-application',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that amplify your brand and drive conversions.',
    href: '/services/digital-marketing',
  },
  {
    icon: FolderKanban,
    title: 'Project Management',
    description: 'Expert project oversight ensuring on-time, on-budget delivery every time.',
    href: '/services/project-management',
  },
  {
    icon: Leaf,
    title: 'Agri-Business',
    description: 'Innovative agricultural solutions leveraging technology for sustainable farming.',
    href: '/services/agri-business',
  },
  {
    icon: Brain,
    title: 'Data Science/AI',
    description: 'Advanced analytics and AI solutions that transform raw data into actionable insights.',
    href: '/services/data-science-ai',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'Comprehensive testing services ensuring software reliability and excellence.',
    href: '/services/quality-assurance',
  },
  {
    icon: TreePine,
    title: 'Environmental Services',
    description: 'Sustainable solutions for environmental monitoring and compliance.',
    href: '/services/environmental-services',
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden ">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          

          {/* High-Impact Gradient Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]">
            Comprehensive <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003366] via-[#004d99] to-cyan-500">
              Solutions
            </span> for Your Business
          </h2>

          {/* Refined Subtext */}
          <p className="text-slate-500 max-w-2xl mx-auto text-md md:text-xl leading-relaxed">
            From web development to AI-powered analytics, we offer a full spectrum of
            services designed to accelerate your digital transformation.
          </p>

          {/* Modern Accent Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1.5 bg-gradient-to-r from-[#003366] to-cyan-400 mx-auto mt-10 rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.href}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};