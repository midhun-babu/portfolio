import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="min-h-screen w-full bg-neutral-900">
        <div className=" flex flex-col items-center pt-20">
          <div className="justify-start">
            <h1 className="text-white text-5xl font-bold">Midhun Babu</h1>
            <p className="text-sm">
              I am an aspiring software engineer, indulging in creative
              prospects and building innovative projects.
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen w-full">
        <About />
      </section>
      <section className="min-h-screen w-full bg-neutral-900">
        <Skills />
      </section>
      <section className="min-h-screen w-full">
        <Projects />
      </section>
      <section className="min-h-screen w-full bg-neutral-900">
        <Contact />
      </section>
    </div>
  );
}
