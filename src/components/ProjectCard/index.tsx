import React from 'react'
import Image from 'next/image'

type Props = {
  id: string;
  title: string;
  description: string[];
  techs: string[];
}

export function ProjectCard({
  id,
  title,
  description,
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
      <div className="px-0 md:px-5 xl:px-10">
        <h4 className="text-3xl font-light">{title}</h4>
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