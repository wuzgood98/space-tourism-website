import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import Navbar from '../components/Navbar'
import { useGlobalContext } from '../context/AppContext';


const Home = () => {
  const { animateItem, animationOnExit } = useGlobalContext()

  return (
    <div className='w-full min-h-screen bg-veryDarkBlue text-offWhite bg-homeMobile bg-cover bg-bottomCenter sm:bg-centerCenter bg-no-repeat sm:bg-homeTablet lg:bg-homeDesktop overflow-y-auto'>
      <a href='#main' className="absolute z-50 bg-offWhite text-veryDarkBlue px-4 py-2 mx-auto -translate-y-full focus:translate-y-0 transition-transform">Skip to content</a>
      <Navbar />

      <motion.section
        id='main'
        initial='hidden'
        animate='visible'
        exit={animationOnExit}
        variants={animateItem()}
        className='w-full p-7 flex flex-col gap-16 text-center items-center justify-between h-full sm:pt-20 md:gap-24 md:pt-[8rem] lg:pt-44 lg:flex-row lg:justify-between lg:text-left lg:max-w-[60rem] xl:max-w-[72rem] 2xl:max-w-[78rem] lg:mx-auto lg:mb-20'>
        <div className='flex flex-col items-center justify-center max-w-[20rem] gap-14 sm:gap-5 sm:max-w-[27.75rem] lg:max-w-[28.125rem] lg:items-start '>
          <motion.h1
            initial='hidden'
            animate='visible'
            exit={animationOnExit}
            variants={animateItem()}
            className='font-barlowCondensed uppercase tracking-[0.17rem] text-lightBlue sm:text-[1.25rem] sm:leading-[1.5rem] sm:tracking-[0.21rem] lg:text-[1.75rem] lg:tracking-[0.295rem] lg:leading-[2.125rem]'>So, you want to travel to</motion.h1>
          <motion.h2
            initial='hidden'
            animate='visible'
            exit={animationOnExit}
            variants={animateItem(0.3)}
            className='font-bellefair text-[5rem] leading-5 uppercase sm:text-[9.375rem] sm:leading-[9.375rem] lg:leading-[10.75rem]'>Space</motion.h2>
          <motion.p
            initial='hidden'
            animate='visible'
            exit={animationOnExit}
            variants={animateItem(0.5)}
            className='font-barlow text-[0.94rem] leading-[1.56rem] text-lightBlue sm:text-base sm:leading-[1.75rem] lg:text-lg'>
            Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </motion.p>
        </div>
        <motion.div
          exit={animationOnExit}
          variants={animateItem(0.2)}
          className='mb-12 lg:mb-0 lg:self-end'
        >
          <Link id='large-button' to='/destination' className='relative font-bellefair text-xl tracking-[0.078rem] uppercase py-0 px-8 aspect-square rounded-full bg-offWhite outline-none inline-grid place-content-center text-veryDarkBlue sm:px-12 lg:px-16 sm:text-[2rem] sm:leading-[2.3rem] sm:tracking-[0.125rem] lg:leading-[2.3125rem]  after:absolute after:bg-offWhite/[0.15] after:opacity-0 after:h-full after:w-full after:rounded-full hover:after:scale-150 focus:after:scale-150 hover:after:opacity-100 focus:after:opacity-100'>explore</Link>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Home