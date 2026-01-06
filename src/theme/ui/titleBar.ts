/**
 * Title Bar
 * 
 * Colors for the window title bar.
 */

import { palette, withOpacity } from "../../palette";

export const titleBar = {
  "titleBar.activeBackground": palette.base,
  "titleBar.activeForeground": palette.text,
  "titleBar.inactiveBackground": palette.base,
  "titleBar.inactiveForeground": palette.overlay1,
  "titleBar.border": withOpacity(palette.mantle, "none"),
};
