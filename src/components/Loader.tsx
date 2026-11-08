'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;
const NETWORK_PATHS = [
  'M 58 240 L 158 240 L 220 184 L 320 184',
  'M 58 240 L 158 240 L 220 296 L 320 296',
  'M 582 240 L 482 240 L 420 184 L 320 184',
  'M 582 240 L 482 240 L 420 296 L 320 296',
  'M 184 76 L 184 138 L 244 198',
  'M 456 76 L 456 138 L 396 198',
  'M 184 404 L 184 342 L 244 282',
  'M 456 404 L 456 342 L 396 282'
];
const NETWORK_NODES = [
  [58, 240], [158, 240], [184, 76], [184, 404],
  [244, 198], [244, 282], [396, 198], [396, 282],
  [456, 76], [456, 404], [482, 240], [582, 240]
];
const DATA_STREAMS = [
  { x: [58, 158, 220, 320], y: [240, 240, 184, 184], delay: 0 },
  { x: [582, 482, 420, 320], y: [240, 240, 296, 296], delay: 0.7 },
  { x: [184, 184, 244], y: [76, 138, 198], delay: 1.25 },
  { x: [456, 456, 396], y: [404, 342, 282], delay: 1.7 }
];

export default function Loader({ onComplete }: LoaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isReady, setIsReady] = useState(false);
  const [minimumDisplayComplete, setMinimumDisplayComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const canComplete = isReady && minimumDisplayComplete;
  const status = canComplete ? 'READY' : isReady ? 'PREPARING EXPERIENCE' : 'INITIALIZING INTERFACE';

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
    const timer = window.setTimeout(() => setMinimumDisplayComplete(true), shouldReduceMotion ? 0 : 1150);
    return () => window.clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence mode="wait" onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="loader-wrapper"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          aria-label={"Loading Muhammad Nouman's portfolio: " + status}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.42, ease: EASE }}
        >
          <div className="loader-grid" aria-hidden="true" />
          <div className="loader-scanline" aria-hidden="true" />
          <div className="loader-ambient loader-ambient-one" aria-hidden="true" />
          <div className="loader-ambient loader-ambient-two" aria-hidden="true" />

          <motion.svg className="loader-network" viewBox="0 0 640 480" fill="none" aria-hidden="true" initial="hidden" animate="visible">
            {NETWORK_PATHS.map((path, index) => (
              <motion.path
                key={path}
                d={path}
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: canComplete ? 0.78 : 0.42 }}
                transition={{
                  pathLength: { duration: shouldReduceMotion ? 0.01 : 0.82, delay: shouldReduceMotion ? 0 : 0.08 + index * 0.055, ease: EASE },
                  opacity: { duration: 0.32 }
                }}
              />
            ))}

            {NETWORK_NODES.map(([cx, cy], index) => (
              <motion.circle
                key={cx + '-' + cy}
                cx={cx}
                cy={cy}
                r={index % 3 === 0 ? 3 : 2}
                fill="currentColor"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={shouldReduceMotion ? { opacity: 0.65, scale: 1 } : {
                  opacity: canComplete ? [0.55, 1, 0.55] : [0.3, 0.78, 0.3],
                  scale: [1, 1.32, 1]
                }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 1.9 + (index % 3) * 0.22,
                  delay: shouldReduceMotion ? 0 : 0.4 + index * 0.04,
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  ease: 'easeInOut'
                }}
              />
            ))}

            {DATA_STREAMS.map((stream, index) => (
              <motion.circle
                key={'stream-' + index}
                r="3"
                fill="#60a5fa"
                initial={{ opacity: 0 }}
                animate={shouldReduceMotion ? { opacity: 0 } : { cx: stream.x, cy: stream.y, opacity: [0, 1, 1, 0] }}
                transition={{ duration: 3.2 + index * 0.18, delay: stream.delay, repeat: Infinity, ease: 'linear' }}
              />
            ))}
          </motion.svg>

          <div className="loader-content">
            <motion.div
              className="loader-monogram-shell"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.62, ease: EASE }}
            >
              <div className="loader-orbit" aria-hidden="true" />
              <p className="loader-monogram">MN.</p>
            </motion.div>

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
              variants={{ hidden: {}, visible: { transition: { delayChildren: shouldReduceMotion ? 0 : 0.3, staggerChildren: shouldReduceMotion ? 0 : 0.1 } } }}
            >
              <motion.h1
                variants={{ hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 8 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.46, ease: EASE }}
              >
                Muhammad Nouman
              </motion.h1>
              <motion.p
                variants={{ hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 8 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.46, ease: EASE }}
              >
                Web Developer &amp; ML Enthusiast
              </motion.p>
            </motion.div>

            <motion.p
              className="loader-status"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.35, delay: shouldReduceMotion ? 0 : 0.5 }}
            >
              <span className="loader-status-indicator" />
              {status}
            </motion.p>

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
