import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BuildIcon from '@mui/icons-material/Build';
import FacebookIcon from '@mui/icons-material/Facebook';
import Paper from '@mui/material/Paper';
import React,{useState} from 'react';
import {paperStyles,bottomNavStyles} from './styles'

const Footer = () =>{

    return(
    <Paper sx={paperStyles} elevation={3}>
    <BottomNavigation
    sx = {bottomNavStyles}
      showLabels>
      <BottomNavigationAction label="Contact Us" icon={<ContactMailIcon/>} />
      <BottomNavigationAction label="Services" icon={<BuildIcon />} />
      <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
    </BottomNavigation>
//  </Paper>
    )
}

export default Footer;