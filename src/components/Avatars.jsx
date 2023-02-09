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
    const { scrollYProgress } = useScroll({ target: ref, offset: ['-100px start', 'end start'] })

    const [currentSize, setCurrentSize] = useState(0)
    const [play, setPlay] = useState(false)

    const inView = useInView(refVid)


    useEffect(() => {

        scrollYProgress.onChange((size) => {
            setCurrentSize(size)
        })

    }, [scrollYProgress.current])

    useEffect(() => setPlay(!play), [inView])

    return (
        <>
            <hr color='#5f5f5f'></hr>

            <Container maxWidth='xl' sx={{
                backgroundColor: '#000',

            }}
                ref={ref}
            >
                <Box sx={{ paddingTop: '2rem' }}>
                    <Typography color='grey' variant='h5' fontFamily='Druk Wide Bold'>EXPRESSIVE AVATARS</Typography>
                </Box>

                <Container
                    maxWidth='xl'
                    sx={{
                        display: { lg: 'flex' },

                    }}
                >
                    <Box
                        maxWidth='md'
                    >
                        <video
                            style={{
                                position: 'sticky', top: '-25%'
                            }}
                            ref={refVid} width='80%' autoPlay={play} muted src='https://stageverse.com/videos/avatar-video2-streaming.mp4'>

                        </video>

                    </Box>

                    <Container
                        maxWidth='sm'

                        component={motion.div}
                        style={{ y: currentSize }} sx={{ zIndex: 3, height: '100vh', margin: '50% 0' }}>
                        <Typography variant='h3' color='white' fontFamily='Druk Wide Bold' fontSize='1.3rem'>
                            EXPRESS
                        </Typography>
                        <Typography variant='h3' color='white' fontFamily='Druk Wide Bold' fontSize='1.3rem'>
                            YOURSELF WITH
                        </Typography>
                        <Typography variant='h3' color='white' fontFamily='Druk Wide Bold' fontSize='1.3rem'>
                            PERSONALIZED
                        </Typography>
                        <Typography variant='h3' fontFamily='Druk Wide Bold' gutterBottom fontSize='1.3rem'
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
                                <Typography variant='h4' color='white' fontFamily='Druk Wide Bold' gutterBottom fontSize='1rem'>
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
                                    <Typography variant='h4' color='white' fontFamily='Druk Wide Bold' gutterBottom fontSize='1rem'>
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
            </Container >
        </>
    )
}

export default Avatars