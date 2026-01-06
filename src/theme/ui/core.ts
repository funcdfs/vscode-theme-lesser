/**
 * Core UI Colors
 * 
 * Base colors for the editor interface including focus, foreground,
 * and general UI elements.
 */

import { palette, withOpacity } from "../../palette";

export const core = {
  "focusBorder": withOpacity(palette.lavender, "faint"),
  "foreground": palette.text,
  "disabledForeground": withOpacity(palette.overlay2, "dim"),
  "widget.shadow": palette.crust,
  "selection.background": "#7E5A9E70",
  "descriptionForeground": withOpacity(palette.text, "low"),
  "errorForeground": palette.red,
  "icon.foreground": palette.text,
  "sash.hoverBorder": withOpacity(palette.lavender, "faint"),
};

export const window = {
  "window.activeBorder": palette.mantle,
  "window.inactiveBorder": withOpacity(palette.mantle, "low"),
};

export const text = {
  "textBlockQuote.background": palette.mantle,
  "textBlockQuote.border": withOpacity(palette.lavender, "faint"),
  "textCodeBlock.background": palette.mantle,
  "textLink.activeForeground": palette.mauve,
  "textLink.foreground": withOpacity(palette.lavender, "faint"),
  "textPreformat.foreground": palette.peach,
  "textPreformat.background": palette.mantle,
  "textSeparator.foreground": palette.overlay0,
};

export const toolbar = {
  "toolbar.hoverBackground": palette.mantle,
  "toolbar.hoverOutline": withOpacity(palette.lavender, "whisper"),
  "toolbar.activeBackground": palette.mantle,
};
