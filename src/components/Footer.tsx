"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUpRight,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const footerLinks = {
  services: [
    { label: 'Web Application', href: '/services/web-application' },
    { label: 'Mobile Application', href: '/services/mobile-application' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
    { label: 'Data Science/AI', href: '/services/data-science-ai' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Career', href: '/career' },
    { label: 'Contact', href: '/contact' },
    { label: 'Our Trainers', href: '/trainer/our-trainers' },
  ],
  programs: [
    { label: 'Ambassador Program', href: '/join/ambassador-program' },
    { label: 'Become a Trainer', href: '/trainer/apply' },
    { label: 'Data Ambassadors', href: '/join/data-ambassadors' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export const Footer = () => {
  return (
    <footer className="relative bg-[#001529] text-white overflow-hidden border-t border-white/5">
      {/* --- Moving Gradients (Kept exactly as your design) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-accent/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-500/10 blur-[100px] rounded-full" 
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        
        {/* CTA Section - Responsive Text */}
        <div className="py-12 md:py-24 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight leading-tight"
            >
              Ready to <span className="text-accent">Transform</span> Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base lg:text-lg text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Let&apos;s discuss how we can help you achieve your goals with data-driven solutions and cutting-edge technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button asChild className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 lg:px-10 lg:py-7 text-sm lg:text-base font-bold transition-all">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Started Today <ArrowUpRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 lg:px-10 lg:py-7 text-sm lg:text-base transition-all">
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Main Content Grid - Responsive Stacking */}
        <div className="py-12 md:py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-8">
          
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-6 md:space-y-8">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <Image src="/logo.png" alt="Logo" width={32} height={32} className="lg:w-10 lg:h-10" />
              <span className="font-display font-bold text-xl lg:text-2xl tracking-tighter">
                Data Experts <span className="text-accent">360</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm lg:text-base leading-relaxed max-w-md">
              Empowering businesses with data-driven solutions, innovative technology,
              and expert consulting services for sustainable growth.
            </p>

            <div className="pt-2">
              <h4 className="font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em] text-accent/80 mb-4">Newsletter</h4>
              <div className="flex max-w-sm gap-2 p-1 bg-white/5 border border-white/10 rounded-2xl">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent border-none text-xs lg:text-sm text-white focus-visible:ring-0 h-10 lg:h-12"
                />
                <Button size="icon" className="bg-accent hover:bg-accent/90 shrink-0 h-10 w-10 lg:h-12 lg:w-12 rounded-xl">
                  <Send className="w-4 lg:h-5 lg:w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Nav Links - Responsive Font Size */}
          <div className="space-y-6 lg:space-y-8">
            <h4 className="font-display font-bold text-lg lg:text-xl relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-6 h-1 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-3 lg:space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-accent transition-all text-sm lg:text-base block">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <h4 className="font-display font-bold text-lg lg:text-xl relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-6 h-1 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-3 lg:space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-accent transition-all text-sm lg:text-base block">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details - Responsive Cards */}
          <div className="space-y-6 lg:space-y-8">
            <h4 className="font-display font-bold text-lg lg:text-xl relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-6 h-1 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-4 lg:space-y-6">
              {[
                { icon: Mail, label: 'Email', val: 'info@dataexperts360.com' },
                { icon: Phone, label: 'Phone', val: '+1 (555) 123-4567' },
                { icon: MapPin, label: 'Office', val: 'Tech City, TC 12345' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 lg:gap-4 group">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-accent/50 transition-colors">
                    <item.icon className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[9px] lg:text-[10px] uppercase text-white/40 font-black tracking-widest">{item.label}</p>
                    <p className="text-white/70 text-xs lg:text-base truncate max-w-[180px] sm:max-w-none">{item.val}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Responsive Flex Direction */}
        <div className="py-8 lg:py-10 border-t border-white/10 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-3">
            <p className="text-xs lg:text-sm text-white/40">
              © {new Date().getFullYear()} Data Experts 360. All rights reserved.
            </p>
            <div className="flex gap-4 lg:gap-6 justify-center md:justify-start text-[10px] lg:text-xs text-white/30 uppercase tracking-[0.2em] font-bold">
              <Link href="#" className="hover:text-accent transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-accent transition-colors">Terms</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-3 lg:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-accent hover:bg-accent hover:text-[#001529] transition-all group"
              >
                <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};