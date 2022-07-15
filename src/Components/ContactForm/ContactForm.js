import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { CustomForm } from "./CustomForm/CustomForm";
import { formStyles, customFormContainer, buttonStyles } from "./styles";
import defaultInstance from '../../Utils/defaultInstance';


const inputFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "my-name"
  },
  {
    name: "email",
    label: "Email",
    id: "my-email"
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
  }
];

const ContactForm = () => {


    const initialFormValues = {
        fullName: "",
        email: "",
        message: "",
        formSubmitted: false,
        success: false
      };


    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({});

    // const resetForm = () =>{

    // }

    // const sendAlert = () =>{

    // }

    
    const validate = (fieldValues = values) => {
        let temp = { ...errors };

        if ("fullName" in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required.";

        if ("email" in fieldValues) {
            temp.email = fieldValues.email ? "" : "This field is required.";
            if (fieldValues.email)
            temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
                ? ""
                : "Email is not valid.";
        }

        if ("message" in fieldValues)
            temp.message =
            fieldValues.message.length !== 0 ? "" : "This field is required.";

        setErrors({
            ...temp
        });
    };
    
    
    
    const handleInputValue = (e) => {
        const { name, value } = e.target;
        console.log(`Name in handleInputValue ${name}`)
        switch(name) {
          case 'fullName':
            setValues({
              ...values,
              'fullName':value
            });
            break;
          case 'email':
            setValues({
              ...values,
              'email':value
            });
            break;
          case 'message':
            setValues({
              ...values,
              'message':value
            });
            break;
        }
        
        validate({ name: value });
        console.log(values)
    };
    
    
    
    // const handleSuccess = () => {
    //     setValues({
    //         ...initialFormValues,
    //         formSubmitted: true,
    //         success: true
    //     });
    // };
    
    
    
    // const handleError = () => {
    //     setValues({
    //         ...initialFormValues,
    //         formSubmitted: true,
    //         success: false
    //     });
    // };
    
    
    
        //Need To look at this
    const formIsValid = (fieldValues = values) => {
        const isValid =
            fieldValues.fullName &&
            fieldValues.email &&
            fieldValues.message &&
            Object.values(errors).every((x) => x === "");
    
        return isValid;
    };
    
    
    
        
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const isValid = Object.values(errors).every((x) => x === "") && formIsValid();
        const data = {
          name: values.fullName,
          email: values.email,
          message: values.message
          }
        if (isValid) {
          const res = defaultInstance.post("contact/send",data)
          console.log(res)
        } else{
          console.log('form was not valid')
        }
    };

  return (
    <div style = {customFormContainer}>
      <CustomForm onSubmit={handleFormSubmit}>
        {inputFieldValues.map((inputFieldValue, index) => {
          return (
            <TextField
              key={index}
              sx={formStyles(inputFieldValue)}
              onChange={handleInputValue}
              onBlur={handleInputValue}
              name={inputFieldValue.name}
              label={inputFieldValue.label}
              error={errors[inputFieldValue.name]}
              multiline
              fullWidth
              rows={2}
              maxRows={Infinity}
              variant='standard'
              autoComplete="none"
              {...(errors[inputFieldValue.name] && {
                error: true,
                helperText: errors[inputFieldValue.name]
              })}
            />
          );
        })}
        <Button
          variant="contained"
          type="submit"
          color="secondary"
          sx = {buttonStyles}
          disabled={!formIsValid()}
        >
          Send Message
        </Button>
      </CustomForm>
    </div>
  );
};

export default ContactForm;
