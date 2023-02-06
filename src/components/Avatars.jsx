import { Box, Container, Typography } from '@mui/material'
import { display } from '@mui/system'
import { motion, MotionConfig, motionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import CTAButton from './common/CTAButton'
import GalleryCard from './GalleryCard'



const Avatars = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['-150px center', '50% center'] })

    const [currentSize, setCurrentSize] = useState(0)



    useEffect(() => {

        scrollYProgress.onChange((size) => {
            setCurrentSize(size)
        })

        console.log(currentSize)
    }, [scrollYProgress.current])

    return (
        <Box sx={{
            backgroundColor: '#000',
            display: 'flex'
        }}
            ref={ref}
        >

            <Box maxWidth='sm'
                maxHeight='200vh'
                sx={{ position: 'sticky', top: 0, left: 0 }}
            >
                <video width='100%' autoPlay={true} muted src='https://stageverse.com/videos/avatar-video2-streaming.mp4'>

                </video>

            </Box>
            <Box
                component={motion.div}
                style={{ y: currentSize }}
                maxWidth='sm' sx={{ zIndex: 3, }}>
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
            </Box>


        </Box >
    )
}

export default Avatars