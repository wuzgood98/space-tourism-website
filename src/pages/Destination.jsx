import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { useGlobalContext } from '../context/AppContext'


const Destination = () => {
  const [value, setValue] = useState(0)
  const { data: { destinations }, animateItem, animationOnExit } = useGlobalContext()

  const { name, images, description, distance, travel } = destinations[value]

  return (
    <div className='font-barlowCondensed w-full min-h-screen bg-veryDarkBlue text-offWhite bg-destinationMobile bg-cover bg-bottomCenter sm:bg-centerCenter bg-no-repeat sm:bg-destinationTablet lg:bg-destinationDesktop'>
      <a href='#main' className="absolute z-50 bg-offWhite text-veryDarkBlue px-4 py-2 mx-auto -translate-y-full focus:translate-y-0 transition-transform">Skip to content</a>
      <Navbar />

      <section id='main' className='w-full p-7 flex flex-col gap-8 items-center h-full sm:gap-12 sm:pt-10 lg:pt-40 lg:flex-row lg:justify-between lg:text-left lg:max-w-[60rem] xl:max-w-[71rem] 2xl:max-w-[78rem] lg:mx-auto overflow-y-hidden'>

        <motion.div
          initial='hidden'
          animate='visible'
          exit={animationOnExit}
          variants={animateItem()}
          className='flex w-full flex-col items-center gap-10 sm:gap-14 lg:w-[35rem] lg:gap-28'>
          <h1 className='text-base sm:self-start sm:text-[1.25rem] lg:text-[1.75rem] sm:leading-6 lg:leading-[2.125rem] tracking-[0.17rem] sm:tracking-[0.2rem] lg:tracking-[0.297rem] uppercase'><span aria-hidden='true' className='text-darkGray font-bold mr-2'>01</span> Pick your destination</h1>
          <picture className='max-w-[60%] md:max-w-[90%]'>
            <source srcSet={images.webp} type='image/webp' className='' />
            <img src={images.png} alt={name} />
          </picture>
        </motion.div>

        <div className='flex flex-col gap-5 max-w-[20.44rem] sm:max-w-[35.8rem] lg:gap-7 lg:max-w-[28rem] lg:self-end'>
          <motion.ul
            initial='hidden'
            animate='visible'
            exit={animationOnExit}
            variants={animateItem()}
            className='flex gap-6 justify-center text-sm sm:text-base sm:gap-8 tracking-[0.15rem] sm:tracking-[0.17rem] h-7 lg:self-start'>
            {destinations.map((destination, index) => (
              <li key={destination.name} className='group' onClick={() => setValue(index)}>
                <button className={`${value === index ? 'before:w-1/2 after:w-1/2 before:bg-offWhite after:bg-offWhite text-offWhite' : 'after:bg-darkGrayTwo before:bg-darkGrayTwo after:w-0 before:w-0 text-lightBlue'} uppercase w-max flex gap-4 relative group-hover:before:w-1/2 before:origin-left before:absolute before:-bottom-2 before:right-1/2  before:h-[0.2rem]  before:transition-all group-hover:after:w-1/2 after:origin-right after:absolute after:-bottom-2 after:left-1/2  after:h-[0.2rem] after:transition-all`}>{destination.name}</button>
              </li>
            ))}
          </motion.ul>

          <motion.p
            initial='hidden'
            animate='visible'
            exit={animationOnExit}
            variants={animateItem(0.1)}
            className='text-offWhite text-[3.5rem] sm:text-[5rem] leading-[4rem] sm:leading-[5.75rem] font-bellefair uppercase text-center lg:text-left lg:text-[6.25rem] lg:leading-[7.2rem]'>{name}</motion.p>

          <motion.p
            initial='hidden'
            animate='visible'
            exit={animationOnExit}
            variants={animateItem(0.3)} className='font-barlow text-[0.94rem] sm:text-base leading-[1.56rem] sm:leading-[1.75rem] text-lightBlue mb-3 text-center lg:text-left lg:text-lg lg:leading-8 lg:mb-5'>{description}</motion.p>

          <motion.div
            initial='hidden'
            animate='visible'
            exit={animationOnExit}
            variants={animateItem(0.5)} className='bg-[#383B4B] h-[1px] w-full' />

          <motion.div
            initial='hidden'
            animate='visible'
            exit={animationOnExit}
            variants={animateItem(0.7)} className='flex flex-col gap-6 mb-5 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-28 lg:text-left lg:justify-start'>
            <div className='flex flex-col gap-3'>
              <p className='text-lightBlue uppercase text-sm tracking-[0.15rem]'>avg. distance</p>
              <p className='font-bellefair text-[1.75rem] leading-8 uppercase'>{distance}</p>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='text-lightBlue uppercase text-sm tracking-[0.15rem]'>est. travel time</p>
              <p className='font-bellefair text-[1.75rem] leading-8 uppercase'>{travel}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Destination
