import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#080B0A] text-[#F5F7F5]">
      <Navbar />

      <Hero />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>

      <footer className="py-10 text-center border-t border-[#26332B]">
        <p className="text-[#9CA8A0] text-sm">
          &copy; {new Date().getFullYear()} Jakapan Ploensup. Built with Next.js
        </p>
      </footer>
    </main>
  );
}
