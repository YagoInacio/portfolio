import React from 'react'
import { ProjectCard } from '../ProjectCard';
import { Project } from '@/typings/schemas';

type Props = {
  projects: Project[];
}

export function Projects({ projects }: Props) {
  return (
    <div className="
      h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
      justify-evenly mx-auto items-center z-0
    ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-brand-light-blue text-2xl">
        Projects
      </h3>

      <div
        className="
          w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
          scrollbar-thin scrollbar-track-brand-700 scrollbar-thumb-brand-text/20
        "
      >
        {projects.map((project, idx) => {
          return (
            <ProjectCard
              key={project.id}
              id={`item-${idx}`}
              title={project.title}
              description={project.description}
              techs={project.techs}
            />
          )
        })}
      </div>
    </div>
  )
}