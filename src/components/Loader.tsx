'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  "npm run start:portfolio",
  "> nouman-portfolio@3.99.0 start",
  "> next start",
  "",
  "ℹ [system] Initializing Muhammad Nouman’s portfolio...",
  "✔ [system] V8 / Next.js environment ready.",
  "ℹ [profile] Academic profile loaded. CGPA: 3.99.",
  "ℹ [stack] Activating C#/.NET, Python, React, OpenCV & ML...",
  "ℹ [projects] Preparing featured project showcase...",
  "✔ [loader] Portfolio ready. Status: EXCELLENT."
];

export default function Loader({ onComplete }: LoaderProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < BOOT_LOGS.length) {
        const currentIndex = logIndex;
        setLogs((prev) => [...prev, BOOT_LOGS[currentIndex]]);
        logIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 150);

    return () => clearInterval(logInterval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 500); // Allow fadeout animation to finish
          }, 600);
          return 100;
        }
        // Random increment
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="loader-wrapper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="loader-container">
            <div className="loader-header">
              <div className="loader-dot red" />
              <div className="loader-dot yellow" />
              <div className="loader-dot green" />
              <span className="loader-title">terminal@nouman-pc:~</span>
            </div>

            <div className="loader-terminal">
              {logs.map((log, index) => (
                <div
                  key={index}
                  style={{
                    color: typeof log === 'string' && log.startsWith('✔') ? 'var(--success-color)' : typeof log === 'string' && log.startsWith('↳') ? 'var(--text-muted)' : 'inherit',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '4px'
                  }}
                >
                  {log}
                </div>
              ))}

              <span className="animate-pulse">_</span>
            </div>

            <div className="loader-progress-bar">
              <div
                className="loader-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
              <span>LOADING SYSTEMS...</span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
