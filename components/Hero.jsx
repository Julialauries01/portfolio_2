
import React from 'react'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'
import SocialIcons from './SocialIcons'
import Image from 'next/image'
import Badge from './Badge'
import { FaFigma } from 'react-icons/fa6'

const Hero = () => {
  return (
    <section className='max-padd-container py-20 bg-[#fdf3fb] dark:bg-transparent'>
      <div className='flexCenter gap-24 flex-col xl:flex-row'>
        {/*left */}
        <div className='flex flex-1 flex-col pt-12 xl:pt-32'>
        <h1 className='h1 !font-extrabold'>
          From Pixels to Perfection Exploring the Essence of Web Design
        </h1>
        <p>Exploe my portfolio where creativy and functionality converge...</p>
        <div className='mt-6 flex gap-4'>
          <Button className='gap-x-2 shadow-xl'>
            Hire me <MoveRight size={20}/>
          </Button>
          <Button className='shadow-xl bg-black hover:bg=[#222] text-white'>
            Download CV
          </Button>
        </div>
        <div className='mt-20'>
          <SocialIcons />
        </div>
        </div>
        {/*right */}
        <div>
          <div className=' flex flex-1 relative z-10 top-12'>
          <Image src={'/bg.png'} height={488} width={488} priority alt='' className='drop-shadow-xl'/>
        </div>
        <div className='hidden xl:flex'>
          <Badge 
          containerStyles={'absolute top-[60%] left-0 '} icon={<FaFigma />}
          />
        </div>
      </div>
      </div>
      
    </section>

  )
}

export default Hero