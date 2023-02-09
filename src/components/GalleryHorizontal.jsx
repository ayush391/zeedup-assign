import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from "react"
import {
    motion, useScroll, useTransform,
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
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    // const X = useTransform(scrollYProgress, [0, 1], [0, -250])
    const [x, setX] = useState()
    useEffect(() => {
        scrollYProgress.onChange((val) => setX(val * -300))
        console.log(x)
    }, [scrollYProgress])
    return (
        <Box
            ref={ref}


            sx={{

                height: '150%',
                // position: 'sticky',
                // top: 0,
                // overflowX: 'hidden',

            }}
        >

            <Box component={motion.div}
                maxWidth='lg'

                sx={{
                    position: 'sticky',
                    top: '10%',
                    overflow: '',
                    display: { lg: 'flex', xs: 'none' },
                }}
                style={{
                    x: `${x}%`,
                }}

            // initial={{
            //     x: 0
            // }}
            // animate={{
            //     x: '-150vw'
            // }}
            // transition={{
            //     type: 'tween',
            //     duration: '50',
            //     repeat: 10,
            //     repeatType: "reverse",
            // }}
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
    )
}

export default GalleryHorizontal
