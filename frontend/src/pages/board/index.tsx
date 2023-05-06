import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Process from './components/Process'
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import CustomInput from '../../components/CustomInput'

export default function Board() {
  const [process, setProcess] = React.useState([])
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const data = React.useMemo(async () => {
    const response = await fetch('http://localhost:4000/api/v1/processes').then(res => res.json());
    console.log(response.data)
    setProcess(response.data)
  }, [])

  const styles = {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      minWidth: '40%',
      bgcolor: 'background.paper',
      border: 'none',
      borderRadius: '15px',
      boxShadow: 24,
      p: 4
    },
    container: {
      flexGrow: 1, p: 3,
      backgroundColor: '#f6f8fa',
      minHeight: '100vh'
    },
    process: {
      margin: '1rem 0rem',
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      borderRadius: '10px',
      border: '2px dashed #D6D5D9',
      width: '12rem',
      height: '12rem',
      justifyContent: 'center',
      alignItems: 'center',
      "&:hover": {
        cursor: 'pointer',
      }
    },
    input: {
      margin: '1rem 0 1rem 0',
    },
    inputProps: {
      sx: { borderRadius: '10px' },
      startAdornment: (
        <InputAdornment position="start">
          <Brightness1Icon sx={{ color: color }} />
        </InputAdornment>
      ),
      endAdornment:
        <InputAdornment position="end">
          <ColorLensOutlinedIcon sx={{ color: 'gray' }} />
        </InputAdornment>
    },
    buttonConfirm: {
      borderRadius: '10px', 
      backgroundColor: '#00bfa5', 
      color: 'white', 
      width: '8rem', 
      height: '3rem', 
      '&:hover': { backgroundColor: '#00bfa5' } 
    },
    buttonCancel: {
      border: '2px solid #04385a', 
      borderRadius: '10px', 
      backgroundColor: 'white', 
      color: '#04385a', 
      width: '8rem', 
      height: '3rem'
    },
    text: {
      color: '#6f6d7b', 
      textAlign: 'center', 
      paddingTop: '.5rem'
    }

  }

  return (
    <Box sx={styles.container}>
      <Typography variant='h4' fontWeight='bold'>Welcome, Fabrizio Nilo</Typography>
      <Typography variant='subtitle1' color='textSecondary' width='32rem' margin='1rem 0'>Work with your team mates, take track of your process and close all your tasks</Typography>
      <Box display='flex'>
        <Box sx={styles.process} onClick={() => { handleOpen() }}>
          <AddIcon sx={{ fontSize: 50, color: '#6f6d7b', textAlign: 'center' }} />
          <Typography variant='h6' width='8rem' sx={ styles.text }>Create a new process</Typography>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box display='flex' flexDirection='column' sx={styles.style}>
              <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight='bold'>Create a new process</Typography>
              <CustomInput
                sx={styles.input}
                type='text'
                required
                id=""
                label="Process name"
                inputProps={{ sx: { borderRadius: '10px' } }}
              />
              <CustomInput
                sx={styles.input}
                type='text'
                required
                id=""
                label="Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                inputProps={styles.inputProps}
              />
              <Box display='flex' justifyContent='end' alignItems='center' flexDirection='row-reverse' gap='1rem'>
                <Button variant="contained" sx={styles.buttonConfirm}>Create</Button>
                <Button variant="outlined" sx={styles.buttonCancel} onClick={() => handleClose()}>Cancel</Button>
              </Box>
            </Box>
          </Modal>
        </Box>
        {
          process.map((process, index) => {
            return (
              //@ts-ignore
              <Link key={index} to={`/board/${process.id}`} style={{ textDecoration: 'none' }}><Process process={process.name} color={process.color} /></Link>
            )
          })
        }
      </Box>
    </Box>
  )
}
