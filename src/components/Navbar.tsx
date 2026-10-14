import { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FileDown, Menu, X, ArrowUpRight } from 'lucide-react';

interface Props {
  onOpenCvModal: () => void;
  onOpenDeployGuide: () => void;
}

export default function Navbar({ onOpenCvModal, onOpenDeployGuide }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navLinks.map(l => document.getElementById(l.id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#home" className="flex flex-col group">
          <span className="text-base font-bold text-slate-900 tracking-tight group-hover:text-slate-700 transition-colors">
            {PORTFOLIO_DATA.profile.name}
          </span>
          <span className="text-[11px] text-slate-500 font-medium">
            IPB University Economics Graduate · Finance & Accounting
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-600" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`py-1 transition-colors relative hover:text-slate-950 ${
                  isActive ? 'text-slate-950 font-semibold' : 'text-slate-600'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button & CV Download */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenDeployGuide}
            className="text-xs text-slate-500 hover:text-slate-800 font-medium underline underline-offset-4 decoration-slate-300"
          >
            Setup Guide
          </button>

          <button
            onClick={onOpenCvModal}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-2xs cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5 text-emerald-400" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCvModal}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg"
          >
            <FileDown className="w-3.5 h-3.5 text-emerald-400" />
            <span>CV</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'bg-slate-100 text-slate-900 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full py-2.5 bg-slate-900 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4 text-emerald-400" />
              <span>Download & View CV (PDF)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className="w-full py-2 text-slate-600 text-xs font-medium text-center"
            >
              Developer & Content Setup Guide
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
