import { Box, Container, Typography } from '@mui/material'
import { motion, useScroll, useDomEvent } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useSpring, animated } from 'react-spring'
// import { animated } from 'react-spring/dist/declarations/src'
import CTAButton from './common/CTAButton'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 0.9]
const trans = (x, y, s) => `perspective(1500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;


const GalleryHorizontalCard = ({ idx, item }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref, offset: ['-10% center', '20% center']
    })

    const [opacity, setOpacity] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));


    useEffect(() => {

        scrollYProgress.onChange((val) => {
            setOpacity(val)
        })

    }, [scrollYProgress.current])

    return (
        <Container
            // component={motion.div}
            ref={ref}

            onClick={() => setOpenModal(!openModal)}

            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'top',
                alignItems: 'center',
                width: '100vw',
            }}
            component={animated.div}

            //hover anim
            onMouseMove={({ clientX, clientY }) => set({ xys: calc(clientX, clientY) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.to(trans) }}
        >
            <Box component='img' sx={{
                display: { xs: 'block', lg: 'none' },
                width: '100%',
                filter: openModal ? 'brightness(30%) blur(8px)' : '',
            }}
                src={item.img}
            />
            <Box component='img'
                src={item.img}
                sx={{
                    display: { xs: 'none', lg: 'block' }, height: '80%',
                    filter: openModal ? 'brightness(30%) blur(8px)' : '',

                }} />

            <Container
                disableGutters
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}
            >

                <Typography color='white' variant='h7' fontSize='1rem' fontFamily='Druk Wide Bold'
                >{(idx + 1) + '/' + 3}</Typography>
                <Typography color='white' variant='h5' fontSize='1rem' fontFamily='Druk Wide Bold'

                >{item.title}</Typography>
                <Box
                    maxWidth='xs'
                    sx={{
                        display: openModal ? 'flex' : 'none',
                        flexDirection: 'column',
                        position: 'absolute',
                        top: 0,
                        zIndex: '5',
                        height: '80%',
                        width: '85%',
                        // backgroundColor: '#00000099',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}
                >
                    <Typography color='#959595' textAlign='center' fontSize='1rem' gutterBottom>{item.subtitle}</Typography>
                    <Typography color='white' fontFamily='Druk Wide Bold' fontSize='1rem'>{"JUMP IN -->"}</Typography>
                </Box>
            </Container>
        </Container >
    )
}

export default GalleryHorizontalCard