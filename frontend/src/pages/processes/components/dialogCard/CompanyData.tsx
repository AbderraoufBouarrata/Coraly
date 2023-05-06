import React from 'react'
import {  FormLabel ,Grid, Stack, Typography, Divider, FormControl, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { styled } from '@mui/material/styles';
import CustomInput from '../../../../components/CustomInput';

export default function CompanyData() {
    const styles= {
        radioStyles: {
            '&.Mui-checked': { color: 'red' }
        },
        input: {
            margin: '.5rem 0'
        },
        inputProps: {
            sx:{
                borderRadius: '10px'
            }
        },
        devider: {
            height: 1, 
            borderRightWidth: '3px', 
            borderRadius: '10px', 
            padding: '.5rem 0'
        },
        icon: {
            color: 'gray',
            fontSize: '2rem'
        },
        flexStart: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            height: '100%',
            overflow: 'hidden'
        }
    }
    return (
        <>
            <Typography variant='h6' fontWeight='bold'>Company data</Typography>
            <Grid container >
                <Grid item xs={2}>
                    <Stack direction='column' sx={styles.flexStart}>
                        <DescriptionOutlinedIcon sx={styles.icon} />
                        <Divider orientation="vertical" sx={styles.devider} />
                    </Stack>

                </Grid>
                <Grid item xs={10}>
                    <Stack direction='column' >
                        <CustomInput
                            sx={styles.input}
                            type='text'
                            id=""
                            label="Company Name"
                            inputProps={styles.inputProps}
                        />
                        <CustomInput
                            sx={styles.input}
                            type='text'
                            id=""
                            label="Surname"
                            inputProps={styles.inputProps}
                        />
                    </Stack>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group">
                            <FormControlLabel value="Company" control={<Radio sx={styles.radioStyles} />} label="Company" />
                            <FormControlLabel value="Person" control={<Radio sx={styles.radioStyles} />} label="Person" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
            <FormControl>
                <FormLabel >Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group">
                    <FormControlLabel value="Male" control={<Radio sx={styles.radioStyles} />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio sx={styles.radioStyles} />} label="Female" />
                    <FormControlLabel value="Not Declared" control={<Radio sx={styles.radioStyles} />} label="Not Declared" />
                </RadioGroup>
            </FormControl>
        </>
    )
}
