import { Box, createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material'
import Benefits from './components/Benefits'
import GalleryVertical from './components/GalleryVertical'
import Hero from './components/Hero'
import Immersive from './components/Immersive'
import Navbar from './components/Navbar'
import Avatars from './components/Avatars'

import './App.css'
import Footer from './components/Footer'
import ScrollBar from './components/ScrollBar'
import GalleryHorizontal from './components/GalleryHorizontal'
import GalleryVertical2 from './components/GalleryVertical2'

let theme = createTheme({
  typography: {
    fontFamily: 'Circular Std',
  },
  palette: {
    background: {
      default: '#000',
      paper: '#000',
    },
  }
});
theme = responsiveFontSizes(theme);

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box sx={{ display: { lg: 'flex', sx: 'block' } }}>

          <ScrollBar />

          <Box>
            <Navbar />
            <Hero />
            <Benefits />
            <GalleryVertical2 />
            <Immersive />
            <GalleryHorizontal />
            <Avatars />
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
