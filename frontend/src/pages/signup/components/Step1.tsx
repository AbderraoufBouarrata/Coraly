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

type Step1Props = {
    step: string,
    setStep: (step: string) => void
}

export default function Step1(props: Step1Props) {
    const {step, setStep} = props
    return (
        <>
            <Typography variant='h5' fontWeight='bold' color='#464356'>Create Your Workspace</Typography>
            <Typography variant='subtitle1' color='textSecondary' width="24rem">Coraly is the best tool to manage your workflow from the same place</Typography>
            <FormControl sx={{ marginTop: '2rem' }}>
                <CssTextField
                    sx={{ margin: '1rem 0 1rem 0' }}
                    type='email'
                    required
                    id=""
                    label="Workspace Name"
                    InputProps={{ sx: { borderRadius: '10px' } }}
                />
                <CssTextField
                    sx={{ margin: '1rem 0 1rem 0' }}
                    type='email'
                    required
                    id=""
                    label="Email"
                    InputProps={{ sx: { borderRadius: '10px' } }}
                />
            </FormControl>
            <Box>
                <Box display='flex' flexDirection='row' alignItems='center'>
                    <Checkbox sx={{ color: 'gray', '&.Mui-checked': { color: '#2ccfbc' } }} />
                    <Typography variant='subtitle1' color='textSecondary'>
                        Agree with
                        <Link to='' style={{ textDecoration: 'none', fontWeight: 'bold', color: '#2ccfbc' }}>Terms and Conditions</Link>,
                        <Link to='' style={{ textDecoration: 'none', fontWeight: 'bold', color: '#2ccfbc' }}>Privacy Policy</Link>,
                        <Link to='' style={{ textDecoration: 'none', fontWeight: 'bold', color: '#2ccfbc' }}>Cookie Policy</Link>
                    </Typography>
                </Box>
                <Box display='flex' flexDirection='row' alignItems='center'>
                    <Checkbox sx={{ color: 'gray', '&.Mui-checked': { color: '#2ccfbc' } }} />
                    <Typography variant='subtitle1' color='textSecondary'>
                        I autorize Coraly to process my personal data in order to receive informational and promotional and commercial communications via e-mail.
                    </Typography>
                </Box>
            </Box>
            <Button variant='contained' onClick={()=> setStep('step2')} sx={{ '&:hover': { backgroundColor: '#2ccfbc' }, borderRadius: '10px', backgroundColor: '#2ccfbc', color: 'white', margin: '1rem 0 1rem 0', height: '3rem', width: '100%', fontWeight: 'bold' }}>Create now the account</Button>
            <Box display='flex' flexDirection='row' alignItems='center'>
                <Typography variant='subtitle1' color='textSecondary'>Do you have an account? </Typography>
                <Typography fontWeight='bold' variant='subtitle1' color='#2ccfbc'><Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}> Sign in</Link></Typography>
            </Box>
        </>
    )
}
