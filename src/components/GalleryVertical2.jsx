import { Box, Container, Typography } from '@mui/material'
import { display } from '@mui/system'
import { motion, MotionConfig, motionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import CTAButton from './common/CTAButton'
import GalleryCard from './GalleryCard'
import CarouselVertical from './CarouselVertical'


import img1 from '../assets/gallery_vertical/Benefit-02.png'
import img2 from '../assets/gallery_vertical/image 3.png'
import img3 from '../assets/gallery_vertical/image 4.png'
import img4 from '../assets/gallery_vertical/image 5.png'

const images = [img1, img2, img3, img4]


const galleryItems = [
    {
        title: 'HIGH-FIDELITY AVATARS & VENUES',
        subtitle: 'Stageverse provides a no-code tool for designing expressive avatars and beautiful custom-branded venues. Includes tools to host highly-interactive live events that combine live streaming and gameplay elements.',
        img: img1
    },
    {
        title: 'FROM FLAT WINDOWS TO IMMERSIVE WORLDS',
        subtitle: 'Stageverse makes it easy for creators and brands to take their existing 2D hosted experiences and amplify them with playable, immersive 3D venues and experiences. Available on Web, iOS and Android.',
        img: img2
    },
    {
        title: 'SPATIAL AUDIO CONVERSATION',
        subtitle: 'Stageverse enables intimate conversations with others in metaverse spaces via spatial voice chat. This mimics real life with audio being amplified or diminished based on proximity to others.',
        img: img3
    },
    {
        title: 'MONETIZE WITH CUSTOM, OWNABLE COLLECTIBLES',
        subtitle: 'Stageverse provides tools for creating and selling virtual goods, tipping, ticketing, ecommerce, and sponsored venue activations.',
        img: img4
    },
]


const GalleryVertical2 = () => {
    const ref = useRef(null)

    return (

        <Box ref={ref} sx={{ margin: '10rem 0rem', }}
        >
            <Box sx={{ position: 'sticky', top: 0, zIndex: -2, display: { xs: 'none', lg: 'block', } }}
            >
                {
                    images.map((item, idx) => {
                        return (
                            <CarouselVertical key={idx} img={item} idx={idx} parentRef={ref} />
                        )
                    })
                }
            </Box >
            <Box
            >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                    {
                        galleryItems.map((item, idx) => {
                            return (
                                <GalleryCard key={idx} item={item} idx={idx} />
                            )
                        })
                    }
                </Box>
            </Box >
        </Box >
    )
}

export default GalleryVertical2