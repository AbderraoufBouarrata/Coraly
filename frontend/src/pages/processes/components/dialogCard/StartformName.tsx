import React from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import CustomInput from '../../../../components/CustomInput';


export default function StartformName() {
    const styles = {
        input: {
            margin: '.5rem 0'
        },
        inputProps: {
            sx: {
                borderRadius: '10px'
            }
        },

    }
    return (
        <>
            <Typography variant='h6' fontWeight='bold'>Startform name</Typography>
            <Stack direction='column'>
                <CustomInput
                    sx={styles.input}
                    type='text'
                    id=""
                    label="Email"
                    inputProps={styles.inputProps}
                />
                <CustomInput
                    sx={styles.input}
                    type='text'
                    id=""
                    label="Description Test"
                    inputProps={{ sx: { borderRadius: '10px', height: '6rem' } }}
                />
            </Stack >
        </>
    )
}
