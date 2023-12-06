import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Technology } from '@/typings/schemas'

type Props = {
  directionLeft?: boolean;
  tech: Technology;
}

export function Skill({ directionLeft, tech: { name, src } }: Props) {
  return (
      <motion.div
        initial={{
          x: directionLeft ? -100 : 100,
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
        className="relative group rounded-full border border-brand-gray h-16 w-16 md:h-24 md:w-24 inline-block"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_PORTFOLIO_API}/images/icons/${src}`}
          alt={name}
          width={500}
          height={500}
          className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 object-contain h-11 w-11 md:h-16 md:w-16"
        />
        <div className="absolute -top-[40%] left-1/2 transform -translate-x-1/2 bg-brand-gray/90 px-2 py-1 rounded
          opacity-0 invisible group-hover:opacity-100 group-hover:visible transition whitespace-nowrap">
          {name}
        </div>
      </motion.div>
  )
}