import React from 'react'

import { styled } from '@mui/material/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SwipeRightAltOutlinedIcon from '@mui/icons-material/SwipeRightAltOutlined';
import { TextField } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Stack from '@mui/material/Stack';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    borderRadius: '10px',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {

        display: 'none',
    },
}));


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



const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<KeyboardArrowUpIcon sx={{ fontSize: '1.5rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : '#f6f8fa',
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(180deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: 0,
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


export default function FieldsPhase() {
    const [expanded, setExpanded] = React.useState('panel1');
    const [open, setOpen] = React.useState(false);
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const styles = {
        according: {
            margin: '.5rem 0',
        },
        arrow: {
            color: 'red'
        }
    }
    return (
        <Box>
            <Box display='flex' justifyContent='start'>
                <Typography variant='h6' fontWeight='bold'>Fields' phase</Typography>
            </Box>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={styles.according} >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography variant='h6' fontWeight='bold' display='flex' alignItems='center' sx={{ gap: '.5rem' }}><KeyboardDoubleArrowRightIcon sx={styles.arrow} />Phase 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack direction="column" spacing={2}>
                        <CssTextField
                            sx={{ margin: '.5rem 0 ' }}
                            type='text'
                            id=""
                            label="Contract name"
                            InputProps={{ sx: { borderRadius: '10px', } }}
                            width='full'
                        />
                        <CssTextField
                            sx={{ margin: '.5rem 0 ' }}
                            type='text'
                            id=""
                            label="Contract number 2"
                            InputProps={{ sx: { borderRadius: '10px', } }}
                            width='full'
                        />
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={styles.according}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography variant='h6' fontWeight='bold' display='flex' alignItems='center' sx={{ gap: '.5rem' }}><KeyboardDoubleArrowRightIcon sx={styles.arrow} />Start</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack direction="column" spacing={2}>
                        <CssTextField
                            sx={{ margin: '.5rem 0 ' }}
                            type='date'
                            id=""
                            label=""
                            InputProps={{ sx: { borderRadius: '10px', } }}
                            width='full'
                        />
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={styles.according}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography variant='h6' fontWeight='bold' display='flex' alignItems='center' sx={{ gap: '.5rem' }}><KeyboardDoubleArrowRightIcon sx={styles.arrow} />New Contract</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack direction="column" spacing={2}>
                        <CssTextField
                            sx={{ margin: '.5rem 0 ' }}
                            type='text'
                            id=""
                            label="New"
                            InputProps={{ sx: { borderRadius: '10px', } }}
                            width='full'
                        />
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}
