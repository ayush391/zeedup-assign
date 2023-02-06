import { Box, Container, Typography } from '@mui/material'
import { motion, MotionConfig, motionValue, useScroll, useSpring } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'


const ScrollBar = () => {
    const { scrollYProgress } = useScroll()

    const [currentSize, setCurrentSize] = useState(0)


    useEffect(() => {

        scrollYProgress.onChange((size) => setCurrentSize(size))
        console.log(currentSize)
    }, [scrollYProgress.current])

    return (
        <>
            <Box width='6vw' height='100vh' sx={{
                backgroundColor: '#000',
                position: 'sticky', top: '0', left: '0',

            }} />

            <Box
                component={motion.div}
                width='10px'
                animate={{ height: `${currentSize * 100}vh` }}
                sx={{
                    transformOrigin: '0%',
                    marginLeft: '-10px',
                    background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                    backgroundRepeat: 'no-repeat',
                    position: 'sticky', top: 0, left: 0, right: 0
                }} />
        </>
    )
}

export default ScrollBar