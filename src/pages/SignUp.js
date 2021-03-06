import React from "react";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import firebase from "../firebase/firebase.utils";
import * as Yup from 'yup';

const signInValidationSchema = Yup.object().shape({
  displayName: Yup.string().required("Display Name is reuired."),
  email: Yup.string().email("Invalid email").required("Email is reuired."),
  password: Yup.string()
    .required('Password is required')
    .min(8, "Password is too short - should be 8 chars minimum."),
});


const styles = makeStyles({
  wrappper :{
    marginTop: "3rem",
  },
})

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      displayName: '',
      email: '',
      password: '',
    },

    validationSchema: signInValidationSchema ,
    onSubmit: (values) => {
     // alert(JSON.stringify(values, null, 2));
     
     firebase.register(values.displayName, values.email, values.password);
    },
  });
    
   

  

  const signupStyled = styles();

  const handleGoogleButtonClick = () => {
    firebase.useGoogleProvider();
  };

  return (
    <Container  className={signupStyled.wrappper} maxWidth="sm">
      <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            name= "displayName"
            label="Display Name"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps('displayName')}
            error={formik.touched.displayName && formik.errors.displayName}
            helperText={formik.touched.displayName && formik.errors.displayName}
          />
            
        </Grid>
        <Grid item xs={12}>
          <TextField 
          name="email"
          label="Email" 
          variant="outlined" 
          fullWidth
          {...formik.getFieldProps('email')}
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
          name="password"
          label="Password" 
          variant="outlined"
          type="password"
          fullWidth 
          {...formik.getFieldProps('password')}
          error={formik.touched.password && formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Grid item xs={12}>
          <Button 
          type="submit"
          variant="contained" 
          color="primary"
          fullWidth 
          >
            Register
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button 
          variant="contained" 
          color="primary"
          fullWidth
          onClick = {handleGoogleButtonClick}
          >
            SIGNUP WITH GOOGLE
          </Button>
        </Grid>
      </Grid>
      </form>
    </Container>
  );
}
