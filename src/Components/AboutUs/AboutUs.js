import React, {useState} from 'react';
import ContentEng from './ContentEng/Content';
import ContentSpa from './ContentSpa/Content'
// Acerca De

const AboutUs = () =>{


    const [language, setLanguage] = useState('English');

    switch(language){
        case 'English':
            return (<ContnetEng langSwitch = {setLanguage}/>)
        case 'Spanish':
            return (<ContentSpa langSwitch = {setLanguage}/>)
    }




}