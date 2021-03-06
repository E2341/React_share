import React, { useState } from "react";
import { Button, TextField, Grid, Container, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../firebase/firebase.utils";
import { Formik } from "formik";
import * as Yup from 'yup';
import  LockOutlinedIcon  from '@material-ui/icons/LockOutlined';



const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is reuired."),
  password: Yup.string()
    .required('Password is required')
    .min(8, "Password is too short - should be 8 chars minimum."),
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
  password: "",
};

function SignIn() {
  const [loginError,setLoginError]=useState(null)
  const signinStyled = styles();

  const handleGoogleButtonClick = () => {
    firebase.useGoogleProvider();
  };

  const handleFormSubmit = (values) => {
    // alert(JSON.stringify(values, null, 2));
    firebase.signIn(values.email, values.password).then(res=>{
      res? setLoginError(res):setLoginError(null)
      });

  };

  return (
    <Container className={signinStyled.wrappper} maxWidth="sm">
       <Avatar className={signinStyled.avatar} >
          <LockOutlinedIcon />
       </Avatar> 
       <Typography variant="h4" >
            Sign In
      </Typography>
      <Formik 
        initialValues={initialValues} 
        validationSchema={signInValidationSchema}
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
                <TextField
                  name="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
                  helperText={errors.password}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleGoogleButtonClick}
                >
                  SIGNIN WITH GOOGLE
                </Button>
              </Grid>
            </Grid>
            <p style={{textAlign:"center",color:"red"}}><small>{loginError}</small></p>
          </form>
        )}
      </Formik>
    </Container>
  );
}


export default SignIn;