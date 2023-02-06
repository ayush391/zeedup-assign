import { AppBar, Container, ListItem, Toolbar } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <AppBar position='fixed' color='transparent' elevation='none' sx={{
            paddingTop: '2rem',
            background: 'linear-gradient(rgb(14, 13, 13) 0%, rgba(14, 13, 13, 0) 100%)'
        }}>
            <Toolbar>
                <ListItem>
                    <img src='https://stageverse.com/images/other/stageverse-logo.svg'></img>
                </ListItem>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar