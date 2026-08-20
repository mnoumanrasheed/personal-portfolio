'use client';

import React, { useState, useEffect } from 'react';
import {
  Code, Layout, Blocks, Wrench, BrainCircuit, Cpu,
  Terminal, ShieldCheck, Activity, Radio, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillItem {
  name: string;
  level: number;
  status: 'OPTIMAL' | 'STABLE' | 'ACTIVE';
  description: string;
  modules: string[];
}

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  items: SkillItem[];
}

const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Programming",
    icon: <Code size={18} />,
    items: [
      {
        name: "C#",
        level: 90,
        status: "OPTIMAL",
        description: "Skilled in C# desktop development, with practical experience in Windows Forms and building reliable application workflows.",
        modules: ["OOP Paradigms", "WinForms UI", "Desktop Applications", "CRUD Operations", "Event-Driven Logic"]
      },
      {
        name: "C++",
        level: 85,
        status: "OPTIMAL",
        description: "Built a strong foundation in C++ programming by learning core programming fundamentals, functions, arrays, and problem-solving techniques",
        modules: ["Programming Fundamentals", "Functions", "Arrays", "Loops", "Pointers"]
      },
      {
        name: "Python",
        level: 80,
        status: "STABLE",
        description: "Practical experience with Python through programming fundamentals, image processing, and machine learning projects. Used Python for core coding practice, OpenCV-based edge detection, dataset handling, and regression-based house price prediction",
        modules: ["Python Fundamentals", "Numpy", "Pandas", "OpenCV", "Edge Detection", "Data Preprocessing"]
      },
      {
        name: "Java",
        level: 75,
        status: "OPTIMAL",
        description: "Built a solid foundation in Java through object-oriented programming, core programming concepts, and theoretical understanding of data structures used in software development.",
        modules: ["Java Basics", "OOP Principles", "Data Structures", "Arrays"]
      }
    ]
  },
  {
    category: "Frontend Dev",
    icon: <Layout size={18} />,
    items: [
      {
        name: "React / Next.js",
        level: 80,
        status: "ACTIVE",
        description: "Practical experience in building responsive and professional websites using React and Next.js. Worked on portfolio and business websites with reusable components, page routing, clean layouts, and interactive user interfaces.",
        modules: ["React Components", "Reusable UI", "Responsive Pages"]
      },
      {
        name: "CSS / Flex / Grid",
        level: 90,
        status: "OPTIMAL",
        description: "Strong ability to create clean, modern, and responsive website layouts using CSS, Flexbox, and Grid. Focused on professional spacing, mobile responsiveness, animations, and polished visual design.",
        modules: ["Flexbox Layouts", "CSS Grid", "Responsive Design", "Modern Styling"]
      },
      {
        name: "HTML5 Semantic",
        level: 95,
        status: "OPTIMAL",
        description: "Strong understanding of semantic HTML for building well-structured and readable web pages. Used proper sections, headings, navigation, forms, and content hierarchy for professional frontend development.",
        modules: ["Semantic Tags", "Page Structure", "Navigation", "Forms"]
      }
    ]
  },
  {
    category: "Frameworks & Desktop",
    icon: <Blocks size={18} />,
    items: [
      {
        name: ".NET Framework",
        level: 85,
        status: "OPTIMAL",
        description: "Practical experience using .NET Framework for building structured desktop applications with C#, Windows Forms, user interaction, and application workflow management.",
        modules: ["C# Desktop Apps", "User Interaction", ".NET Framework"]
      },
      {
        name: "Windows Forms",
        level: 90,
        status: "OPTIMAL",
        description: "Strong hands-on experience in Windows Forms through a face attendance system, including student registration, webcam-based interaction, and user-friendly form design.",
        modules: ["WinForms UI", "Button Events", "Input Validation", "Form Design"]
      }
    ]
  },
  {
    category: "AI & Image Processing",
    icon: <BrainCircuit size={18} />,
    items: [
      {
        name: "Image Filtering ",
        level: 80,
        status: "STABLE",
        description: "Practical experience with image filtering and OpenCV-based image processing. Worked on filtering, edge detection, color manipulation, image enhancement, and batch image processing workflows.",
        modules: ["Image Filtering", "Edge Detection", "Color Manipulation", "Image Enhancement", "Batch Processing"]
      },
      {
        name: "Machine Learning",
        level: 75,
        status: "ACTIVE",
        description: "Developing machine learning skills through practical projects. Worked on regression, classification, feature engineering, dataset splitting, model training, and prediction-based workflows.",
        modules: ["Regression Models", "Classification", "Train-Test Split", "Model Evaluation"]
      }
    ]
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench size={18} />,
    items: [
      {
        name: "Git & GitHub",
        level: 85,
        status: "OPTIMAL",
        description: "Used Git and GitHub to organize, publish, and maintain portfolio projects including machine learning, image processing, web development, Python practice, and C# desktop applications.",
        modules: ["Repositories", "Commits", "README Files", "Project Uploads"]
      },
      {
        name: "Visual Studio / Code",
        level: 90,
        status: "OPTIMAL",
        description: "Primary development tools used for C#, Python, and web development projects. Experienced in writing code, running projects, debugging errors, and managing project files.",
        modules: ["Code Editing", "Project Setup", "Debugging", "Extensions", "Error Fixing"]
      },
      {
        name: "SQL Server / SQLite",
        level: 75,
        status: "ACTIVE",
        description: "Working knowledge of databases for storing and managing application records. Used database concepts for student data, attendance records, structured queries, and basic data handling.",
        modules: ["Database Tables", "SQL Queries", "Data Records", "Basic CRUD", "Data Management"]
      },
      {
        name: "Kaggle",
        level: 75,
        status: "ACTIVE",
        description: "Used Kaggle for hands-on practice in machine learning, dataset handling, notebook-based coding, data preprocessing, and prediction model experiments.",
        modules: ["Kaggle Notebooks", "Datasets", "Data Cleaning", "Model Training", "Prediction Practice"]
      }
    ]
  },
  {
    category: "Systems & Ops",
    icon: <Cpu size={18} />,
    items: [
      {
        name: "Linux (Ubuntu)",
        level: 65,
        status: "ACTIVE",
        description: "Currently learning Linux fundamentals with focus on Ubuntu installation, virtual machine setup, terminal usage, file management, and basic command-line operations.",
        modules: ["Ubuntu Setup", "Virtual Machine", "Basic Commands", "File Management"]
      },
      {
        name: "Networking Basics",
        level: 75,
        status: "STABLE",
        description: "Basic understanding of networking concepts. Familiar with IP addresses, and client-server communication.",
        modules: ["IP Addressing", "HTTP Requests", "Ports", "Client-Server Model"]
      },
      {
        name: "Technical Documentation",
        level: 85,
        status: "OPTIMAL",
        description: "Able to write clear project documentation, GitHub README files, setup instructions, feature descriptions, and simple explanations for academic and portfolio-based software projects.",
        modules: ["README Writing", "Setup Guide", "Project Overview", "Feature Details", "Code Explanation"]
      },
      {
        name: "Problem Solving",
        level: 80,
        status: "STABLE",
        description: "Good logical and analytical problem-solving ability developed through programming, machine learning projects, image processing tasks, database handling, and academic software development work.",
        modules: ["Logic Building", "Debugging", "Algorithms", "Error Handling", "Optimization Basics"]
      },
      {
        name: "Learning Workflow",
        level: 80,
        status: "ACTIVE",
        description: "Consistently improving technical skills through hands-on GitHub projects, Kaggle notebooks, academic assignments, portfolio development, and practical implementation of real-world software ideas.",
        modules: ["Self Learning", "Kaggle Practice", "GitHub Projects", "Portfolio Building", "Skill Improvement"]
      }
    ]
  }
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILLS_DATA[0].items[0]);
  const [activeCategory, setActiveCategory] = useState<string>(SKILLS_DATA[0].category);
  const [compilationLogs, setCompilationLogs] = useState<string[]>([]);
  const [isCompiling, setIsCompiling] = useState<boolean>(false);

  // Trigger compilation simulation when selected skill changes
  useEffect(() => {
    setIsCompiling(true);
    setCompilationLogs([`> INIT COMPILER: ${selectedSkill.name.toUpperCase()}...`]);

    const logs = [
      `> SCANNING DEPENDENCIES... OK`,
      `> VERIFYING INTEGRITY STATUS: [${selectedSkill.status}]`,
      `> COMPILING ACTIVE PARADIGMS... DONE`,
      `> HUD TELEMETRY ENGAGED // ONLINE`
    ];

    let logIndex = 0;
    const interval = setInterval(() => {
      if (logIndex < logs.length) {
        setCompilationLogs(prev => [...prev, logs[logIndex]]);
        logIndex++;
      } else {
        setIsCompiling(false);
        clearInterval(interval);
      }
    }, 180);

    return () => clearInterval(interval);
  }, [selectedSkill]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'OPTIMAL': return 'var(--status-optimal)';
      case 'STABLE': return 'var(--status-stable)';
      case 'ACTIVE': return 'var(--status-active)';
      default: return 'var(--text-muted)';
    }
  };

  return (
    <section id="skills" className="section container" itemScope itemType="https://schema.org/ItemList">
      <meta itemProp="name" content="Muhammad Nouman's Technical Expertise" />

      {/* Hidden SEO/AEO Microdata list to guarantee LLM and Generative engine indexing without visual changes */}
      <div style={{ display: 'none' }}>
        {SKILLS_DATA.map((cat, idx) => (
          <div key={idx} itemScope itemType="https://schema.org/ItemList">
            <h3 itemProp="name">{cat.category}</h3>
            <ul>
              {cat.items.map((skill, sIdx) => (
                <li key={sIdx} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <meta itemProp="position" content={String(sIdx + 1)} />
                  <div itemProp="item" itemScope itemType="https://schema.org/Thing">
                    <span itemProp="name">{skill.name}</span>
                    <span itemProp="description">{skill.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="section-title">Technical Expertise</h2>

      <div className="skills-dashboard-wrapper">
        {/* LEFT COLUMN: Modular Grid of Categories and Chips */}
        <div className="skills-matrix-col">
          {/* Category Tabs */}
          <motion.div
            className="skills-category-tabs"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08
                }
              }
            }}
          >
            {SKILLS_DATA.map((cat, idx) => (
              <motion.button
                key={idx}
                className={`skills-category-tab ${activeCategory === cat.category ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.category);
                  setSelectedSkill(cat.items[0]);
                }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="tab-icon">{cat.icon}</span>
                <span className="tab-label">{cat.category}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Grid of Chips for the Active Category */}
          <div className="skills-chips-grid-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="skills-chips-grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {SKILLS_DATA.find(cat => cat.category === activeCategory)?.items.map((skill, idx) => {
                  const isSelected = selectedSkill.name === skill.name;
                  return (
                    <motion.div
                      key={idx}
                      className={`skill-chip-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedSkill(skill)}
                      onMouseEnter={() => setSelectedSkill(skill)}
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    >
                      <div className="chip-border-corners" />

                      <div className="chip-content-inner">
                        {/* Custom Sci-fi brackets */}
                        <span className="sci-fi-bracket">[</span>

                        <div className="chip-main-info">
                          <span className="chip-status-dot" style={{ backgroundColor: getStatusColor(skill.status), boxShadow: `0 0 8px ${getStatusColor(skill.status)}` }} />
                          <span className="chip-skill-name">{skill.name}</span>
                        </div>

                        <span className="sci-fi-bracket">]</span>
                      </div>

                      {/* Active underline bar indicator */}
                      {isSelected && (
                        <motion.div
                          className="chip-active-bar"
                          layoutId="activeChipBar"
                          style={{ background: `linear-gradient(90deg, ${getStatusColor(skill.status)}, transparent)` }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Sci-Fi instructions footer */}
          <div className="skills-matrix-terminal-footer">
            <Terminal size={14} style={{ color: 'var(--primary-color)' }} />
            <span>{"// HOVER OR CLICK NODES FOR REAL-TIME DIAGNOSTIC TELEMETRY READOUT"}</span>
          </div>
        </div>

        {/* RIGHT COLUMN: The Tech HUD Monitor */}
        <div className="skills-hud-col">
          <div className="skills-hud-panel glass-panel">
            {/* Sci-Fi panel corner decos */}
            <div className="hud-corner-deco tl" />
            <div className="hud-corner-deco tr" />
            <div className="hud-corner-deco bl" />
            <div className="hud-corner-deco br" />

            {/* HUD Header */}
            <div className="hud-header">
              <div className="hud-header-title">
                <Activity size={16} className="pulse-slow" style={{ color: 'var(--primary-color)' }} />
                <span>SYSTEM STATUS MONITOR</span>
              </div>
              <div className="hud-header-ping">
                <Radio size={14} className="pulse-fast" style={{ color: getStatusColor(selectedSkill.status) }} />
                <span style={{ color: getStatusColor(selectedSkill.status), textShadow: `0 0 6px ${getStatusColor(selectedSkill.status)}` }}>
                  STATUS: {selectedSkill.status}
                </span>
              </div>
            </div>

            {/* Main HUD Body */}
            <div className="hud-body">
              {/* Skill Visual HUD Ring & Title */}
              <div className="hud-profile-section">
                <div className="hud-waveform-container" style={{ borderColor: getStatusColor(selectedSkill.status) }}>
                  <div className="hud-waveform-bars">
                    {[1, 2, 3, 4, 5, 6, 7].map((bar) => (
                      <span
                        key={bar}
                        className="hud-waveform-bar"
                        style={{
                          backgroundColor: getStatusColor(selectedSkill.status),
                          animationDelay: `${bar * 0.12}s`,
                          boxShadow: `0 0 8px ${getStatusColor(selectedSkill.status)}`
                        }}
                      />
                    ))}
                  </div>
                  <div className="hud-waveform-label" style={{ color: getStatusColor(selectedSkill.status) }}>
                    SIGNAL
                  </div>
                </div>

                <div className="hud-profile-text">
                  <div className="hud-cat-path">SYS {"//"} {activeCategory.toUpperCase()}</div>
                  <h3 className="hud-skill-title" style={{ color: 'var(--text-color)' }}>
                    {selectedSkill.name}
                  </h3>
                </div>
              </div>

              {/* Skill Description */}
              <div className="hud-description-box">
                <div className="hud-sub-label">{"// SYSTEM DESCRIPTION"}</div>
                <p className="hud-description-text">
                  {selectedSkill.description}
                </p>
              </div>

              {/* Core Modules Sub-list */}
              <div className="hud-modules-section">
                <div className="hud-sub-label">{"// CORE SUBMODULES"}</div>
                <div className="hud-modules-grid">
                  {selectedSkill.modules.map((mod, idx) => (
                    <div key={idx} className="hud-module-tag" style={{ borderLeftColor: getStatusColor(selectedSkill.status) }}>
                      <ChevronRight size={10} style={{ color: getStatusColor(selectedSkill.status), marginRight: '4px' }} />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hud-terminal-logs">
                <div className="hud-sub-label">{"// TELEMETRY LOGSTREAM"}</div>
                <div className="hud-terminal-console">
                  {compilationLogs.map((log, idx) => (
                    <div key={idx} className="console-line">
                      {log}
                    </div>
                  ))}
                  {isCompiling && (
                    <span className="console-cursor pulse-fast">_</span>
                  )}
                </div>
              </div>
            </div>

            {/* Panel footer details */}
            <div className="hud-footer-bar">
              <ShieldCheck size={14} style={{ color: 'var(--success-color)' }} />
              <span>{"CORE HARDWARE SECURE // LOCAL HOST COMPILING OPTIMAL"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}