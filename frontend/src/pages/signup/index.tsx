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

//@ts-ignore 
import Logo from '../../assets/logo.png'//@ts-ignore 
import TriangleCyan from '../../assets/triangleCyan.png'//@ts-ignore 
import RectangleRed from '../../assets/rectangleRed.png'//@ts-ignore 
import CircleBlue from '../../assets/circleBlue.png'//@ts-ignore 
import CirclePurple from '../../assets/circlePurple.png'//@ts-ignore 
import DottedSquare from '../../assets/dottedSquare.png'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

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
  const [step, setStep] = React.useState('step1')
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
              <Step1 step={step} setStep={setStep} />
              :
              step === 'step2' ?
                <Step2 step={step} setStep={setStep} />
                :
                <Step3 step={step} setStep={setStep} />
          }
        </Box>
      </Grid>
      <Grid minHeight='100vh' item xs={0} lg={7} sx={styles.background} overflow='hidden'>
        <AuthDesign rectangle={RectangleRed} triangle={TriangleCyan} circle={CirclePurple} halfCircle={CircleBlue} dottedSquare={DottedSquare} styles={styles} />
      </Grid>
    </Grid>
  )
}
