/**
 * Editor Widgets
 * 
 * Colors for editor widgets like suggestions, hover, peek view.
 */

import { palette, withOpacity } from "../../palette";

export const editorWidget = {
  "editorWidget.foreground": palette.text,
  "editorWidget.background": palette.mantle,
  "editorWidget.border": palette.overlay0,
  "editorWidget.resizeBorder": withOpacity(palette.lavender, "muted"),
  "editorSuggestWidget.background": palette.mantle,
  "editorSuggestWidget.border": palette.overlay0,
  "editorSuggestWidget.foreground": palette.text,
  "editorSuggestWidget.focusHighlightForeground": withOpacity(palette.green, "medium"),
  "editorSuggestWidget.highlightForeground": palette.lavender,
  "editorSuggestWidget.selectedBackground": palette.surface2,
  "editorSuggestWidget.selectedForeground": palette.subtext1,
  "editorSuggestWidget.selectedIconForeground": palette.subtext1,
  "editorSuggestWidgetStatus.foreground": palette.overlay1,
  "editorHoverWidget.foreground": palette.text,
  "editorHoverWidget.background": palette.mantle,
  "editorHoverWidget.border": palette.overlay0,
  "editorHoverWidget.highlightForeground": withOpacity(palette.green, "medium"),
  "editorHoverWidget.statusBarBackground": palette.mantle,
  "editorMarkerNavigation.background": palette.mantle,
};

export const peekView = {
  "peekView.border": withOpacity(palette.lavender, "faint"),
  "peekViewEditor.background": palette.mantle,
  "peekViewEditorGutter.background": palette.mantle,
  "peekViewEditor.matchHighlightBackground": "#3D7A5090",
  "peekViewEditor.matchHighlightBorder": withOpacity(palette.sapphire, "ghost"),
  "peekViewResult.background": palette.mantle,
  "peekViewResult.fileForeground": palette.text,
  "peekViewResult.lineForeground": palette.overlay1,
  "peekViewResult.matchHighlightBackground": "#3D7A5090",
  "peekViewResult.selectionBackground": palette.surface2,
  "peekViewResult.selectionForeground": palette.subtext1,
  "peekViewTitle.background": palette.mantle,
  "peekViewTitleDescription.foreground": palette.overlay1,
  "peekViewTitleLabel.foreground": palette.text,
};
