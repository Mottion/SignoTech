import React from "react";
import { DrawerItemProps } from "../../@types/components/drawerItemProps";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const DrawerItem: React.FC<DrawerItemProps> = ({text, icon, windowWidth}) => {
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        {windowWidth > 700 && <ListItemText primary={text} />}
      </ListItemButton>
    </ListItem>
  )
}

export default DrawerItem