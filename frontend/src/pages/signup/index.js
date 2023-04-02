import React from 'react'
import { Link } from 'react-router-dom'
import AuthDesign from '../../components/AuthDesign'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Button, CssBaseline, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox'

import Logo from '../../assets/logo.png'
import TriangleCyan from '../../assets/triangleCyan.png'
import RectangleRed from '../../assets/rectangleRed.png'
import CircleBlue from '../../assets/circleBlue.png'
import CirclePurple from '../../assets/circlePurple.png'
import DottedSquare from '../../assets/dottedSquare.png'
import Verified from '../../assets/verified.png'

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


export default function Signup() {
  const [step, setStep] = React.useState('step3')
  const styles = {
    background: {
      backgroundColor: '#eafbf9',
      position: 'relative'
    },
    triangle: {
      position: 'absolute',
      bottom: '-100px',
      left: '100px',
      transform: 'rotate(45deg)'
    },
    rectangle: {
      position: 'absolute',
      top: '-50px',
      right: '150px',
      transform: 'rotate(30deg)'

    },
    circle: {
      position: 'absolute',
      top: '100px',
      left: '-50px'
    },
    dottedSquare: {
      position: 'absolute',
      filter: 'invert(100%) opacity(100%) ',
      top: '40%',
      left: '20%'
    },
    halfCircle: {
      position: 'absolute',
      bottom: '50px',
      right: '0px',
      clip: 'rect(0, 175px, 350px, 0)',
      transform: 'rotate(-130deg)'
    },
    text: {
      position: 'absolute',
      zIndex: '1',
      fontWeight: 'bold',
      fontSize: '4rem',
      top: '50%',
      left: '10%',
    },
    input: {
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "green"
        }
      }
    },
  }

  return (
    <Grid container>
      <CssBaseline />
      <Grid item xs={12} lg={5}>
        <Box display='flex' flexDirection='column' margin='6rem'>
          <Box marginBottom='5rem'><img src={Logo} alt='logo' width={80} height={80} /></Box>
          {
            step === 'step1' ?
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
                    width='full'
                  />
                  <CssTextField
                    sx={{ margin: '1rem 0 1rem 0' }}
                    type='email'
                    required
                    id=""
                    label="Email"
                    InputProps={{ sx: { borderRadius: '10px' } }}
                    width='full'
                  />
                </FormControl>
                <Box>
                  <Box display='flex' flexDirection='row' alignItems='center'>
                    <Checkbox sx={{ color: 'gray', '&.Mui-checked': { color: '#2ccfbc' } }} />
                    <Typography variant='subtitle1' color='textSecondary'>
                      Agree with
                      <Link style={{ textDecoration: 'none', fontWeight: 'bold', variant: 'subtitle1', color: '#2ccfbc' }}>Terms and Conditions</Link>,
                      <Link style={{ textDecoration: 'none', fontWeight: 'bold', variant: 'subtitle1', color: '#2ccfbc' }}>Privacy Policy</Link>,
                      <Link style={{ textDecoration: 'none', fontWeight: 'bold', variant: 'subtitle1', color: '#2ccfbc' }}>Cookie Policy</Link>
                    </Typography>
                  </Box>
                  <Box display='flex' flexDirection='row' alignItems='center'>
                    <Checkbox sx={{ color: 'gray', '&.Mui-checked': { color: '#2ccfbc' } }} />
                    <Typography variant='subtitle1' color='textSecondary'>
                      I autorize Coraly to process my personal data in order to receive informational and promotional and commercial communications via e-mail.
                    </Typography>
                  </Box>
                </Box>
                <Button variant='contained' sx={{ borderRadius: '10px', backgroundColor: '#2ccfbc', color: 'white', margin: '1rem 0 1rem 0', height: '3rem', width: '100%', fontWeight: 'bold' }}>Create now the account</Button>
                <Box display='flex' flexDirection='row' alignItems='center'>
                  <Typography variant='subtitle1' color='textSecondary'>Do you have an account? </Typography>
                  <Typography fontWeight='bold' variant='subtitle1' color='#2ccfbc'><Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}> Sign in</Link></Typography>
                </Box>
              </>
              :
              step === 'step2' ?
                <>
                  <Typography variant='h5' fontWeight='bold' color='#464356'>Your workspace is ready</Typography>
                  <Typography variant='subtitle1' color='textSecondary' width="24rem">check your email inbox.<br />We sent you a confirmation email </Typography>
                  <img src={Verified} height='25%' width='25%' style={{ margin: '4rem 0 0 2rem' }} />
                </>
                :
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
                        sx={{ margin: '1rem 0 1rem 0' ,width:'50%'}}
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
                  <Button variant='contained' sx={{ borderRadius: '10px', backgroundColor: '#2ccfbc', color: 'white', margin: '1rem 0 1rem 0', height: '3rem', width: '100%', fontWeight: 'bold' }}>Complete now</Button>
                </>
          }
        </Box>
      </Grid>
      <Grid minHeight='100vh' item xs={0} lg={7} sx={styles.background} overflow='hidden'>
        <AuthDesign rectangle={RectangleRed} triangle={TriangleCyan} circle={CirclePurple} halfCircle={CircleBlue} dottedSquare={DottedSquare} styles={styles} />
      </Grid>
    </Grid>
  )
}
