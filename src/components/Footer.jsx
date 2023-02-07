import { Box, Container, Typography } from '@mui/material'
import React from 'react'

import logo from '../assets/logo.svg'
const Footer = () => {
    return (
        <Container
            maxWidth='xl'
        >
            <marquee width='100%' bgcolor='#000' style={{ border: '2px solid grey', borderLeft: 'none', borderRight: 'none' }}>
                <Typography component='a' fontWeight='bolder' href='#' variant='h1' color='grey' sx={{
                    textDecoration: 'none',
                    display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2,
                    '&:hover': {
                        color: 'white'
                    }
                }}>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>
                    JUMP IN
                    <img width='60px' height='60px' src={logo}></img>

                </Typography>
            </marquee >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#000', padding: '1rem 0rem' }}>
                <Typography variant='h7' color='white'>STAGVERSE</Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Typography variant='caption' color='white'>IOS</Typography>
                    <Typography variant='caption' color='white'>ANDROID</Typography>
                    <Typography variant='caption' color='white'>DOCS</Typography>
                    {/* <Typography variant='caption' color='white'>TERMS</Typography>
                    <Typography variant='caption' color='white'>PRIVACY</Typography> */}
                </Box>
            </Box>
        </Container>
    )
}

export default Footer