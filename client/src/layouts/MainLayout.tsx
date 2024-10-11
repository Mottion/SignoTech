import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { Box } from "@mui/material";
import CustomDrawer from "../components/CustomDrawer";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = ({children}) => {
  
  return (
    <div>
      <HeaderComponent />
      <Box style={{ display: 'flex' }}>
        <CustomDrawer />
        
        {/* Box Main */}
        <Box sx={{ p: 3, overflow: "scroll", flexGrow: 1, scrollbarWidth: "none" }}>
          <Outlet />
        </Box>

      </Box>
    </div>
  );
}

export default MainLayout;