'use client';

import React from 'react';
import { BookOpen, GraduationCap, Award, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const EDUCATION_DATA = [
  {
    degree: "BS Software Engineering",
    details: "6th Semester completed- In Progress",
    institution: "University of Lahore - Sargodha Campus",
    stat: "CGPA: 3.99 / 4.00",
    period: "2023 - 2027",
    icon: <GraduationCap size={24} />
  },
  {
    degree: "FSc Pre-Medical",
    institution: "Punjab Group of Colleges, Bhalwal",
    stat: "Marks: 78%",
    period: "2021 - 2023",
    icon: <BookOpen size={24} />
  },
  {
    degree: "Matriculation (Science)",
    institution: "Taleem-ul-Islam School, Bhalwal",
    stat: "Marks: 93%",
    period: "2020",
    icon: <Award size={24} />
  }
];

export default function About() {
  return (
    <section id="about" className="section container" itemScope itemType="https://schema.org/Person">
      <h2 className="section-title">About Me</h2>

      <div className="about-grid">
        <motion.div
          className="about-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--primary-color)' }}>
              <Compass size={24} />
              <h3 style={{ fontStyle: 'italic', fontSize: '1.2rem', fontFamily: 'var(--font-mono)' }}>{"// Mission Objective"}</h3>
            </div>
            <p style={{ lineHeight: '1.7', color: 'var(--text-muted)' }} itemProp="description">
              A results-driven Software Engineering student seeking to leverage expertise in C#/.NET, web development, Python/OpenCV, and AI/Machine Learning within a progressive organization.
            </p>
            <p style={{ lineHeight: '1.7', color: 'var(--text-muted)' }} itemProp="description">
              Committed to delivering high-quality software solutions through strong academic knowledge, hands-on project experience, and proven analytical and leadership skills.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1rem', borderTop: '1px solid var(--panel-border)', paddingTop: '1.5rem' }}>
              <div>
                <h4 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--primary-color)' }}>3.99</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Academic CGPA</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--primary-color)' }}>10+</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Projects Built</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--primary-color)' }}>6th</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Semester</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="education-timeline" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <GraduationCap style={{ color: 'var(--primary-color)' }} /> Education
          </h3>

          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {EDUCATION_DATA.map((edu, index) => (
              <motion.div
                key={index}
                className="glass-panel"
                style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}
                itemScope
                itemType="https://schema.org/EducationalOccupationalCredential"
                variants={{
                  hidden: { opacity: 0, x: 50, scale: 0.95 },
                  visible: { opacity: 1, x: 0, scale: 1 }
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '10px',
                  background: 'var(--primary-glow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-color)',
                  flexShrink: 0
                }}>
                  {edu.icon}
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700' }} itemProp="credentialCategory">{edu.degree}</h4>
                    <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-color)' }}>{edu.period}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '4px 0 8px 0' }} itemProp="recognizingOrganization" itemScope itemType="https://schema.org/EducationalOrganization">
                    <span itemProp="name">{edu.institution}</span>
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{edu.details}</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--success-color)', background: 'rgba(16, 185, 129, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                      {edu.stat}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
