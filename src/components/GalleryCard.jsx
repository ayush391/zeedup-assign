import { Box, Container, Typography } from '@mui/material'
import { calcLength, motion, useElementScroll, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import CTAButton from './common/CTAButton'

const GalleryCard = ({ idx, item }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref, offset: ['-10% center', '20% center']
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '150vh',
        }}>
            <Box sx={{
            }}>
                <Typography color='white' variant='h7' fontFamily='Druk Wide Bold' fontSize='1rem'
                    gutterBottom
                >
                    {(idx + 1) + '/' + 4}
                </Typography>

                <Typography color='white' variant='h2' fontFamily='Druk Wide Bold' fontSize='1.5rem'
                    gutterBottom
                >
                    {item.title}
                </Typography>

                <Typography color='grey' fontSize='1.5rem'
                    gutterBottom
                    marginBottom='2rem'
                >
                    {item.subtitle}
                </Typography>

                <CTAButton />
            </Box >
        </Box >

    )
}

export default GalleryCard