import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ErrorPage from './components/Error'
import Layout from './components/Layout'
import Crew from './pages/Crew'
import Destination from './pages/Destination'
import Home from './pages/Home'
import Technology from './pages/Technology'
import './App.css'

function App() {
  const location = useLocation()

  useEffect(() => {
    const route = location.pathname.slice(1)
    const pathname = route.charAt(0).toUpperCase() + route.slice(1)
    document.title = `Frontend Mentor | Space tourism website | ${!pathname ? 'Home' : pathname}`
  }, [location.pathname])

  return (
    <Routes >
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='destination' element={<Destination />} />
        <Route path='crew' element={<Crew />} />
        <Route path='technology' element={<Technology />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default App
