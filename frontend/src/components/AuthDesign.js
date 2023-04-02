import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

export default function AuthDesign({ triangle, rectangle, circle, halfCircle, dottedSquare, text = "Get started with Coraly now and improve your workflow", styles }) {

    return (
        <Box >
            <Typography width='52rem' color='#464356' variant='h4' style={styles.text}>{text}</Typography>
            <img src={rectangle} alt='triangle' width='450' style={styles.rectangle} />
            <img src={triangle} alt='triangle' width='300' style={styles.triangle} />
            <img src={circle} alt='triangle' width='300' style={styles.circle} />
            <img src={dottedSquare} alt='triangle' width='300' style={styles.dottedSquare} />
            <img src={halfCircle} alt='triangle' width='300' style={styles.halfCircle} />
        </Box>
    )
}
