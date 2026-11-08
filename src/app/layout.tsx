import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import DynamicThreeBackground from "@/components/DynamicThreeBackground";

import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://mnoumanrasheed.netlify.app"),
  title: {
    default: "Muhammad Nouman | Web Developer & ML Enthusiast",
    template: "%s | Muhammad Nouman",
  },
  description: "Explore Muhammad Nouman's portfolio featuring modern web applications, machine learning projects, and innovative digital solutions.",
  applicationName: "Muhammad Nouman Portfolio",
  category: "technology",
  keywords: [
    "Muhammad Nouman",
    "Muhammad Nouman Web Developer",
    "Muhammad Nouman ML Enthusiast",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Modern Web Applications",
    "Machine Learning Projects",
    "Digital Solutions",
    "Portfolio"
  ],
  authors: [{ name: "Muhammad Nouman", url: "https://mnoumanrasheed.netlify.app/" }],
  creator: "Muhammad Nouman",
  publisher: "Muhammad Nouman",
  alternates: {
    canonical: "/",
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
    url: "https://mnoumanrasheed.netlify.app/",
    title: "Muhammad Nouman | Web Developer & ML Enthusiast",
    description: "Explore Muhammad Nouman's portfolio featuring modern web applications, machine learning projects, and innovative digital solutions.",
    siteName: "Muhammad Nouman Portfolio",
    images: [{
      url: "/opengraph-image",
      width: 1200,
      height: 630,
      alt: "Muhammad Nouman Web Developer and ML Enthusiast Portfolio Preview",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Nouman | Web Developer & ML Enthusiast",
    description: "Explore Muhammad Nouman's portfolio featuring modern web applications, machine learning projects, and innovative digital solutions.",
    images: ["/opengraph-image"],
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
      "@id": "https://mnoumanrasheed.netlify.app/#person",
      "name": "Muhammad Nouman",
      "url": "https://mnoumanrasheed.netlify.app/",
      "image": {
        "@type": "ImageObject",
        "@id": "https://mnoumanrasheed.netlify.app/#personImage",
        "url": "https://mnoumanrasheed.netlify.app/nomi.png",
        "caption": "Muhammad Nouman"
      },
      "jobTitle": "Web Developer & ML Enthusiast",
      "description": "Web developer and machine learning enthusiast creating modern web applications, machine learning projects, and innovative digital solutions.",
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
        "https://www.linkedin.com/in/muhammad-nouman-6ba6982b6"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://mnoumanrasheed.netlify.app/#website",
      "url": "https://mnoumanrasheed.netlify.app/",
      "name": "Muhammad Nouman Portfolio",
      "description": "Explore Muhammad Nouman's portfolio featuring modern web applications, machine learning projects, and innovative digital solutions.",
      "publisher": {
        "@id": "https://mnoumanrasheed.netlify.app/#person"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://mnoumanrasheed.netlify.app/#profile",
      "url": "https://mnoumanrasheed.netlify.app/",
      "name": "Muhammad Nouman | Web Developer & ML Enthusiast",
      "description": "Explore Muhammad Nouman's portfolio featuring modern web applications, machine learning projects, and innovative digital solutions.",
      "mainEntity": {
        "@id": "https://mnoumanrasheed.netlify.app/#person"
      },
      "isPartOf": {
        "@id": "https://mnoumanrasheed.netlify.app/#website"
      },
      "inLanguage": "en"
    },
    {
      "@type": "FAQPage",
      "@id": "https://mnoumanrasheed.netlify.app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are Muhammad Nouman's core technical skills?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Muhammad Nouman focuses on modern web applications, React and Next.js development, machine learning projects, and innovative digital solutions."
          }
        },
        {
          "@type": "Question",
          "name": "What industries does Muhammad Nouman specialize in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "His portfolio features modern web development, machine learning projects, and practical digital solutions."
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
