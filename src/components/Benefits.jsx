import { Box, Container, Typography } from '@mui/material'
import { motion, MotionConfig, motionValue, useScroll, useSpring } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'


const Benefits = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['-10% center', '40% center'] })

    const [currentSize, setCurrentSize] = useState(0)

    useEffect(() => {

        scrollYProgress.onChange((size) => setCurrentSize(size))
    }, [scrollYProgress.current])

    return (
        <Container maxWidth='xl' sx={{ backgroundColor: '#000' }}
            ref={ref}

        >
            <Box sx={{ paddingTop: '2rem' }}>
                <Typography color='grey' variant='h6' display='block' fontFamily='Druk Wide Bold'>BENEFITS</Typography>
            </Box>
            <Container maxWidth='xl' sx={{ padding: '5rem 0rem', }} >
                <MotionConfig transition={{
                    stiffness: 200,
                    type: 'spring',
                    damping: 30,
                    // restDelta: 0.001
                }}>

                    <Typography color="white" variant='h1' fontFamily='Druk Wide Bold'
                        component={motion.h1}
                        sx={{
                            background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            backgroundRepeat: 'no-repeat',
                            wordBreak: 'break-all',
                            fontSize: '1.5rem'
                        }}
                        style={{
                            // backgroundSize: `${(currentSize * 100)}%`

                        }}
                        initial={{ backgroundSize: '0' }}
                        animate={{
                            backgroundSize: `${(currentSize * 100)}%`

                        }}
                    >
                        DISCOVER<br />
                    </Typography>
                    <Typography color="white" variant='h1' fontFamily='Druk Wide Bold'
                        component={motion.h1}
                        sx={{
                            background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            backgroundRepeat: 'no-repeat',
                            wordBreak: 'break-all',
                            fontSize: '1.5rem'
                        }}
                        style={{
                            // backgroundSize: `${(currentSize * 100)}%`

                        }}
                        initial={{ backgroundSize: '0' }}
                        animate={{
                            backgroundSize: `${(currentSize * 100) - 5}%`

                        }}
                    >
                        THE MOST<br />

                    </Typography>
                    <Typography color="white" variant='h1' fontFamily='Druk Wide Bold'
                        component={motion.h1}
                        sx={{
                            background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            backgroundRepeat: 'no-repeat',
                            wordBreak: 'break-all',
                            fontSize: '1.5rem'
                        }}
                        style={{
                            // backgroundSize: `${(currentSize * 100)}%`

                        }}
                        initial={{ backgroundSize: '0' }}
                        animate={{
                            backgroundSize: `${(currentSize * 100) - 2}%`

                        }}
                    >
                        INTERACTIVE<br />

                    </Typography>
                    <Typography color="white" variant='h1' fontFamily='Druk Wide Bold'
                        component={motion.h1}
                        sx={{
                            background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            backgroundRepeat: 'no-repeat',
                            wordBreak: 'break-all',
                            fontSize: '1.5rem'
                        }}
                        style={{
                            // backgroundSize: `${(currentSize * 100)}%`

                        }}
                        initial={{ backgroundSize: '0' }}
                        animate={{
                            backgroundSize: `${(currentSize * 100) - 4}%`

                        }}
                    >

                        WAY TO HOST<br />

                    </Typography>
                    <Typography color="white" variant='h1' fontFamily='Druk Wide Bold'
                        component={motion.h1}
                        sx={{
                            background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            backgroundRepeat: 'no-repeat',
                            wordBreak: 'break-all',
                            fontSize: '1.5rem'
                        }}
                        style={{
                            // backgroundSize: `${(currentSize * 100)}%`

                        }}
                        initial={{ backgroundSize: '0' }}
                        animate={{
                            backgroundSize: `${(currentSize * 100) - 8}%`

                        }}
                    >
                        3D EVENTS<br />
                    </Typography>
                    <Typography color="white" variant='h1' fontFamily='Druk Wide Bold'
                        component={motion.h1}
                        sx={{
                            background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            backgroundRepeat: 'no-repeat',
                            wordBreak: 'break-all',
                            fontSize: '1.5rem'
                        }}
                        style={{
                            // backgroundSize: `${(currentSize * 100)}%`

                        }}
                        initial={{ backgroundSize: '0' }}
                        animate={{
                            backgroundSize: `${(currentSize * 100) - 20}%`

                        }}
                    >

                        ONLINE
                    </Typography>
                </MotionConfig>
            </Container>
            <Container sx={{ padding: '2rem 0rem' }}>
                <Typography
                    color="white" variant='h3' textAlign='center'
                // sx={{ fontSize: '1.5rem' }}
                >Stageverse is a no-code platform for creators</Typography>
                <Typography
                    color="white" variant='h3' textAlign='center'
                // sx={{ fontSize: '1.5rem' }}
                > and brands to build metaverse venues</Typography>
                <Typography
                    color="white" variant='h3' textAlign='center'
                // sx={{ fontSize: '1.5rem' }}
                > and host interactive 3D experiences.</Typography>
            </Container>
        </Container >
    )
}

export default Benefits