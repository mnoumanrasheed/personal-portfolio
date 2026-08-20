'use client';

import React from 'react';
import { ExternalLink, Eye, Terminal, Globe, Award, Database, Image as ImageIcon } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { motion } from 'framer-motion';

const PROJECTS_DATA = [
  {
    title: "SmartFace Attendance System",
    desc: "A C# Windows Forms application that automates student attendance using local webcam-based facial detection, face training, and automatic logs.",
    tech: ["C#", "Windows Forms", "OpenCV (EmguCV)"],
    github: "https://github.com/mnoumanrasheed",
    previewType: "app",
    icon: <Terminal size={24} />
  },
  {
    title: "EV Consults Agency Portal",
    desc: "A premium business website for an EV consulting agency, detailing services, scheduling consultations, and interactive client resources.",
    tech: ["Next.js", "React", "TypeScript", "CSS Modules"],
    github: "https://github.com/mnoumanrasheed",
    liveUrl: "https://evconsults.com/",
    previewType: "web",
    icon: <Globe size={24} />
  },
  {
    title: "Al-Rasheed Super Store Landing",
    desc: "A highly responsive e-commerce storefront landing page featuring dynamic product showcase grids, optimized layout flow, and cart overlays.",
    tech: ["Next.js", "TypeScript", "Vanilla CSS", "Framer Motion"],
    github: "https://github.com/mnoumanrasheed",
    liveUrl: "https://al-rasheed-super-store.netlify.app/",
    previewType: "web",
    icon: <Globe size={24} />
  },
  {
    title: "Library Management System",
    desc: "A comprehensive desktop management solution for managing books, tracking student card issuing/returns, stock levels, and generating receipts.",
    tech: ["C#", ".NET Framework", "Windows Forms", "SQL Server"],
    github: "https://github.com/mnoumanrasheed",
    previewType: "app",
    icon: <Database size={24} />
  },
  {
    title: "Employee Payroll System",
    desc: "A secure C# desktop administrative panel calculating employee hourly salaries, tax bracket deductions, generating payslips, and exporting PDF reports.",
    tech: ["C#", ".NET Framework", "Windows Forms", "SQL Server"],
    github: "https://github.com/mnoumanrasheed",
    previewType: "app",
    icon: <Database size={24} />
  },
  {
    title: "Image Processing Algorithms",
    desc: "A Python computer vision workflow practicing batch operations, edge detection operators, filtering matrices, and background subtractors.",
    tech: ["Python", "OpenCV", "NumPy", "Pillow"],
    github: "https://github.com/mnoumanrasheed",
    kaggle: "https://www.kaggle.com/mnoumanrasheed",
    previewType: "ml",
    icon: <ImageIcon size={24} />
  },
  {
    title: "Iris Flower Species Classifier",
    desc: "A machine learning classification project utilizing Scikit-learn algorithms to inspect flower measurements and predict iris species accurately.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    github: "https://github.com/mnoumanrasheed",
    kaggle: "https://www.kaggle.com/mnoumanrasheed",
    previewType: "ml",
    icon: <Award size={24} />
  },
  {
    title: "Saira E-Commerce Expert",
    desc: "A professional e-commerce service portfolio designed to showcase digital business expertise, services, and client-focused solutions.",
    tech: ["Next.js", "React", "TypeScript", "Responsive UI"],
    github: "https://github.com/mnoumanrasheed",
    liveUrl: "https://sairaaashfaq.netlify.app/",
    previewType: "web",
    icon: <Globe size={24} />
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
              staggerChildren: 0.1
            }
          }
        }}
      >
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={index}
            className="glass-panel project-card"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)"
            }}
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

              {project.kaggle && (
                <a
                  href={project.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  title="View on Kaggle"
                >
                  <ExternalLink size={16} />
                  <span>Kaggle Notebook</span>
                </a>
              )}

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