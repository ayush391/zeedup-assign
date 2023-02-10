import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from "react"
import {
    motion, useScroll, useTransform,
} from "framer-motion"
import GalleryHorizontalCard from "./GalleryHorizontalCard"
import { Box, Container } from "@mui/material"
import GalleryCardVertical from "./GalleryCardVertical"


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

const textCard = {
    title1: "EASILY\nCREATE",
    title2: "METAVERSE\nVENUES",
    subtitle: 'Stageverse provides a wide selection of customizable venues that makes it easy to get started in the metaverse with just a few clicks.'
}

const GalleryHorizontal = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    // const X = useTransform(scrollYProgress, [0, 1], [0, -250])
    const [x, setX] = useState(50)
    useEffect(() => {
        scrollYProgress.onChange((val) => setX((val * -400) + 50))
        console.log(x)
    }, [scrollYProgress])
    return (
        <>
            {/* mobile */}
            <Box
                ref={ref}


                sx={{
                    display: { xs: 'flex', lg: 'none' },
                    flexDirection: 'column',
                    // height: '30%',
                    gap: '10rem',
                    alignItems: 'center',
                    // top: 0,
                    // overflowX: 'hidden',

                }}
            >


                <GalleryCardVertical item={textCard} />

                <Box component={motion.div}
                    maxWidth='lg'

                    sx={{
                        // position: 'sticky',
                        // top: '10%',
                        // transform: 'translateX(500%)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5rem'
                        // width: '100%'
                    }}
                    style={{
                        // x: `${x}%`,
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
            </Box>

            {/* desktop */}
            <Box
                ref={ref}


                sx={{
                    display: { xs: 'none', lg: 'flex' },
                    height: '30%',
                    // gap: '10rem',
                    alignItems: 'flex-start',
                    // top: 0,
                    // overflowX: 'hidden',

                }}
            >


                <GalleryCardVertical item={textCard} />

                <Box component={motion.div}
                    maxWidth='lg'

                    sx={{
                        position: 'sticky',
                        top: '10%',
                        // transform: 'translateX(500%)',
                        overflow: '',
                        display: 'flex',
                        height: 'fit-content'
                    }}
                    style={{
                        x: `${x}%`,
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
            </Box>
        </>
    )
}

export default GalleryHorizontal
