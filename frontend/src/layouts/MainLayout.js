import React from 'react'
import NavBar from '../components/NavBar'
import SideMenu from '../components/SideMenu'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export default function MainLayout({ children }) {
    return (
        <Box>
            <SideMenu >
                <NavBar />
                {children}
            </SideMenu>
        </Box>
    )
}
