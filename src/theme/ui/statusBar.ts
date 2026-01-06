/**
 * Status Bar
 * 
 * Colors for the status bar at the bottom.
 */

import { palette, withOpacity } from "../../palette";

export const statusBar = {
  "statusBar.background": palette.base,
  "statusBar.foreground": palette.text,
  "statusBar.border": withOpacity(palette.mantle, "none"),
  "statusBar.debuggingBackground": withOpacity(palette.lavender, "faint"),
  "statusBar.debuggingForeground": "#FFFFFF",
  "statusBar.debuggingBorder": withOpacity(palette.lavender, "muted"),
  "statusBar.noFolderBackground": palette.mantle,
  "statusBar.noFolderForeground": palette.text,
  "statusBar.noFolderBorder": withOpacity(palette.surface1, "none"),
  "statusBar.focusBorder": withOpacity(palette.lavender, "faint"),
  "statusBarItem.activeBackground": palette.overlay0,
  "statusBarItem.hoverBackground": "#2E2840",
  "statusBarItem.hoverForeground": palette.subtext1,
  "statusBarItem.prominentForeground": palette.text,
  "statusBarItem.prominentBackground": "#2E2840",
  "statusBarItem.prominentHoverBackground": palette.overlay0,
  "statusBarItem.remoteBackground": "#8B6FC0",
  "statusBarItem.remoteForeground": "#FFFFFF",
  "statusBarItem.remoteHoverBackground": "#9B7FD0",
  "statusBarItem.remoteHoverForeground": "#FFFFFF",
  "statusBarItem.errorBackground": palette.red,
  "statusBarItem.errorForeground": "#FFFFFF",
  "statusBarItem.errorHoverBackground": withOpacity(palette.maroon, "medium"),
  "statusBarItem.errorHoverForeground": "#FFFFFF",
  "statusBarItem.warningBackground": "#E8A855",
  "statusBarItem.warningForeground": "#FFFFFF",
  "statusBarItem.warningHoverBackground": withOpacity("#E8B870", "medium"),
  "statusBarItem.warningHoverForeground": "#FFFFFF",
  "statusBarItem.compactHoverBackground": palette.overlay0,
  "statusBarItem.focusBorder": withOpacity(palette.lavender, "faint"),
  "statusBarItem.offlineBackground": palette.overlay1,
  "statusBarItem.offlineForeground": palette.text,
  "statusBarItem.offlineHoverBackground": withOpacity("#6A6580", "medium"),
};
