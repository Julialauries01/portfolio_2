'use client'
import React from 'react'
import Link from 'next/link'
import { RiWhatsappFill, RiLinkedinFill, RiGithubFill } from 'react-icons/ri'


export default function SocialIcons () {
  return (
    <div className='flex gap-6  pr-4'>
       <Link href={''} className='text-[#0f851b] text-2xl hover:translate-y-1 transition-all duration-500'><RiWhatsappFill /></Link>
       <Link href={''} className='text-[#121f86] text-2xl hover:translate-y-1 transition-all duration-500'><RiLinkedinFill /></Link>
       <Link href={''} className='text-[#02081f] text-2xl hover:translate-y-1 transition-all duration-500'><RiGithubFill /></Link>

    </div>
  )
}
