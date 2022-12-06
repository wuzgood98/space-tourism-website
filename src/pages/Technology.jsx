import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { useGlobalContext } from '../context/AppContext'


const Technology = () => {
  const [value, setValue] = useState(0)
  const { data: { technology }, animateItem, animationOnExit } = useGlobalContext()

  const { name, images, description } = technology[value]

  return (
    <div className='w-full min-h-screen bg-veryDarkBlue text-offWhite bg-technologyMobile bg-cover bg-bottomCenter sm:bg-centerCenter bg-no-repeat sm:bg-technologyTablet lg:bg-technologyDesktop'>
      <a href='#main' className="absolute z-50 bg-offWhite text-veryDarkBlue px-4 py-2 mx-auto -translate-y-full focus:translate-y-0 transition-transform">Skip to content</a>
      <Navbar />

      <main id='main' className='w-full flex flex-col gap-8 items-center h-full sm:pt-7 lg:mt-20 lg:h-[39rem] lg:justify-between lg:flex-row-reverse lg:max-w-[68rem] lg:pl-7 xl:pl-0 xl:max-w-[79rem] 2xl:max-w-[97rem] lg:ml-auto pb-12 2xl:pb-0 2xl:mt-36 2xl:pl-12'>

        <div className='flex w-full 2xl:w-[40%] flex-col items-center gap-10 h-max sm:gap-5 lg:w-auto lg:self-end'>
          <motion.h1
            initial='hidden'
            animate='visible'
            exit={animationOnExit}
            variants={animateItem(0.01)}
            className='block lg:hidden font-barlowCondensed text-base sm:self-start sm:ml-7 sm:text-[1.25rem] lg:text-[1.75rem] sm:leading-6 lg:leading-[2.125rem] tracking-[0.17rem] sm:tracking-[0.2rem] lg:tracking-[0.297rem] uppercase'><span aria-hidden='true' className='text-darkGray font-bold mr-2'>03</span> Space launch 101</motion.h1>

          <motion.picture
            initial='hidden'
            animate='visible'
            exit={animationOnExit}
            variants={animateItem(0.1)}
            className='w-full object-cover transition-all'>
            <source srcSet={images.portrait} media="(min-width: 1024px)" />
            <img src={images.landscape} alt={name} className='w-full' />
          </motion.picture>
        </div>

        <div className='flex flex-col gap-7 lg:h-full lg:justify-center items-center'>
          <motion.h1
            initial='hidden'
            animate='visible'
            exit={animationOnExit}
            variants={animateItem(0.01)}
            className='hidden lg:block font-barlowCondensed text-base sm:self-start sm:text-[1.25rem] lg:text-[1.75rem] sm:leading-6 lg:leading-[2.125rem] tracking-[0.17rem] sm:tracking-[0.2rem] lg:tracking-[0.297rem] uppercase lg:mb-36'><span className='text-darkGray font-bold mr-2'>03</span> Space launch 101</motion.h1>

          <motion.div
            initial='hidden'
            animate='visible'
            exit={animationOnExit}
            variants={animateItem(0.01)}
            className='flex flex-col lg:flex-row gap-7 h-max items-center xl:gap-16 lg:mb-12'>
            <motion.ul
              variants={animateItem()}
              className='flex lg:flex-col gap-5 lg:gap-8'>
              {technology.map((_, index) => (
                <li key={index} onClick={() => setValue(index)}>
                  <button className={`font-bellefair text-base tracking-[0.06rem] w-[2.5rem] h-[2.5rem] sm:w-[3.63rem] sm:h-[3.63rem] xl:w-20 xl:h-20 sm:text-2xl xl:text-[2rem] xl:leading-[2.1325rem] xl:tracking-[0.125rem] sm:tracking-[0.094rem] rounded-full border ${value === index ? 'bg-offWhite text-veryDarkBlue border-offWhite' : 'bg-transparent text-offWhite border-offWhite/[0.25]'}  grid place-content-center transition-colors duration-300`}>{index + 1}</button>
                </li>
              ))}
            </motion.ul>

            <div className='flex flex-col p-2 gap-1 sm:gap-3 sm:p-0 items-center lg:items-start xl:w-[32.375rem]'>
              <motion.p
                initial='hidden'
                animate='visible'
                exit={animationOnExit}
                variants={animateItem(0.1)}
                className='font-barlowCondensed text-sm sm:text-base sm:tracking-[0.19rem] uppercase tracking-[0.15rem] text-lightBlue'>the terminology ...</motion.p>
              <motion.p
                initial='hidden'
                animate='visible'
                exit={animationOnExit}
                variants={animateItem(0.3)}
                className='font-bellefair text-2xl sm:text-[2.5rem] xl:text-[3.5rem] xl:leading-[4rem] sm:leading-[2.875rem] uppercase tracking-[0.15rem] mb-2'>{name}</motion.p>
              <motion.p
                initial='hidden'
                animate='visible'
                exit={animationOnExit}
                variants={animateItem(0.5)}
                className='font-barlow text-[0.94rem]  sm:text-base xl:text-lg sm:leading-7 leading-[1.56rem] text-center lg:text-left max-w-[20.44rem] sm:max-w-[28.625rem] xl:max-w-[27.75rem] xl:leading-8'>{description}</motion.p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default Technology