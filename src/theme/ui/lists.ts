/**
 * Lists and Trees
 * 
 * Colors for list views, tree views, and related components.
 */

import { palette, withOpacity } from "../../palette";

export const badge = {
  "activityBarBadge.background": withOpacity(palette.lavender, "ghost"),
  "activityBarBadge.foreground": "#FFFFFF",
  "badge.background": "#4A3D6039",
  "badge.foreground": "#FFFFFF7F",
};

export const progressBar = {
  "progressBar.background": withOpacity(palette.lavender, "faint"),
};

export const list = {
  "list.activeSelectionBackground": palette.surface2,
  "list.activeSelectionForeground": palette.frost,
  "list.activeSelectionIconForeground": palette.frost,
  "list.dropBackground": "#3A3050",
  "list.focusBackground": palette.surface2,
  "list.focusForeground": palette.subtext1,
  "list.focusHighlightForeground": palette.frost,
  "list.focusOutline": withOpacity(palette.lavender, "muted"),
  "list.focusAndSelectionOutline": withOpacity(palette.lavender, "dim"),
  "list.highlightForeground": palette.lavender,
  "list.hoverBackground": palette.surface1,
  "list.hoverForeground": palette.subtext1,
  "list.inactiveSelectionBackground": palette.surface1,
  "list.inactiveSelectionForeground": palette.frost,
  "list.inactiveSelectionIconForeground": palette.frost,
  "list.inactiveFocusBackground": palette.mantle,
  "list.inactiveFocusOutline": withOpacity(palette.lavender, "whisper"),
  "list.invalidItemForeground": palette.red,
  "list.errorForeground": withOpacity(palette.red, "high"),
  "list.warningForeground": withOpacity("#E8A855", "medium"),
  "listFilterWidget.background": palette.mantle,
  "listFilterWidget.outline": withOpacity(palette.lavender, "faint"),
  "listFilterWidget.noMatchesOutline": palette.red,
  "listFilterWidget.shadow": "#00000030",
  "list.filterMatchBackground": "#3D7A5080",
  "list.filterMatchBorder": withOpacity(palette.green, "medium"),
};

export const tree = {
  "tree.indentGuidesStroke": palette.overlay0,
  "tree.inactiveIndentGuidesStroke": palette.mantle,
  "tree.tableColumnsBorder": withOpacity(palette.overlay0, "whisper"),
  "tree.tableOddRowsBackground": withOpacity(palette.mantle, "whisper"),
};
