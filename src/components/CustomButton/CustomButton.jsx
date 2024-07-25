import React from 'react'
import {styled} from '@mui/system'
import { Button } from '@mui/material'
import { Margin, WidthFull } from '@mui/icons-material'


 const CustomButton=({
    backgroundColor,
    color,
    buttonText,
    welcomeBtn,
    guideBtn,
    GetStartedBtn,
 })=>{


    const CustomButton=styled(Button)(({theme})=>({
        display: 'block',
        backgroundColor:backgroundColor,
        color:color,
        fontWeight:"700",
        fontSize:"14px",
        cursor: 'pointer',
        padding:"0.5rem 1.25rem",
        borderRadius:"7px",
        textTransform:"none",
        border:"2px solid transparent",
        "&:hover":{
            backgroundColor:color,
            color:backgroundColor,
            borderColor:backgroundColor,

        },
        [theme.breakpoints.down("md")]:{
            Margin:(welcomeBtn || GetStartedBtn)&& theme.spacing(0,"auto",3,"auto"),
            Width:(welcomeBtn || GetStartedBtn)&& "90%",
        },
        [theme.breakpoints.down("sm")]:{
            MarginTop: guideBtn && theme.spacing(3),
            Width: guideBtn && "90%",
        },
    }))
  return (
    <CustomButton>{buttonText}</CustomButton>
  )
 }

export default CustomButton