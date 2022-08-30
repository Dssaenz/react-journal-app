import { Grid, Typography } from "@mui/material";

const AuthLayout = ({ children, title }) => (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{
      padding: 4,
      minHeight: '100vh',
      backgroundColor: 'primary.main'
    }}
  >
    <Grid
      item
      className="box-shadow"
      xs={3}
      sx={{
        padding: 3,
        borderRadius: 2,
        width: { md: 500 },
        backgroundColor: 'white'
      }}
    >
      <Typography variant='h5' sx={{ mb: 1 }}>{title}</Typography>
      {children}
    </Grid>
  </Grid>
);

export default AuthLayout;
