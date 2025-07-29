import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-neutral-700 to-black min-h-screen px-6 py-12 sm:px-12 sm:py-20">
      <main className="mx-auto max-w-3xl space-y-24">
        <section>
          <h1 className="text-white text-5xl font-bold pb-4">Midhun Babu</h1>
          <p className="text-lg text-neutral-300">
            I am an aspiring software engineer, indulging in creative prospects
            and building innovative projects.
          </p>
        </section>

        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}