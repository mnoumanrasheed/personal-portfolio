'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });

      // Auto-hide success message
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section container">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-grid">
        <motion.div
          className="contact-info-list"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Contact Details</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Interested in contributing to projects involving C#/.NET desktop applications, Next.js web development, Python, OpenCV, machine learning, and problem-solving based software systems.
            </p>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <Mail size={20} />
            </div>
            <div className="contact-info-content">
              <h5>Email Address</h5>
              <p><a href="mailto:noumanmuhammad479@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>noumanmuhammad479@gmail.com</a></p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <Phone size={20} />
            </div>
            <div className="contact-info-content">
              <h5>Phone Number</h5>
              <p><a href="tel:+923006798914" style={{ color: 'inherit', textDecoration: 'none' }}>+92 300 6798914</a></p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <MapPin size={20} />
            </div>
            <div className="contact-info-content">
              <h5>Office / Location</h5>
              <p>Bhalwal, Sargodha, Pakistan</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form className="glass-panel contact-form" onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                value={formState.subject}
                onChange={handleChange}
                required
                placeholder="Let's build something together"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message / Details</label>
              <textarea
                id="message"
                name="message"
                className="form-input"
                value={formState.message}
                onChange={handleChange}
                required
                placeholder="Write your project details here..."
              />
            </div>

            {submitted && (
              <div className="form-success-msg">
                <CheckCircle2 size={18} />
                <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              style={{ justifyContent: 'center', width: 'fit-content', marginTop: '0.5rem' }}
              disabled={isSubmitting}
            >
              <Send size={18} />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
