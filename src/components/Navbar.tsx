import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, Menu, X, Send, 
  Code, Smartphone, Globe, BarChart3, 
  Sprout, BrainCircuit, ShieldCheck, Leaf,
  UserPlus, Users, GraduationCap, ClipboardCheck,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string; icon: any }[];
}

const navItems: NavItem[] = [
  { label: 'About Us', href: '/about' },
  {
    label: 'Our Services',
    children: [
      { label: 'Web Application', href: '/services/web-application', description: 'Custom web solutions', icon: Code },
      { label: 'Mobile Application', href: '/services/mobile-application', description: 'iOS & Android apps', icon: Smartphone },
      { label: 'Digital Marketing', href: '/services/digital-marketing', description: 'Grow your brand', icon: Globe },
      { label: 'Project Management', href: '/services/project-management', description: 'Deliver on time', icon: BarChart3 },
      { label: 'Agri-Business', href: '/services/agri-business', description: 'Agricultural innovation', icon: Sprout },
      { label: 'Data Science/AI', href: '/services/data-science-ai', description: 'Intelligent solutions', icon: BrainCircuit },
      { label: 'Quality Assurance', href: '/services/quality-assurance', description: 'Ensure excellence', icon: ShieldCheck },
      { label: 'Environmental Services', href: '/services/environmental-services', description: 'Sustainable solutions', icon: Leaf },
    ],
  },
  {
    label: 'Join a Program',
    children: [
      { label: 'Ambassador Program', href: '/join/ambassador-program', description: 'Join our network', icon: Users },
      { label: 'Become a Data Ambassador', href: '/join/become-data-ambassador', description: 'Apply now', icon: UserPlus },
      { label: 'Our Data Ambassadors', href: '/join/data-ambassadors', description: 'Meet the team', icon: Users },
    ],
  },
  {
    label: 'Become a Trainer',
    children: [
      { label: 'Apply Now', href: '/trainer/apply', description: 'Start your journey', icon: GraduationCap },
      { label: 'Our Trainers', href: '/trainer/our-trainers', description: 'Expert instructors', icon: ClipboardCheck },
    ],
  },
  { label: 'Career', href: '/career' },
  { label: 'Contact Us', href: '/contact' },
];

// --- DESKTOP DROPDOWN ---
const DesktopDropdown = ({ item, isActive }: { item: NavItem; isActive: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const isServices = item.label === 'Our Services';

  const handleEnter = () => {
    hoverTimeout.current = setTimeout(() => setIsOpen(true), 80);
  };

  const handleLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className={cn(
          "relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all rounded-full outline-none",
          isOpen ? "text-primary bg-primary/5" : "text-foreground/70 hover:text-primary",
          isActive && "text-primary font-semibold"
        )}
      >
        {item.label}
        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ type: 'spring', damping: 24, stiffness: 220, mass: 0.6 }}
            className={cn(
              "absolute top-full left-0 mt-3 p-3 bg-white border border-border/50 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-50",
              isServices ? "w-[560px]" : "w-64"
            )}
          >
            <div className={cn("grid gap-1", isServices ? "grid-cols-2" : "grid-cols-1")}>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  to={child.href}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-secondary/60 group transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="p-2.5 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 text-primary group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all shadow-sm"
                  >
                    <child.icon className="w-4 h-4" />
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                      {child.label}
                    </span>
                    <span className="text-[11px] text-muted-foreground line-clamp-1 group-hover:text-foreground/70">
                      {child.description}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : 'unset';
  }, [isMobileOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] p-4 lg:p-6 flex justify-center">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full max-w-7xl bg-white/80 backdrop-blur-sm border border-white/40 shadow-xl rounded-[2.5rem] px-6 h-14 lg:h-19 flex items-center justify-between"
        >
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <motion.div
  animate={{ rotateY: 360 }}
  transition={{
    repeat: Infinity,
    duration: 20,
    ease: "linear",
  }}
  whileHover={{ rotateY: 0 }}
  className="w-10 h-10 flex items-center justify-center"
  style={{
    transformStyle: "preserve-3d",
    perspective: 800,
  }}
>
  <img
    src="logo.png"
    alt="Data Experts 360 Logo"
    className="w-7 h-7 object-contain drop-shadow-sm"
  />
</motion.div>

            <span className="font-bold text-xl tracking-tight hidden sm:block">
              Data Experts <span className="text-accent">360</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div
            className="hidden lg:flex items-center gap-1 relative"
            onMouseLeave={() => setHoveredTab(null)}
          >
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <DesktopDropdown
                    item={item}
                    isActive={item.children.some(c => location.pathname === c.href)}
                  />
                ) : (
                  <Link
                    to={item.href!}
                    onMouseEnter={() => setHoveredTab(item.label)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors rounded-full z-10 outline-none",
                      location.pathname === item.href ? "text-primary font-bold" : "text-foreground/70 hover:text-primary"
                    )}
                  >
                    {hoveredTab === item.label && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-primary/5 rounded-full -z-10 border border-primary/10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Button asChild className="rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-primary/40 shadow-lg transition-all active:scale-95 hover:-translate-y-0.5">
              <Link to="/contact" className="gap-2">
                <Send className="w-4 h-4" />
                Request a Proposal
              </Link>
            </Button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="lg:hidden p-3 rounded-3xl bg-secondary/50 text-primary hover:bg-secondary transition-all active:scale-90"
          >
            <Menu className="w-5 h-5" />
          </button>
        </motion.nav>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/20 backdrop-blur-md lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-2">
                 <img src="logo.png" alt="Data Experts 360 Logo" className="w-8 h-8" />
                  <span className="font-semibold text-sm">Menu</span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2.5 rounded-full bg-secondary/80 text-foreground hover:rotate-90 transition-transform"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {item.children ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                          className={cn(
                            "flex items-center justify-between w-full p-4 rounded-2xl font-semibold text-sm transition-all",
                            expandedItem === item.label ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-secondary/40"
                          )}
                        >
                          {item.label}
                          <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", expandedItem === item.label && "rotate-180")} />
                        </button>

                        <AnimatePresence>
                          {expandedItem === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden grid gap-2 pl-2"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  onClick={() => setIsMobileOpen(false)}
                                  className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/20 active:bg-secondary/40 transition-colors"
                                >
                                  <div className="p-2 rounded-xl bg-white text-primary shadow-sm">
                                    <child.icon className="w-5 h-5" />
                                  </div>
                                  <span className="text-[13px] font-semibold">{child.label}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href!}
                        onClick={() => setIsMobileOpen(false)}
                        className="flex items-center justify-between p-4 rounded-2xl bg-secondary/40 font-semibold text-sm active:scale-[0.98] transition-transform"
                      >
                        {item.label}
                        <ArrowRight className="w-4 h-4 opacity-30" />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <Button asChild className="w-full py-7 rounded-2xl text-base font-bold bg-gradient-to-r from-primary to-accent shadow-xl shadow-primary/30">
                  <Link to="/contact" onClick={() => setIsMobileOpen(false)} className="gap-2">
                    <Send className="w-5 h-5" />
                    Request Proposal
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
