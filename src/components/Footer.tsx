'use client';

import React from 'react';
import { GithubIcon, LinkedinIcon, KaggleIcon } from '@/components/Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-socials">
          <a 
            href="https://github.com/mnoumanrasheed" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-link"
            style={{ width: '40px', height: '40px' }}
            title="GitHub"
          >
            <GithubIcon style={{ width: 18, height: 18 }} />
          </a>
          <a 
            href="https://www.linkedin.com/in/muhammad-nouman-6ba6982b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-link"
            style={{ width: '40px', height: '40px' }}
            title="LinkedIn"
          >
            <LinkedinIcon style={{ width: 18, height: 18 }} />
          </a>
          <a 
            href="https://www.kaggle.com/mnoumanrasheed" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-link"
            style={{ width: '40px', height: '40px' }}
            title="Kaggle"
          >
            <KaggleIcon style={{ width: 18, height: 18 }} />
          </a>
        </div>
        
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} Muhammad Nouman. All rights reserved.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', marginTop: '8px' }}>
          Designed & Built with Next.js & Vanilla CSS
        </p>
      </div>
    </footer>
  );
}
