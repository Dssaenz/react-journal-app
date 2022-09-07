import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";

import AuthLayout from "../layout/AuthLayout";

import useForm from "../../hooks/useForm";
import { useState } from "react";

const formData = {
  displayName: "",
  email: "",
  password: "",
};

const formValidation = {
  email: [(value) => value.includes("@"), "Email must include @."],
  displayName: [(value) => value.length >= 1, "Name is required."],
  password: [
    (value) => value.length >= 6,
    "Password must have more than 6 characters.",
  ],
};

function RegisterScreen() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    formState,
    isFormValid,
    email,
    password,
    displayName,
    emailValid,
    passwordValid,
    displayNameValid,
    onInputChange,
  } = useForm(formData, formValidation);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Name"
              type="text"
              placeholder="Darwin Saenz"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              placeholder="darwin.saenz@gmail.com"
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button type="submit" variant="contained" fullWidth>
                Create account
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
}

export default RegisterScreen;
