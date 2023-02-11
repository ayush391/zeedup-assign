import { Box, Container, Typography } from '@mui/material'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import CTAButton from './common/CTAButton'

const GalleryCard = ({ idx, item }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['-10% start', '80% start']
    })

    const opacityTrans = useTransform(scrollYProgress, [0, 0.4, 0.55, 1], [0, 1, 1, 0])
    const opacity = useSpring(opacityTrans)

    return (
        <>
            <Box
                // component={motion.div}
                // ref={ref}
                sx={{
                    display: { xs: 'flex', lg: 'none' },
                    flexDirection: 'column',
                    justifyContent: 'end',
                    height: '100vh',


                }}
            // style={{
            //     opacity: opacity,
            // }}
            >
                <Container
                    maxWidth='xl'
                    style={{
                    }}
                >
                    <Box component='img' width='100%' sx={{ display: { xs: 'block', lg: 'none' } }} src={item.img} />
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

            <Box
                component={motion.div}
                ref={ref}
                sx={{
                    display: { xs: 'none', lg: 'flex' },
                    flexDirection: 'column',
                    justifyContent: 'end',
                    height: '100vh',


                }}
                style={{
                    opacity: opacity,
                }}
            >
                <Container
                    maxWidth='xl'
                    style={{
                    }}
                >
                    <Box component='img' width='100%' sx={{ display: { xs: 'block', lg: 'none' } }} src={item.img} />
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
        </>
    )
}

export default GalleryCard