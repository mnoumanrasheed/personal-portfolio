'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Loader({ onComplete }: LoaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isReady, setIsReady] = useState(false);
  const [minimumDisplayComplete, setMinimumDisplayComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const canComplete = isReady && minimumDisplayComplete;

  useEffect(() => {
    const markReady = () => setIsReady(true);

    if (document.readyState === 'complete') {
      markReady();
      return;
    }

    window.addEventListener('load', markReady, { once: true });
    return () => window.removeEventListener('load', markReady);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(
      () => setMinimumDisplayComplete(true),
      shouldReduceMotion ? 0 : 1150
    );

    return () => window.clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence mode="wait" onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="loader-wrapper"
          role="status"
          aria-live="polite"
          aria-label="Loading Muhammad Nouman's portfolio"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.38, ease: EASE }}
        >
          <div className="loader-content">
            <motion.p
              className="loader-monogram"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.62, ease: EASE }}
            >
              MN.
            </motion.p>

            <motion.div
              className="loader-accent-line"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.56, delay: shouldReduceMotion ? 0 : 0.18, ease: EASE }}
            />

            <motion.div
              className="loader-branding"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delayChildren: shouldReduceMotion ? 0 : 0.3,
                    staggerChildren: shouldReduceMotion ? 0 : 0.1
                  }
                }
              }}
            >
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 8 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.46, ease: EASE }}
              >
                Muhammad Nouman
              </motion.h1>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 8 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.46, ease: EASE }}
              >
                Web Developer &amp; ML Enthusiast
              </motion.p>
            </motion.div>

            <div className="loader-progress" aria-hidden="true">
              <motion.div
                className="loader-progress-fill"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: canComplete ? 1 : 0.86 }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : canComplete ? 0.38 : 1.08,
                  delay: shouldReduceMotion ? 0 : 0.28,
                  ease: EASE
                }}
                onAnimationComplete={() => {
                  if (canComplete) setIsVisible(false);
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
