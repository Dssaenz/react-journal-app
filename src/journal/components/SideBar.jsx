import { TurnedInNot } from '@mui/icons-material';
import { Box, Drawer, Toolbar, Typography, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Grid } from '@mui/material';

const SideBar = ({ drawerWidth = 240 }) => (
  <Box
    component="nav"
    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
  >
    <Drawer
      open
      variant='permanent'
      sx={{
        display: { xs: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
      }}
    >

      <Toolbar>
        <Typography variant="h6" component="div" noWrap>Darwin</Typography>
      </Toolbar>
      <Divider />
      <List>
        {
          ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text} />
                  <ListItemText  secondary={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </Drawer>
  </Box>
);

export default SideBar;
