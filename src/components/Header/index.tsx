"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial = {{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate = {{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition = {{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://linkedin.com/in/yagoinacio"
          target="_blank"
          fgColor='#b1c2ef'
          bgColor='transparent'
        />
        <SocialIcon
          url="https://github.com/yagoinacio"
          target="_blank"
          fgColor='#b1c2ef'
          bgColor='transparent'
        />
        <SocialIcon
          url="mailto:yagofaran@gmail.com"
          target="_blank"
          fgColor='#b1c2ef'
          bgColor='transparent'
        />
      </motion.div>

      <motion.div
        initial = {{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate = {{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition = {{
          duration: 1,
        }}
      >
      </motion.div>
    </header>
  )
}