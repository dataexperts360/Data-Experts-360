"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "Data Experts 360 transformed our data infrastructure completely. Their AI solutions increased our efficiency by 40%.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Johnson",
    role: "CTO at TechVentures",
  },
  {
    text: "The team's expertise in digital marketing helped us reach new markets. Our ROI has tripled since partnering with them.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Michael Chen",
    role: "Marketing Director",
  },
  {
    text: "Their project management is top-notch. Every deliverable was on time, and the quality exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Emily Rodriguez",
    role: "VP of Operations",
  },
  {
    text: "The web application they built handles millions of transactions daily without a hitch. Truly enterprise-grade quality.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "David Park",
    role: "CEO at FinanceFlow",
  },
  {
    text: "Implementing their ERP solution was smooth and quick. The user-friendly interface made team training effortless.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved significantly with their user-friendly design and data insights.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, truly understanding our specific industry needs.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Our online presence and conversions improved drastically, boosting our overall business performance.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 md:gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={i}
                className="group relative p-6 md:p-8 rounded-[2rem] border border-slate-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-cyan-400/30 hover:-translate-y-1"
              >
                <Quote className="absolute top-4 right-6 w-8 h-8 text-slate-50 group-hover:text-cyan-500/10 transition-colors" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starI) => (
                    <Star key={starI} className="w-3 h-3 fill-cyan-500 text-cyan-500" />
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base font-medium">
                  "{text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={image}
                      alt={name}
                      className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-slate-50 object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-cyan-500 rounded-full border-2 border-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900 text-xs md:text-sm tracking-tight">{name}</span>
                    <span className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wider">{role}</span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Blueprint Grid Background - Cohesive with other components */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#001529 1px, transparent 1px), linear-gradient(90deg, #001529 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-400/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold tracking-[0.2em] text-cyan-600 uppercase bg-cyan-50 border border-cyan-100 rounded-full">
            Success Stories
          </div>
          
          {/* Main Website Gradient Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-6 leading-[1.1]">
            Trusted by the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001529] via-[#06b6d4] to-blue-600">World's Best</span> Innovators
          </h2>
          
          <p className="text-slate-500 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
            We partner with forward-thinking teams to turn complex data into competitive advantages.
          </p>
        </motion.div>

        {/* Responsive Marquee Grid */}
        <div className="flex justify-center gap-4 md:gap-8 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px] md:max-h-[750px] overflow-hidden">
          {/* Column 1 - Visible always */}
          <TestimonialsColumn 
            testimonials={firstColumn} 
            duration={30} 
            className="w-full max-w-[320px] md:max-w-[350px]"
          />
          
          {/* Column 2 - Visible from md up */}
          <TestimonialsColumn 
            testimonials={secondColumn} 
            duration={40} 
            className="hidden md:block w-full max-w-[350px]" 
          />
          
          {/* Column 3 - Visible from lg up */}
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            duration={35} 
            className="hidden lg:block w-full max-w-[350px]" 
          />
        </div>
      </div>
    </section>
  );
};

export { Testimonials as TestimonialSlider };