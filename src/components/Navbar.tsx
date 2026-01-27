import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Briefcase, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Our Services',
    children: [
      { label: 'Web Application', href: '/services/web-application', description: 'Custom web solutions' },
      { label: 'Mobile Application', href: '/services/mobile-application', description: 'iOS & Android apps' },
      { label: 'Digital Marketing', href: '/services/digital-marketing', description: 'Grow your brand' },
      { label: 'Project Management', href: '/services/project-management', description: 'Deliver on time' },
      { label: 'Agri-Business', href: '/services/agri-business', description: 'Agricultural innovation' },
      { label: 'Data Science/AI', href: '/services/data-science-ai', description: 'Intelligent solutions' },
      { label: 'Quality Assurance', href: '/services/quality-assurance', description: 'Ensure excellence' },
      { label: 'Environmental Services', href: '/services/environmental-services', description: 'Sustainable solutions' },
    ],
  },
  {
    label: 'Join a Program',
    children: [
      { label: 'Ambassador Program', href: '/join/ambassador-program', description: 'Join our network' },
      { label: 'Become a Data Ambassador', href: '/join/become-data-ambassador', description: 'Apply now' },
      { label: 'Our Data Ambassadors', href: '/join/data-ambassadors', description: 'Meet the team' },
    ],
  },
  {
    label: 'Become a Trainer',
    children: [
      { label: 'Apply Now', href: '/trainer/apply', description: 'Start your journey' },
      { label: 'Our Trainers', href: '/trainer/our-trainers', description: 'Expert instructors' },
    ],
  },
  { label: 'Career', href: '/career' },
  { label: 'Contact Us', href: '/contact' },
];

const NavDropdown = ({ item, isActive }: { item: NavItem; isActive: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-secondary/80 ${
          isActive ? 'text-accent' : 'text-foreground'
        }`}
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-72 p-2 glass rounded-xl shadow-lg z-50"
          >
            <div className="grid gap-1">
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  to={child.href}
                  className="flex flex-col gap-1 px-4 py-3 rounded-lg hover:bg-secondary/80 transition-colors group"
                >
                  <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                    {child.label}
                  </span>
                  {child.description && (
                    <span className="text-xs text-muted-foreground">
                      {child.description}
                    </span>
                  )}
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href?: string) => href && location.pathname === href;
  const isChildActive = (children?: { href: string }[]) =>
    children?.some((child) => location.pathname === child.href);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">DE</span>
            </div>
            <span className="font-display font-bold text-xl hidden sm:block">
              Data Experts <span className="text-accent">360</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <NavDropdown
                  key={item.label}
                  item={item}
                  isActive={isChildActive(item.children) || false}
                />
              ) : (
                <Link
                  key={item.label}
                  to={item.href!}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-secondary/80 ${
                    isActive(item.href) ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild variant="default" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              <Link to="/contact" className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Request a Proposal
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary/80 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border/50 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenMobileDropdown(
                            openMobileDropdown === item.label ? null : item.label
                          )
                        }
                        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium hover:bg-secondary/80 rounded-lg transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openMobileDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openMobileDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 border-l border-border/50 pl-4"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href!}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-sm font-medium hover:bg-secondary/80 rounded-lg transition-colors ${
                        isActive(item.href) ? 'text-accent' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 px-4">
                <Button asChild className="w-full bg-gradient-to-r from-primary to-accent">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <Send className="w-4 h-4 mr-2" />
                    Request a Proposal
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
