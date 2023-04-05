import React from 'react'
import SettingsCard from './SettingsCard';
import Drawer from './Drawer';

import Box from '@mui/material/Box'
import { Button, Typography } from '@mui/material'
import ViewComfyOutlinedIcon from '@mui/icons-material/ViewComfyOutlined';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import ViewWeekOutlinedIcon from '@mui/icons-material/ViewWeekOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import Divider from '@mui/material/Divider';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Toolbar() {
    const [openSettings, setOpenSettings] = React.useState(false);
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const styles = {
        iconRed: {
            color: 'red'
        },
        iconGray: {
            color: '#6f6d7b'
        },
        tool: {
            gap: '.5rem',
            borderRadius: '5px',
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: '#f6f8fa',
            },
        },
        text: {
            fontWeight: 500,
            color: '#6f6d7b'
        }
    }
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpenDrawer({ ...openDrawer, [anchor]: open });
    };
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' borderBottom='2px solid #D6D5D9' gap='8rem'>
            <Box flexGrow={1} margin='1rem' display='flex' justifyContent='space-between' >
                <Box flexGrow={1} display='flex' justifyContent='center' alignItems='center' sx={styles.tool} padding='0rem 0rem'>
                    <ViewComfyOutlinedIcon sx={styles.iconRed} />
                    <Typography sx={styles.text}>views</Typography>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ borderLeftWidth: '2px', borderRadius: '10px' }} />

                <Box flexGrow={1} display='flex' justifyContent='center' alignItems='center' sx={styles.tool}>
                    <FormatListBulletedRoundedIcon sx={styles.iconRed} />
                    <Typography sx={styles.text}>Tables</Typography>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ borderLeftWidth: '2px', borderRadius: '10px' }} />

                <Box flexGrow={1} display='flex' justifyContent='center' alignItems='center' sx={styles.tool}>
                    <ViewWeekOutlinedIcon sx={styles.iconGray} />
                    <Typography sx={styles.text}>Columns</Typography>
                </Box>

                <Box flexGrow={1} display='flex' justifyContent='center' alignItems='center' sx={styles.tool}>
                    <FilterAltOutlinedIcon sx={styles.iconGray} />
                    <Typography sx={styles.text}>Filters</Typography>
                </Box>

                <Box flexGrow={1} display='flex' justifyContent='center' alignItems='center' sx={styles.tool}>
                    <CategoryOutlinedIcon sx={styles.iconGray} />
                    <Typography sx={styles.text}>Group</Typography>
                </Box>

                <Box flexGrow={1} display='flex' justifyContent='center' alignItems='center' sx={styles.tool}>
                    <UnfoldMoreOutlinedIcon sx={styles.iconGray} />
                    <Typography sx={styles.text}>Orders</Typography>
                </Box>

                <Box flexGrow={1} display='flex' justifyContent='center' alignItems='center' sx={styles.tool}>
                    <ColorLensOutlinedIcon sx={styles.iconGray} />
                    <Typography sx={styles.text}>Colors</Typography>
                </Box>

                <Box flexGrow={1} display='flex' justifyContent='center' alignItems='center' sx={styles.tool}>
                    <HeightOutlinedIcon sx={styles.iconGray} />
                    <Typography sx={styles.text}>Height</Typography>
                </Box>
            </Box>
            <Box margin='1rem' display='flex' justifyContent='space-between' gap='1rem'>
                <Box margin='0 .5rem' display='flex' justifyContent='center' alignItems='center' sx={styles.tool}>
                    <LocalMallOutlinedIcon sx={{ color: 'red' }} />
                </Box>
                <Box margin='0 .5rem' display='flex' justifyContent='center' alignItems='center' sx={styles.tool}>
                    <SearchOutlinedIcon sx={{ color: '#5a5869' }} />
                </Box>
                <Box margin='0 .5rem' display='flex' justifyContent='center' alignItems='center' sx={styles.tool}>
                    <NavigateBeforeRoundedIcon sx={{ color: '#5a5869' }} />
                </Box>
                <Box margin='0 .5rem' display='flex' justifyContent='center' alignItems='center' sx={styles.tool}>
                    <NavigateNextRoundedIcon sx={{ color: '#5a5869' }} />
                </Box>
                <Box margin='0 .5rem' display='flex' justifyContent='center' alignItems='center' sx={styles.tool}>
                    <SettingsRoundedIcon onClick={() => setOpenSettings(true)} sx={{ color: '#5a5869' }} />
                </Box>
                <Drawer state={openDrawer} setState={setOpenDrawer} />
            </Box>
            {openSettings ? <SettingsCard open={openSettings} setOpen={setOpenSettings} /> : null}
        </Box>
    )
}
