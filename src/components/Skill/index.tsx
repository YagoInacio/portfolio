import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean
}

export function Skill({ directionLeft }: Props) {
  const MotionImage = motion(Image)

  return (
    <div className="relative flex">
      <MotionImage
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
        src="https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png"
        alt="Technology logo"
        width={500}
        height={500}
        className='rounded-full border border-brand-gray object-cover h-24 w-24 xl:h-32 xl:w-32'
      />
    </div>
  )
}