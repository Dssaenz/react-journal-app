import { MenuOutlined, LogoutOutlined } from '@mui/icons-material';
import { Grid, AppBar, Toolbar, IconButton, Typography } from '@mui/material';

const NavBar = ({  drawerWidth }) => (
  <AppBar
    position="fixed"
    sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` },
    ml: { sm: `${drawerWidth}px` } }}
  >
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuOutlined />
      </IconButton>
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" noWrap component="div">Journal App</Typography>
        <IconButton color="error">
          <LogoutOutlined />
        </IconButton>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default NavBar;