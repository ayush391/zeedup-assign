import React, { useRef, useState, useLayoutEffect, useCallback } from "react"
import ResizeObserver from "resize-observer-polyfill"
import {
    motion,
    useViewportScroll,
    useTransform,
    useSpring,
    useScroll
} from "framer-motion"
import GalleryHorizontalCard from "./GalleryHorizontalCard"
import { Container } from "@mui/material"


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
        <>
            <Container
                style={{
                    top: 0,
                    height: 'auto',
                    willChange: 'transform',
                    height: '100vh'

                }}>
                <motion.section
                    style={{
                        width: ' max-content',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 40
                    }}
                    initial={{
                        x: 0
                    }}
                    whileInView={{
                        x: '-200vw'
                    }}
                    transition={{
                        duration: '20'
                    }}
                >
                    {
                        galleryItems.map((item, idx) => {
                            return (
                                <GalleryHorizontalCard idx={idx} item={item} key={idx} />
                            )
                        })
                    }
                </motion.section>
            </Container>
        </>
    )
}

export default GalleryHorizontal
