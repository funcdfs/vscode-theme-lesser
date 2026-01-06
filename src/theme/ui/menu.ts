/**
 * Menus
 * 
 * Colors for menus and menu bar.
 */

import { palette, withOpacity } from "../../palette";

export const menu = {
  "menu.background": palette.mantle,
  "menu.foreground": palette.text,
  "menu.selectionBackground": "#2E2840",
  "menu.selectionForeground": withOpacity(palette.green, "medium"),
  "menu.selectionBorder": withOpacity(palette.green, "subtle"),
  "menu.separatorBackground": palette.overlay0,
  "menu.border": palette.overlay0,
  "menu.acceleratorForeground": palette.overlay2,
  "menu.acceleratorSelectionForeground": withOpacity(palette.green, "medium"),
  "menubar.selectionBackground": "#2E284080",
  "menubar.selectionForeground": withOpacity(palette.green, "medium"),
  "menubar.selectionBorder": withOpacity(palette.green, "subtle"),
};
