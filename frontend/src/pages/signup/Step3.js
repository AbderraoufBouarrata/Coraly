import React from 'react'
import { Typography, FormControl, Box, Checkbox, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#5a5a73',
        fontWeight: 'bold',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#5a5a73',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid lightgray',
        },
        '&:hover fieldset': {
            borderColor: 'gray',
        },
        '&.Mui-focused fieldset': {
            border: '3px solid #5a5a73',
        },
    },
});


export default function Step1(props) {
    const {step, setStep} = props
    return (
        <>
            <Typography variant='h5' fontWeight='bold' color='#464356'>Complete your profile</Typography>
            <Typography variant='subtitle1' color='textSecondary' width="24rem">insert all your info to proceed with your workspace</Typography>
            <FormControl sx={{ marginTop: '2rem' }}>
                <Box display='flex' justifyContent='space-between' gap='2em'>
                    <CssTextField
                        sx={{ margin: '1rem 0 1rem 0', width: '50%' }}
                        type='text'
                        required
                        id=""
                        label="Name"
                        InputProps={{ sx: { borderRadius: '10px' } }}

                    />
                    <CssTextField
                        sx={{ margin: '1rem 0 1rem 0', width: '50%' }}
                        type='text'
                        required
                        id=""
                        label="Surname"
                        InputProps={{ sx: { borderRadius: '10px' } }}
                    />
                </Box>
                <CssTextField
                    sx={{ margin: '1rem 0 1rem 0' }}
                    type='password'
                    required
                    id=""
                    label="Password"
                    InputProps={{ sx: { borderRadius: '10px' } }}
                    width='full'
                />
                <CssTextField
                    sx={{ margin: '1rem 0 1rem 0' }}
                    type='password'
                    required
                    id=""
                    label="Repeat Password"
                    InputProps={{ sx: { borderRadius: '10px' } }}
                    width='full'
                />
            </FormControl>
            <Button variant='contained' sx={{ '&:hover': { backgroundColor: '#2ccfbc' }, borderRadius: '10px', backgroundColor: '#2ccfbc', color: 'white', margin: '1rem 0 1rem 0', height: '3rem', width: '100%', fontWeight: 'bold' }}>Complete now</Button>
        </>
    )
}
