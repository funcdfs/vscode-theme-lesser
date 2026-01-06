/**
 * Editor Tabs
 * 
 * Colors for editor tabs and tab groups.
 */

import { palette, withOpacity } from "../../palette";

export const editorGroup = {
  "editorGroup.border": withOpacity(palette.overlay0, "muted"),
  "editorGroup.dropBackground": "#3A305080",
  "editorGroupHeader.noTabsBackground": palette.base,
  "editorGroupHeader.tabsBackground": palette.base,
  "editorGroupHeader.tabsBorder": withOpacity(palette.mantle, "none"),
  "editorGroupHeader.border": withOpacity(palette.mantle, "none"),
  "editorGroup.emptyBackground": palette.mantle,
  "editorGroup.focusedEmptyBorder": withOpacity(palette.lavender, "faint"),
  "editorGroup.dropIntoPromptForeground": palette.text,
  "editorGroup.dropIntoPromptBackground": palette.mantle,
  "editorGroup.dropIntoPromptBorder": withOpacity(palette.lavender, "muted"),
};

export const tab = {
  "tab.activeBackground": withOpacity(palette.base, "none"),
  "tab.unfocusedActiveBackground": withOpacity(palette.base, "none"),
  "tab.activeForeground": palette.subtext1,
  "tab.border": withOpacity(palette.base, "none"),
  "tab.activeBorder": withOpacity(palette.base, "none"),
  "tab.unfocusedActiveBorder": withOpacity(palette.base, "none"),
  "tab.activeBorderTop": withOpacity(palette.lavender, "dim"),
  "tab.unfocusedActiveBorderTop": withOpacity(palette.lavender, "muted"),
  "tab.lastPinnedBorder": withOpacity(palette.overlay0, "muted"),
  "tab.inactiveBackground": withOpacity(palette.base, "none"),
  "tab.unfocusedInactiveBackground": withOpacity(palette.base, "none"),
  "tab.inactiveForeground": palette.overlay2,
  "tab.unfocusedActiveForeground": palette.subtext0,
  "tab.unfocusedInactiveForeground": palette.overlay2,
  "tab.hoverBackground": palette.surface1,
  "tab.unfocusedHoverBackground": withOpacity(palette.base, "none"),
  "tab.hoverForeground": palette.subtext1,
  "tab.unfocusedHoverForeground": palette.text,
  "tab.hoverBorder": withOpacity(palette.base, "none"),
  "tab.unfocusedHoverBorder": withOpacity(palette.base, "none"),
  "tab.activeModifiedBorder": withOpacity(palette.green, "medium"),
  "tab.inactiveModifiedBorder": withOpacity(palette.green, "muted"),
  "tab.unfocusedActiveModifiedBorder": withOpacity(palette.green, "muted"),
  "tab.unfocusedInactiveModifiedBorder": withOpacity(palette.green, "ghost"),
  "tab.selectedBorderTop": withOpacity(palette.lavender, "dim"),
  "tab.selectedBackground": withOpacity(palette.base, "none"),
  "tab.selectedForeground": palette.subtext1,
  "tab.dragAndDropBorder": withOpacity(palette.lavender, "dim"),
};
