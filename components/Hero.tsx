"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, FileDown, Mail } from "lucide-react";

export default function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const withBasePath = (path: string) => `${basePath}${path}`;
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#9CA8A0_1px,transparent_1px),linear-gradient(to_bottom,#9CA8A0_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Soft gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E676]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#26332B] bg-[#101613] text-xs text-[#00E676] font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E676]" />
              </span>
              Available for opportunities
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#F5F7F5] mb-4">
            Hi, I&apos;m{" "}
            <span className="text-[#00E676]">Jakapan.</span>
          </h1>

          {/* Professional Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#9CA8A0] mb-6">
            Junior Full-Stack Developer
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#9CA8A0] max-w-2xl leading-relaxed mb-10">
            I build full-stack web applications, integrate AI-powered solutions,
            and develop secure, scalable systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00E676] text-[#080B0A] font-semibold text-sm rounded-lg hover:bg-[#00C853] transition-all duration-200 hover:shadow-lg hover:shadow-[#00E676]/20"
            >
              <ArrowDown size={16} />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#26332B] text-[#F5F7F5] font-semibold text-sm rounded-lg hover:bg-[#101613] hover:border-[#00E676]/30 transition-all duration-200"
            >
              <Mail size={16} />
              Contact Me
            </a>
            <a
              href={withBasePath("/Jakapan_Ploensup_Resume.pdf")}
              download="Jakapan_Ploensup_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#26332B] text-[#9CA8A0] font-semibold text-sm rounded-lg hover:bg-[#101613] hover:border-[#00E676]/30 hover:text-[#F5F7F5] transition-all duration-200"
            >
              <FileDown size={16} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Bento12ad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-[#26332B] text-[#9CA8A0] hover:text-[#00E676] hover:border-[#00E676]/30 hover:bg-[#101613] transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jakapan-ploensup-620678284"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-[#26332B] text-[#9CA8A0] hover:text-[#00E676] hover:border-[#00E676]/30 hover:bg-[#101613] transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle terminal decoration — bottom left */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <p className="text-xs text-[#26332B] font-mono leading-relaxed">
          Pathum Thani / Bangkok, TH
          <br />
          Full-Stack · AI · Security
        </p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowDown size={20} className="text-[#26332B]" />
      </motion.div>
    </section>
  );
}
