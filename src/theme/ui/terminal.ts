/**
 * Terminal
 * 
 * Colors for the integrated terminal.
 */

import { palette, withOpacity } from "../../palette";

export const terminal = {
  "terminal.background": palette.base,
  "terminal.foreground": palette.subtext0,
  "terminal.border": withOpacity(palette.overlay0, "muted"),
  "terminal.selectionBackground": "#7E5A9E55",
  "terminal.selectionForeground": "#FFFFFF",
  "terminal.inactiveSelectionBackground": "#7E5A9E35",
  "terminal.findMatchBackground": "#3D7A5090",
  "terminal.findMatchBorder": withOpacity(palette.green, "medium"),
  "terminal.findMatchHighlightBackground": "#3D7A5060",
  "terminal.findMatchHighlightBorder": withOpacity(palette.green, "ghost"),
  "terminal.hoverHighlightBackground": withOpacity(palette.lavender, "trace"),
  "terminalCursor.background": palette.mantle,
  "terminalCursor.foreground": withOpacity("#E8B4FF", "medium"),
  "terminal.dropBackground": "#3A305080",
  "terminal.tab.activeBorder": withOpacity(palette.lavender, "faint"),
  "terminalCommandDecoration.defaultBackground": palette.overlay1,
  "terminalCommandDecoration.successBackground": withOpacity(palette.green, "medium"),
  "terminalCommandDecoration.errorBackground": palette.red,
  "terminalOverviewRuler.cursorForeground": withOpacity("#E8B4FF", "muted"),
  "terminalOverviewRuler.findMatchForeground": withOpacity(palette.green, "muted"),
  "terminalStickyScroll.background": palette.mantle,
  "terminalStickyScrollHover.background": palette.surface1,
};

export const terminalAnsi = {
  "terminal.ansiBlack": "#2A2535",
  "terminal.ansiRed": palette.red,
  "terminal.ansiGreen": palette.green,
  "terminal.ansiYellow": palette.sand,
  "terminal.ansiBlue": palette.ocean,
  "terminal.ansiMagenta": palette.lavender,
  "terminal.ansiCyan": palette.frost,
  "terminal.ansiWhite": palette.subtext0,
  "terminal.ansiBrightBlack": palette.overlay1,
  "terminal.ansiBrightRed": palette.red,
  "terminal.ansiBrightGreen": palette.moss,
  "terminal.ansiBrightYellow": palette.clay,
  "terminal.ansiBrightBlue": palette.frost,
  "terminal.ansiBrightMagenta": palette.dusk,
  "terminal.ansiBrightCyan": palette.frost,
  "terminal.ansiBrightWhite": palette.subtext1,
};
