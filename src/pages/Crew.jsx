import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useGlobalContext } from '../context/AppContext'
import { motion } from 'framer-motion'


const Crew = () => {
  const [value, setValue] = useState(0)
  const { data: { crew }, animateItem, animationOnExit } = useGlobalContext()

  const { name, images, role, bio } = crew[value]

  return (
    <div className='relative backdrop:w-full min-h-screen bg-veryDarkBlue text-offWhite bg-crewMobile bg-cover bg-bottomCenter sm:bg-centerCenter bg-no-repeat sm:bg-crewTablet lg:bg-crewDesktop'>
      <a href='#main' className="absolute z-50 bg-offWhite text-veryDarkBlue px-4 py-2 mx-auto -translate-y-full focus:translate-y-0 transition-transform">Skip to content</a>

      <Navbar />

      <main id='main' className='w-full p-7 flex flex-col gap-8 items-center h-full lg:h-[47.2rem] sm:pb-0 lg:px-0 sm:gap-16 sm:flex-col-reverse sm:justify-between sm:pt-10 lg:flex-row-reverse lg:justify-between lg:text-left lg:max-w-[60rem] xl:max-w-[68rem] 2xl:max-w-[77rem] lg:mx-auto lg:mt-auto'>
        <motion.div
          initial='hidden'
          animate='visible'
          exit={animationOnExit}
          variants={animateItem()}
          className='flex w-full flex-col items-center gap-10 border-b border-[#383B4B] sm:border-b-0 sm:gap-14 lg:-pb-12 lg:max-w-[35rem] lg:self-end lg:gap-28'>

          <h1 className='font-barlowCondensed block sm:hidden text-base sm:self-start sm:text-[1.25rem] lg:text-[1.75rem] sm:leading-6 lg:leading-[2.125rem] tracking-[0.17rem] sm:tracking-[0.2rem] lg:tracking-[0.297rem] uppercase'><span aria-hidden='true' className='text-darkGray font-bold mr-2'>02</span>Meet your crew</h1>

          <picture className='shrink-0 max-w-[60%] md:max-w-[90%] lg:absolute bottom-0'>
            <source srcSet={images.webp} type='image/webp' />
            <img src={images.png} alt={name} />
          </picture>

        </motion.div>

        <div className='flex flex-col gap-5 items-center lg:items-start w-full lg:w-max sm:flex-col-reverse lg:gap-28 lg:mb-6'>

          <motion.ul
            initial='hidden'
            animate='visible'
            exit={animationOnExit}
            variants={animateItem()}
            className='flex gap-5'>
            {crew.map((_, index) => (
              <li key={index}>
                <button onClick={() => setValue(index)} className={`w-[0.63rem] h-[0.63rem] lg:h-[0.94rem] lg:w-[0.94rem] ${value === index ? 'bg-offWhite' : 'bg-offWhite/[0.17]'}  rounded-full transition-colors`}></button>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial='hidden'
            animate='visible'
            exit={animationOnExit}
            variants={animateItem()}
            className='font-barlowCondensed flex flex-col gap-2 items-center text-center lg:text-left lg:items-start w-full lg:w-max sm:gap-5 transition-all'>
            <h1 className='hidden sm:block text-base sm:self-start sm:mb-6 sm:text-[1.25rem] xl:text-[1.75rem] sm:leading-6 xl:leading-[2.125rem] tracking-[0.17rem] sm:tracking-[0.21rem] xl:tracking-[0.297rem] xl:mb-32 uppercase transition-all'><span className='text-darkGray font-bold mr-2'>02</span>Meet your crew</h1>

            <p className='font-bellefair text-darkGray text-base uppercase sm:text-2xl xl:text-[2rem] xl:leading-[2.31rem] transition-all'>{role}</p>
            <p className='font-bellefair uppercase text-2xl mb-2 sm:text-[2.5rem] xl:text-[3.5rem] xl:leading-[4rem] transition-all'>{name}</p>
            <p className='font-barlow text-lightBlue  text-[0.94rem] leading-[1.56rem] sm:max-w-[28.63rem] lg:max-w-[28rem] sm:text-base sm:leading-7 xl:text-lg transition-all mb-6 sm:mb-0'>{bio}</p>
          </motion.div>

        </div>

      </main>

    </div>
  )
}

export default Crew