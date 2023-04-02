import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function SnackBar({text, severity, sx}) {
    return (
            <Stack sev sx={{ width: '100%' ,margin: '1rem', width: '20rem'}} spacing={2}>
                <Alert severity={severity} onClose={() => {  }} sx ={sx}>{text}</Alert>
            </Stack>
    );
}