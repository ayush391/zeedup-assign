import { Box, Container, Typography } from '@mui/material'
import { motion, useScroll } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import CTAButton from './common/CTAButton'

const GalleryCard = ({ idx, item }) => {
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
            style={{ opacity: opacity }}
            sx={{
                backgroundImage: `url(${item.img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: { lg: '100%' },

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                height: '100vh'
            }}
        >
            <Container
                maxWidth='xl'
            >

                <Typography color='white' variant='h7' fontFamily='Druk Wide Bold' fontSize='1rem'
                    gutterBottom
                >{(idx + 1) + '/' + 4}</Typography>
                <Typography color='white' variant='h2' fontFamily='Druk Wide Bold' fontSize='1.5rem'
                    gutterBottom
                >{item.title}</Typography>

                <Typography color='grey' fontSize='1.5rem'
                    gutterBottom
                    marginBottom='2rem'
                >{item.subtitle}</Typography>
                <CTAButton />
            </Container>
        </Box>
    )
}

export default GalleryCard