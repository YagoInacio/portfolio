import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { WorkExperience } from "@/components/WorkExperience";
import { fetchExperiences } from "@/fetchers/experiencesFetcher";
import { fetchProjects } from "@/fetchers/projectsFetcher";
import { fetchSkills } from "@/fetchers/skillsFetcher";

export default async  function Home() {
  const experiences = await fetchExperiences()
  const skills = await fetchSkills()
  const projects = await fetchProjects()

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
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      <section id="portfolio" className="snap-center">
        <Portfolio />
      </section>

      {/* <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <CaretUp
              className="
                h-10 w-10 bg-brand-700 rounded-full filter grayscale-0 hover:grayscale items-center justify-center
              "
            />
          </div>
        </footer>
      </Link> */}
    </main>
  )
}
