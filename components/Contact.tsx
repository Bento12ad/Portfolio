"use client";

import { motion } from "framer-motion";
import { Github, Mail, Linkedin, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "jakapan.work.dev@gmail.com",
    href: "mailto:jakapan.work.dev@gmail.com",
    icon: <Mail size={22} />,
    description: "Send me an email",
  },
  {
    label: "GitHub",
    value: "Bento12ad",
    href: "https://github.com/Bento12ad",
    icon: <Github size={22} />,
    description: "Check out my code",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Jakapan Ploensup",
    href: "https://www.linkedin.com/in/jakapan-ploensup-620678284",
    icon: <Linkedin size={22} />,
    description: "Connect professionally",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#00E676]" />
            <h2 className="text-2xl font-bold text-[#F5F7F5]">Contact</h2>
            <div className="h-px w-8 bg-[#00E676]" />
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-[#F5F7F5] mb-4">
            Let&apos;s Build Something Together.
          </h3>
          <p className="text-[#9CA8A0] max-w-lg mx-auto">
            I&apos;m open to new opportunities, collaborations, and interesting
            projects. Feel free to reach out.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-xl border border-[#26332B] bg-[#101613] hover:border-[#00E676]/30 transition-all duration-300 text-left"
            >
              {/* Arrow indicator */}
              <ArrowUpRight
                size={16}
                className="absolute top-4 right-4 text-[#26332B] group-hover:text-[#00E676] transition-colors"
              />

              <div className="mb-4 p-2.5 rounded-lg bg-[#080B0A] border border-[#26332B] text-[#9CA8A0] group-hover:text-[#00E676] group-hover:border-[#00E676]/20 transition-all inline-block">
                {link.icon}
              </div>

              <p className="text-xs text-[#9CA8A0] uppercase tracking-wider mb-1">
                {link.label}
              </p>
              <p className="text-sm font-medium text-[#F5F7F5] group-hover:text-[#00E676] transition-colors truncate">
                {link.value}
              </p>
              <p className="text-xs text-[#9CA8A0] mt-1">
                {link.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Direct email CTA */}
        <a
          href="mailto:jakapan.work.dev@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#00E676] text-[#080B0A] font-semibold text-sm rounded-lg hover:bg-[#00C853] transition-all duration-200 hover:shadow-lg hover:shadow-[#00E676]/20"
        >
          <Mail size={16} />
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
