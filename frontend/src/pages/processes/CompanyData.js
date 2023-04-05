import React from 'react'
import {  FormLabel ,Grid, Stack, Typography, Divider, FormControl, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { styled } from '@mui/material/styles';

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


export default function CompanyData() {
    return (
        <>
            <Typography variant='h6' fontWeight='bold'>Company data</Typography>
            <Grid container >
                <Grid item xs={2}>
                    <Stack direction='column' alignItems='center' justifyContent='start' sx={{ height: '100%' }} overflow='hidden'>
                        <DescriptionOutlinedIcon sx={{ color: 'gray', fontSize: '2rem' }} />
                        <Divider orientation="vertical" sx={{ height: 1, borderRightWidth: '3px', borderRadius: '10px', padding: '.5rem 0' }} />
                    </Stack>

                </Grid>
                <Grid item xs={10}>
                    <Stack direction='column' >
                        <CssTextField
                            sx={{ margin: '.5rem 0 ' }}
                            type='text'
                            id=""
                            label="Company Name"
                            InputProps={{ sx: { borderRadius: '10px', } }}
                            width='full'
                        />
                        <CssTextField
                            sx={{ margin: '.5rem 0' }}
                            type='text'
                            id=""
                            label="Surname"
                            InputProps={{ sx: { borderRadius: '10px' } }}
                            width='full'
                        />
                    </Stack>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group">
                            <FormControlLabel value="Company" control={<Radio sx={{ '&.Mui-checked': { color: 'red' } }} />} label="Company" />
                            <FormControlLabel value="Person" control={<Radio sx={{ '&.Mui-checked': { color: 'red' } }} />} label="Person" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
            <FormControl>
                <FormLabel >Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group">
                    <FormControlLabel value="Male" control={<Radio sx={{ '&.Mui-checked': { color: 'red' } }} />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio sx={{ '&.Mui-checked': { color: 'red' } }} />} label="Female" />
                    <FormControlLabel value="Not Declared" control={<Radio sx={{ '&.Mui-checked': { color: 'red' } }} />} label="Not Declared" />
                </RadioGroup>
            </FormControl>
        </>
    )
}
