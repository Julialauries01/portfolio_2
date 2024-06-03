import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link
    href={'/'}
    className='bold-32 !font-extrabold'
    >

      P.<span className='text-primary'>folio</span>

    </Link>
  )
}

export default Logo