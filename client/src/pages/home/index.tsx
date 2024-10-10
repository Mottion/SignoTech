import * as React from 'react';
import HeaderComponent from '../../components/headerComponent';
import { Box, Toolbar, Typography } from '@mui/material';
import CustomDrawer from '../../components/CustomDrawer';



export default function MiniDrawer() {
  
  return (
    <div>
      <HeaderComponent />
      <Box sx={{ display: 'flex' }}>
        <CustomDrawer />
        
        {/* Box Main */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          
        </Box>

      </Box>
    </div>
  );
}
