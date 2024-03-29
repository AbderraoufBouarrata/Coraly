import React from 'react'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Verified from '../../assets/verified.png'



export default function Step1(props) {
    const {step, setStep} = props
    return (
        <>
            <Typography variant='h5' fontWeight='bold' color='#464356'>Your workspace is ready</Typography>
            <Typography variant='subtitle1' color='textSecondary' width="24rem">check your email inbox.<br />We sent you a confirmation email </Typography>
            <img src={Verified} height='25%' width='25%' style={{ margin: '4rem 0 0 2rem' }} />
        </>
    )
}
