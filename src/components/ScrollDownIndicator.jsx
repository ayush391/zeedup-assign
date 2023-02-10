import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

const ScrollDownIndicator = () => {
    return (
        <Box sx={{
            display: 'flex',
            height: '50px',
            gap: 2,
            alignItems: 'flex-start',
            zIndex: 100
        }}
        >
            <Box
                component={motion.div}
                width='2px'
                initial={{ height: 0 }}
                animate={{ height: `100%` }}
                transition={{ duration: '0.8', repeat: Infinity }}
                sx={{
                    // transformOrigin: '0%',
                    // marginLeft: '-1px',
                    background: '-webkit-linear-gradient(70deg, #f75df6 10%, #6e80ef 40%, #61dfc7 60%)',
                    backgroundRepeat: 'no-repeat',
                }} />
            <Typography color='white' fontFamily='Druk Wide Bold'>Scroll</Typography>
        </Box>
    )
}

export default ScrollDownIndicator