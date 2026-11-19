"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  BrainCircuit,
  Server,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

const achievements = {
  ocr: [
    "Contributed to OCR workflow development using Typhoon OCR and Ollama",
    "Implemented Regex-based processing and AI-assisted data validation",
    "Participated in model fine-tuning and benchmarking using Kaggle, Google Colab, and Hugging Face",
  ],
  backend: [
    "Supported backend development using NestJS and PostgreSQL",
    "Used Docker in the development environment",
  ],
  security: [
    "Independently performed penetration testing across 11 modules of a government web application",
    "Used Nmap and other security testing techniques to assess application security",
    "Identified, analyzed, and documented 13 security vulnerabilities: 3 Critical, 2 High, 7 Medium, and 1 Low",
    "Independently prepared penetration testing reports documenting findings and vulnerability severity classifications",
    "Conducted security retesting after remediation, with 12 out of 13 reported vulnerabilities passing verification",
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="py-24">
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
            Professional Experience
          </h2>
        </div>

        {/* Experience Card */}
        <div className="rounded-xl border border-[#26332B] bg-[#101613] overflow-hidden">
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-[#26332B]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#080B0A] border border-[#26332B]">
                  <Briefcase size={22} className="text-[#00E676]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F5F7F5]">
                    AI Developer Intern
                  </h3>
                  <p className="text-[#00E676] font-medium text-sm mt-0.5">
                    Zenith Comp. Co., Ltd.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#080B0A] border border-[#26332B] text-xs text-[#9CA8A0] font-medium self-start sm:self-auto">
                May 2026 — September 2026
              </span>
            </div>
          </div>

          {/* Body — 3 areas of work */}
          <div className="divide-y divide-[#26332B]">
            {/* OCR & AI Development */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <BrainCircuit size={18} className="text-[#00E676]" />
                <h4 className="font-semibold text-[#F5F7F5] text-sm">
                  OCR & AI Development
                </h4>
              </div>
              <ul className="space-y-2.5">
                {achievements.ocr.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={14}
                      className="text-[#00E676] mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-[#9CA8A0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend Development */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Server size={18} className="text-[#00E676]" />
                <h4 className="font-semibold text-[#F5F7F5] text-sm">
                  Backend Development
                </h4>
              </div>
              <ul className="space-y-2.5">
                {achievements.backend.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={14}
                      className="text-[#00E676] mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-[#9CA8A0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Penetration Testing */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck size={18} className="text-[#00E676]" />
                <h4 className="font-semibold text-[#F5F7F5] text-sm">
                  Penetration Testing & Application Security
                </h4>
              </div>

              {/* Project reference */}
              <div className="mb-4 p-3 rounded-md bg-[#080B0A] border border-[#26332B] inline-flex items-center gap-2">
                <span className="text-xs text-[#9CA8A0]">Project:</span>
                <span className="text-xs text-[#F5F7F5] font-medium">
                  Ministry of Labour Portal
                </span>
                <a
                  href="https://portal.mol.go.th/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00E676] hover:text-[#00C853] transition-colors"
                >
                  <ExternalLink size={12} />
                </a>
              </div>

              <ul className="space-y-2.5">
                {achievements.security.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={14}
                      className="text-[#00E676] mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-[#9CA8A0]">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Vulnerability Summary */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Critical", count: 3, color: "text-red-400 border-red-900/30 bg-red-950/10" },
                  { label: "High", count: 2, color: "text-orange-400 border-orange-900/30 bg-orange-950/10" },
                  { label: "Medium", count: 7, color: "text-yellow-400 border-yellow-900/30 bg-yellow-950/10" },
                  { label: "Low", count: 1, color: "text-blue-400 border-blue-900/30 bg-blue-950/10" },
                ].map((sev) => (
                  <div
                    key={sev.label}
                    className={`text-center p-3 rounded-md border ${sev.color}`}
                  >
                    <p className="text-lg font-bold">{sev.count}</p>
                    <p className="text-[11px] uppercase tracking-wider opacity-80">
                      {sev.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
