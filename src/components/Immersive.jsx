import { Box, Container, Typography } from '@mui/material'
import { width } from '@mui/system'
import { motion, MotionConfig, motionValue, useScroll, useSpring } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'


const Immersive = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] })

    const [currentSize, setCurrentSize] = useState(0)


    useEffect(() => {

        scrollYProgress.onChange((size) => setCurrentSize(Math.sign(scrollYProgress.getVelocity())))
    }, [scrollYProgress.current])

    return (
        <>
            <hr color='#5f5f5f'></hr>

            <Container maxWidth='xl' sx={{ backgroundColor: '#000', overflowX: 'hidden' }}

            >
                <Box sx={{ paddingTop: '2rem' }}>
                    <Typography color='grey' variant='h5' fontFamily='Druk Wide Bold' fontSize='1rem'>IMMERSIVE SPACES</Typography>
                </Box>
                <Container maxWidth='xl' sx={{ padding: '12rem 0rem', }}
                    ref={ref}

                >
                    <MotionConfig transition={{
                        // stiffness: 200,
                        type: 'spring',
                        damping: 200,
                        // restDelta: 0.001
                    }}>

                        <Typography textAlign='center' color="white" variant='h1' fontFamily='Druk Wide Bold' fontSize='3rem'
                            component={motion.h1}
                            style={{
                                // backgroundSize: `${(currentSize * 100)}%`

                            }}
                            // initial={{ x: '25%' }}

                            animate={{
                                x: `${(-currentSize * 50)}vw`

                            }}
                        >
                            DISCOVER<br />
                        </Typography>
                        <Typography textAlign='center' color="white" variant='h1' fontFamily='Druk Wide Bold' fontSize='3rem'
                            // sx={{ width: '100%' }}
                            component={motion.h1}
                            // initial={{ x: '75%' }}
                            animate={{
                                x: `${(currentSize * 50)}vw`

                            }}
                        >
                            STAGVERSE<br />

                        </Typography>

                    </MotionConfig>
                </Container>
            </Container >
        </>
    )
}

export default Immersive