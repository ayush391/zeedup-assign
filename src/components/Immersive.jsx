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
        console.log(scrollYProgress.getVelocity())
    }, [scrollYProgress.current])

    return (
        <Box sx={{ backgroundColor: '#000', overflowX: 'hidden' }}

        >
            <Container maxWidth='xl' sx={{ paddingTop: '2rem' }}>
                <Typography color='grey' variant='h5' fontFamily='Archivo Black'>IMMERSIVE SPACES</Typography>
            </Container>
            <Container maxWidth='xl' sx={{ padding: '12rem 0rem', }}
                ref={ref}

            >
                <MotionConfig transition={{
                    stiffness: 100,
                    type: 'spring',
                    damping: 50,
                    // restDelta: 0.001
                }}>

                    <Typography textAlign='center' color="white" variant='h1' fontFamily='Archivo Black' fontSize='9rem'
                        component={motion.h1}
                        style={{
                            // backgroundSize: `${(currentSize * 100)}%`

                        }}
                        // initial={{ x: '25%' }}

                        animate={{
                            x: `${(-currentSize * 300)}px`

                        }}
                    >
                        DISCOVER<br />
                    </Typography>
                    <Typography textAlign='center' color="white" variant='h1' fontFamily='Archivo Black' fontSize='9rem'
                        // sx={{ width: '100%' }}
                        component={motion.h1}
                        // initial={{ x: '75%' }}
                        animate={{
                            x: `${(currentSize * 300)}px`

                        }}
                    >
                        STAGVERSE<br />

                    </Typography>

                </MotionConfig>
            </Container>
        </Box >
    )
}

export default Immersive