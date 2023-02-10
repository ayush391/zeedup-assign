import { backdropClasses, Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import BackgroundImage from '../assets/bgImageHero.webp'
import CTAButton from './common/CTAButton'
import ScrollDownIndicator from './ScrollDownIndicator'



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
        <Container maxWidth='xl' sx={{ height: '100vh' }}>
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
            }}>

                <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: '-9',
                    background: 'linear-gradient(rgb(14, 13, 13) 0%, rgba(14, 13, 13, 0) 100%)',
                    backgroundPosition: 'center center',
                    backgroundSize: "cover",
                    rotate: '180deg',
                }} />

            </Box>
            <Box
                sx={{
                    marginTop: '1rem'
                }}
            >

                <Typography variant='h1' color='white' fontFamily='Druk Wide Bold' sx={{ fontSize: '1.6rem' }}>
                    3D VENUES
                </Typography>
                <Typography variant='h1' color='white' fontFamily='Druk Wide Bold' sx={{ fontSize: '1.6rem' }}>
                    FOR INTERACTIVE
                </Typography>
                <Typography variant='h1' fontFamily='Druk Wide Bold' gutterBottom sx={{
                    fontSize: '1.6rem',
                    background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                    {loopTextArray[loopingText]}
                </Typography>
                <CTAButton />

            </Box>
            <Box sx={{ position: 'absolute', bottom: '5%' }}>
                <ScrollDownIndicator />
            </Box>
        </Container>
    )
}

export default Hero