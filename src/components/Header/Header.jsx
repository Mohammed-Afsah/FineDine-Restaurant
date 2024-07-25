import { Box, Typography } from '@mui/material'
import React from 'react'
import {styled} from '@mui/system'
import CustomButton from '../CustomButton/CustomButton'
import logoImg from '../../assets/logo.png'
import { useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedplayListIcon from '@mui/icons-material/FeaturedPlayList';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import { useNavigate } from 'react-router-dom'
import{
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

function Header() {

    const navigate=useNavigate()
    const [mobileMenu, setMobileMenu]= useState({left:false})
    const toggleDrawer=(anchor,open)=>(event)=>{
        if(event.type==="keydown" &&(event.type==="Tab"||event.type==="Shift")){
            return;
        }
        setMobileMenu({...mobileMenu,[anchor]:open})
    }

    const list=(anchor)=>(
        <Box 
           sx={{
            width:anchor === "top" || anchor === "bottom" ? "auto":250
           }}
           role="presentation"
           onClick={toggleDrawer(anchor,false)}
           onkeydown={toggleDrawer(anchor,false)}
        >
            <List>

                {
                    nav_titles.map((item,index)=>(
               
                        <ListItem key={item.index} disablePadding onClick={()=>navigate(item.path)}>
                        <ListItemButton>
                            <ListItemIcon>
                               {
                                index===0 && <HomeIcon/>
                               }
                               {
                                index===1 && <FeaturedplayListIcon/>
                               }
                               {
                                index===2 && <MiscellaneousServicesIcon/>
                               }
                               {
                                index===3 && <ContactsIcon/>
                               }
                                </ListItemIcon>
                                <ListItemText primary={item.display}/>
                                </ListItemButton>
                            </ListItem>

                    ))
                }

               
                
            </List>
        </Box>
    )
    const nav_titles=[{
        path:'/',
        display:"Home"
    },
    {
        path:'/dishes',
        display:"Dishes"
    },
    {
        path:'/services',
        display:"Services"
    },
    {
        path:'/aboutus',
        display:"About Us"
    }
]

const NavBarLinksBox=styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]:{
        display: 'none'
      }
    
}))

const NavBarLink =styled(Typography)(({theme})=>({
    fontSize:"15px",
    color: '#4f5361',
    fontWeight:"bold",
    cursor: 'pointer',
    '&:hover':{
        color: '#fff',
    }

}))
const NavBarLogo=styled("img")(({theme})=>({
   cursor: 'pointer',
    gap: theme.spacing(3),
    width: "150px",
    height: "150px",
    [theme.breakpoints.down("md")]:{
        display: 'none'
      }
    
}))
const CustomMenuIcon=styled(MenuIcon)(({theme})=>({
    cursor: 'pointer',
    display:'none',
    marginRight: theme.spacing(2),
     gap: theme.spacing(3),
     [theme.breakpoints.down("md")]:{
         display: 'block',
       }
     
 }))
  return (
   <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '40px',
      maxWidth: 'auto',
      backgroundColor: '#FED801',
      marginLeft: '0px',
      marginBottom: '-24px',


    }}
   
   >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        gap: '2.5rem',
  
      }}
    
    >
        <Box  sx={{
            display: 'flex',
            alignItems: 'center',
         
          }}
        >
            <CustomMenuIcon onClick={toggleDrawer("left",true)}/>
          <Drawer
                    anchor="left"
                    open={mobileMenu["left"]}
                    onClose={toggleDrawer("left",false)}
          >
             {list("left")}
          </Drawer>
            <NavBarLogo src={logoImg}/>

        </Box>
        <NavBarLinksBox>{
               nav_titles.map((item,index)=>(
                <NavBarLink variant='body2' onClick={()=>navigate(item.path)}>{item.display}</NavBarLink>

               ))
            }
            
        </NavBarLinksBox>
    </Box>
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            gap: '1rem',
      
          }}
    >
    <NavBarLink variant='body2'>Sign UP</NavBarLink>
    <CustomButton
     backgroundColor='#0F184c'
     color='#fff'
     buttonText='Register'
    />
    </Box>
   </Box>
  )
}

export default Header