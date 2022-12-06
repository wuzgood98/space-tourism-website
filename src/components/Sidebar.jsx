import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import iconClose from '../assets/shared/icon-close.svg'
import { useGlobalContext } from '../context/AppContext'

const Sidebar = () => {
  const { setIsSidebarOpen, isSidebarOpen, pages } = useGlobalContext()

  const hideSidebar = () => setIsSidebarOpen(false)

  return (
    <nav aria-label='Sidebar' onClick={(e) => e.target.classList.contains('fixed') && setIsSidebarOpen(false)} className={`fixed ${isSidebarOpen ? 'visible translate-x-0' : 'invisible translate-x-full'} top-0 right-0 w-screen overflow-hidden h-screen z-10 text-offWhite font-barlowCondensed transition-all duration-500`}>
      <button role='close primary navigation' aria-controls='primary-navigation' onClick={hideSidebar} className='absolute top-8 right-8 z-20 active:scale-95 transition-transform'>
        <img src={iconClose} alt="close sidebar icon" />
      </button>
      <ul id='primary-navigation' className='bg-black/95 tracking-widest font-light text-lg uppercase supports-[backdrop-filter]:bg-white/[0.04] supports-[backdrop-filter]:backdrop-blur-2xl h-full w-4/6 absolute right-0 top-0 px-8 space-y-7 pt-28'>
        {pages.map((page, index) => (
          <li key={page.id}>
            <Link aria-label={`Navigate to ${page.pageName}`} onClick={hideSidebar} className='w-max flex gap-4' to={page.route}><span aria-hidden='true' className='font-medium w-4'>0{index}</span> <span>{page.pageName}</span></Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar