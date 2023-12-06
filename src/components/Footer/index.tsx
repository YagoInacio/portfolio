'use client'
import { CaretUp } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

type Props = {}

export function Footer({}: Props) {
  return (
    <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <CaretUp
            className="
              h-10 w-10 bg-brand-700 rounded-full filter grayscale-0 hover:grayscale items-center justify-center
            "
          />
        </div>
      </footer>
    </Link>
  )
}