export const customFormContainer = {
    width: "65%",
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
}

export const buttonStyles = {
    marginTop: "30px"
}
 
export const formStyles = (prop) => {

    console.log(`label is ${JSON.stringify(prop)}`)
    const nameStyles = {
        marginTop: "10px",
        marginBottom: "10px",
    }

    const messageStyles = {
        marginTop: "10px",
        // marginBottonm: "10px"
    }

    const emailStyles = {
        // marginTop: "10px",
        marginBottom: "10px"
    }

    const phoneNumStyles = {
        // marginTop: "10px",
        marginBottom: "10px"
    }

    switch(prop.name){
    case 'fullName':
        return nameStyles;
    case 'message':
        return messageStyles;
    case 'email':
        return emailStyles;
    case 'phone':
        return phoneNumStyles;
    }
}
