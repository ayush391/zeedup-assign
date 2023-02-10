import { Box, Container, Typography } from '@mui/material'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import CTAButton from './common/CTAButton'

const GalleryCardVertical = ({ idx, item }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['-10% start', '80% start']
    })

    const opacityTrans = useTransform(scrollYProgress, [0, 1], [1, 0])
    const opacity = useSpring(opacityTrans)

    return (
        <Box
            component={motion.div}
            ref={ref}
            sx={{
                // display: 'flex',
                // flexDirection: 'column',
                // justifyContent: 'end',
                // height: '100vh',
                position: { lg: 'absolute', xs: 'static' }


            }}
            style={{
                opacity: opacity,
            }}
        >
            <Container
                maxWidth='xl'

            >
                <Typography color='white' variant='h2' fontFamily='Druk Wide Bold' fontSize='1.5rem'
                    gutterBottom
                    sx={{
                        whiteSpace: 'pre'
                    }}

                >
                    {item.title1}
                </Typography>
                <Typography color='white' variant='h2' fontFamily='Druk Wide Bold' fontSize='1.5rem'
                    gutterBottom
                    sx={{
                        fontSize: '1.6rem',
                        background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        whiteSpace: 'pre'

                    }}
                >
                    {item.title2}
                </Typography>

                <Typography color='#8d8d8d' fontSize='1.2rem'
                    gutterBottom
                    marginBottom='2rem'
                    maxWidth='sm'
                >
                    {item.subtitle}
                </Typography>

                <CTAButton />
            </Container >
        </Box >

    )
}

export default GalleryCardVertical