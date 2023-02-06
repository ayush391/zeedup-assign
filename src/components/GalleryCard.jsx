import { Box, Container, Typography } from '@mui/material'
import { motion, useScroll } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import CTAButton from './common/CTAButton'

const GalleryCard = ({ idx, item }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref, offset: ['-20% center', '40% center']
    })

    const [opacity, setOpacity] = useState(0)



    useEffect(() => {

        scrollYProgress.onChange((val) => {
            setOpacity(val)
        })

        console.log(scrollYProgress)
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
                backgroundPosition: '100% 100%',

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

                <Typography color='white' variant='h7' fontFamily='Archivo Black'
                    width='50%'
                    gutterBottom
                >{(idx + 1) + '/' + 4}</Typography>
                <Typography color='white' variant='h2' fontFamily='Archivo Black'
                    width='50%'
                    gutterBottom
                >{item.title}</Typography>

                <Typography color='grey'
                    width='40%'
                    gutterBottom
                    marginBottom='2rem'
                >{item.subtitle}</Typography>
                <CTAButton />
            </Container>
        </Box>
    )
}

export default GalleryCard