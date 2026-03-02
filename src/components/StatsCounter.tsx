"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Users, Briefcase, Globe2, Award, TrendingUp, Sparkles } from 'lucide-react';

interface Stat {
  icon: any;
  value: number;
  suffix: string;
  label: string;
  color: string;
  accent: string;
  path: string;
}

const stats: Stat[] = [
  { icon: Users, value: 500, suffix: '+', label: 'Happy Clients', color: '#0ea5e9', accent: '#e0f2fe', path: "M0 40 Q 20 45, 40 30 T 80 35 T 120 15 T 160 25 T 200 10" },
  { icon: Briefcase, value: 1200, suffix: '+', label: 'Projects', color: '#003366', accent: '#f0f9ff', path: "M0 35 Q 30 35, 60 20 T 100 25 T 150 5 T 200 15" },
  { icon: Globe2, value: 45, suffix: '+', label: 'Countries', color: '#22d3ee', accent: '#ecfeff', path: "M0 45 Q 40 40, 80 45 T 140 25 T 200 35" },
  { icon: Award, value: 98, suffix: '%', label: 'Success Rate', color: '#3b82f6', accent: '#eff6ff', path: "M0 40 L 40 35 L 80 40 L 120 15 L 160 20 L 200 5" },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else { setCount(Math.floor(start)); }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref} className="tabular-nums font-bold">{count.toLocaleString()}{suffix}</span>;
};

export const StatsCounter = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden ">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-slate-50 to-transparent opacity-50 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-24 gap-8">
          <div className="max-w-3xl">
    
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003366] via-blue-600 to-cyan-500">Global Data</span>, <br className="hidden md:block"/>
              Defined by <span className="italic font-serif font-light text-[#003366]">Excellence.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium text-base sm:text-lg max-w-sm lg:border-l lg:border-slate-200 lg:pl-10">
            Precision engineering paired with a commitment to client growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index }: { stat: Stat; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true });
  
  // Mouse Tilt Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={(e) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (rect) {
            x.set((e.clientX - rect.left) / rect.width - 0.5);
            y.set((e.clientY - rect.top) / rect.height - 0.5);
        }
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative group h-full"
    >
      {/* SHADOW CHANGE: 
        Added 'hover:-translate-y-2' for lift.
        Added 'hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]' for a deep modern shadow.
        Added 'hover:shadow-blue-500/5' for a very subtle color glow in the shadow.
      */}
      <div className="relative h-full bg-white p-7 md:p-9 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] hover:shadow-blue-900/5 hover:border-blue-100/50 flex flex-col">
        
        {/* --- ICON ORB --- */}
        <div className="flex justify-between items-start mb-10">
          <div className="relative group/icon">
            <div 
              className="absolute inset-0 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
              style={{ backgroundColor: stat.color }}
            />
            
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
              className="relative w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] bg-white border border-slate-100 shadow-xl flex items-center justify-center overflow-hidden"
            >
              <div 
                className="absolute inset-0 opacity-10"
                style={{ background: `radial-gradient(circle at 20% 20%, ${stat.color}, transparent)` }}
              />
              
              <stat.icon 
                size={28} 
                style={{ color: stat.color }} 
                className="relative z-10 filter drop-shadow-sm group-hover/icon:scale-110 transition-transform duration-300" 
              />
              
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                className="absolute top-0 h-full w-4 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12"
              />
            </motion.div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black border border-emerald-100/50">
            <TrendingUp size={12} />
            LIVE
          </div>
        </div>

        {/* --- DATA --- */}
        <div className="mb-8">
          <h3 className="text-4xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tighter mb-1.5">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </h3>
          <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.2em]">
            {stat.label}
          </p>
        </div>

        {/* --- GRAPH --- */}
        <div className="mt-auto relative h-16 w-full">
          <svg viewBox="0 0 200 50" className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id={`grad-${index}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={stat.color} stopOpacity="0.3" />
                <stop offset="100%" stopColor={stat.color} stopOpacity="0" />
              </linearGradient>
            </defs>
            
            <motion.path
              d={stat.path}
              fill="none"
              stroke={stat.color}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
              className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
            />
            
            <motion.path
              d={`${stat.path} L 200 50 L 0 50 Z`}
              fill={`url(#grad-${index})`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 1 }}
            />
          </svg>
        </div>

      </div>
    </motion.div>
  );
};