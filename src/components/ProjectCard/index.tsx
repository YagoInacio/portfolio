import React from 'react'
import Image from 'next/image'
import { Project } from '@/typings/schemas'

type Props = Project

export function ProjectCard({
  id,
  title,
  description,
  techs,
}: Props) {
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
      <div className="px-0 md:px-5 xl:px-10 w-full">
        <h4 className="text-3xl font-light">{title}</h4>
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
        </div>

        <ul className="list-disc space-y-4 ml-5 text-md">
          {description.map((desc, idx) => {
            return (
              <li key={idx}>{desc}</li>
            )
          })}
        </ul>
    </article>
  )
}