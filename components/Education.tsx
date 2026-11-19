"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Download, ExternalLink } from "lucide-react";
import Image from "next/image";

type Certificate = {
  title: string;
  issuer: string;
  file?: string;
  type: string;
};

const certificates: Certificate[] = [
  {
    title: "NCSA Basic Cybersecurity",
    issuer: "National Cyber Security Agency",
    file: "/certificates/BAH3EFTU9JHLJ.pdf",
    type: "Security",
  },
  {
    title: "AWS Academy Badge",
    issuer: "Amazon Web Services",
    file: "/certificates/blob.png",
    type: "Cloud",
  },
  {
    title: "Youth Cyber Guardian Thailand 2025",
    issuer: "Royal Thai Armed Forces HQ Cyber Command",
    file: "/certificates/cyber-guardian-2025.pdf",
    type: "Security",
  },
];

export default function Education() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const withBasePath = (path?: string) => (path ? `${basePath}${path}` : "#");

  return (
    <section id="education" className="py-24">
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
            Education & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Education Card */}
          <div className="rounded-xl border border-[#26332B] bg-[#101613] p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-[#080B0A] border border-[#26332B] shrink-0">
                <GraduationCap size={22} className="text-[#00E676]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-[#F5F7F5]">
                  Bangkok University
                </h3>
                <p className="text-sm text-[#00E676] font-medium mt-0.5">
                  Bachelor of Information Technology and Innovation
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#9CA8A0]">Specialization:</span>
                <span className="text-[#F5F7F5]">
                  Computer Science — Data Security
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#9CA8A0]">Expected Graduation:</span>
                <span className="text-[#F5F7F5]">December 2026</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#9CA8A0]">Location:</span>
                <span className="text-[#F5F7F5]">Pathum Thani, Thailand</span>
              </div>
            </div>

            {/* University Logo */}
            <div className="pt-4 border-t border-[#26332B] flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0 overflow-hidden rounded-lg border border-[#26332B] bg-[#080B0A] p-1.5">
                <Image
                  src={withBasePath("/images/bangkokUni.svg")}
                  alt="Bangkok University logo"
                  fill
                  className="object-contain brightness-0 invert opacity-50"
                />
              </div>
              <span className="text-xs text-[#9CA8A0]">
                Bangkok University — Established 1962
              </span>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-lg border border-[#26332B] bg-[#101613] p-5 hover:border-[#00E676]/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="p-2 rounded-md bg-[#080B0A] border border-[#26332B] shrink-0 group-hover:border-[#00E676]/20 transition-colors">
                      <Award
                        size={16}
                        className="text-[#00E676]"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-[#F5F7F5] group-hover:text-[#00E676] transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[#9CA8A0] mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    {cert.file && (
                      <>
                        <a
                          href={withBasePath(cert.file)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md text-[#9CA8A0] hover:text-[#00E676] hover:bg-[#080B0A] transition-all"
                          aria-label={`View ${cert.title}`}
                        >
                          <ExternalLink size={14} />
                        </a>
                        <a
                          href={withBasePath(cert.file)}
                          download
                          className="p-1.5 rounded-md text-[#9CA8A0] hover:text-[#00E676] hover:bg-[#080B0A] transition-all"
                          aria-label={`Download ${cert.title}`}
                        >
                          <Download size={14} />
                        </a>
                      </>
                    )}
                  </div>
                </div>

                {/* Badge */}
                <div className="mt-3">
                  <span className="inline-flex px-2 py-0.5 rounded text-[11px] bg-[#080B0A] border border-[#26332B] text-[#9CA8A0]">
                    {cert.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
