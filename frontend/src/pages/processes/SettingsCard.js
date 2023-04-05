import React from 'react'
import MembersTable from './MembersTable'

import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import TextField from '@mui/material/TextField';

import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import SubdirectoryArrowRightRoundedIcon from '@mui/icons-material/SubdirectoryArrowRightRounded';
import ViewWeekOutlinedIcon from '@mui/icons-material/ViewWeekOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';

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


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
    width: '90%',
    height: '95%',
    overflowY: 'auto'
};
export default function SettingsCard(props) {
    const { open, setOpen } = props
    const styles = {
        icons: {
            color: 'gray',
            '&:hover': {
                cursor: 'pointer'
            },
            borderRadius: '10px',
            fontSize: '2rem',
        },
        typography: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            gap: '.5rem',
            margin: '2rem 1rem',
            '&:hover': {
                cursor: 'pointer',
            }
        },

    }
    const menuText = ['Startform', 'Fasi', 'Table', 'Card', 'Labels', 'Campi condizionali', 'Automation', 'Connexion', 'Members', 'Export', 'General']
    const menuIcons = [<FormatListBulletedRoundedIcon />, <SubdirectoryArrowRightRoundedIcon />, <ViewWeekOutlinedIcon />,
    <AssessmentOutlinedIcon />, <LocalOfferOutlinedIcon />, <InsertDriveFileOutlinedIcon />, <SmartToyOutlinedIcon />, <SyncAltOutlinedIcon />,
    <PeopleOutlineOutlinedIcon />, <PublishOutlinedIcon />, <SettingsIcon />]
    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} >
                <Grid container justifyContent="start" alignItems="center" >
                    <Grid item xs={12} >
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Typography variant='h5' fontWeight='bold' color='#464356'>Impostazioni</Typography>
                            <Box display='flex' alignItems='center' gap='.5rem'>
                                <CloseRoundedIcon onClick={() => setOpen(!open)} sx={styles.icons} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={2} >
                        <Box marginTop='3rem' borderLeft='2px solid lightgray'>
                            {
                                menuText.map((text, index) => {
                                    return (
                                        <Typography variant='subtitle1' fontWeight='bold' color='gray' sx={styles.typography} key={index}>{menuIcons[index]} {text}</Typography>
                                    )
                                })
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={10} alignSelf='start' >
                        <Box margin='2rem 0 0 2rem' display='flex' justifyContent='space-between' alignItems='center'>
                            <CssTextField
                                sx={{ margin: '.5rem 0 ' }}
                                type='text'
                                id=""
                                label="Contract name"
                                InputProps={{ sx: { borderRadius: '10px', } }}
                                width='full'
                            />
                            <Typography variant='subtitle1' fontWeight={500} color='' sx={{ margin: '.5rem 0 ' }}>Members</Typography>
                            <Button gap='10rem' variant='contained' sx={{ display:'flex', gap:'1rem', backgroundColor: '#f93e6c', color: 'white', borderRadius: '10px', fontWeight: 'bold', '&:hover': {backgroundColor: '#f93e6c'} }}>
                                <AddCircleOutlineIcon /> <Typography fontWeight='bold'>Invite</Typography>
                            </Button>
                        </Box>
                        <Box margin='2rem 0 0 2rem'>
                            <MembersTable />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}
