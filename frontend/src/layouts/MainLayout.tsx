import React, {ReactNode} from 'react'
import NavBar from '../components/NavBar'
import SideMenu from '../components/SideMenu'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

interface AuthLayoutProps {
    children: ReactNode;
  }
export default function MainLayout({ children }: AuthLayoutProps) {
    return (
        <Box>
            <SideMenu >
                <NavBar />
                {children}
            </SideMenu>
        </Box>
    )
}
