import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { dateFormatter } from '@/utils/dateFormatter'
import { Experience } from '@/typings/schemas'

type Props = Experience

export function ExperienceCard({
  id, position, company, logo, period, summary, techs
}: Props) {
  const MotionImage = motion(Image)

  return (
    <article
      id={id}
      className={`
        flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center overflow-hidden max-h-[65vh] xl:max-h-[60vh]
        overflow-y-scroll scrollbar-thin scrollbar-track-brand-700 scrollbar-thumb-brand-text/20
        bg-brand-700 p-10 ${id === 'item-0' ? 'opacity-100' : 'opacity-40'} transition-opacity duration-200
      `}
    >
      <MotionImage
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2, }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true, }}
        className="w-24 h-24 rounded-full object-cover object-center"
        src={`${process.env.NEXT_PUBLIC_PORTFOLIO_API}/images/${logo}`}
        alt={`${company} logo`}
        width={200}
        height={200}
      />

      <div className="px-0 md:px-5 xl:px-10">
        <h4 className="text-3xl font-light">{position}</h4>
        <p className="font-bold text-xl mt-1">{company}</p>
        <div className="flex space-x-2 my-2">
          {techs.map((tech) => {
            return (
              <div key={tech.id} className="group h-8 w-8 rounded-full items-center relative inline-block">
                <Image
                  className="h-8 w-8 object-contain absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
                  src={`${process.env.NEXT_PUBLIC_PORTFOLIO_API}/images/icons/${tech.src}`}
                  alt={tech.name}
                  width={500}
                  height={500}
                />
                <div className="absolute top-[-120%] -translate-x-1/4 bg-brand-gray/90 px-2 py-1 rounded
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition whitespace-nowrap">
                  {tech.name}
                </div>
              </div>
            )
          })}
        </div>
        <p className="uppercase py-5 text-brand-gray">{`${dateFormatter(period.start)} - ${dateFormatter(period.end)}`}</p>

        <ul className="list-disc space-y-4 ml-5 text-md">
          {summary.map((sum, idx) => {
            return (
              <li key={idx}>{sum}</li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}