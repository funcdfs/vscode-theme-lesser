/**
 * Input Controls
 * 
 * Colors for buttons, checkboxes, dropdowns, inputs, and other form controls.
 */

import { palette, withOpacity } from "../../palette";

export const button = {
  "button.background": "#8B6FC0",
  "button.foreground": "#FFFFFF",
  "button.border": withOpacity(palette.lavender, "whisper"),
  "button.separator": "#FFFFFF20",
  "button.hoverBackground": "#9B7FD0",
  "button.secondaryForeground": "#FFFFFF",
  "button.secondaryBackground": "#6B5A90",
  "button.secondaryHoverBackground": "#7B6AA0",
};

export const checkbox = {
  "checkbox.background": palette.mantle,
  "checkbox.foreground": palette.text,
  "checkbox.border": palette.overlay0,
  "checkbox.selectBackground": palette.mantle,
  "checkbox.selectBorder": withOpacity(palette.lavender, "faint"),
  "checkbox.disabled.background": withOpacity(palette.mantle, "dim"),
  "checkbox.disabled.foreground": withOpacity(palette.overlay2, "dim"),
};

export const radio = {
  "radio.activeForeground": withOpacity(palette.green, "medium"),
  "radio.activeBackground": palette.mantle,
  "radio.activeBorder": withOpacity(palette.green, "subtle"),
  "radio.inactiveForeground": palette.overlay2,
  "radio.inactiveBackground": palette.mantle,
  "radio.inactiveBorder": palette.overlay0,
  "radio.inactiveHoverBackground": palette.surface1,
};

export const dropdown = {
  "dropdown.background": palette.mantle,
  "dropdown.listBackground": palette.mantle,
  "dropdown.border": palette.overlay0,
  "dropdown.foreground": palette.text,
};

export const input = {
  "input.background": palette.mantle,
  "input.border": palette.overlay0,
  "input.foreground": palette.text,
  "input.placeholderForeground": palette.overlay2,
  "inputOption.activeBackground": palette.mantle,
  "inputOption.activeBorder": withOpacity(palette.lavender, "faint"),
  "inputOption.activeForeground": "#FFFFFF",
  "inputOption.hoverBackground": palette.mantle,
  "inputValidation.errorBackground": withOpacity(palette.red, "dim"),
  "inputValidation.errorForeground": "#FFFFFF",
  "inputValidation.errorBorder": palette.red,
  "inputValidation.infoBackground": withOpacity("#5A8FCF", "faint"),
  "inputValidation.infoForeground": "#FFFFFF",
  "inputValidation.infoBorder": "#5A8FCF",
  "inputValidation.warningBackground": withOpacity("#E8A855", "faint"),
  "inputValidation.warningForeground": "#FFFFFF",
  "inputValidation.warningBorder": "#E8A855",
};

export const scrollbar = {
  "scrollbar.shadow": "#00000030",
  "scrollbarSlider.activeBackground": withOpacity(palette.lavender, "ghost"),
  "scrollbarSlider.background": withOpacity(palette.lavender, "trace"),
  "scrollbarSlider.hoverBackground": withOpacity(palette.lavender, "whisper"),
};
