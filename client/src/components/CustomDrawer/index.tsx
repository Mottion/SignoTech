import React, { useEffect, useState } from "react";
import { Box, Drawer, List, Toolbar, Typography } from '@mui/material';
import DrawerItem from "../DrawerItem";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';

const CustomDrawer: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const drawerWidth = windowWidth > 700 ? 240 : 55;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', zIndex: 1, backgroundColor: "#27272a", color: "white", borderRightWidth: "1px", borderColor: "#3f3f46" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'hidden' }}>
        <List>
          <DrawerItem text="Home Page" windowWidth={windowWidth} icon={<HomeIcon sx={{color: "white"}}/>}/>
          <DrawerItem text="Add Votation" windowWidth={windowWidth} icon={<AddIcon sx={{color: "white"}}/>}/>
        </List>
      </Box>
    </Drawer>
  )
}

export default CustomDrawer;