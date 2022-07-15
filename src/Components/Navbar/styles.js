//Styles used by MUI components
import logoImage from '../../Images/StuccoStoneConstructionCopy.png'



export const buttonStyles = {
    my: 2,
    color: 'white',
    display: 'block',
    '&:hover':{
        background: "#a15120"
    },
   
}

export const boxStyles = {
    flexGrow: 1, 
    display: { xs: 'none', md: 'flex' },
    justifyContent:'right',
    //brown color
    background:"#bc6630",
    
}

export const logoStyles = {
    mr: 2,
    display: { xs: 'none', md: 'flex' },
    color: 'inherit',
    textDecoration: 'none',
    background:{logoImage},
    fontSize:'small',
    // fontFamily: 'monospace',
}

// "color: rgba(0, 0, 0, 0.87)"

export const navBarStyles = {
    backgroundColor:'#bc6630'
}

