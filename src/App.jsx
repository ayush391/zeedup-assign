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

let theme = createTheme({
  palette: {
    mode: 'dark'
  }
});
theme = responsiveFontSizes(theme);

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box sx={{ display: { lg: 'flex', md: 'block' } }}>

          <ScrollBar />

          <Box width='100%'>
            <Navbar />
            <Hero />
            <Benefits />
            <GalleryVertical />
            <Immersive />
            {/* <GalleryHorizontal /> */}
            <Avatars />
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
