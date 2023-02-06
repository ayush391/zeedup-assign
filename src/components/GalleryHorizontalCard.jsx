import { Box, Container, Typography } from '@mui/material'
import { motion, useScroll } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import CTAButton from './common/CTAButton'

const GalleryHorizontalCard = ({ idx, item }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref, offset: ['-10% center', '20% center']
    })

    const [opacity, setOpacity] = useState(0)



    useEffect(() => {

        scrollYProgress.onChange((val) => {
            setOpacity(val)
        })

    }, [scrollYProgress.current])

    return (
        <Box
            component={motion.div}
            ref={ref}
            sx={{

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                height: '80vh'
            }}
        >
            <img src={item.img}>
            </img>
            <Container
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >

                <Typography color='white' variant='h7' fontFamily='Archivo Black'
                >{(idx + 1) + '/' + 3}</Typography>
                <Typography color='white' variant='h5' fontFamily='Archivo Black'

                >{item.title}</Typography>
            </Container>
        </Box>
    )
}

export default GalleryHorizontalCard