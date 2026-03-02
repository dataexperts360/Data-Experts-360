"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Rocket, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discover',
    description: 'We analyze your business needs, challenges, and goals to understand your unique requirements.',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Strategize',
    description: 'Our experts craft a tailored roadmap with clear milestones and measurable objectives.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Execute',
    description: 'We implement solutions using agile methodologies, ensuring flexibility and rapid delivery.',
  },
  {
    icon: BarChart3,
    step: '04',
    title: 'Optimize',
    description: 'Continuous monitoring and optimization ensure sustained growth and maximum ROI.',
  },
];

export function StrategySection() {
  // Deep Blue Color Variable
  const deepBlue = "#1e3a8a"; 

  return (
    <section className="py-16 md:py-24 relative overflow-hidden  text-slate-900">
      {/* Background Pattern - Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(90deg, #000 1px, transparent 1px),
                             linear-gradient(#000 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
         
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight text-slate-900">
            A Proven <span className="gradient-text">Methodology</span> for Success
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We follow a systematic approach to transform your vision into a scalable 
            digital reality, ensuring every milestone drives growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative">
          {/* Connection Line - Inset Deep Track */}
          <div 
            className="hidden lg:block absolute top-[115px] left-0 right-0 h-[6px] bg-[#e6e9ee] rounded-full shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]" 
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Neumorphic Card with Deep Blue Accents */}
              <div className="relative h-full bg-white rounded-[2.5rem] p-8 transition-all duration-500 
                shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff]
                hover:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]
                z-20 border border-white/40"
              >
                {/* Icon Box - Neumorphic Pop */}
                <div className="relative w-16 h-16 rounded-2xl bg-[#f0f2f5] flex items-center justify-center mb-8 
                  shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] 
                  group-hover:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]
                  transition-all duration-500"
                >
                  <step.icon className="w-8 h-8 text-[#1e3a8a] relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Step Number Badge */}
                <div className="inline-block px-3 py-1 mb-4 rounded-lg bg-[#f0f2f5] text-[10px] font-black text-[#1e3a8a] shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]">
                  STEP {step.step}
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold mb-3 text-slate-800 group-hover:text-[#1e3a8a] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm md:text-[15px] text-slate-500 leading-relaxed font-medium">
                  {step.description}
                </p>

                {/* Neumorphic Progress Track */}
                <div className="mt-8 pt-6 border-t border-slate-200/50">
                   <div className="relative w-full h-2 bg-[#f0f2f5] rounded-full shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="absolute top-0 left-0 h-full bg-[#1e3a8a] rounded-full opacity-80 shadow-[0_0_8px_rgba(30,58,138,0.3)]"
                      />
                   </div>
                </div>
              </div>

              {/* Decorative Connector Dot */}
              <div 
                className="hidden lg:block absolute top-[115px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#f0f2f5] shadow-[3px_3px_6px_#d1d9e6,-3px_-3px_6px_#ffffff] z-30" 
              >
                 <div className="absolute inset-1.5 rounded-full bg-[#1e3a8a] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_rgba(30,58,138,0.4)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}