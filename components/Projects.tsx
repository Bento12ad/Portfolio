"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

interface Project {
  title: string;
  category?: string;
  description: string;
  technologies: string[];
  features?: string[];
  liveDemo?: string;
  github?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Talkative AI",
    category: "Full-Stack AI Application",
    description:
      "An AI-powered speaking coach designed to help users practice communication, receive speaking feedback, and improve their speaking skills through personalized learning activities.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "Google Gemini API",
      "Docker",
      "Vitest",
      "Playwright",
    ],
    features: [
      "AI-powered speaking practice",
      "Personalized AI feedback",
      "Speech performance analytics",
      "Learning recommendations",
      "User authentication and session management",
      "Secure audio upload and playback",
      "Automated testing",
    ],
    liveDemo: "https://talkativeai-frontend.vercel.app/",
    featured: true,
  },
  {
    title: "AI Product Moderation System",
    description:
      "A web application for managing and moderating product listings, integrating a Python-based AI backend for product image and content analysis.",
    technologies: ["Next.js", "MongoDB", "Python", "Cloudinary"],
  },
  {
    title: "TermGame — Game Top-Up Platform",
    description:
      "A game top-up platform with customer-facing and administrative workflows, database operations, and payment integration.",
    technologies: ["Next.js", "Prisma", "Stripe API", "SQL"],
  },
  {
    title: "Game Boss Automation Bot",
    description:
      "An automation bot using computer vision and Android automation to recognize screen elements and perform game interactions.",
    technologies: ["Python", "OpenCV", "Android Debug Bridge (ADB)"],
  },
];

function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10 rounded-xl border border-[#00E676]/20 bg-[#101613] overflow-hidden glow-sm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Screenshot Placeholder */}
        <div className="lg:col-span-2 bg-[#080B0A] border-b lg:border-b-0 lg:border-r border-[#26332B] flex items-center justify-center min-h-[280px] relative">
          <div className="text-center p-8">
            <div className="w-16 h-16 rounded-xl bg-[#00E676]/10 border border-[#00E676]/20 flex items-center justify-center mx-auto mb-4">
              <Star size={28} className="text-[#00E676]" />
            </div>
            <p className="text-sm font-semibold text-[#F5F7F5]">
              {project.title}
            </p>
            <p className="text-xs text-[#9CA8A0] mt-1">{project.category}</p>
          </div>
          {/* Featured badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#00E676]/10 border border-[#00E676]/20 text-[#00E676] text-xs font-medium">
              <Star size={12} />
              Featured Project
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 p-6 md:p-8">
          <h3 className="text-2xl font-bold text-[#F5F7F5] mb-2">
            {project.title}
          </h3>
          {project.category && (
            <p className="text-sm text-[#00E676] font-medium mb-4">
              {project.category}
            </p>
          )}
          <p className="text-[#9CA8A0] leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Features */}
          {project.features && (
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-[#9CA8A0] uppercase tracking-wider mb-3">
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-[#9CA8A0]"
                  >
                    <div className="w-1 h-1 rounded-full bg-[#00E676] shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-[#080B0A] border border-[#26332B] text-[#9CA8A0] text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00E676] text-[#080B0A] font-semibold text-sm rounded-lg hover:bg-[#00C853] transition-all"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#26332B] text-[#F5F7F5] font-semibold text-sm rounded-lg hover:bg-[#101613] hover:border-[#00E676]/30 transition-all"
              >
                <Github size={15} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group rounded-lg border border-[#26332B] bg-[#101613] overflow-hidden hover:border-[#00E676]/20 transition-all duration-300 flex flex-col"
    >
      {/* Screenshot Placeholder */}
      <div className="bg-[#080B0A] border-b border-[#26332B] h-40 flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 rounded-lg bg-[#101613] border border-[#26332B] flex items-center justify-center mx-auto mb-2 group-hover:border-[#00E676]/20 transition-colors">
            <Code size={18} className="text-[#9CA8A0] group-hover:text-[#00E676] transition-colors" />
          </div>
          <p className="text-xs text-[#9CA8A0]">{project.title}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-[#F5F7F5] mb-2 group-hover:text-[#00E676] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[#9CA8A0] leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-[#080B0A] border border-[#26332B] text-[#9CA8A0] text-[11px] rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#00E676]/10 border border-[#00E676]/20 text-[#00E676] text-xs font-medium rounded-md hover:bg-[#00E676]/20 transition-all"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 border border-[#26332B] text-[#9CA8A0] text-xs font-medium rounded-md hover:text-[#F5F7F5] hover:border-[#00E676]/20 transition-all"
            >
              <Github size={13} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Need to import Code from lucide
import { Code } from "lucide-react";

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px w-8 bg-[#00E676]" />
          <h2 className="text-2xl font-bold text-[#F5F7F5]">
            Featured Projects
          </h2>
        </div>

        {/* Featured Project */}
        {featuredProject && <FeaturedProject project={featuredProject} />}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
