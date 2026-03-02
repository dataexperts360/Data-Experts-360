import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  index?: number;
}

export const ServiceCard = ({ icon: Icon, title, description, href, index = 0 }: ServiceCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      className="group relative h-full"
    >
      <Link
        href={href}
        className="block relative h-full p-8 rounded-[2.5rem] bg-white border border-slate-100/50 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,51,102,0.15)] hover:-translate-y-4 overflow-hidden flex flex-col"
      >
        {/* Top Branding Accent Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#003366] via-blue-500 to-cyan-400 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover Spotlight Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-300"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                450px circle at ${mouseX}px ${mouseY}px,
                rgba(0, 51, 102, 0.05),
                transparent 80%
              )
            `,
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Prominent Icon Box */}
          <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#003366] group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500 shadow-inner">
            <Icon className="w-8 h-8 text-[#003366] group-hover:text-white transition-colors duration-500" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-[#003366] transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
            {description}
          </p>

          {/* Detailed CTA */}
          <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#003366] transition-colors">
              Service Details
            </span>
            <div className="w-8 h-8 text-primary rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-white transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
