"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  showText?: boolean
  textClassName?: string
  imageHeight?: number
  imageWidth?: number
}

export function Logo({ 
  className, 
  showText = true, 
  textClassName,
  imageHeight = 32, 
  imageWidth = 32 
}: LogoProps) {
  const { theme } = useTheme()
  
  // Default to light logo, use dark logo in dark mode
  const logoSrc = theme === 'dark' ? '/whitebacklogo.jpg' : '/darkbacklogo.jpg'
  const textColor = theme === 'dark' ? 'text-white' : 'bg-gradient-brand bg-clip-text text-transparent'
  
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Image 
        src={logoSrc} 
        alt="Restfree Logo" 
        height={imageHeight} 
        width={imageWidth}
        className="rounded-md object-contain"
      />
      {showText && (
        <span className={cn(`text-2xl font-bold ${textColor} hover:scale-105 transition-transform duration-300`, textClassName)}>
          restfree
        </span>
      )}
    </div>
  )
}

export function LogoLink({ 
  className, 
  showText = true, 
  textClassName,
  imageHeight = 32, 
  imageWidth = 32 
}: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center gap-2 hover:opacity-90', className)}>
      <Logo 
        showText={showText} 
        textClassName={textClassName}
        imageHeight={imageHeight}
        imageWidth={imageWidth}
      />
    </Link>
  )
}
