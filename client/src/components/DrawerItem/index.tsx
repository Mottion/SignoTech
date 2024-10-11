import React from "react";
import { DrawerItemProps } from "../../@types/components/drawerItemProps";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const DrawerItem: React.FC<DrawerItemProps> = ({text, icon, windowWidth, onClick}) => {
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton onClick={onClick}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        {windowWidth > 700 && <ListItemText primary={text} />}
      </ListItemButton>
    </ListItem>
  )
}

export default DrawerItem