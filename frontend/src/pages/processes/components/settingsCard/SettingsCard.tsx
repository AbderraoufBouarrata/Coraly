import React from 'react'
import MembersTable from './MembersTable'
import CustomInput from '../../../../components/CustomInput';

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

type SettingCardsProps = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function SettingsCard(props: SettingCardsProps) {
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
                color: 'red'
            }
        },
        flexBetween: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        input: {
            margin: '.5rem 0 '
        },
        inputProps: {
            borderRadius: '10px',
        },
        buttonInvite: {
            display: 'flex',
            gap: '1rem',
            backgroundColor: '#f93e6c',
            color: 'white',
            borderRadius: '10px',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#f93e6c' }
        },
        typographyMembers: {
            margin: '.5rem 0 ', 
            fontWeight: '500', 
        },
        flexCenter: {
            display: 'flex',
            justifyContent: 'center',
        },
        typographyImpostazioni: {
            fontWeight: 'bold',
            color: '#464356',
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
                        <Box sx={styles.flexBetween}>
                            <Typography variant='h5' sx={styles.typographyImpostazioni}>Impostazioni</Typography>
                            <Box gap='.5rem' sx={styles.flexCenter}>
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
                        <Box margin='2rem 0 0 2rem' sx={styles.flexBetween}>
                            <CustomInput
                                sx={styles.input}
                                type='text'
                                id=""
                                label="Contract name"
                                inputProps={styles.inputProps}
                            />
                            <Typography variant='subtitle1' sx={styles.typographyMembers}>Members</Typography>
                            <Button variant='contained' sx={styles.buttonInvite}>
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
