import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
//@ts-ignore
import CustomAvatar from "./CustomAvatar";
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function SideMenu({ children }: AuthLayoutProps) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuText = ["Lasting Dynamics", "Dashboard", "Users", "Projects", "Storage", "Next", "Devices", "Network", "Help", "Logout",];
  const menuIcons = [
    <CustomAvatar name="Lasting Dynamics" src="images/test.png" />, <GridViewOutlinedIcon />, <PeopleOutlineIcon />, <DescriptionOutlinedIcon />, <StorageOutlinedIcon />,
    <KeyboardDoubleArrowRightIcon />, <SmartToyOutlinedIcon />, <AccountTreeOutlinedIcon />, <HelpOutlineIcon />, <ExitToAppRoundedIcon />];

  const styles = {
    flexCenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      color: "lightgray",
    },
    listItem: {
      color: "lightgray",
      display: "flex",
    },
    listItemIcon: {
      color: "#eaeaec",
      minWidth: open ? 0 : "",
      mr: open ? 3 : "auto",
      justifyContent: "center",
    },
    paperProps: {
      sx: { backgroundColor: "#10355b" }
    }
  }


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={styles.paperProps}
      >
        <Box height="3.5rem">
          {open ? (
            <Box
              height="100%"
              display="flex"
              justifyContent="end"
              alignItems="center"
            >
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon sx={styles.icon} />
                ) : (
                  <ChevronLeftIcon sx={styles.icon} />
                )}
              </IconButton>
            </Box>
          ) : (
            <Box height="100%" sx={styles.flexCenter}>
              <IconButton
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                sx={{
                  color: "#eaeaec",
                  // @ts-ignore
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Box>
        <List>
          {menuText.map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={styles.listItem}
            >
              <ListItemButton
                sx={{
                  minHeight: 54,
                  justifyContent: open ? "initial" : "center",
                  px: 3.5,
                }}
              >
                <ListItemIcon
                  sx={styles.listItemIcon}
                >
                  {menuIcons[index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main">{children}</Box>
    </Box>
  );
}
