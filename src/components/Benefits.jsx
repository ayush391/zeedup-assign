import { Box, Container, Typography } from '@mui/material'
import { motion, MotionConfig, motionValue, useScroll, useSpring } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'


const Benefits = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['-150px center', '90% center'] })

    const [currentSize, setCurrentSize] = useState(0)


    // const scaleX = useSpring(scrollYProgress, {
    //     stiffness: 100,
    //     damping: 30,
    //     restDelta: 0.001
    // });

    useEffect(() => {

        scrollYProgress.onChange((size) => setCurrentSize(size))
        // scrollYProgress.onChange((size) => setCurrentSize(motionValue(size, {
        //     stiffness: 100,
        //     damping: 30,
        //     restDelta: 0.001
        // })))
        console.log(currentSize)
    }, [scrollYProgress.current])

    return (
        <Box sx={{ backgroundColor: '#000' }}
            ref={ref}

        >
            <Container maxWidth='xl' sx={{ paddingTop: '2rem' }}>
                <Typography color='grey' variant='h5' fontFamily='Archivo Black'>BENEFITS</Typography>
            </Container>
            <Container maxWidth='xl' sx={{ padding: '12rem 0rem' }} >
                <MotionConfig transition={{
                    stiffness: 200,
                    type: 'spring',
                    damping: 30,
                    // restDelta: 0.001
                }}>

                    <Typography color="white" variant='h1' fontFamily='Archivo Black'
                        component={motion.h1}
                        sx={{
                            background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            backgroundRepeat: 'no-repeat',
                            wordBreak: 'break-all',
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
                    <Typography color="white" variant='h1' fontFamily='Archivo Black'
                        component={motion.h1}
                        sx={{
                            background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            backgroundRepeat: 'no-repeat',
                            wordBreak: 'break-all',
                        }}
                        style={{
                            // backgroundSize: `${(currentSize * 100)}%`

                        }}
                        initial={{ backgroundSize: '0' }}
                        animate={{
                            backgroundSize: `${(currentSize * 100) - 9}%`

                        }}
                    >
                        THE MOST<br />

                    </Typography>
                    <Typography color="white" variant='h1' fontFamily='Archivo Black'
                        component={motion.h1}
                        sx={{
                            background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            backgroundRepeat: 'no-repeat',
                            wordBreak: 'break-all',
                        }}
                        style={{
                            // backgroundSize: `${(currentSize * 100)}%`

                        }}
                        initial={{ backgroundSize: '0' }}
                        animate={{
                            backgroundSize: `${(currentSize * 100) - 6}%`

                        }}
                    >
                        INTERACTIVE<br />

                    </Typography>
                    <Typography color="white" variant='h1' fontFamily='Archivo Black'
                        component={motion.h1}
                        sx={{
                            background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            backgroundRepeat: 'no-repeat',
                            wordBreak: 'break-all',
                        }}
                        style={{
                            // backgroundSize: `${(currentSize * 100)}%`

                        }}
                        initial={{ backgroundSize: '0' }}
                        animate={{
                            backgroundSize: `${(currentSize * 100) - 8}%`

                        }}
                    >

                        WAY TO HOST<br />

                    </Typography>
                    <Typography color="white" variant='h1' fontFamily='Archivo Black'
                        component={motion.h1}
                        sx={{
                            background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            backgroundRepeat: 'no-repeat',
                            wordBreak: 'break-all',
                        }}
                        style={{
                            // backgroundSize: `${(currentSize * 100)}%`

                        }}
                        initial={{ backgroundSize: '0' }}
                        animate={{
                            backgroundSize: `${(currentSize * 100) - 12}%`

                        }}
                    >
                        3D EVENTS<br />
                    </Typography>
                    <Typography color="white" variant='h1' fontFamily='Archivo Black'
                        component={motion.h1}
                        sx={{
                            background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            backgroundRepeat: 'no-repeat',
                            wordBreak: 'break-all',
                        }}
                        style={{
                            // backgroundSize: `${(currentSize * 100)}%`

                        }}
                        initial={{ backgroundSize: '0' }}
                        animate={{
                            backgroundSize: `${(currentSize * 100) - 25}%`

                        }}
                    >

                        ONLINE
                    </Typography>
                </MotionConfig>
            </Container>
            <Container sx={{ padding: '5rem 0rem' }}>
                <Typography
                    color="white" variant='h3' textAlign='right'
                >Stageverse is a no-code platform for creators</Typography>
                <Typography
                    color="white" variant='h3' textAlign='left'
                >and brands to build metaverse venues and host interactive 3D experiences.</Typography>
            </Container>
        </Box >
    )
}

export default Benefits