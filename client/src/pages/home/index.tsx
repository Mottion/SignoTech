import { IconButton, Toolbar } from "@mui/material";
import React from "react";
import HeaderComponent from "../../components/headerComponent";
import MenuIcon from '@mui/icons-material/Menu';

const Home: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <HeaderComponent />
      {/* <Toolbar> */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              marginRight: 5,
              color: '#FFFFFF'
            },
            open && { display: 'none' },
          ]}
        >
          <MenuIcon />
        </IconButton>
      {/* </Toolbar> */}
    </div>
  )
}

export default Home;