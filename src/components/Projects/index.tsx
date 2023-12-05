import React, { useEffect, useRef } from 'react'
import { projects } from '../../assets/projects'
import { ProjectCard } from '../ProjectCard';

type Props = {}

export function Projects({}: Props) {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const container = scrollContainer.current;
    if (!container) {
      return;
    }

    const scrollLeft = container.scrollLeft;
    const itemWidth = container.offsetWidth / projects.length;
    const centeredItemIndex = Math.round(scrollLeft / itemWidth);

    projects.forEach((item, index) => {
      const opacity = index === centeredItemIndex ? 1 : 0.4;
      const element = document.getElementById(`item-${index}`);
      if (element) {
        element.style.opacity = opacity.toString();
      }
    });
  };

  const debounce = (func: () => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(func, delay);
    };
  };

  const debouncedScroll = debounce(handleScroll, 200);

  useEffect(() => {
    const container = scrollContainer.current;
    if (container) {
      container.addEventListener('scroll', debouncedScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', debouncedScroll);
      }
    };
  }, [debouncedScroll]);
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
        ref={scrollContainer}
      >
        {projects.map((project, idx) => {
          return (
            <ProjectCard
              key={project.id}
              id={`item-${idx}`}
              title={project.title}
              description={project.description}
              techs={project.tags}
            />
          )
        })}
      </div>
    </div>
  )
}