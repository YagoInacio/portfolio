import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
  position: string;
  company: string;
  logo: string;
  period: string;
  summary: string[];
  techs: string[];
}

export function ExperienceCard({
  position, company, logo, period, summary, techs
}: Props) {
  const MotionImage = motion(Image)

  return (
    <article 
      className="
        flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center overflow-hidden max-h-[70vh] xl:max-h-[60vh] overflow-y-scroll
        bg-brand-700 p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 
      "
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
        src={logo}
        alt="company logo"
        width={200}
        height={200}
      />

      <div className="px-0 md:px-5 xl:px-10">
        <h4 className="text-3xl font-light">{position}</h4>
        <p className="font-bold text-xl mt-1">{company}</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png"
            alt="Technology logo"
            width={500}
            height={500}
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png"
            alt="Technology logo"
            width={500}
            height={500}
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png"
            alt="Technology logo"
            width={500}
            height={500}
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png"
            alt="Technology logo"
            width={500}
            height={500}
          />
        </div>
        <p className="uppercase py-5 text-brand-gray">{period}</p>

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