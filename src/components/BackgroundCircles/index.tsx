import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial = {{
        opacity: 0,
      }}
      animate = {{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ['20%', '20%', '50%', '80%', '20%']
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border rounded-full mt-52 border-brand-gray h-[200px] w-[200px] animate-ping opacity-30" />
      <div className="absolute border rounded-full mt-52 border-brand-gray h-[300px] w-[300px] opacity-10" />
      <div className="absolute border rounded-full mt-52 border-brand-gray h-[500px] w-[500px] opacity-10" />
      <div className="absolute border rounded-full mt-52 border-brand-light-blue h-[650px] w-[650px] animate-pulse opacity-80" />
      <div className="absolute border rounded-full mt-52 border-brand-gray h-[800px] w-[800px] opacity-10" />
    </motion.div>
  )
}