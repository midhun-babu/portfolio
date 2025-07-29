"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useEffect, useState } from "react";

export default function Home() {
  // Simple fade-in animation hook
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-neutral-900 min-h-screen px-6 py-12 sm:px-12 sm:py-20 font-sans text-gray-300">
      <main
        className={`mx-auto max-w-3xl space-y-28 transition-opacity duration-1000 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Header */}
        <header className="text-center">
          <h1 className="text-white text-5xl font-extrabold tracking-tight mb-2">
            Midhun Babu
          </h1>
          <p className="text-base text-neutral-400 max-w-md mx-auto leading-relaxed">
            Aspiring software engineer with a passion for purposeful, creative
            projects.
          </p>
        </header>

        {/* About Section */}
        <section id="about" className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-200 border-b border-gray-700 pb-2">
            About
          </h2>
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-200 border-b border-gray-700 pb-2">
            Skills
          </h2>
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-200 border-b border-gray-700 pb-2">
            Projects
          </h2>
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-200 border-b border-gray-700 pb-2">
            Contact
          </h2>
          <Contact />
        </section>
      </main>
    </div>
  );
}
