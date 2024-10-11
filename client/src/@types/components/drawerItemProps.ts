import { ReactNode } from "react";

export interface DrawerItemProps {
  text: string,
  icon: ReactNode,
  windowWidth: number,
  onClick: () => void;
}