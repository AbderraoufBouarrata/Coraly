import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, alpha } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));



export default function MembersTable() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const styles={
        icon: {
            '&:hover': {
                cursor: 'pointer',
            },

        }
    }

    const columns = [
        { field: 'utente', headerName: 'Utente', width: 300, sortable: false, disableColumnMenu: true, },
        { field: 'email', headerName: 'Email', width: 600, sortable: false, disableColumnMenu: true, },
        {
            field: 'permission', headerName: 'Permission', width: 300, sortable: false, disableColumnMenu: true, renderCell: (params) => (<>
                <Button
                    id="demo-customized-button"
                    aria-controls={open ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{ '&:hover': { backgroundColor: params.value === 'Admin' ? '#F44336' : params.value === 'User' ? '#FF9800' : params.value === 'Moderator' ? '#2196F3' : '#4CAF50' }, color: '#fff',
                        backgroundColor: params.value === 'Admin' ? '#F44336' : params.value === 'User' ? '#FF9800' : params.value === 'Moderator' ? '#2196F3' : '#4CAF50', borderRadius: '15px' }}
                >
                    {params.value}
                </Button>
                <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} disableRipple>
                        <MoreHorizIcon />
                        Admin
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        <MoreHorizIcon />
                        User
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        <MoreHorizIcon />
                        Moderator
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        <MoreHorizIcon />
                        Viewer
                    </MenuItem>
                </StyledMenu></>)
        },
        {
            field: 'delete',
            headerName: '',
            type: '',
            width: 30,
            sortable: false,
            disableColumnMenu: true,
            renderCell: (params) => (
                // Render the MUI icon in the cell
                <>
                    {params.value}
                    <DeleteIcon sx={styles.icon} /></>
            ),
        },

    ];

    const [rows, setRows] = React.useState([]);

    const users = React.useMemo(async () => {
        const response = await fetch('http://localhost:4000/api/v1/users').then(res => res.json());
        console.log(response.data)
        const dataWithNames = response.data.map(entry => ({
            id: entry.id,
            utente: entry.name,
            email: entry.email,
            permission: entry.permission
        }));
        setRows(dataWithNames);
    }, [])
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                pagination={false}
                disableFooter
            />
        </div>
    );
}