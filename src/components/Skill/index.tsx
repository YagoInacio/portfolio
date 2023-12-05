import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Technology } from '@/typings/schemas'

type Props = {
  directionLeft?: boolean;
  tech: Technology;
}

export function Skill({ directionLeft, tech: { name, src } }: Props) {
  const MotionImage = motion(Image)

  return (
      <motion.div
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
        className="relative group rounded-full border border-brand-gray h-24 w-24 xl:h-32 xl:w-32 inline-block"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_PORTFOLIO_API}/images/icons/${src}`}
          alt={name}
          width={500}
          height={500}
          className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 object-contain h-16 w-16 xl:h-20 xl:w-20"
        />
        <div className="absolute -top-[40%] left-1/2 transform -translate-x-1/2 bg-brand-gray/90 px-2 py-1 rounded
          opacity-0 invisible group-hover:opacity-100 group-hover:visible transition whitespace-nowrap">
          {name}
        </div>
      </motion.div>
  )
}