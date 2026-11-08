'use client';

import React from 'react';
import { Eye, Terminal, Globe, Award, Database, Image as ImageIcon, ScanFace } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { motion } from 'framer-motion';

const PROJECTS_DATA = [
  {
    title: "Men's Hub | Premium E-Commerce Store",
    desc: "A production-ready men's fashion catalogue with responsive product discovery, WhatsApp ordering, and a private admin area for products and content.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com/mnoumanrasheed/mens-hub-store",
    liveUrl: "https://mens-hub-store.vercel.app/",
    previewType: "web",
    icon: <Globe size={24} />
  },
  {
    title: "Katko Corporate Website",
    desc: "A responsive corporate website presenting AI-powered solutions, healthcare technology, lead automation, and digital engineering services.",
    tech: ["React", "Vite", "GSAP", "Framer Motion"],
    github: "https://github.com/mnoumanrasheed/katko-website",
    liveUrl: "https://katko.co.za",
    previewType: "web",
    icon: <Globe size={24} />
  },
  {
    title: "NourDoc AI Healthcare Platform",
    desc: "A healthcare SaaS platform for ambient clinical intelligence, structured documentation, medical coding support, and enterprise workflows.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/mnoumanrasheed/nour-doc_new_version",
    liveUrl: "https://nour-doc.com",
    previewType: "web",
    icon: <Globe size={24} />
  },
  {
    title: "M3 Hive Corporate Website",
    desc: "A modern corporate website showcasing AI solutions, product engineering, automation, data analytics, and digital transformation services.",
    tech: ["React", "TypeScript", "Vite", "GSAP"],
    github: "https://github.com/mnoumanrasheed/M3hive",
    liveUrl: "https://m3hive.com",
    previewType: "web",
    icon: <Globe size={24} />
  },
  {
    title: "Noor Herbal Enterprises",
    desc: "A full-stack e-commerce platform with product management, cart and checkout workflows, secure admin management, and media handling.",
    tech: ["Next.js", "PostgreSQL", "NextAuth", "Cloudinary"],
    github: "https://github.com/mnoumanrasheed/noor-herbal-enterprises",
    previewType: "web",
    icon: <Database size={24} />
  },
  {
    title: "EV Consults Agency Portal",
    desc: "A premium business website for an EV consulting agency, detailing services, scheduling consultations, and interactive client resources.",
    tech: ["Next.js", "React", "TypeScript", "CSS Modules"],
    github: "https://github.com/mnoumanrasheed/evconsults-web",
    liveUrl: "https://evconsults.com/",
    previewType: "web",
    icon: <Globe size={24} />
  },
  {
    title: "LeadHive AI Website",
    desc: "An AI automation platform website for intelligent lead generation, digital automation, engagement tools, and interactive product experiences.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/mnoumanrasheed/leadhive-ai-web",
    liveUrl: "https://leadhive-ai-web.vercel.app",
    previewType: "web",
    icon: <Globe size={24} />
  },
  {
    title: "Dr. Ebbad Nazir Portfolio",
    desc: "A premium personal website with cinematic visual elements, interactive animations, refined typography, and a responsive professional presentation.",
    tech: ["Next.js", "React", "Three.js", "GSAP"],
    github: "https://github.com/mnoumanrasheed/dr.ebbad-profile",
    liveUrl: "https://dr-ebbad-profile.vercel.app",
    previewType: "web",
    icon: <Globe size={24} />
  },
  {
    title: "Atif I. Malik Executive Portfolio",
    desc: "A premium executive portfolio presenting leadership, strategic vision, professional achievements, and entrepreneurial ventures through refined interactions.",
    tech: ["React", "TypeScript", "Framer Motion", "GSAP"],
    github: "https://github.com/mnoumanrasheed/portfolio-atif-malik",
    liveUrl: "https://portfolio-atif-malik.vercel.app",
    previewType: "web",
    icon: <Award size={24} />
  },
  {
    title: "Aaqib Alvi Personal Portfolio",
    desc: "A responsive personal portfolio that presents professional experience through modern layouts, clear content structure, and interactive UI components.",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    github: "https://github.com/mnoumanrasheed/portfolio-aaqib-alvi",
    liveUrl: "https://portfolio-aaqib-alvi.vercel.app",
    previewType: "web",
    icon: <Globe size={24} />
  },
  {
    title: "NourDoc 2.0 Flutter Application",
    desc: "A mobile application UI implementation with polished authentication, patient management, consultations, clinical documentation, and navigation flows.",
    tech: ["Flutter", "Dart", "Modular Architecture"],
    github: "https://github.com/mnoumanrasheed/nourdoc-2.0-ui",
    previewType: "app",
    icon: <Terminal size={24} />
  },
  {
    title: "SmartFace | AI Attendance System",
    desc: "A desktop attendance system that recognizes students through a webcam, automates attendance tracking, and manages records through an intuitive interface.",
    tech: ["C#", ".NET Framework", "Windows Forms", "OpenCV / EmguCV", "Face Recognition"],
    github: "https://github.com/mnoumanrasheed/SmartFace-Attendance-System",
    previewType: "app",
    icon: <ScanFace size={24} />
  },
  {
    title: "Machine Learning Projects Collection",
    desc: "A collection of practical machine learning projects covering classification, regression, feature engineering, data analysis, and model evaluation.",
    tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
    github: "https://github.com/mnoumanrasheed/Machine-Learning-Projects",
    previewType: "ml",
    icon: <Award size={24} />
  },
  {
    title: "Image Processing Algorithms",
    desc: "A Python computer vision workflow practicing batch operations, edge detection operators, filtering matrices, and background subtractors.",
    tech: ["Python", "OpenCV", "NumPy", "Pillow"],
    github: "https://github.com/mnoumanrasheed/Image-Processing-fundamentals",
    previewType: "ml",
    icon: <ImageIcon size={24} />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section container" itemScope itemType="https://schema.org/ItemList">
      <meta itemProp="name" content="Featured Projects by Muhammad Nouman" />

      {/* Hidden SEO/AEO metadata indexing for semantic engines */}
      <div style={{ display: 'none' }}>
        {PROJECTS_DATA.map((project, idx) => (
          <div key={idx} itemProp="itemListElement" itemScope itemType="https://schema.org/SoftwareApplication">
            <meta itemProp="name" content={project.title} />
            <meta itemProp="description" content={project.desc} />
            <meta itemProp="applicationCategory" content={project.previewType === 'web' ? 'WebApplication' : 'DesktopApplication'} />
            <span itemProp="operatingSystem">Windows, Linux, Web</span>
            <div itemProp="author" itemScope itemType="https://schema.org/Person">
              <meta itemProp="name" content="Muhammad Nouman" />
            </div>
            {project.liveUrl && <link itemProp="url" href={project.liveUrl} />}
          </div>
        ))}
      </div>

      <h2 className="section-title">Featured Projects</h2>

      <motion.div
        className="projects-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: 0.08,
              staggerChildren: 0.12
            }
          }
        }}
      >
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={index}
            className="glass-panel project-card"
            variants={{
              hidden: { opacity: 0, y: 28, scale: 0.985 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            whileHover={{
              y: -7,
              scale: 1.006,
              transition: { type: "spring", stiffness: 320, damping: 26, mass: 0.7 }
            }}
            whileTap={{ scale: 0.995, transition: { duration: 0.12 } }}
          >
            <div className="project-icon">
              {project.icon}
            </div>

            <h3 className="project-title">{project.title}</h3>

            <p className="project-desc">{project.desc}</p>

            <div className="project-tech">
              {project.tech.map((t, idx) => (
                <span key={idx} className="tech-tag">{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                title="View Code on GitHub"
              >
                <GithubIcon style={{ width: 16, height: 16 }} />
                <span>GitHub Code</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  title="View Live Website"
                >
                  <Eye size={16} />
                  <span>Live Preview</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
