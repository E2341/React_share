import React, { useState } from "react";
import { Button, TextField, Grid, Container, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../firebase/firebase.utils";
import { Formik } from "formik";
import * as Yup from 'yup';
import  LockOutlinedIcon  from '@material-ui/icons/LockOutlined';



const ForgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is reuired."),
  
});

const styles = makeStyles((theme) => ({
  wrappper: {
    marginTop: "10rem",
    height: "calc(100vh - 19.0625rem)",
    textAlign: "center"
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.secondary.main
  }
}));

const initialValues = {
  email: "",
};

function ForgotPassword() {
   const [loginError, setLoginError] = useState(null);
  const forgotPasswordStyled = styles();

  const handleGoogleButtonClick = () => {
    firebase.useGoogleProvider();
  };

  const handleFormSubmit = (values) => {
      firebase.forgotPassword(values.email).then((res) => {
      
          
    });
};
    


  return (
    <Container className={forgotPasswordStyled.wrappper} maxWidth="sm">
       <Avatar className={forgotPasswordStyled.avatar} >
          <LockOutlinedIcon />
       </Avatar> 
       <Typography variant="h4" >
            Forgot Password
      </Typography>
      <Formik 
        initialValues={initialValues} 
        validationSchema={ForgotPasswordValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
            
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email}
                  
                />
              </Grid>
              
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
             <p style={{ textAlign: "center", color: "red" }}>
              <small>{loginError}</small>
            </p>
          </form>
        )}
      </Formik>
    </Container>
  );
}

export default ForgotPassword;