import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jakapan Ploensup — Junior Full-Stack Developer",
  description:
    "Portfolio of Jakapan Ploensup — a Junior Full-Stack Developer specializing in AI integration, full-stack web applications, and application security. Based in Bangkok, Thailand.",
  keywords: [
    "Jakapan Ploensup",
    "Full-Stack Developer",
    "AI Integration",
    "Application Security",
    "Web Developer",
    "Bangkok",
    "Thailand",
  ],
  authors: [{ name: "Jakapan Ploensup" }],
  openGraph: {
    title: "Jakapan Ploensup — Junior Full-Stack Developer",
    description:
      "I build full-stack web applications, integrate AI-powered solutions, and develop secure, scalable systems.",
    type: "website",
    locale: "en_US",
    siteName: "JAKAPAN.DEV",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jakapan Ploensup — Junior Full-Stack Developer",
    description:
      "I build full-stack web applications, integrate AI-powered solutions, and develop secure, scalable systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#080B0A] text-[#F5F7F5] min-h-screen overflow-x-hidden`}
      >
        <div className="relative flex flex-col w-full">{children}</div>
      </body>
    </html>
  );
}
