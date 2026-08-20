import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import DynamicThreeBackground from "@/components/DynamicThreeBackground";

import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://mnouman.dev"),
  title: "Muhammad Nouman | Senior Software Engineer & AI Specialist",
  description: "Portfolio of Muhammad Nouman, an expert Software Engineer specializing in C#/.NET, Next.js/React Full-Stack Web Development, Python, and Machine Learning. Discover high-performance, cinematic digital projects.",
  keywords: [
    "Muhammad Nouman",
    "Muhammad Nouman Software Engineer",
    "Muhammad Nouman .NET Developer",
    "Software Engineer",
    "C# Developer",
    ".NET Developer",
    "API Developer",
    "Full-Stack Web Developer",
    "React Developer",
    "Next.js Portfolio",
    "AI Machine Learning Portfolio",
    "Python Developer",
    "OpenCV Expert",
    "Desktop Application Developer C#",
    "Lahore Software Engineer"
  ],
  authors: [{ name: "Muhammad Nouman", url: "https://mnouman.dev" }],
  creator: "Muhammad Nouman",
  publisher: "Muhammad Nouman",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "google-site-verification-placeholder", // To be replaced by user's search console token
    yandex: "yandex-placeholder",
    yahoo: "yahoo-placeholder",
    other: {
      me: ["contact@mnouman.dev", "https://github.com/mnoumanrasheed"],
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/nomi.png" },
      { url: "/nomi.png", sizes: "32x32", type: "image/png" },
      { url: "/nomi.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/nomi.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mnouman.dev/",
    title: "Muhammad Nouman | Senior Software Engineer & AI Specialist Portfolio",
    description: "Explore elite engineering solutions in .NET, Next.js web application development, and AI/Machine Learning models by Muhammad Nouman.",
    siteName: "Muhammad Nouman Portfolio",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Muhammad Nouman Software Engineering Portfolio Preview",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Nouman | Software Engineer & AI Innovator",
    description: "Building production-grade .NET, full-stack React applications, and intelligent OpenCV/ML pipelines.",
    images: ["/og-image.png"],
    creator: "@mnoumanrasheed",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Rich schemas matching Person, WebSite, and FAQPage (Highly requested for GEO / AEO / LLM searching)
const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mnouman.dev/#person",
      "name": "Muhammad Nouman",
      "url": "https://mnouman.dev/",
      "image": {
        "@type": "ImageObject",
        "@id": "https://mnouman.dev/#personImage",
        "url": "https://mnouman.dev/nomi.png",
        "caption": "Muhammad Nouman"
      },
      "jobTitle": "Software Engineer",
      "description": "High-performance software engineer specializing in C#/.NET desktop & enterprise API solutions, Next.js full-stack web applications, OpenCV computer vision, and machine learning models.",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "University of Lahore",
        "sameAs": "https://en.wikipedia.org/wiki/University_of_Lahore"
      },
      "knowsAbout": [
        "C#",
        ".NET Framework",
        "ASP.NET Core",
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "Machine Learning",
        "OpenCV",
        "Computer Vision",
        "SQL Server",
        "REST APIs",
        "Software Architecture"
      ],
      "sameAs": [
        "https://github.com/mnoumanrasheed",
        "https://www.linkedin.com/in/muhammad-nouman-6ba6982b6",
        "https://www.kaggle.com/mnoumanrasheed"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://mnouman.dev/#website",
      "url": "https://mnouman.dev/",
      "name": "Muhammad Nouman Portfolio",
      "description": "Professional engineering portfolio showcasing projects in web development, enterprise .NET systems, and AI integration.",
      "publisher": {
        "@id": "https://mnouman.dev/#person"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://mnouman.dev/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are Muhammad Nouman's core technical skills?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Muhammad Nouman specializes in C#/.NET Development, Next.js/React Full-Stack Web Development, Python Developer tools, Machine Learning, and OpenCV Computer Vision models."
          }
        },
        {
          "@type": "Question",
          "name": "What industries does Muhammad Nouman specialize in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "He specializes in Enterprise Software Engineering, Desktop Client Development, Web App Modernization, Custom API integration, and AI-driven automation systems."
          }
        },
        {
          "@type": "Question",
          "name": "What is the background of Muhammad Nouman?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Academic background in Software Engineering from the University of Lahore, backed by hands-on engineering credentials and professional certifications in advanced computing."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Script
          id="json-ld-schemas"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider>
          <DynamicThreeBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
