/**
 * Quick Input
 * 
 * Colors for the command palette and quick open.
 */

import { palette, withOpacity } from "../../palette";

export const quickInput = {
  "quickInput.background": palette.mantle,
  "quickInput.foreground": palette.text,
  "quickInputList.focusBackground": palette.surface2,
  "quickInputList.focusForeground": palette.subtext1,
  "quickInputList.focusIconForeground": palette.subtext1,
  "quickInputTitle.background": palette.mantle,
  "pickerGroup.border": withOpacity(palette.overlay0, "muted"),
  "pickerGroup.foreground": withOpacity(palette.lavender, "faint"),
};
