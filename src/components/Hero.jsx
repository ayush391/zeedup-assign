import { backdropClasses, Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import BackgroundImage from '../assets/bgImageHero.webp'
import CTAButton from './common/CTAButton'



const loopTextArray = ['CONCERTS', 'MEETINGS', 'GALLERIES', 'LIVESTREAMS', 'EVENTS']

const Hero = () => {
    const [loopingText, setLoopingText] = useState(0)

    useEffect(() => {
        const interval = setTimeout(() => {
            setLoopingText((prev) => (prev + 1) % loopTextArray.length)
        }, 2000)

        return () => clearInterval(interval);

    }, [loopingText])

    return (
        <Container maxWidth='xl' sx={{ marginBottom: '100px' }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                height: '100%',
                width: '100%',
                zIndex: '-10',
                backgroundImage: `url(${BackgroundImage})`,
                backgroundPosition: 'center center',
                backgroundSize: "cover",
                "&:before": {
                    background: 'linear-gradient(rgb(14, 13, 13) 100%, rgba(14, 13, 13, 0) 0%)'

                }
            }}>

            </Box>
            <div >
                <Typography variant='h1' color='white' fontFamily='Archivo Black' >
                    3D VENUES
                </Typography>
                <Typography variant='h1' color='white' fontFamily='Archivo Black'>
                    FOR INTERACTIVE
                </Typography>
                <Typography variant='h1' fontFamily='Archivo Black' sx={{
                    background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                    {loopTextArray[loopingText]}
                </Typography>
                <CTAButton />

            </div>
        </Container>
    )
}

export default Hero