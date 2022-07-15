import React from 'react';
import LazyHero from 'react-lazy-hero';
import heroImg from "../../Images/img7.jpg";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {buttonStyles} from './styles';




const Hero = () =>{
    return (
        <div>
            <LazyHero imageSrc={heroImg} opacity={.4}>
                <Button sx={buttonStyles} component={Link} to="/Services" variant="contained" color="primary">
                    Services
                </Button>
            </LazyHero>
        </div>
    );
}

export default Hero;