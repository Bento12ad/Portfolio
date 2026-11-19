"use client";

import { motion } from "framer-motion";
import { User, BookOpen, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px w-8 bg-[#00E676]" />
          <h2 className="text-2xl font-bold text-[#F5F7F5]">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-5">
            <p className="text-[#9CA8A0] leading-relaxed text-base">
              I&apos;m a Computer Science student specializing in Data Security at
              Bangkok University, with hands-on experience in full-stack
              development, AI integration, and application security testing.
            </p>
            <p className="text-[#9CA8A0] leading-relaxed text-base">
              I enjoy building practical software solutions, developing backend
              systems, integrating AI technologies, and exploring ways to make
              applications more secure and reliable.
            </p>
            <p className="text-[#9CA8A0] leading-relaxed text-base">
              My experience includes independently developing and deploying
              full-stack applications, working with OCR and AI workflows, and
              conducting penetration testing during my internship.
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-[#26332B] bg-[#101613]">
              <div className="flex items-center gap-2 mb-2">
                <User size={16} className="text-[#00E676]" />
                <span className="text-xs font-medium text-[#9CA8A0] uppercase tracking-wider">
                  Focus
                </span>
              </div>
              <p className="text-sm text-[#F5F7F5]">
                Full-Stack Development, AI Integration, Application Security
              </p>
            </div>

            <div className="p-4 rounded-lg border border-[#26332B] bg-[#101613]">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen size={16} className="text-[#00E676]" />
                <span className="text-xs font-medium text-[#9CA8A0] uppercase tracking-wider">
                  Education
                </span>
              </div>
              <p className="text-sm text-[#F5F7F5]">
                B.IT — Computer Science, Data Security
              </p>
              <p className="text-xs text-[#9CA8A0] mt-1">
                Bangkok University · Expected Dec 2026
              </p>
            </div>

            <div className="p-4 rounded-lg border border-[#26332B] bg-[#101613]">
              <div className="flex items-center gap-2 mb-2">
                <Code2 size={16} className="text-[#00E676]" />
                <span className="text-xs font-medium text-[#9CA8A0] uppercase tracking-wider">
                  Location
                </span>
              </div>
              <p className="text-sm text-[#F5F7F5]">
                Pathum Thani / Bangkok, Thailand
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
