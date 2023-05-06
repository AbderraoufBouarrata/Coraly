import React from 'react'
import SettingsCard from '../settingsCard/SettingsCard';
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
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
        },
        devider: {
            borderLeftWidth: '2px',
            borderRadius: '10px'
        }
    }

    const toolbarText = ['Views', 'Tables', 'Columns', 'Filters', 'Group', 'Orders', 'Colors', 'Height']
    const toolbarIcon = [<ViewComfyOutlinedIcon sx={styles.iconRed} />, <FormatListBulletedRoundedIcon sx={styles.iconRed} />,
    <ViewWeekOutlinedIcon sx={styles.iconGray} />, <FilterAltOutlinedIcon sx={styles.iconGray} />, <CategoryOutlinedIcon sx={styles.iconGray} />,
    <UnfoldMoreOutlinedIcon sx={styles.iconGray} />, <ColorLensOutlinedIcon sx={styles.iconGray} />, <HeightOutlinedIcon sx={styles.iconGray} />]

    const toolbarIcon2 = [<LocalMallOutlinedIcon sx={styles.iconRed} />, <SearchOutlinedIcon sx={styles.iconGray} />,
    <NavigateBeforeRoundedIcon sx={styles.iconGray} />, <NavigateNextRoundedIcon sx={styles.iconGray} />, <SettingsRoundedIcon onClick={()=>setOpenSettings(true)} sx={styles.iconGray} />]

    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' borderBottom='2px solid #D6D5D9' gap='8rem'>
            <Box flexGrow={1} margin='1rem' display='flex' justifyContent='space-between' >
                {
                    toolbarText.map((text, index) => (
                        <>
                            <Box sx={styles.tool} key={index}>
                                {toolbarIcon[index]}
                                <Typography sx={styles.text}>{text}</Typography>
                            </Box>
                            {index === 0 || index === 1 ? <Divider orientation="vertical" flexItem sx={styles.devider} /> : null}
                        </>
                    ))
                }
            </Box>
            <Box margin='1rem' display='flex' justifyContent='space-between' gap='1rem'>
                {
                    toolbarIcon2.map((icon, index) => (
                        <Box margin='0 .5rem' sx={styles.tool} key={index}>
                            {icon}
                        </Box>
                    ))
                }
                <Drawer state={openDrawer} setState={setOpenDrawer} />
            </Box>
            {openSettings ? <SettingsCard open={openSettings} setOpen={setOpenSettings} /> : null}
        </Box>
    )
}
