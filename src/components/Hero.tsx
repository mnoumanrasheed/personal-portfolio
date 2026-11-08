'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, KaggleIcon } from '@/components/Icons';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Floating particle component
const Particle = ({ x, y, delay, size }: { x: number; y: number; delay: number; size: number }) => (
  <div
    className="hero-particle"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      animationDelay: `${delay}s`,
    }}
  />
);

const TYPING_TITLES = [
  "Software Engineering Student",
  "C#/.NET Developer",
  "Python Developer",
  "AI/Machine Learning Enthusiast"
];



export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse parallax for photo card
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    rotateX.set(-dy * 6);
    rotateY.set(dx * 6);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  // Typewriter
  useEffect(() => {
    const activeTitle = TYPING_TITLES[titleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(activeTitle.substring(0, displayText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(activeTitle.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === activeTitle) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TYPING_TITLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, typingSpeed]);


  // Pre-generate particles
  const particles = [
    { x: 10, y: 20, delay: 0, size: 3 }, { x: 25, y: 60, delay: 1.5, size: 2 },
    { x: 75, y: 15, delay: 0.7, size: 3 }, { x: 85, y: 75, delay: 2, size: 2 },
    { x: 50, y: 85, delay: 3, size: 2 }, { x: 15, y: 90, delay: 1, size: 3 },
    { x: 92, y: 40, delay: 2.5, size: 2 }, { x: 60, y: 45, delay: 0.3, size: 2 },
    { x: 35, y: 30, delay: 1.8, size: 3 }, { x: 70, y: 80, delay: 0.9, size: 2 },
  ];

  return (
    <section id="hero" className="hero-wrapper">
      {/* Cinematic background layer */}
      <div className="hero-bg-layer">
        <Image src="/hero-bg.png" alt="" fill style={{ objectFit: 'cover' }} priority quality={90} />
        <div className="hero-bg-overlay" />
      </div>

      {/* Animated orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Floating particles */}
      {particles.map((p, i) => <Particle key={i} {...p} />)}

      {/* Grid scanlines */}
      <div className="hero-scanlines" />

      <div className="container hero-inner-container">
        <div className="hero-grid">
          {/* LEFT: Text content */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="hero-welcome"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              console.log(&quot;Hello, World!&quot;);
            </motion.span>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              I am{' '}
              <span className="hero-name-gradient">
                MUHAMMAD<br />NOUMAN
              </span>
            </motion.h1>

            <motion.div
              className="hero-subtitle"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="hero-prompt-arrow">&gt;&nbsp;</span>
              <span className="hero-typed-text">{displayText}</span>
              <span className="hero-cursor-blink">|</span>
            </motion.div>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            >
              A results-driven Software Engineering student specializing in building
              high-quality desktop applications, dynamic responsive websites, and
              advanced image processing solutions. Turning complex problems into
              elegant, maintainable code.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            >
              <motion.a
                href="/cv.pdf"
                download="Muhammad_Nouman_CV.pdf"
                className="btn btn-primary btn-glow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} />
                Download CV
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Let&apos;s Connect
              </motion.a>
            </motion.div>

            <motion.div
              className="hero-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {[
                { href: "https://github.com/mnoumanrasheed", icon: <GithubIcon style={{ width: 20, height: 20 }} />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/muhammad-nouman-6ba6982b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <LinkedinIcon style={{ width: 20, height: 20 }} />, label: "LinkedIn" },
                { href: "https://www.kaggle.com/mnoumanrasheed", icon: <KaggleIcon style={{ width: 20, height: 20 }} />, label: "Kaggle" },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  title={label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  {icon}
                </motion.a>
              ))}

              {/* Status indicator */}
              <div className="hero-status">
                <span className="hero-status-dot" />
                <span>Open to Opportunities</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Profile photo & Revolving Orbits */}
          <motion.div
            className="hero-image-wrapper"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            style={{
              rotateX: springX,
              rotateY: springY,
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
          >
            {/* Revolving Orbiting System */}
            <div className="orbit-system-custom">
              <div className="orbit-ring-custom orbit-ring-custom-1">
                <div className="orbiting-body-custom body-cyan" />
              </div>
              <div className="orbit-ring-custom orbit-ring-custom-2">
                <div className="orbiting-body-custom body-purple" />
              </div>
              <div className="orbit-ring-custom orbit-ring-custom-3">
                <div className="orbiting-body-custom body-blue" />
              </div>
            </div>

            {/* Cinematic Cyber Frame */}
            <div className="cyber-frame-custom">
              <div className="cyber-corner-custom cyber-corner-tl-c" />
              <div className="cyber-corner-custom cyber-corner-tr-c" />
              <div className="cyber-corner-custom cyber-corner-bl-c" />
              <div className="cyber-corner-custom cyber-corner-br-c" />
              <div className="cyber-scanline-custom" />

              {/* Photo container with simple professional frame */}
              <div className="profile-photo-container-custom">
                <Image
                  src="/M.Nouman.png"
                  alt="Muhammad Nouman"
                  fill
                  priority
                  className="profile-img-professional"
                  sizes="(max-width: 768px) 260px, 340px"
                  style={{
                    objectFit: 'cover',
                    objectPosition: '50% 18%'
                  }}
                />
                <div className="profile-img-overlay" />
              </div>
            </div>

            {/* Floating Glass Status Badge */}
            <motion.div
              className="executive-status-badge"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <span className="status-badge-dot animate-pulse" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', boxShadow: '0 0 8px var(--primary-color)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <span className="badge-text-title">SYS: ACTIVE</span>
                <span className="badge-text-subtitle">AI & ML ENTHUSIAST</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <div className="hero-scroll-line" />
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
