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
            component={motion.div}
            width='5px'
            animate={{ height: `${currentSize * 100}vh` }}
            sx={{
                transformOrigin: '0%',
                marginLeft: '-1px',
                background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                backgroundRepeat: 'no-repeat',
                position: 'fixed', top: 0, left: 0, right: 0,
            }} />
    )
}

export default ScrollBar