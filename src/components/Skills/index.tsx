'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { Skill } from '../Skill'
import { Technology } from '@/typings/schemas'

type Props = {
  skills: Technology[]
}

export function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}
      transition={{ duration: 1.5, }}
      className="min-h-screen flex relative flex-col text-center md:text-left xl:flex-row
        max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-brand-light-blue text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-5">
        {skills.map((skill, idx) => {
          return (
            <Skill
              key={skill.id}
              tech={skill}
              directionLeft={idx < skills.length / 2}
            />
          )
        })}
      </div>
    </motion.div>
  )
}