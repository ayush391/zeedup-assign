import { Container, CssBaseline } from '@mui/material'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Benefits from './components/Benefits'
import GalleryVertical from './components/GalleryVertical'
import Hero from './components/Hero'
import Immersive from './components/Immersive'
import Navbar from './components/Navbar'
// import './App.css'


function App() {

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Benefits />
      <GalleryVertical />
      <Immersive />
    </>
  )
}

export default App
