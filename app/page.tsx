"use client"

import dynamic from "next/dynamic"
import Image from "next/image"

import Hero from "@/components/Hero"
import Navigation from "@/components/Navigation"

// Lazy load below-the-fold components
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true })
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true })
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true })
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true })

const NowPlaying = dynamic(() => import("@/components/NowPlaying"), { ssr: false })
const ThingsICanDo = dynamic(() => import("@/components/ThingsICanDo"), { ssr: true })

export default function Home() {
  const projects =
    [
      {
        name: "TrainRadar",
        description:
          "A real-time train tracking platform that visualizes live train locations, journey progress, route insights, and station activity through an interactive map.",
        tech: [
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "Prisma",
          "Redis",
          "Tailwind CSS",
          "Leaflet",
          "REST API"
        ],
        live: "",
        source: "https://github.com/Rajveerbairagi/TrainRadar",
      },
      {
        name: "CarbonsetuX",
        description:
          "An AI-driven sustainability platform that estimates carbon emissions, provides personalized reduction strategies, and promotes environmental awareness through intelligent insights.",
        tech: [
          "Next.js",
          "FastAPI",
          "TypeScript",
          "Three.js",
          "Framer Motion",
          "PostgreSQL",
          "Prisma",
          "Tailwind CSS"
        ],
        live: "",
        source: "https://github.com/Rajveerbairagi/CarbonSetuX",
      },
      {
        name: "Frag-Raid",
        description:
          "A smart fragrance discovery platform that recommends perfumes based on scent preferences, personality, occasions, and budget using AI-powered recommendations.",
        tech: [
          "Next.js",
          "TypeScript",
          "Supabase",
          "OpenAI",
          "Gemini API",
          "Prisma",
          "Tailwind CSS"
        ],
        live: "https://frag-raid.vercel.app/",
        source: "https://github.com/Rajveerbairagi/Frag-Raid",
      },
      {
        name: "RGPV AI Assistant",
        description:
          "An AI-powered exam preparation platform for RGPV students featuring RAG-based chat, PDF ingestion, syllabus browsing, and previous year papers for context-aware learning.",
        tech: [
          "React",
          "Vite",
          "TypeScript",
          "FastAPI",
          "LangChain",
          "ChromaDB",
          "Gemini",
          "Tailwind CSS"
        ],
        live: "",
        source: "https://github.com/Rajveerbairagi/RGPVAIAssistant",
      },
      {
  name: "WAXA",
  description:
    "A premium marketing agency website built for WAXA with a conversion-focused design, animated user experience, lead generation system, case studies, and Appwrite-powered CMS.",
  tech: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "Appwrite",
    "React Router",
    "Lucide React"
  ],
  live: "https://waxa.social",
  source: "https://github.com/Rajveerbairagi/waxawebsite",
},
    ]


  const experience = [
  {
  period: "Sep 2024 - Present",
  company: "GDP",
  role: "Administrator",
  description: "look after the organization, leading strategic planning, operations, team coordination, organized events, streamlined workflows and community initiatives while driving the growth and execution of key projects.",
},
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">

      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-16 border-l-1 border-r-1">
        <div className="w-full h-32 md:h-48 lg:h-64 relative mb-8 rounded-lg overflow-hidden">
          <Image
            src="/banner3.png"
            alt="Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Hero />
        <NowPlaying />
        <Experience experience={experience} />
        {/* <OpenSource /> */}
        <Projects projects={projects} />
        <Skills />
        <ThingsICanDo />
        <Contact />
      </main>




    </div>
  )
}
