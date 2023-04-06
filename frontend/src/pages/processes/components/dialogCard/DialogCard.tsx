import React from 'react'
import { Link } from 'react-router-dom'
import CustomAvatar from '../../../../components/CustomAvatar'
import FieldsPhase from './FieldsPhase'
import CompanyData from './CompanyData'

import { Typography } from '@mui/material'
import Box from '@mui/material/Box'

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AttachmentRoundedIcon from '@mui/icons-material/AttachmentRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import SegmentRoundedIcon from '@mui/icons-material/SegmentRounded';
import AvatarGroup from '@mui/material/AvatarGroup';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import StartformName from './StartformName'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import CropFreeIcon from '@mui/icons-material/CropFree';
import AttachmentIcon from '@mui/icons-material/Attachment';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Devider from '@mui/material/Divider';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
    width: '90%',
    height: '95%',
    overflowY: 'auto'
};

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#04385a',
        fontWeight: 'bold',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#04385a',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid lightgray',
        },
        '&:hover fieldset': {
            borderColor: 'gray',
        },
        '&.Mui-focused fieldset': {
            border: '3px solid #04385a',
        },
    },
});

interface DialogCardProps {
    open: boolean;
    setOpen: (open: boolean) => void;
  }

export default function DialogCard(props: DialogCardProps) {
    const { open, setOpen } = props
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [color, setColor] = React.useState('red');
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
        phase: {
            backgroundColor: '#04385a'
        },
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
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} >
                <Grid container justifyContent="start" alignItems="center" >
                    <Grid item xs={12} alignSelf='start'>
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
                                <CloseRoundedIcon onClick={()=>setOpen(!open)} sx={styles.icons} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sx={{ overflowY: 'auto' }}>
                        <Box display='flex' justifyContent='space-between' alignItems='center' marginTop='.5rem' sx={{ overflowY: 'auto' }}>
                            <Box>
                                <AvatarGroup max={5}>
                                    <CustomAvatar name='Fabrizio Nilo' rounded={true} />
                                    <CustomAvatar name='Fabrizio Nilo' rounded={true} />
                                    <CustomAvatar name='Fabrizio Nilo' rounded={true} />
                                    <CustomAvatar name='Fabrizio Nilo' rounded={true} />
                                    <CustomAvatar name='Fabrizio Nilo' rounded={true} />
                                    <CustomAvatar name='Fabrizio Nilo' rounded={true} />
                                    <CustomAvatar name='Fabrizio Nilo' rounded={true} />
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
                        <Box marginTop='.5rem'>
                            <StartformName />
                        </Box>
                        <Box marginTop='.5rem'>
                            <CompanyData />
                        </Box>
                    </Grid>
                    <Grid item xs={5} sx={{ height: 'full' }} alignSelf={'start'} paddingLeft={'3rem'} >
                        <Box marginTop='.5rem'>
                            <FieldsPhase />
                        </Box>
                    </Grid>
                    <Grid item xs={1} sx={{ height: 'full' }} alignSelf='start'>
                        <Box display='flex' justifyContent='center' alignItems='end' flexDirection='column' marginTop='4rem' gap='2rem' >
                            <ShoppingBagOutlinedIcon sx={styles.icons} />
                            <FormatListBulletedOutlinedIcon sx={styles.icons} />
                            <ChatBubbleOutlineRoundedIcon sx={styles.icons} />
                            <AttachmentRoundedIcon sx={styles.icons} />
                            <InsertLinkRoundedIcon sx={styles.icons} />
                            <SegmentRoundedIcon sx={styles.icons} />
                        </Box>
                    </Grid>
                    <Box display='flex' alignItems='center' justifyContent='space-between' marginTop='.5rem' gap='.5rem' flexGrow={1} >
                        <Box display='flex' alignItems='center' gap='.5rem'>
                            <Typography variant='h6' fontWeight='bold'>Fase ID: </Typography><Typography variant='subtitle1'>528sc4646354c54c846v</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' gap='.5rem' flexDirection='row-reverse' >
                            <Button variant='contained' sx={{ backgroundColor: '#2ccfbc', color: 'white', fontWeight: 'bold', borderRadius: '10px', '&:hover':{backgroundColor: '#2ccfbc'} }}>Save</Button>
                            <Button onClick={()=>setOpen(!open)} variant='outlined' sx={{ color: '#04385a', fontWeight: 'bold', border: '2px solid', borderRadius: '10px', '&:hover':{border: '2px solid'} }}>Cancel</Button>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </Modal>
    )
}
