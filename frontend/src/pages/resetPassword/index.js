import React from 'react'
import { Link } from 'react-router-dom'
import AuthDesign from '../../components/AuthDesign'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Button, CssBaseline, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import { styled } from '@mui/material/styles';

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
  const [step, setStep] = React.useState('')
  const styles = {
    background: {
      backgroundColor: '#ffecf1',
      position: 'relative'
    },
    triangle: {
      position: 'absolute',
      top: '50px',
      right: '-100px',
      transform: 'rotate(45deg)'
    },
    rectangle: {
      position: 'absolute',
      top: '100px',
      left: '-150px',
      transform: 'rotate(-15deg)'

    },
    circle: {
      position: 'absolute',
      bottom: '-100px',
      left: '50px'
    },
    dottedSquare: {
      position: 'absolute',
      filter: 'invert(100%) opacity(100%) ',
      top: '35%',
      right: '20%'
    },
    halfCircle: {
      position: 'absolute',
      bottom: '0px',
      right: '-150px',
      clip: 'rect(0, 175px, 350px, 0)',
      transform: 'rotate(60deg)'
    },
    text: {
      position: 'absolute',
      zIndex: '1',
      fontWeight: 'bold',
      fontSize: '4rem',
      top: '35%',
      right: '10%',
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
      <Grid item xs={12} lg={4}>
        <Box display='flex' flexDirection='column' margin='6rem'>
          <Box marginBottom='5rem'><img src={Logo} alt='logo' width={80} height={80} /></Box>
          {
            step === 'step1' ?
              <>
                <Typography variant='h5' fontWeight='bold' color='#464356'>Do you forget your password?</Typography>
                <Typography variant='subtitle1' color='textSecondary' width="24rem">Insert your email and we will send you a link in your email box to resest your password</Typography>
                <FormControl sx={{ marginTop: '2rem' }}>
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
                <Button variant='contained' sx={{ borderRadius: '10px', backgroundColor: '#f93e6c', color: 'white', margin: '1rem 0 1rem 0', height: '3rem', width: '100%', fontWeight: 'bold' }}>Reset Password</Button>
                <Box display='flex' flexDirection='row' alignItems='center'>
                  <Typography variant='subtitle1' color='textSecondary'>Go back to  </Typography>
                  <Typography fontWeight='bold' variant='subtitle1' color='#2ccfbc'><Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}> Login</Link></Typography>
                </Box>
              </>
              :
              step === 'step2' ?
                <>
                  <Typography variant='h5' fontWeight='bold' color='#464356'>Email was sent</Typography>
                  <Typography variant='subtitle1' color='textSecondary' width="24rem">check your email inbox.<br />We sent you an email to edit your password. if you didn't recieve the email please check your SPAM inbox. </Typography>
                  <img src={Verified} height='25%' width='25%' style={{ margin: '4rem 0 0 2rem' }} />
                </>
                :
                <>
                  <Typography variant='h5' fontWeight='bold' color='#464356'>Insert new password</Typography>
                  <Typography variant='subtitle1' color='textSecondary' width="24rem">insert all your info to proceed with your workspace</Typography>
                  <FormControl sx={{ marginTop: '2rem' }}>
                    <CssTextField
                      sx={{ margin: '1rem 0 1rem 0' }}
                      type='password'
                      required
                      id=""
                      label="New Password"
                      InputProps={{ sx: { borderRadius: '10px' } }}
                      width='full'
                    />
                    <CssTextField
                      sx={{ margin: '1rem 0 1rem 0' }}
                      type='password'
                      required
                      id=""
                      label="Confirm new password"
                      InputProps={{ sx: { borderRadius: '10px' } }}
                      width='full'
                    />
                  </FormControl>
                  <Button variant='contained' sx={{ '&:hover':{ backgroundColor:'#f93e6c'}, borderRadius: '10px', backgroundColor: '#f93e6c', color: 'white', margin: '1rem 0 1rem 0', height: '3rem', width: '100%', fontWeight: 'bold' }}>Confirm new Password</Button>
                </>
          }
        </Box>
      </Grid>
      <Grid minHeight='100vh' item xs={0} lg={8} sx={styles.background} overflow='hidden'>
        <AuthDesign rectangle={RectangleRed} triangle={TriangleCyan} circle={CircleBlue} halfCircle={CirclePurple} dottedSquare={DottedSquare} styles={styles} />
      </Grid>
    </Grid>
  )
}
