import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { WorkExperience } from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="
      h-screen snap-y snap-mandatory overflow-scroll z-0
      scrollbar scrollbar-track-brand-700 scrollbar-thumb-brand-text/20
    ">

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="portfolio" className="snap-center">
        <Portfolio />
      </section>      
    </main>
  )
}
