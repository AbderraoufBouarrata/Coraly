import React from 'react'
import { Typography, FormControl, Box, Checkbox, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import CustomInput from '../../../components/CustomInput';

type Step1Props = {
    step: string,
    setStep: (step: string) => void
}

export default function Step1(props: Step1Props) {
    const {step, setStep} = props
    const styles = {
        button: {
          "&:hover": { backgroundColor: "#2ccfbc" },
          borderRadius: "10px",
          backgroundColor: "#2ccfbc",
          color: "white",
          margin: "1rem 0 1rem 0",
          height: "3rem",
          width: "100%",
          fontWeight: "bold",
        },
        input: {
          margin: "1rem 0 1rem 0",
          width: "100%"
        },
        inputProps:{
          sx: { borderRadius: "10px" }
        },
        flexBetween: {
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem"
        }
      };
    return (
        <>
            <Typography variant='h5' fontWeight='bold' color='#464356'>Complete your profile</Typography>
            <Typography variant='subtitle1' color='textSecondary' width="24rem">insert all your info to proceed with your workspace</Typography>
            <FormControl sx={{ marginTop: '2rem' }}>
                <Box sx={styles.flexBetween}>
                    <CustomInput
                        sx={styles.input}
                        type='text'
                        required
                        id=""
                        label="Name"
                        inputProps={styles.inputProps}

                    />
                    <CustomInput
                        sx={styles.input}
                        type='text'
                        required
                        id=""
                        label="Surname"
                        inputProps={styles.inputProps}
                    />
                </Box>
                <CustomInput
                    sx={styles.input}
                    type='password'
                    required
                    id=""
                    label="Password"
                    inputProps={styles.inputProps}
                />
                <CustomInput
                    sx={styles.input}
                    type='password'
                    required
                    id=""
                    label="Repeat Password"
                    inputProps={styles.inputProps}
                />
            </FormControl>
            <Button variant='contained' sx={styles.button}>Complete now</Button>
        </>
    )
}
