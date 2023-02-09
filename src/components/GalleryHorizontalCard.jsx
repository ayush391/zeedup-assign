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
        <Container
            component={motion.div}
            ref={ref}
            sx={{

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'top',
                alignItems: 'center',
                width: '100vw',
            }}
        >
            <img height='80%' src={item.img}>
            </img>
            <Container
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}
            >

                <Typography color='white' variant='h7' fontSize='1rem' fontFamily='Druk Wide Bold'
                >{(idx + 1) + '/' + 3}</Typography>
                <Typography color='white' variant='h5' fontSize='1rem' fontFamily='Druk Wide Bold'

                >{item.title}</Typography>
            </Container>
        </Container >
    )
}

export default GalleryHorizontalCard