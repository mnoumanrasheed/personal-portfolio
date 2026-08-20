'use client';

import React from 'react';
import { Network, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const EXPERIENCE_DATA = [
  {
    role: "Networking Intern",
    company: "Interstate Gas Systems, Islamabad",
    period: "Aug 2025 - Sep 2025",
    icon: <Network size={20} />,
    bulletPoints: [
      "Supported technical IT infrastructure teams in system operations, workflow mapping, and internal documentation.",
      "Gained practical exposure to corporate LAN environments, and server infrastructure layouts."
    ]
  },
  {
    role: "Educator",
    company: "School & Academy",
    period: "2022 - 2023",
    icon: <BookOpen size={20} />,
    bulletPoints: [
      "Delivered structured lessons across school and academy settings, adapting content to diverse student needs.",
      "Strengthened communication, public speaking, leadership, and classroom management capabilities."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section container" itemScope itemType="https://schema.org/Person">
      <h2 className="section-title">Professional Experience</h2>

      <div className="timeline">
        {EXPERIENCE_DATA.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            itemProp="hasOccupation"
            itemScope
            itemType="https://schema.org/Occupation"
          >
            <meta itemProp="name" content={exp.role} />
            <div className="timeline-dot" />

            <div className="glass-panel" style={{ padding: '2rem' }}>
              <div className="timeline-header">
                <h3 className="timeline-title">{exp.role}</h3>
                <span className="timeline-date">{exp.period}</span>
              </div>

              <div className="timeline-subtitle" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div itemScope itemType="https://schema.org/Organization" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--primary-color)' }}>{exp.icon}</span>
                  <span itemProp="name">{exp.company}</span>
                </div>
              </div>

              <ul style={{
                listStyleType: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '1rem'
              }}>
                {exp.bulletPoints.map((bp, bpIdx) => (
                  <li
                    key={bpIdx}
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-muted)',
                      lineHeight: '1.6',
                      display: 'flex',
                      gap: '10px'
                    }}
                  >
                    <span style={{ color: 'var(--primary-color)' }}>&gt;</span>
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
