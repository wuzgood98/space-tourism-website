import React, { createContext, useContext, useState } from 'react'
import spaceData from '../../data.json'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [data, setData] = useState(spaceData)
  const [pages, setPages] = useState([
    { id: 1, route: '/', pageName: 'home' },
    { id: 2, route: '/destination', pageName: 'destination' },
    { id: 3, route: '/crew', pageName: 'crew' },
    { id: 4, route: '/technology', pageName: 'technology' },
  ])

  const animateItem = (delay = 0) => {
    return {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          bounce: 0.3,
          duration: 1,
          delay: delay,
        }
      }
    }
  }

  const animationOnExit = {
    opacity: 0,
    y: 10,
  }

  return (
    <AppContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, data, pages, animateItem, animationOnExit }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider }