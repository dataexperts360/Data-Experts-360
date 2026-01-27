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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Comprehensive <span className="gradient-text">Solutions</span> for Your Business
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From web development to AI-powered analytics, we offer a full spectrum of 
            services designed to accelerate your digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
