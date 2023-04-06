import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Snackbar from './SnackBar'
import AuthDesign from '../../components/AuthDesign'
import { UserContext } from '../../context/UserContextProvider'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Button, CssBaseline, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox'

import Logo from '../../assets/logo.png'
import TriangleBlue from '../../assets/triangleBlue.png'
import RectangleCyan from '../../assets/rectangleCyan.png'
import CircleRed from '../../assets/circleRed.png'
import CirclePurple from '../../assets/circlePurple.png'
import DottedSquare from '../../assets/dottedSquare.png'



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

export default function Login() {
  const navigate = useNavigate();
  const emailRef = React.useRef(null)
  const passwordRef = React.useRef(null)
  const { user, updateUser } = React.useContext(UserContext)
  const [snackbar, setSnackbar] = React.useState('')

  const usersData = React.useMemo(async () => {
    const response = await fetch('http://localhost:4000/api/v1/users').then(res => res.json());
    console.log(response.data)
    updateUser(response.data)
    
  }, [])
  function handleLogin() {
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const exists = user.some(obj => obj.email === email && obj.password === password);
    if (exists) {
      setSnackbar('show')
      setTimeout(() => {
        navigate('/board', { replace: true });
      }, 1000)
    }
    else {
      setSnackbar('error')
    }
  }
  const styles = {
    background: {
      backgroundColor: '#f6f8fa',
      position: 'relative'
    },
    triangle: {
      position: 'absolute',
      top: '0px',
      right: '-200px',
      transform: 'rotate(45deg)'
    },
    rectangle: {
      position: 'absolute',
      bottom: '0',
      right: '-50px',
      transform: 'rotate(-15deg)'

    },
    circle: {
      position: 'absolute',
      top: '-50px',
      left: '-100px'
    },
    dottedSquare: {
      position: 'absolute',
      filter: 'invert(85%) opacity(50%) ',
      top: '30%',
      left: '35%'
    },
    halfCircle: {
      position: 'absolute',
      bottom: '-50px',
      left: '50px',
      clip: 'rect(0, 175px, 350px, 0)',
      transform: 'rotate(65deg)'
    },
    text: {
      position: 'absolute',
      zIndex: '1',
      fontWeight: 'bold',
      fontSize: '4rem',
      top: '35%',
      left: '20%',
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
          <Typography variant='h4' fontWeight='bold' color='#464356'>Log in</Typography>
          <Typography variant='subtitle1' color='textSecondary' width="24rem">Thanks to Come back on coraly</Typography>
          <FormControl sx={{ marginTop: '2rem' }}>
            <CssTextField
              inputRef={emailRef}
              sx={{ margin: '1rem 0 1rem 0' }}
              type='email'
              required
              id=""
              label="Email"
              InputProps={{ sx: { borderRadius: '10px' } }}
              width='full'
            />
            <CssTextField
              inputRef={passwordRef}
              sx={{ margin: '1rem 0 1rem 0' }}
              type='password'
              required
              id=""
              label="Password"
              InputProps={{ sx: { borderRadius: '10px' } }}
              width='full'
            />
          </FormControl>
          <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
            <Box display='flex' flexDirection='row' alignItems='center'>
              <Checkbox sx={{ color: 'gray', '&.Mui-checked': { color: '#04385a' } }} />
              <Typography variant='subtitle1' color='textSecondary'>Remember me</Typography>
            </Box>
            <Typography fontWeight='bold' variant='subtitle1' color='#2ccfbc'><Link to='/reset-password' style={{ color: 'inherit' }}>Forgot password?</Link></Typography>
          </Box>
          <Link style={{ textDecoration: 'none' }}><Button onClick={() => handleLogin()} variant='contained' sx={{ borderRadius: '10px', backgroundColor: '#04385a', color: 'white', margin: '1rem 0 1rem 0', height: '3rem', width: '100%', fontWeight: 'bold' }}>Log in</Button></Link>
          <Box display='flex' flexDirection='row' alignItems='center'>
            <Typography variant='subtitle1' color='textSecondary'>Don't you have an account? </Typography>
            <Typography fontWeight='bold' variant='subtitle1' color='#2ccfbc'><Link to='/signup' style={{ color: 'inherit' }}> Sign up now</Link></Typography>
          </Box>
        </Box>
        {
          snackbar === 'show' ?
            <Snackbar text='Authentification successful!' severity="success" sx={{ color: '#34d182', backgroundColor: '#d6fcda', fontWeight: 'bold', borderRadius: '10px', height: '3rem' }} />
            :
            snackbar === 'error' ?
              <Snackbar text='Authentification failed!' severity="error" sx={{ color: '#ff4339', backgroundColor: '#ffe8da', fontWeight: 'bold', borderRadius: '10px', height: '3rem' }} />
              :
              null
        }
      </Grid>
      <Grid minHeight='100vh' item xs={0} lg={8} sx={styles.background} overflow='hidden'>
        <AuthDesign rectangle={RectangleCyan} triangle={TriangleBlue} circle={CircleRed} halfCircle={CirclePurple} dottedSquare={DottedSquare} styles={styles} />
      </Grid>
    </Grid>
  )
}
