import React from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm';
import ContactContent from '../../Components/ContactContent/ContactContent'
import {contactStyles} from './styles'
const Contact = () =>{
    return(
    <div style = {contactStyles}>
        <ContactContent/>
        <ContactForm/>
    </div>
    )
}

export default Contact;