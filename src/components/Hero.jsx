import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'


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
        <div>
            <Box>
                <Box component='img' src='https://stageverse.com/images/landing-page/intro-sequence/drone-still-min.webp'
                    sx={{
                        width: '100% ', position: 'absolute', zIndex: '-10',
                        filter: 'brightness(50%)',
                    }}>
                    {/* <img src='https://stageverse.com/images/landing-page/intro-sequence/drone-still-min.webp'></img> */}
                </Box>
                <Container maxWidth='lg'>
                    <Typography variant='h1' fontWeight='bolder' color='white'>
                        3D VENUES FOR INTERACTIVE
                    </Typography>
                    <Typography variant='h1' fontWeight='bolder' sx={{
                        background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        {loopTextArray[loopingText]}
                    </Typography>
                    <button style={{
                        background: '-webkit-linear-gradient(-70deg, #f75df6 20%, #6e80ef 70%, #61dfc7 95%)',
                        borderRadius: '50px',
                        border: 'none',
                        padding: '2px',
                        cursor: 'pointer'
                    }}
                    ><Typography color='white' variant='h5' sx={{
                        padding: '1rem 5rem',
                        backgroundColor: '#000',
                        borderRadius: '50px',
                        margin: '0',
                        '&:hover': {
                            backgroundColor: 'transparent',
                        }
                    }}>
                            JUMP IN
                        </Typography>
                    </button>

                </Container>
            </Box>
        </div >
    )
}

export default Hero