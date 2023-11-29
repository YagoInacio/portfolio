"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { BackgroundCircles } from '../BackgroundCircles'
import Image from 'next/image'
import '../../app/globals.css'
import Link from 'next/link'

type Props = {}

export function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['>_ Hello There! I am Yago!', '<FullstackDeveloper />', 'NodeJS | Typescript | AWS Certified | SQL | Kubernetes'],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="/logo.svg"
        alt="Yago Faran Logo"
        width={400}
        height={240}
        priority
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-brand-light-blue pb-2 tracking-[5px]">Software Engineer</h2>
        <h1 className="text-2xl lg:text-3xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor='#4198b7'/>
        </h1>

        <nav className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#portfolio">
            <button className="heroButton">Portfolio</button>
          </Link>
        </nav>
      </div>
    </div>
  )
}