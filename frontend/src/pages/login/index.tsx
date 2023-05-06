import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Snackbar from './components/SnackBar'
import AuthDesign from '../../components/AuthDesign'
import { UserContext } from '../../context/UserContextProvider'
import CustomInput from '../../components/CustomInput'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Button, CssBaseline, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox'

//@ts-ignore
import Logo from '../../assets/images/logo.png'
//@ts-ignore
import TriangleBlue from '../../assets/images/triangleBlue.png'
//@ts-ignore
import RectangleCyan from '../../assets/images/rectangleCyan.png'
//@ts-ignore
import CircleRed from '../../assets/images/circleRed.png'
//@ts-ignore
import CirclePurple from '../../assets/images/circlePurple.png'
//@ts-ignore
import DottedSquare from '../../assets/images/dottedSquare.png'

export default function Login() {
  const navigate = useNavigate();
  const emailRef = React.useRef(null)
  const passwordRef = React.useRef(null)
  const { user, updateUser } = React.useContext(UserContext)
  const [snackbar, setSnackbar] = React.useState("");

  const usersData = React.useMemo(async () => {
    const response = await fetch('http://localhost:4000/api/v1/users').then(res => res.json());
    console.log(response.data)
    updateUser(response.data)
    
  }, [])
  function handleLogin() {
    //@ts-ignore
    const email = emailRef.current?.value || '';
    //@ts-ignore
    const password = passwordRef.current?.value || '';
    //@ts-ignore
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
      backgroundColor: "#f6f8fa",
      position: "relative",
    },
    triangle: {
      position: "absolute",
      top: "0px",
      right: "-200px",
      transform: "rotate(45deg)",
    },
    rectangle: {
      position: "absolute",
      bottom: "0",
      right: "-50px",
      transform: "rotate(-15deg)",
    },
    circle: {
      position: "absolute",
      top: "-50px",
      left: "-100px",
    },
    dottedSquare: {
      position: "absolute",
      filter: "invert(85%) opacity(50%) ",
      top: "30%",
      left: "35%",
    },
    halfCircle: {
      position: "absolute",
      bottom: "-50px",
      left: "50px",
      clip: "rect(0, 175px, 350px, 0)",
      transform: "rotate(65deg)",
    },
    text: {
      position: "absolute",
      zIndex: "1",
      fontWeight: "bold",
      fontSize: "4rem",
      top: "35%",
      left: "20%",
    },
    input: {
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "green",
        },
      },
    },
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      margin: "6rem",
    },
    typographyH4: {
      fontWeight: "bold",
      color: "#464356",
    },
    spaceBetween: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    center: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    checkbox: {
      color: "gray",
      "&.Mui-checked": { color: "#04385a" },
    },
    snackBarSuccess: { 
      color: '#34d182', 
      backgroundColor: '#d6fcda', 
      fontWeight: 'bold', borderRadius: 
      '10px', 
      height: '3rem' 
    },
    snackBarError: { 
      color: '#ff4339', 
      backgroundColor: '#ffe8da', 
      fontWeight: 'bold', 
      borderRadius: '10px', 
      height: '3rem' },
    loginButton: {
      borderRadius: '10px', 
      backgroundColor: '#04385a', 
      color: 'white', 
      margin: '1rem 0 1rem 0', 
      height: '3rem', 
      width: '100%', 
      fontWeight: 'bold'
    },
    link: {
      color: 'inherit',
    },
    inputStyle: {
      margin: '1rem 0 1rem 0'
    }
  };
  return (
    <Grid container>
      <CssBaseline />
      <Grid item xs={12} lg={4}>
        <Box sx={styles.mainContainer}>
          <Box marginBottom='5rem'><img src={Logo} alt='logo' width={80} height={80} /></Box>
          <Typography variant='h4' sx={styles.typographyH4}>Log in</Typography>
          <Typography variant='subtitle1' color='textSecondary' width="24rem">Thanks to Come back on coraly</Typography>
          <FormControl sx={{ marginTop: '2rem' }}>
            <CustomInput
              inputRef={emailRef}
              sx={styles.inputStyle}
              type='email'
              required
              id=""
              label="Email"
              inputProps={{ sx: { borderRadius: '10px' } }}
            />
            <CustomInput
              inputRef={passwordRef}
              sx={styles.inputStyle}
              type='password'
              required
              id=""
              label="Password"
              inputProps={{ sx: { borderRadius: '10px' } }}
            />
          </FormControl>
          <Box sx={styles.spaceBetween}>
            <Box sx={styles.center}>
              <Checkbox sx={styles.checkbox} />
              <Typography variant='subtitle1' color='textSecondary'>Remember me</Typography>
            </Box>
            <Typography fontWeight='bold' variant='subtitle1' color='#2ccfbc'>
              <Link to='/reset-password' style={ styles.link }>Forgot password?</Link>
            </Typography>
          </Box>
          <Link to='' style={{ textDecoration: 'none' }}><Button onClick={() => handleLogin()} variant='contained' sx={ styles.loginButton}>Log in</Button></Link>
          <Box display='flex' flexDirection='row' alignItems='center'>
            <Typography variant='subtitle1' color='textSecondary'>Don't you have an account? </Typography>
            <Typography fontWeight='bold' variant='subtitle1' color='#2ccfbc'>
              <Link to='/signup' style={ styles.link }> Sign up now</Link>
            </Typography>
          </Box>
        </Box>
        {
          snackbar === 'show' ?
            <Snackbar text='Authentification successful!' severity="success" sx={styles.snackBarSuccess} />
            :
            snackbar === 'error' ?
              <Snackbar text='Authentification failed!' severity="error" sx={styles.snackBarError} />
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
