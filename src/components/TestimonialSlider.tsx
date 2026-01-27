import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Data Experts 360 transformed our data infrastructure completely. Their AI solutions increased our operational efficiency by 40% within the first quarter.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "TechVentures Inc.",
    avatar: "SJ",
  },
  {
    id: 2,
    content: "The team's expertise in digital marketing helped us reach new markets we never thought possible. Our ROI has tripled since partnering with them.",
    author: "Michael Chen",
    role: "Marketing Director",
    company: "GlobalReach Corp",
    avatar: "MC",
  },
  {
    id: 3,
    content: "Their project management methodology is top-notch. Every deliverable was on time, and the quality exceeded our expectations.",
    author: "Emily Rodriguez",
    role: "VP of Operations",
    company: "Innovation Labs",
    avatar: "ER",
  },
  {
    id: 4,
    content: "The web application they built for us handles millions of transactions daily without a hitch. Truly enterprise-grade quality.",
    author: "David Park",
    role: "CEO",
    company: "FinanceFlow",
    avatar: "DP",
  },
];

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders 
            have to say about working with Data Experts 360.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8 z-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <Quote className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12 pt-16 overflow-hidden min-h-[300px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="absolute inset-0 p-8 md:p-12 pt-16"
                >
                  {/* Content */}
                  <p className="text-lg md:text-xl leading-relaxed mb-8 text-foreground/90">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold text-lg">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="absolute bottom-8 right-8 flex items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={prev}
                  className="w-10 h-10 rounded-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={next}
                  className="w-10 h-10 rounded-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-accent'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
