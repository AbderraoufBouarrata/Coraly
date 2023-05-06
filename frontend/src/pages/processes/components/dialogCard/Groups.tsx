import React from 'react'
import { Box, Typography, AvatarGroup, Chip, Stack } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CustomAvatar from '../../../../components/CustomAvatar'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import Divider from '@mui/material/Divider';

export default function Groups() {
    const styles = {
        grayChip: {
            display: 'flex',
            alignItems: 'center',
            padding: '0 1rem',
            backgroundColor: 'lightgray',
            color: '#04385a',
            borderRadius: '15px',
            height: '2rem',
        },
    }
    return (
        <>

            <Box display='flex' justifyContent='space-between' alignItems='center' marginTop='.5rem' sx={{ overflowY: 'auto' }}>
                <Box>
                    <AvatarGroup max={5}>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                                <CustomAvatar key={index} name='Fabrizio Nilo' rounded={true} />
                            ))
                        }
                    </AvatarGroup>
                </Box>
                <Box display='flex' alignItems='center'>
                    <KeyboardDoubleArrowRightIcon sx={{ color: 'red' }} />
                    <Typography variant='subtitle1' color='textSecondary' fontWeight='bold'>Chapter One</Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <CalendarTodayOutlinedIcon />
                    <Typography variant='subtitle1' color='textSecondary' fontWeight='bold'>05/10/2021 - 17:51</Typography>
                </Box>
            </Box>
            <Box sx={{ marginTop: '.5rem' }} >
                <Stack direction="row" spacing={1} alignItems='center'>
                    <Chip label="Label 1" sx={{ backgroundColor: "#47bdff", color: 'white', padding: '0 1rem', fontWeight: 'bold' }} />
                    <Chip label="Label 1" sx={{ backgroundColor: "#e547ff", color: 'white', padding: '0 1rem', fontWeight: 'bold' }} />
                    <Chip label="Label 1" sx={{ backgroundColor: "#ff9f47", color: 'white', padding: '0 1rem', fontWeight: 'bold' }} />
                    <AddCircleOutlineIcon sx={{ color: 'red' }} />
                </Stack>
            </Box>
            <Box sx={{ marginTop: '.5rem' }}>
                <Stack direction='row' gap='.5rem' alignItems='center' justifyContent='space-between'>
                    <Stack direction='row' gap='.5rem' alignItems='center' justifyContent='space-between'>
                        <PersonOutlineOutlinedIcon sx={{ color: 'gray' }} />
                        <Typography variant='subtitle1' >Select Vendors</Typography>
                    </Stack>
                    <Divider orientation="vertical" flexItem sx={{ borderLeftWidth: '1.5px', borderRadius: '10px' }} />
                    <Stack direction='row' gap='.5rem' alignItems='center' justifyContent='space-between'>
                        <Box sx={styles.grayChip} ><StorageOutlinedIcon />#database_object_1</Box>
                        <Box sx={styles.grayChip} ><StorageOutlinedIcon />#db-obj-1</Box>
                    </Stack>
                </Stack>
            </Box>
            <Box marginTop='.5rem'>
                <Divider orientation="horizontal" flexItem sx={{ borderTopWidth: '1.5px', borderRadius: '10px' }} />
            </Box>
        </>
    )
}
