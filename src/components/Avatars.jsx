import { Box, Container, Typography } from '@mui/material'
import { display } from '@mui/system'
import { motion, MotionConfig, motionValue, useInView, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import CTAButton from './common/CTAButton'
import Footer from './Footer'
import GalleryCard from './GalleryCard'



const Avatars = () => {
    const ref = useRef(null)
    const refVid = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['-150px center', '50% center'] })

    const [currentSize, setCurrentSize] = useState(0)

    const inView = useInView(refVid)


    useEffect(() => {

        scrollYProgress.onChange((size) => {
            setCurrentSize(size)
        })

    }, [scrollYProgress.current])

    return (
        <Box sx={{
            backgroundColor: '#000',
        }}
            ref={ref}
        >
            <Container maxWidth='xl' sx={{ paddingTop: '2rem' }}>
                <Typography color='grey' variant='h5' fontFamily='Archivo Black'>EXPRESSIVE AVATARS</Typography>
            </Container>

            <Container
                maxWidth='xl'
                sx={{
                    display: { lg: 'flex' }
                }}
            >
                <Container
                    maxWidth='sm'
                    sx={{ position: 'sticky', top: 0, alignSelf: 'flex-start', height: 'auto' }}
                >
                    <video
                        ref={refVid} width='100%' autoPlay={inView} muted src='https://stageverse.com/videos/avatar-video2-streaming.mp4'>

                    </video>

                </Container>

                <Container
                    maxWidth='sm'

                    component={motion.div}
                    style={{ y: currentSize }} sx={{ zIndex: 3, height: '100vh', margin: '50% 0' }}>
                    <Typography variant='h2' color='white' fontFamily='Archivo Black' >
                        EXPRESS
                    </Typography>
                    <Typography variant='h2' color='white' fontFamily='Archivo Black'>
                        YOURSELF WITH
                    </Typography>
                    <Typography variant='h2' color='white' fontFamily='Archivo Black'>
                        PERSONALIZED
                    </Typography>
                    <Typography variant='h2' fontFamily='Archivo Black' gutterBottom
                        sx={{
                            background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                        AVATARS
                    </Typography>
                    <hr color='grey'></hr>
                    <Box sx={{
                        display: 'flex', alignItems: 'flex-start', margin: '1rem', gap: 3,
                    }}>
                        <img src='https://stageverse.com/images/other/personalized.svg'
                            style={{
                                width: '2.5rem'
                            }}
                        ></img>
                        <Box>
                            <Typography variant='h4' color='white' fontFamily='Archivo Black' gutterBottom>
                                PERSONALIZED
                            </Typography>
                            <Typography color='grey'
                                gutterBottom
                            >
                                Customize your avatar to match your vibe! Includes limitless variations of expression, including Stable Diffusion AI-powered designer tools.
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <hr color='grey'></hr>
                        <Box sx={{
                            display: 'flex', alignItems: 'flex-start', margin: '1rem', gap: 3,
                        }}>
                            <img src='https://stageverse.com/images/other/expressive.svg'
                                style={{
                                    width: '2.5rem'
                                }}
                            ></img>
                            <Box>
                                <Typography variant='h4' color='white' fontFamily='Archivo Black' gutterBottom>
                                    EXPRESSIVE
                                </Typography>
                                <Typography color='grey'
                                    gutterBottom
                                >
                                    We're pushing the boundaries of social interaction in the metaverse, including a variety of emoji-based reactions, emotes, and many other subtle and not-so-subtle expressive actions.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                </Container>

            </Container>
        </Box >
    )
}

export default Avatars