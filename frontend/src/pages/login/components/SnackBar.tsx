import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

type SnackBarProps = {
    text: string;
    severity: 'error' | 'warning' | 'info' | 'success';
    sx?: React.CSSProperties | any;
};

export default function SnackBar({ text, severity, sx }: SnackBarProps) {
    const styles = {
        stack: {
            margin: '1rem',
            width: '20rem'
        }
    }
    return (
        //@ts-ignore
        <Stack sev sx={styles.stack} spacing={2}>
            <Alert severity={severity} onClose={() => { }} sx={sx}>{text}</Alert>
        </Stack>
    );
}