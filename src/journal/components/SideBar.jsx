import { useSelector } from "react-redux";
import { Box, Drawer, Toolbar, Typography, List, Divider } from "@mui/material";

import SideBarItem from "./SideBarItem";

const SideBar = ({ drawerWidth = 240 }) => {
  const { notes } = useSelector((state) => state.journal);
  const { displayName } = useSelector((state) => state.auth);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        open
        variant="permanent"
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" noWrap>
            {displayName ? displayName : ""}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.map((note) => (
            <SideBarItem key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
