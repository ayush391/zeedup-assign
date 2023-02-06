import { Container, CssBaseline } from '@mui/material'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Benefits from './components/Benefits'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
// import './App.css'


function App() {

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Benefits />
    </>
  )
}

export default App
