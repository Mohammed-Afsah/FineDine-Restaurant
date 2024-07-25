import React from 'react'
import {Box,Button,Typography} from '@mui/material';
import {styled} from '@mui/system';
import {Container} from '@mui/system';
import CustomButton from '../../components/CustomButton/CustomButton';
import welcomeimg from '../../assets/welcome.png';

const Welcome=()=>{
    const CustomBox=styled(Box)(({theme})=>({
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(5),
        [theme.breakpoints.down("md")]:{
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }))
    const Title=styled(Typography)(({theme})=>({
           fontSize: "64px",
            fontWeight: "bold",
            color: "#fff",
            margin: theme.spacing(4,0,4,0),
            [theme.breakpoints.down("md")]:{
                fontSize: "40px",
            }
    }))

    return(
        <Box sx={{backgroundColor:"#FED801",minHeight:"80vh"}}>
            <Container>
                <CustomBox>
                    <Box sx={{flex:"1"}}>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize:"25px",
                            color:"#687690",
                            fontWeight:"700",
                            mt: 10,
                            mb: 4,
                          }}
                        >
                            Welcome to Dine In Restaurant
                        </Typography>
                        <Title variant="h1">
                        Life happens, but good food always tastes better.

                        </Title>
                        <Typography
                          variant='body2'  
                          sx={{fontSize:"18px", color:"#5A6473", my:4,}}                      
                        >
                       Our culinary creations are perfectly complemented by an extensive and carefully curated selection of exceptional wines and creatively crafted cocktails, promising an unforgettable dining experience.

                        </Typography>
                        <CustomButton
                        backgroundColor="#0F1B4C"
                         color="#fff"
                         buttonText="More About Us"
                         welcomeBtn={true}
                         
                        />
                    </Box>
                    <Box
                      sx={{flex:"1.25"}}
                    >
                        <img 
                        src={welcomeimg}
                        alt='welcome'
                        style={{maxWidth:"100%", marginBottom:"2rem"}}
                        />

                    </Box>
                </CustomBox>
            </Container>

        </Box>
    )
}


export default Welcome