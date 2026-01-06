/**
 * Side Bar
 * 
 * Colors for the side bar (explorer, search, etc.).
 */

import { palette, withOpacity } from "../../palette";

export const sideBar = {
  "sideBar.background": palette.base,
  "sideBar.foreground": palette.text,
  "sideBar.border": withOpacity(palette.mantle, "none"),
  "sideBar.dropBackground": "#3A305080",
  "sideBarTitle.foreground": palette.text,
  "sideBarSectionHeader.background": palette.mantle,
  "sideBarSectionHeader.foreground": palette.text,
  "sideBarSectionHeader.border": withOpacity(palette.mantle, "none"),
};
