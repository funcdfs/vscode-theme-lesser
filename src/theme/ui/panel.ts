/**
 * Panel
 * 
 * Colors for the bottom panel (terminal, output, problems).
 */

import { palette, withOpacity } from "../../palette";

export const panel = {
  "panel.background": palette.base,
  "panel.border": withOpacity(palette.overlay0, "muted"),
  "panel.dropBorder": withOpacity(palette.lavender, "faint"),
  "panelTitle.activeBorder": withOpacity(palette.lavender, "faint"),
  "panelTitle.activeForeground": palette.text,
  "panelTitle.inactiveForeground": palette.overlay1,
  "panelInput.border": palette.overlay0,
  "panelSection.border": withOpacity(palette.overlay0, "muted"),
  "panelSection.dropBackground": "#3A305080",
  "panelSectionHeader.background": palette.mantle,
  "panelSectionHeader.foreground": palette.text,
  "panelSectionHeader.border": withOpacity(palette.overlay0, "muted"),
};
