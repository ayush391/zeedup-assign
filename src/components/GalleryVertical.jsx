import { Box, Container, Typography } from '@mui/material'
import { display } from '@mui/system'
import { motion, MotionConfig, motionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import CTAButton from './common/CTAButton'
import GalleryCard from './GalleryCard'

const galleryItems = [
    {
        title: 'HIGH-FIDELITY AVATARS & VENUES',
        subtitle: 'Stageverse provides a no-code tool for designing expressive avatars and beautiful custom-branded venues. Includes tools to host highly-interactive live events that combine live streaming and gameplay elements.',
        img: 'https://stageverse.com/images/landing-page/text-blocks-with-image/Benefit-02.png'
    },
    {
        title: 'FROM FLAT WINDOWS TO IMMERSIVE WORLDS',
        subtitle: 'Stageverse makes it easy for creators and brands to take their existing 2D hosted experiences and amplify them with playable, immersive 3D venues and experiences. Available on Web, iOS and Android.',
        img: 'https://stageverse.com/images/landing-page/text-blocks-with-image/benefit-01.jpg'
    },
    {
        title: 'SPATIAL AUDIO CONVERSATION',
        subtitle: 'Stageverse enables intimate conversations with others in metaverse spaces via spatial voice chat. This mimics real life with audio being amplified or diminished based on proximity to others.',
        img: 'https://stageverse.com/images/landing-page/text-blocks-with-image/Benefit-03-min.png'
    },
    {
        title: 'MONETIZE WITH CUSTOM, OWNABLE COLLECTIBLES',
        subtitle: 'Stageverse provides tools for creating and selling virtual goods, tipping, ticketing, ecommerce, and sponsored venue activations.',
        img: 'https://stageverse.com/images/landing-page/text-blocks-with-image/Benefit-04.png'
    },
]


const GalleryVertical = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['-150px center', '50% center'] })

    const [currentSize, setCurrentSize] = useState(0)



    useEffect(() => {

        scrollYProgress.onChange((size) => {
            setCurrentSize(size)
        })

    }, [scrollYProgress.current])

    return (
        <Box sx={{ backgroundColor: '#000' }}
            ref={ref}
        >
            <MotionConfig transition={{
                stiffness: 200,
                type: 'spring',
                damping: 30,
                // restDelta: 0.001
            }}>
                {
                    galleryItems.map((item, idx) => {
                        return (
                            <GalleryCard key={idx} item={item} idx={idx} />
                        )
                    })
                }

            </MotionConfig>

        </Box >
    )
}

export default GalleryVertical