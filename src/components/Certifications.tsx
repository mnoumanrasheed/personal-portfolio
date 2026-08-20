'use client';

import React from 'react';
import { Award, Sparkles, Volume2, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

const CERT_DATA = [
  {
    title: "Prompt Engineering Workshop Certificate",
    issuer: "University of Lahore, Sargodha Campus",
    desc: "Learned structured prompting, AI response optimization, and practical techniques for improving task-specific output quality.",
    icon: <Sparkles size={20} />
  },
  {
    title: "Enterprise Networking Internship",
    issuer: "Interstate Gas Systems, Islamabad (2025)",
    desc: "Assisted technical teams in workflow coordination, internal documentation, and troubleshooting-related support activities within a corporate IT environment.",
    icon: <Award size={20} />
  },
  {
    title: "Debate Competition Credentials",
    issuer: "School, College & University Levels",
    desc: "Earned multiple awards and certificates in public speaking, and event organization leadership roles.",
    icon: <Volume2 size={20} />
  }
];

const SOFT_SKILLS = [
  "Critical Thinking",
  "Team Collaboration",
  "Public Speaking",
  "Event Organization",
  "Technical Writing",
  "Teaching & Mentoring"
];

export default function Certifications() {
  return (
    <section id="certifications" className="section container">
      <h2 className="section-title">Credentials & Achievements</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <div className="certifications-grid">
          {CERT_DATA.map((cert, index) => (
            <motion.div
              key={index}
              className="glass-panel cert-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="cert-icon">
                {cert.icon}
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills & Languages Panels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2rem' }} className="cert-subgrid">
          <motion.div
            className="glass-panel"
            style={{ padding: '2rem' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={20} style={{ color: 'var(--primary-color)' }} /> Soft Skills Focus
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {SOFT_SKILLS.map((skill, index) => (
                <span
                  key={index}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '30px',
                    background: 'var(--panel-border)',
                    color: 'var(--text-color)',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    border: '1px solid var(--panel-border)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-panel"
            style={{ padding: '2rem' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Globe2 size={20} style={{ color: 'var(--primary-color)' }} /> Languages
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                <span style={{ fontWeight: '600' }}>English</span>
                <span style={{ color: 'var(--primary-color)' }}>Professional Working</span>
              </div>
              <div style={{ width: '100%', height: '4px', background: 'var(--panel-border)', borderRadius: '2px' }}>
                <div style={{ width: '85%', height: '100%', background: 'var(--primary-color)', borderRadius: '2px' }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', marginTop: '4px' }}>
                <span style={{ fontWeight: '600' }}>Urdu</span>
                <span style={{ color: 'var(--primary-color)' }}>Native / Bilingual</span>
              </div>
              <div style={{ width: '100%', height: '4px', background: 'var(--panel-border)', borderRadius: '2px' }}>
                <div style={{ width: '100%', height: '100%', background: 'var(--primary-color)', borderRadius: '2px' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .cert-subgrid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
