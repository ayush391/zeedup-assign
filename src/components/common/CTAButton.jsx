import { Typography } from '@mui/material'
import React from 'react'

const CTAButton = () => {
    return (
        <button style={{
            background: '-webkit-linear-gradient(-70deg, #f75df6 20%, #6e80ef 70%, #61dfc7 95%)',
            borderRadius: '50px',
            border: 'none',
            padding: '2px',
            cursor: 'pointer'
        }}
        ><Typography color='white' variant='h6'
            fontFamily='Archivo Black'
            sx={{
                padding: '1rem 5rem',
                backgroundColor: '#000',
                borderRadius: '50px',
                margin: '0',
                '&:hover': {
                    backgroundColor: 'transparent',
                }
            }}>
                JUMP IN
            </Typography>
        </button>
    )
}

export default CTAButton