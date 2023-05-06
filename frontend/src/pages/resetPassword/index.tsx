import React from 'react'
import { Link } from 'react-router-dom'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'

import AuthDesign from '../../components/AuthDesign'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Button, CssBaseline, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import { styled } from '@mui/material/styles';
//@ts-ignore
import Logo from '../../assets/images/logo.png'
//@ts-ignore
import TriangleCyan from '../../assets/images/triangleCyan.png'
//@ts-ignore
import RectangleRed from '../../assets/images/rectangleRed.png'
//@ts-ignore
import CircleBlue from '../../assets/images/circleBlue.png'
//@ts-ignore
import CirclePurple from '../../assets/images/circlePurple.png'
//@ts-ignore
import DottedSquare from '../../assets/images/dottedSquare.png'
//@ts-ignore
import Verified from '../../assets/images/verified.png'

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
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
      margin: '6rem'
    }
  }

  return (
    <Grid container>
      <CssBaseline />
      <Grid item xs={12} lg={4}>
        <Box sx={styles.flexColumn}>
          <Box marginBottom='5rem'><img src={Logo} alt='logo' width={80} height={80} /></Box>
          {
            step === 'step1' ?
              <Step1 setStep={setStep} />
              :
              step === 'step2' ?
                <Step2 setStep={setStep} />
                :
                <Step3 setStep={setStep} />
          }
        </Box>
      </Grid>
      <Grid minHeight='100vh' item xs={0} lg={8} sx={styles.background} overflow='hidden'>
        <AuthDesign rectangle={RectangleRed} triangle={TriangleCyan} circle={CircleBlue} halfCircle={CirclePurple} dottedSquare={DottedSquare} styles={styles} />
      </Grid>
    </Grid>
  )
}
