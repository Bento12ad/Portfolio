"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Database,
  BrainCircuit,
  Container,
  ShieldCheck,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Globe size={18} />,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server size={18} />,
    skills: ["Node.js", "Fastify", "NestJS", "FastAPI", "RESTful APIs"],
  },
  {
    title: "Database",
    icon: <Database size={18} />,
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Firebase"],
  },
  {
    title: "AI & Automation",
    icon: <BrainCircuit size={18} />,
    skills: [
      "Google Gemini API",
      "OCR",
      "Python",
      "OpenCV",
      "Machine Learning",
      "Android Debug Bridge",
    ],
  },
  {
    title: "DevOps",
    icon: <Container size={18} />,
    skills: ["Docker", "Docker Compose", "Vercel", "Cloudflare", "AWS EC2"],
  },
  {
    title: "Security & Testing",
    icon: <ShieldCheck size={18} />,
    skills: [
      "Nmap",
      "Application Security Testing",
      "Vulnerability Assessment",
      "Vitest",
      "Playwright",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px w-8 bg-[#00E676]" />
          <h2 className="text-2xl font-bold text-[#F5F7F5]">Technical Skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="p-5 rounded-lg border border-[#26332B] bg-[#101613] hover:border-[#00E676]/30 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-[#080B0A] border border-[#26332B] text-[#00E676] group-hover:border-[#00E676]/30 transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-[#F5F7F5] text-sm">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-[#080B0A] border border-[#26332B] text-[#9CA8A0] text-xs rounded-md hover:text-[#00E676] hover:border-[#00E676]/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
