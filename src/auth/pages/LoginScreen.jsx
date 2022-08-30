import { useMemo } from "react";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";

import useForm from "../../hooks/useForm";
import AuthLayout from "../layout/AuthLayout";
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../store/auth/thunks";

function LoginScreen() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const isAuthenticated = useMemo(() => status === "checking", [status]);

  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication(email, password));
  };

  const onGoogleSignIn = () => dispatch(startGoogleSignIn());

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              placeholder="darwin.saenz@gmail.com"
              name="email"
              value={email}
              onChange={onInputChange}
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
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={isAuthenticated}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                onClick={onGoogleSignIn}
                disabled={isAuthenticated}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
}

export default LoginScreen;
