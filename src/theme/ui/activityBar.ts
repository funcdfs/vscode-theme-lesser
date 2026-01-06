/**
 * Activity Bar
 * 
 * Colors for the activity bar (left sidebar icons).
 */

import { palette, withOpacity } from "../../palette";

export const activityBar = {
  "activityBar.background": palette.base,
  "activityBar.dropBorder": withOpacity(palette.lavender, "faint"),
  "activityBar.dropBackground": withOpacity("#6B5A90", "dim"),
  "activityBar.foreground": palette.text,
  "activityBar.inactiveForeground": withOpacity(palette.overlay2, "dim"),
  "activityBar.border": palette.mantle,
  "activityBar.activeBorder": withOpacity(palette.lavender, "dim"),
  "activityBar.activeBackground": palette.mantle,
  "activityBar.activeFocusBorder": withOpacity(palette.lavender, "dim"),
  "activityBarTop.background": palette.base,
  "activityBarTop.dragAndDropBorder": withOpacity(palette.lavender, "dim"),
  "activityBarTop.foreground": palette.text,
  "activityBarTop.inactiveForeground": withOpacity(palette.overlay2, "dim"),
  "activityBarTop.border": palette.mantle,
  "activityBarTop.activeBorder": withOpacity(palette.lavender, "dim"),
  "activityBarTop.activeBackground": palette.mantle,
};
