import React from 'react'
import CustomAvatar from './CustomAvatar'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function NavBar() {
    const styles = {
        nav: {
            width: '96vw',
            height: '3.5rem',
            backgroundColor: 'white',
            borderBottom: '3px solid #D6D5D9',
        },
        bell: {
            height: '1.75rem',
            width: '1.75rem',
            color: 'gray'
        }
    }
    return (
        <Box sx={styles.nav}>
            <Box display="flex" justifyContent="space-between" alignItems="center" padding=".5rem 1rem .5rem 1rem">
                <Box>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            <Typography fontWeight="bold" variant="h6">Process</Typography>
                        </Link>
                        <Typography fontWeight="bold" color="black" variant="h6">Tables</Typography>
                    </Breadcrumbs>
                </Box>
                <Box display="flex" alignItems="center" gap="1rem">
                    <NotificationsNoneOutlinedIcon sx={styles.bell}/>
                    <FontDownloadOutlinedIcon/>
                    <CustomAvatar name='Kend Dods' src='images/test.png'/>
                </Box>
            </Box>
        </Box>
    )
}
