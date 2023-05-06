import React from 'react'
//@ts-ignore
import CustomAvatar from './CustomAvatar'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useParams } from 'react-router-dom';

export default function NavBar() {
    const { id } = useParams<{ id: string }>();
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
        },
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '.5rem 1rem .5rem 1rem'
        },
        flexCenter: {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
        }
    }
    return (
        <Box sx={styles.nav}>
            <Box sx={styles.container}>
                <Box>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/board">
                            <Typography fontWeight="bold" variant="h6">Process</Typography>
                        </Link>
                        {id ? <Typography fontWeight="bold" color="black" variant="h6">Process{id}</Typography> : null}
                    </Breadcrumbs>
                </Box>
                <Box sx={styles.flexCenter}>
                    <NotificationsNoneOutlinedIcon sx={styles.bell} />
                    <FontDownloadOutlinedIcon />
                    <CustomAvatar name='Kend Dods' src='images/test.png' />
                </Box>
            </Box>
        </Box>
    )
}
