import { AppBar, Box, Container, ListItem, Toolbar } from '@mui/material'
import React from 'react'
import logo from '../assets/logo.svg'
const Navbar = () => {
    return (

        <AppBar position='sticky' color='transparent' sx={{
            top: '0',
            padding: '2rem',
            background: 'linear-gradient(rgb(14, 13, 13) 0%, rgba(14, 13, 13, 0) 100%)',
            boxShadow: 'none'
        }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* <ListItem > */}
                <Box sx={{ display: { lg: 'block', xs: 'none' } }}>
                    <img src='https://stageverse.com/images/other/stageverse-logo.svg'></img>
                </Box>
                <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
                    <img height='50px' src={logo}></img>
                </Box>
                {/* </ListItem> */}
                <Box sx={{ display: { lg: 'none', xs: 'block' } }}>
                    <img src='https://stageverse.com/images/other/menu-icon.svg'></img>
                </Box>


            </Toolbar >
        </AppBar >
    )
}

export default Navbar