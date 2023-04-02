import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

import CustomAvatar from './CustomAvatar'
const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(10)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function SideMenu({ children }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const menuText = ["Lasting Dynamics" ,"Dashboard", "Users", "Projects", "Storage", "Devices", "Network", "Help", "Logout"]
    const menuIcons = [<CustomAvatar name='Lasting Dynamics' src='images/test.png'/>, <GridViewOutlinedIcon />, <PeopleOutlineIcon />, <DescriptionOutlinedIcon />, <StorageOutlinedIcon />, <SmartToyOutlinedIcon />, <AccountTreeOutlinedIcon />, <HelpOutlineIcon />, <ExitToAppRoundedIcon />]

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={open} PaperProps={{ sx: { backgroundColor: "#10355b" } }}>
                <Box height="3.5rem">
                    {
                        open ?
                            <Box height="100%" display="flex" justifyContent="end" alignItems="center">
                                <IconButton onClick={handleDrawerClose} >
                                    {theme.direction === 'rtl' ? <ChevronRightIcon sx={{ color: "lightgray" }} /> : <ChevronLeftIcon sx={{ color: "lightgray" }} />}
                                </IconButton>
                            </Box>
                            :
                            <Box height="100%" display="flex" justifyContent="center" alignItems="center">
                                <IconButton
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}

                                    sx={{
                                        color: "#eaeaec",

                                        ...(open && { display: 'none' }),
                                    }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                    }
                </Box>
                <List>
                    {menuText.map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ color: "lightgray", display: 'flex' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 54,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 3.5,
                                }}>
                                <ListItemIcon
                                    sx={{
                                        color: "#eaeaec",
                                        minWidth: open ? 0 : '',
                             
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {menuIcons[index]}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main">
                {children}
            </Box>
        </Box>
    );
}