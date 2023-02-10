import React, { useRef } from 'react'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

import img1 from '../assets/gallery_vertical/Benefit-02.png'
import img2 from '../assets/gallery_vertical/image 3.png'
import img3 from '../assets/gallery_vertical/image 4.png'
import img4 from '../assets/gallery_vertical/image 5.png'

const images = [img1, img2, img3, img4]

const CarouselVertical = ({ img, idx, parentRef }) => {
    // const ref = useRef(null)
    const start = idx * .25
    const end = start + .25
    const mid = (start + end) / 2
    const { scrollYProgress } = useScroll({ target: parentRef, offset: ['-10% start', '100% start'] })
    const opacityTrans = useTransform(scrollYProgress, [start, mid, end], [0, 1, 0])
    const opacity = useSpring(opacityTrans)
    return (
        <motion.img
            src={img}
            style={{
                opacity: opacity,
                zIndex: -2,
                // width: '75%',
                height: '100vh',
                position: 'absolute',
                top: 0,
                right: 0
            }}
        >

        </motion.img>
    )
}

export default CarouselVertical