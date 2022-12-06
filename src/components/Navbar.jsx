import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/shared/logo.svg'
import menuBtn from '../assets/shared/icon-hamburger.svg'
import { useGlobalContext } from '../context/AppContext'

const Navbar = () => {
  const [path, setPath] = useState('')
  const location = useLocation()

  const { setIsSidebarOpen, pages } = useGlobalContext()

  const setActiveRoute = (route) => setPath(route)

  useEffect(() => {
    setPath(location.pathname)
  }, [])

  return (
    <header className="w-full relative h-24 flex justify-between items-center lg:top-10  lg:after:relative lg:after:h-[1px] lg:after:bg-offWhite lg:after:opacity-[0.25] lg:after:mix-blend-normal lg:after:block lg:after:w-full lg:after:order-1 lg:after:-mr-8">
      <Link role='back to homepage' aria-label='Logo. Navigate to homepage' to='/' className='shrink-0 p-7 active:scale-95 transition-transform xl:pl-14 2xl:pl-44'>
        <img src={logo} alt="logo" />
      </Link>
      <button aria-controls='primary-navigation' onClick={() => setIsSidebarOpen(true)} className='p-7 active:scale-95 transition-transform sm:hidden'>
        <span className="sr-only">Menu</span>
        <img src={menuBtn} alt="menu button" />
      </button>
      <nav className='relative hidden sm:flex h-full lg:order-2'>
        <ul className='font-barlowCondensed tracking-[0.148rem] flex items-center bg-sideBarBlur backdrop-blur-2xl uppercase text-offWhite w-max gap-12 py-7 px-12 h-full lg:tracking-[0.169rem] lg:leading-[1.187rem] xl:w-[47.5rem] 2xl:w-[57.5rem] lg:pl-[5.7rem]'>
          {pages.map((page, index) => (
            <li key={page.id} className='group' onClick={() => setActiveRoute(page.route)}>
              <Link aria-label={`Navigate to ${page.pageName}`} className={`${path === page.route ? 'before:w-1/2 after:w-1/2 before:bg-offWhite after:bg-offWhite' : 'after:bg-darkGrayTwo before:bg-darkGrayTwo after:w-0 before:w-0'} w-max flex gap-4 relative group-hover:before:w-1/2 before:origin-left before:absolute before:-bottom-9 before:right-1/2 before:h-[0.2rem] before:transition-all before:duration-500 group-hover:after:w-1/2 after:origin-right after:absolute after:-bottom-9 after:left-1/2 after:h-[0.2rem] after:transition-all after:duration-500`} to={page.route}><span aria-hidden='true' className='hidden font-bold lg:block'>0{index}</span>{page.pageName}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar