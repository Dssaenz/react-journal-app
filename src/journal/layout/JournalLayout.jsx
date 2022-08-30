import { Box, Toolbar } from "@mui/material";

import { NavBar, SideBar } from "../components";

const drawerWidth = 240;

const JournalLayout = ({ children }) => (
  <Box sx={{ display: "flex" }}>
    <NavBar drawerWidth={drawerWidth} />
    <SideBar drawerWidth={drawerWidth} />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {children}
    </Box>
  </Box>
);

export default JournalLayout;
