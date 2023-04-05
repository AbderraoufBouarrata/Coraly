import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Grid from '@mui/material/Grid';

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


export default function TemporaryDrawer({ state, setState }) {
    const [expanded, setExpanded] = React.useState('panel1');
    const [open, setOpen] = React.useState(false);
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };

    const styles = {
        according: {
            width: '100%',
            margin: '.5rem 0',

        },
        accordingSummary: {
            backgroundColor: 'white',
            border: '0px solid lightgray',
        },

        arrow: {
            color: 'red'
        }
    }

    return (
        <div>
            <Button onClick={() => setState(true)} variant='contained' sx={{ backgroundColor: '#f93e6c', color: 'white', borderRadius: '10px', fontWeight: 'bold' }}><AddCircleOutlineIcon /> Add</Button>
            <Drawer
                anchor={'right'}
                open={state}
                onClose={() => toggleDrawer(false)}
            >
                <Box
                    sx={{ width: state === 'top' || state === 'bottom' ? 'auto' : 500, overflowX: 'hidden', }}
                    role="presentation"
                    onClick={() => toggleDrawer(false)}
                    onKeyDown={() => toggleDrawer(false)}
                >
                    <Box margin='2rem' display='flex' justifyContent='start' alignItems='center' flexDirection='column' sx={{minHeight: '85vh',  }} >
                        <CssTextField
                            sx={{ margin: '1rem', width: '100%' }}
                            type='text'
                            id=""
                            label="Contract numbers"
                            InputProps={{ sx: { borderRadius: '10px', } }}
                            width='fit-content'
                        />
                        <CssTextField
                            sx={{ margin: '1rem', width: '100%' }}
                            type='text'
                            id=""
                            label="Contract number"
                            InputProps={{ sx: { borderRadius: '10px', } }}
                            width='fit-content'
                        />
                        <CssTextField
                            sx={{ margin: '1rem', width: '100%' }}
                            type='email'
                            id=""
                            label="Email"
                            InputProps={{ sx: { borderRadius: '10px', } }}
                            width='fit-content'
                        />
                        <CssTextField
                            sx={{ margin: '1rem', width: '100%' }}
                            type='email'
                            id=""
                            label="Contract Type"
                            InputProps={{ sx: { borderRadius: '10px', } }}
                            width='fit-content'
                        />
                        <CssTextField
                            sx={{ margin: '1rem', width: '100%' }}
                            type='email'
                            id=""
                            label="Phone Provider"
                            InputProps={{ sx: { borderRadius: '10px', } }}
                            width='fit-content'
                        />
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={styles.according} >
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={styles.accordingSummary}>
                                <Typography variant='h6' fontWeight='bold' display='flex' alignItems='center' sx={{ gap: '.5rem' }}><LocalMallOutlinedIcon sx={styles.arrow} />Tim</Typography>
                            </AccordionSummary>
                            <AccordionDetails>

                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={styles.according} >
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={styles.accordingSummary} >
                                <Typography variant='h6' fontWeight='bold' display='flex' alignItems='center' sx={{ gap: '.5rem' }}><LocalMallOutlinedIcon sx={styles.arrow} />Tim</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Stack direction="column" spacing={2}>
                                    <CssTextField
                                        sx={{ margin: '.5rem 0 ' }}
                                        type='email'
                                        id=""
                                        label="Email"
                                        InputProps={{ sx: { borderRadius: '10px', } }}
                                        width='full'
                                    />
                                    <CssTextField
                                        sx={{ margin: '.5rem 0 ' }}
                                        type='text'
                                        id=""
                                        label="Contract Type"
                                        InputProps={{ sx: { borderRadius: '10px', } }}
                                        width='full'
                                    />
                                    <CssTextField
                                        sx={{ margin: '.5rem 0 ' }}
                                        type='number'
                                        id=""
                                        label="Discount"
                                        InputProps={{ sx: { borderRadius: '10px', } }}
                                        width='full'
                                    />
                                </Stack>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box margin='2rem' display='flex' justifyContent='space-between' alignItems='center' flexDirection='row'>
                        <Box>
                            <KeyboardArrowLeftRoundedIcon sx={{ fontSize: '2rem', color: 'gray' }} />
                            <KeyboardArrowRightRoundedIcon sx={{ fontSize: '2rem', color: 'gray' }} />
                        </Box>
                        <Box  display='flex' gap='1rem' flexDirection='row-reverse'>
                            <Button variant='contained' sx={{ backgroundColor: '#2ccfbc', color: 'white', fontWeight: 'bold', borderRadius: '10px', '&:hover': { backgroundColor: '#2ccfbc' } }}>Save</Button>
                            <Button onClick={() => setState(false)} variant='outlined' sx={{ color: '#04385a', fontWeight: 'bold', border: '2px solid', borderRadius: '10px', '&:hover': { border: '2px solid' } }}>Cancel</Button>
                        </Box>

                    </Box>

                </Box>
            </Drawer>
        </div>
    );
}