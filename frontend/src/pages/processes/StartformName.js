import React from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


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
export default function StartformName() {
    return (
        <>
            <Typography variant='h6' fontWeight='bold'>Startform name</Typography>
            <Stack direction='column'>
                <CssTextField
                    sx={{ margin: '.5rem 0 ' }}
                    type='text'
                    id=""
                    label="Email"
                    InputProps={{ sx: { borderRadius: '10px', }, width: '100%' }}
                    width='full'
                />
                <CssTextField
                    sx={{ margin: '.5rem 0 ' }}
                    type='text'
                    id=""
                    label="Description Test"
                    InputProps={{ sx: { borderRadius: '10px', height: '6rem' } }}
                    width='full'
                />
            </Stack >
        </>
    )
}
