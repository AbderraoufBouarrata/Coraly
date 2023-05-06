import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  function handleGoBack() {
    navigate(-1);
  }

  const styles = {
    background: {
      display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       flexDirection: 'column',
       minHeight: '100vh'
    },
    heading:{
      color: '#F93E6C', 
      fontWeight:'bold', 
      fontSize:'10rem'
    },
    text: {
      display:'flex', 
      alignItems:'center', 
      justifyContent:'center', 
      textAlign: 'center'
    },
    button: {
      marginTop: '1rem', 
      backgroundColor: '#04385A', 
      '&:hover': { backgroundColor: '#04385A' }, 
      height: '2.5rem', 
      borderRadius: '10px'
    }
  }
  return (
    <Box sx={styles.background}>
      <Typography variant="h1" component="h1" gutterBottom sx={styles.heading} >404</Typography>
      <Typography variant="h3" component="h3" gutterBottom fontWeight='bold' >Page not found</Typography>
      <Typography variant="subtitle1" color='gray' component="h5" width='44rem' gutterBottom sx={styles.text} >
        The page you are trying to reach is not available.it may have been deleted or its URL was misspelled.
        </Typography>
      <Button onClick={()=>handleGoBack()} variant="contained" sx={styles.button} >Go back</Button>
    </Box>
  )
}
