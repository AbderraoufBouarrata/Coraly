import React from 'react'
import CustomMenu from './CustomMenu'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import { Popover } from '@mui/material';

type ProcessProps = {
    process: string;
    color: string;
    locked?: boolean;
  }

export default function Process({ process, color, locked = false }: ProcessProps) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    return (
        <Box sx={{
            margin: '1rem',
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            borderRadius: '10px',
            backgroundColor: color,
            width: '12rem',
            height: '12rem',
            justifyContent: 'center',
            alignItems: 'center',
            "&:hover": {
                cursor: 'pointer',
            }
        }}>
            <CustomMenu options={[
                'None',
                'Atria',
                'Callisto',
                'Dione',
                'Ganymede',
                'Hangouts Call',
                'Luna',
                'Oberon',
                'Phobos',
                'Pyxis',
                'Sedna',
                'Titania',
                'Triton',
                'Umbriel',
            ]} />

            {locked ?
                <LockOutlinedIcon aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                    sx={{ fontSize: 50, color: 'white', textAlign: 'center' }} />
                :
                <LockOpenOutlinedIcon aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                    sx={{ position: 'absolute', fontSize: 20, color: 'white', textAlign: 'center', top: '1rem', left: '1rem' }} />
            }
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus>
                <Typography sx={{ p: 1 ,color:'white', backgroundColor:'#5a5869' }}>{locked ? 'This is a private process' : 'This is a public process'}</Typography>
            </Popover>
            <DeveloperBoardIcon sx={{ fontSize: 50, color: 'white', textAlign: 'center' }} />
            <Typography variant='h6' sx={{ color: 'white', textAlign: 'center', paddingTop: '.5rem' }}>{process}</Typography>

        </Box>
    )
}
