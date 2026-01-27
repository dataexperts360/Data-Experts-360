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

export const StrategySection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our <span className="gradient-text">4-Step Strategy</span> for Success
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that transforms your vision into reality 
            through systematic planning and execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary" style={{ transform: 'translateY(-50px)' }} />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 px-3 py-1 bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold rounded-full">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Dot */}
              <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-glow" style={{ top: 'calc(50% - 50px)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
