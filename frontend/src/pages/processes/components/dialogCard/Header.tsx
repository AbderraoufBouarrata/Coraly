import React from 'react'
import { Box, Typography } from '@mui/material'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import CropFreeIcon from '@mui/icons-material/CropFree';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Devider from '@mui/material/Divider';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

type HeaderProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
}
export default function Header(props: HeaderProps) {
    const { open, setOpen } = props
    const styles = {
        icons: {
            color: 'gray',
            '&:hover': {
                cursor: 'pointer'
            },
            borderRadius: '10px',
            fontSize: '2rem',
        }
    }
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Typography variant='h5' fontWeight='bold'>Courtney@mail.com</Typography>
            <Box display='flex' alignItems='center' gap='.5rem'>
                <Typography display='flex' alignItems='center' variant='subtitle1' color='textSecondary' gap='.5rem' sx={{ color: 'red', textDecoration: 'underline' }}>
                    <RemoveRedEyeOutlinedIcon />Ko Motivation
                </Typography>
                <FolderOpenIcon sx={styles.icons} />
                <CropFreeIcon sx={styles.icons} />
                <InsertLinkRoundedIcon sx={styles.icons} />
                <CopyAllIcon sx={styles.icons} />
                <DeleteOutlineOutlinedIcon sx={styles.icons} />
                <Devider orientation='vertical' sx={{ height: '20px', borderLeftWidth: '1.5px' }} />
                <CloseRoundedIcon onClick={() => setOpen(!open)} sx={styles.icons} />
            </Box>
        </Box>
    )
}
