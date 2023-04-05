import * as React from 'react';
import DialogCard from './DialogCard';


import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomAvatar from '../../components/CustomAvatar';
import SwipeRightAltOutlinedIcon from '@mui/icons-material/SwipeRightAltOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


function createData(vod, name, phone, it, person, date) {
    return { vod, name, phone, it, person, date };
}

const rows = [
    createData('VOD-153', 'Theresa Webb', '+39 065262123', 'IT069823456', 'Alessandro Dumi', '2021-05-12'),
    createData('VOD-153', 'Theresa Webb', '+39 065262123', 'IT069823456', 'Alessandro Dumi', '2021-05-12'),
    createData('VOD-153', 'Theresa Webb', '+39 065262123', 'IT069823456', 'Alessandro Dumi', '2021-05-12'),
    createData('VOD-153', 'Theresa Webb', '+39 065262123', 'IT069823456', 'Alessandro Dumi', '2021-05-12'),
    createData('VOD-153', 'Theresa Webb', '+39 065262123', 'IT069823456', 'Alessandro Dumi', '2021-05-12'),
    createData('VOD-153', 'Theresa Webb', '+39 065262123', 'IT069823456', 'Alessandro Dumi', '2021-05-12'),
    createData('VOD-153', 'Theresa Webb', '+39 065262123', 'IT069823456', 'Alessandro Dumi', '2021-05-12'),
    createData('VOD-153', 'Theresa Webb', '+39 065262123', 'IT069823456', 'Alessandro Dumi', '2021-05-12'),
    createData('VOD-153', 'Theresa Webb', '+39 065262123', 'IT069823456', 'Alessandro Dumi', '2021-05-12'),
];

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : '#f6f8fa',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: 0,
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


export default function Contract({ name, data }) {
    const [expanded, setExpanded] = React.useState('panel1');
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openSettings, setOpenSettings] = React.useState(false);
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    // console.log(createData('Frozen yoghurt', 159, 6.0, 24, 4.0))

    return (
        <Box>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography variant='h6' fontWeight='bold' display='flex' alignItems='center' sx={{gap: '.5rem'}}><SwipeRightAltOutlinedIcon  sx={{color: 'red'}}/> New Contract <AddCircleOutlineIcon sx={{color:'red'}}/></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" size='small'>
                            <TableBody sx={{border: '2px sold lightgray'}}>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '& td, & th': { border: '3px solid #f6f8fa'} }}
                                        onClick={() => setOpenDialog(true)}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.vod}
                                        </TableCell>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="left">{row.phone}</TableCell>
                                        <TableCell align="left">{row.it}</TableCell>
                                        <TableCell align="left"><Box display='flex' alignItems='center' gap='1rem'><CustomAvatar name={row.person} src='images/test.png' rounded={true}/> {row.person}</Box></TableCell>
                                        <TableCell align="left">{row.date}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
            {openDialog ? <DialogCard open={openDialog} setOpen={setOpenDialog} />: null}
            
        </Box>
    )
}
