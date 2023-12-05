/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

export function About({}: Props) {
  const MotionImage = motion(Image)

  return (
    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}
      transition={{ duration: 1.5, }}
      className="flex flex-col relative h-screen
        text-center md:text-left md:flex-row max-w-7xl px-10
        justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-brand-light-blue text-2xl">
        About
      </h3>

      <MotionImage
        initial = {{
          x: -200,
          opacity: 0,
        }}
        transition = {{
          duration: 1.2,
        }}
        whileInView = {{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
          md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        src="https://portfolio.yagofaran.dev/api/images/avatar.jpg"
        alt="Yago's avatar'"
        width={400}
        height={240}
        priority
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Here is a <span className="underline decoration-brand-light-blue/50">little</span> background
        </h4>
        <p className="text-sm">
          Hello, I'm Yago! A passionate Software Engineer with over 4 years of experience dedicated to crafting innovative solutions for diverse industries.
          Skilled in designing and implementing systems to integrate data from various sources based on IoT technologies and devices.
          I specialize in developing robust systems using technologies such as Node, Typescript/Javascript, and PostgreSQL.
          I thrive in cloud environments like AWS and Azure, deploying scalable applications with Docker containers and Kubernetes clusters.
          I'm excited about the ever-changing landscape of technology and am committed to continuous learning to stay at the forefront of innovation.
        </p>
      </div>
    </motion.div>
  )
}