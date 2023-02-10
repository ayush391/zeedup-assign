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
        subtitle: 'A sun-drenched oasis in the infinite expanse of cyberspace. Your group chats just got more immersive as you get cozy with friends and community around the fire or take in a DJ set or movie on the big screen.',
        img: 'https://stageverse.com/images/landing-page/horizontal-scroll/spaces-3.png'
    },
    {
        title: 'PRIVATE ISLAND',
        subtitle: 'Ever wanted your own private island? Well, now you can in this luxurious ocean escape. Kick back and relax by the pool, then invite your friends over for a rooftop party. This is life in Stageverse',
        img: 'https://stageverse.com/images/landing-page/horizontal-scroll/spaces-2.webp'
    },
    {
        title: 'THE GALLERY',
        subtitle: 'The Gallery is a space for future art and expression, where you can connect with your community around shared passions or interests. Perfect for showcasing NFTs or spatializing your Instagram photo collection.',
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
