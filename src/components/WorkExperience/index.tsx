'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ExperienceCard } from '../ExperienceCard'
import { experiences } from '../../assets/experiences'

type Props = {}

export function WorkExperience({}: Props) {
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

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        {experiences.map((xp) => {
          return (
            <ExperienceCard
              key={xp.id}
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