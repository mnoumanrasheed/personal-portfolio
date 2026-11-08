'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor section intersections to update active tab
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies center
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const navbarOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
          <img
            src="/nomi-transparent.png"
            alt=""
            className="logo-mark"
            width={42}
            height={42}
            style={{ width: 42, height: 42, minWidth: 42, maxWidth: 42 }}
          />
          <span className="logo-text">M .Nouman</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="nav-links" style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', font: 'inherit', padding: 0 }}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <div style={{ display: 'none' }} className="mobile-nav-toggle-wrapper">
          {/* Handled by standard css responsive displays */}
        </div>
        
        {/* Toggle Button for mobile */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} className="mobile-controls">
          <button 
            className="theme-toggle mobile-only-toggle" 
            onClick={toggleTheme}
            style={{ display: 'none' }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            className="mobile-nav-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="mobile-nav-links-panel"
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              width: '100%',
              background: 'var(--bg-color)',
              borderBottom: '1px solid var(--panel-border)',
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem 2rem',
              gap: '1.25rem',
              zIndex: 99
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === item.id ? 'var(--primary-color)' : 'var(--text-muted)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  textAlign: 'left',
                  padding: '8px 0',
                  cursor: 'pointer'
                }}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Styles for mobile override details */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .mobile-only-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
