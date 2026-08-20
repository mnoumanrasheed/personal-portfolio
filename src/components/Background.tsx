"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const Background = () => {
    const { theme } = useTheme();

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden select-none">
            {/* Base Gradient Background */}
            <div
                className="absolute inset-0 transition-colors duration-1000"
                style={{
                    background: theme === 'dark'
                        ? 'var(--bg-gradient, #090d16)'
                        : 'var(--bg-gradient, #f8fafc)'
                }}
            />

            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.15] dark:opacity-[0.2]"
                style={{
                    backgroundImage: theme === 'dark'
                        ? `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), 
               linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`
                        : `linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), 
               linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Modern Mesh/Aurora Glows */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full"
                    style={{
                        background: theme === 'dark'
                            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />

                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full"
                    style={{
                        background: theme === 'dark'
                            ? 'radial-gradient(circle, rgba(96, 165, 250, 0.05) 0%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(14, 165, 233, 0.04) 0%, transparent 70%)',
                        filter: 'blur(100px)',
                    }}
                />

                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full"
                    style={{
                        background: theme === 'dark'
                            ? 'radial-gradient(circle, rgba(30, 58, 138, 0.1) 0%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(219, 234, 254, 0.1) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />
            </div>

            {/* Cinematic Vignette Overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: theme === 'dark'
                        ? 'radial-gradient(circle at center, transparent 0%, rgba(3, 7, 18, 0.4) 100%)'
                        : 'radial-gradient(circle at center, transparent 0%, rgba(248, 250, 252, 0.2) 100%)'
                }}
            />
        </div>
    );
};

export default Background;
