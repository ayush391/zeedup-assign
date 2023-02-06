import { Box, Typography } from '@mui/material'
import React from 'react'

import logo from '../assets/logo.svg'
const Footer = () => {
    return (
        <Box>
            <marquee height={100} width='100%' bgcolor='#000' style={{ border: '2px solid grey', borderLeft: 'none', borderRight: 'none' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <Typography component='a' fontWeight='bolder' href='#' variant='h1' color='grey' sx={{
                        textDecoration: 'none',
                        '&:hover': {
                            color: 'white'
                        }
                    }}>
                        JUMP IN
                        <img height='60px' src={logo}></img>
                    </Typography>

                    <Typography component='a' fontWeight='bolder' href='#' variant='h1' color='grey' sx={{
                        textDecoration: 'none',
                        '&:hover': {
                            color: 'white'
                        }
                    }}>
                        JUMP IN
                        <img height='60px' src={logo}></img>
                    </Typography>

                    <Typography component='a' fontWeight='bolder' href='#' variant='h1' color='grey' sx={{
                        textDecoration: 'none',
                        '&:hover': {
                            color: 'white'
                        }
                    }}>
                        JUMP IN
                        <img height='60px' src={logo}></img>
                    </Typography>
                    <Typography component='a' fontWeight='bolder' href='#' variant='h1' color='grey' sx={{
                        textDecoration: 'none',
                        '&:hover': {
                            color: 'white'
                        }
                    }}>
                        JUMP IN
                    </Typography>
                </Box >
            </marquee >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#000', padding: '2rem' }}>
                <Typography variant='h7' color='white'>STAGVERSE</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Typography variant='h7' color='white'>IOS</Typography>
                    <Typography variant='h7' color='white'>ANDROID</Typography>
                    <Typography variant='h7' color='white'>DOCS</Typography>
                    <Typography variant='h7' color='white'>TERMS</Typography>
                    <Typography variant='h7' color='white'>PRIVACY</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer