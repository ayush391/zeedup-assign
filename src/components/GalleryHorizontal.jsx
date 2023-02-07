import React, { useRef, useState, useLayoutEffect, useCallback } from "react"
import {
    motion,
} from "framer-motion"
import GalleryHorizontalCard from "./GalleryHorizontalCard"
import { Box, Container } from "@mui/material"


const galleryItems = [
    {
        title: 'DESERT THEATER',
        subtitle: 'Stageverse provides a no-code tool for designing expressive avatars and beautiful custom-branded venues. Includes tools to host highly-interactive live events that combine live streaming and gameplay elements.',
        img: 'https://stageverse.com/images/landing-page/horizontal-scroll/spaces-3.png'
    },
    {
        title: 'PRIVATE ISLAND',
        subtitle: 'Stageverse makes it easy for creators and brands to take their existing 2D hosted experiences and amplify them with playable, immersive 3D venues and experiences. Available on Web, iOS and Android.',
        img: 'https://stageverse.com/images/landing-page/horizontal-scroll/spaces-2.webp'
    },
    {
        title: 'THE GALLERY',
        subtitle: 'Stageverse enables intimate conversations with others in metaverse spaces via spatial voice chat. This mimics real life with audio being amplified or diminished based on proximity to others.',
        img: 'https://stageverse.com/images/landing-page/horizontal-scroll/spaces-4.webp'
    },
]


const GalleryHorizontal = () => {
    return (
        <Container
            maxWidth='xl'
            style={{
                height: '150vh'

            }}>
            <Box component={motion.div}
                sx={{
                    display: { lg: 'flex', xs: 'none' },

                }}
                style={{
                    gap: 5,
                }}

                initial={{
                    x: 0
                }}
                animate={{
                    x: '-150vw'
                }}
                transition={{
                    type: 'tween',
                    duration: '50',
                    repeat: 10,
                    repeatType: "reverse",
                }}
            >
                {
                    galleryItems.map((item, idx) => {
                        return (
                            <GalleryHorizontalCard idx={idx} item={item} key={idx} />
                        )
                    })
                }
            </Box>
        </Container>
    )
}

export default GalleryHorizontal
