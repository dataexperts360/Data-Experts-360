import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  index?: number;
}

export const ServiceCard = ({ icon: Icon, title, description, href, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link
        to={href}
        className="group block relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg overflow-hidden"
      >
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10">
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Learn More */}
          <div className="flex items-center gap-2 text-sm font-medium text-accent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            Learn More
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </Link>
    </motion.div>
  );
};
