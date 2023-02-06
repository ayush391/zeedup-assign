import { Container, CssBaseline } from '@mui/material'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Benefits from './components/Benefits'
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
      <Immersive />
    </>
  )
}

export default App
