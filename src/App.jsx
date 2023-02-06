import { Box, CssBaseline } from '@mui/material'
import Benefits from './components/Benefits'
import GalleryVertical from './components/GalleryVertical'
import Hero from './components/Hero'
import Immersive from './components/Immersive'
import Navbar from './components/Navbar'
import Avatars from './components/Avatars'

import './App.css'
import Footer from './components/Footer'
import ScrollBar from './components/ScrollBar'

function App() {

  return (
    <>
      <CssBaseline />

      <Box display='flex' sx={{ flex: 1, justifyContent: 'center' }}>
        <ScrollBar />

        <div>
          <Navbar />
          <Hero />
          <Benefits />
          <GalleryVertical />
          <Immersive />
          <Avatars />
          <Footer />
        </div>
      </Box>
    </>
  )
}

export default App
