import * as React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import { Box, Toolbar, Typography } from '@mui/material';
import CustomDrawer from '../../components/CustomDrawer';
import SearchComponent from '../../components/SearchComponent';
import TableComponent from '../../components/TableComponent';



export default function MiniDrawer() {
  
  return (
    <div>
      <HeaderComponent />
      <Box sx={{ display: 'flex' }}>
        <CustomDrawer />
        
        {/* Box Main */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <SearchComponent />
          <TableComponent />
        </Box>

      </Box>
      </div>
  );
}
