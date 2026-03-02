"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#020617]" />
});

const features = [
  'Enterprise Solutions',
  'AI-Powered Analytics',
  'Global Expertise',
  '24/7 Support',
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#020617]">
      {/* Three.js Layer */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-[#020617] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 pointer-events-none">
        <div className="max-w-5xl mx-auto text-center pointer-events-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold tracking-tight mb-8 text-white drop-shadow-[0_2px_8px_rgba(59,130,246,0.5)]"
          >
            Experience{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-cyan-300">
              Data-Driven
            </span>{' '}
            Mastery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We bridge the gap between complex data and actionable insights using next-gen AI architectures and enterprise-grade consulting.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                key={feature}
                className="flex items-center gap-2 text-xs md:text-sm text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-500 animate-pulse" />
                {feature}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-10 md:px-14 rounded-full h-12 md:h-14 font-semibold shadow-lg transition-all hover:brightness-110"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Start Exploring <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none" />
    </section>
  );
};
