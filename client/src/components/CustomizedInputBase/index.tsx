import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", background: "#27272a"}}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <SearchIcon sx={{color: "white"}} />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: "white" }}
        placeholder="Search Votation"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  );
}
