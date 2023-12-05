'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ExperienceCard } from '../ExperienceCard'
import { Experience } from '@/typings/schemas'

type Props = {
  experiences: Experience[]
}

export function WorkExperience({ experiences }: Props) {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const container = scrollContainer.current;
    if (!container) {
      return;
    }

    const scrollLeft = container.scrollLeft;
    const itemWidth = container.offsetWidth / experiences.length;
    const centeredItemIndex = Math.round(scrollLeft / itemWidth);

    experiences.forEach((item, index) => {
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
    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}
      transition={{ duration: 1.5, }}
      className="h-screen flex flex-col relative overflow-hidden text-lft md:flex-row
      max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-brand-light-blue text-2xl">
        Experience
      </h3>

      <div
        className="
          w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
          scrollbar-thin scrollbar-track-brand-700 scrollbar-thumb-brand-text/20
        "
        ref={scrollContainer}
      >
        {experiences.map((xp, idx) => {
          return (
            <ExperienceCard
              key={xp.id}
              id={`item-${idx}`}
              company={xp.company}
              logo={xp.logo}
              period={xp.period}
              position={xp.position}
              summary={xp.summary}
              techs={xp.techs}
            />
          )
        })}
      </div>
    </motion.div>
  )
}
