import { Box, Container, Typography } from '@mui/material'
import { motion, MotionConfig, motionValue, useScroll, useSpring } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'


const ScrollBar = () => {
    const { scrollYProgress } = useScroll()

    const [currentSize, setCurrentSize] = useState(0)


    useEffect(() => {

        scrollYProgress.onChange((size) => setCurrentSize(size))
    }, [scrollYProgress.current])

    return (
        <Box
            sx={{
                display: 'flex'
            }}
        >
            <Box
                width='100px'
                height='100vh'
                sx={{
                    transformOrigin: '0%',
                    marginLeft: '-1px',
                    borderRight: '2px solid #5f5f5f',
                    backgroundColor: 'black',
                    position: 'sticky', top: 0, left: 0, bottom: 0,
                    zIndex: 100
                }} />
            <Box
                component={motion.div}
                width='5px'
                animate={{ height: `${currentSize * 100}vh` }}
                sx={{
                    transformOrigin: '0%',
                    marginLeft: '-1px',
                    background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                    backgroundRepeat: 'no-repeat',
                    position: 'sticky', top: 0,
                    zIndex: 100
                }} />
        </Box>
    )
}

export default ScrollBar