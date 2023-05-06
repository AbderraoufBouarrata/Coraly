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
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AttachmentRoundedIcon from '@mui/icons-material/AttachmentRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import SegmentRoundedIcon from '@mui/icons-material/SegmentRounded';

import StartformName from './StartformName'
import Header from './Header'
import Groups from './Groups'

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
        },
        componentContainer: {
            marginTop: '.5rem',
        },
        flexCenter: {
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem'
        },
        footer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '.5rem',
            gap: '.5rem',
            flexGrow: 1
        },
        buttonSave: {
            backgroundColor: '#2ccfbc',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '10px',
            '&:hover': { backgroundColor: '#2ccfbc' }
        },
        buttonCancel: {
            color: '#04385a',
            fontWeight: 'bold',
            border: '2px solid',
            borderRadius: '10px',
            '&:hover': { border: '2px solid' }
        },
        sideMenu:{
            display:'flex', 
            justifyContent:'center', 
            alignItems:'end', 
            flexDirection:'column', 
            marginTop:'4rem', 
            gap:'2rem'
        },
        fieldPhase: {
            height: 'full', 
            alignSelf:'start',
            paddingLeft:'3rem'
        },


    }
    const sideIcons = [<ShoppingBagOutlinedIcon sx={styles.icons} />, <FormatListBulletedOutlinedIcon sx={styles.icons} />, <ChatBubbleOutlineRoundedIcon sx={styles.icons} />,
    <AttachmentRoundedIcon sx={styles.icons} />, <InsertLinkRoundedIcon sx={styles.icons} />, <SegmentRoundedIcon sx={styles.icons} />]
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
                        <Header open={open} setOpen={setOpen} />
                    </Grid>
                    <Grid item xs={6} sx={{ overflowY: 'auto' }}>

                        <Groups />
                        <Box sx={styles.componentContainer}>
                            <StartformName />
                        </Box>
                        <Box sx={styles.componentContainer}>
                            <CompanyData />
                        </Box>
                    </Grid>
                    <Grid item xs={5} sx={styles.fieldPhase} >
                        <Box sx={styles.componentContainer}>
                            <FieldsPhase />
                        </Box>
                    </Grid>
                    <Grid item xs={1} height='full' alignSelf='start'>
                        <Box sx={styles.sideMenu} >
                            {
                                sideIcons.map((icon) => {
                                    return (icon)
                                })
                            }
                        </Box>
                    </Grid>
                    <Box sx={styles.footer} >
                        <Box sx={styles.flexCenter}>
                            <Typography variant='h6' fontWeight='bold'>Fase ID: </Typography><Typography variant='subtitle1'>528sc4646354c54c846v</Typography>
                        </Box>
                        <Box sx={styles.flexCenter} flexDirection='row-reverse' >
                            <Button variant='contained' sx={styles.buttonSave}>Save</Button>
                            <Button onClick={() => setOpen(!open)} variant='outlined' sx={styles.buttonCancel}>Cancel</Button>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </Modal>
    )
}
