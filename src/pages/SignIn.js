import React from "react";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../firebase/firebase.utils";
import { Formik } from "formik";

const styles = makeStyles({
  wrappper: {
    marginTop: "10rem",
  },
});

const initialValues = {
  email: "",
  password: "",
};

export default function SignIn() {
  const signinStyled = styles();

  const handleGoogleButtonClick = () => {
    firebase.useGoogleProvider();
  };

  const handleFormSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Container className={signinStyled.wrappper} maxWidth="sm">
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        {({ handleSubmit, values, password, handleChange }) => (
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
                  onClick={handleGoogleButtonClick}
                >
                  SIGNUP WITH GOOGLE
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Container>
  );
}
