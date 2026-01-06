/**
 * Editor
 * 
 * Colors for the main editor area.
 */

import { palette, withOpacity } from "../../palette";

export const editorPane = {
  "editorPane.background": palette.mantle,
};

export const editor = {
  "editor.background": palette.base,
  "editor.foreground": palette.text,
  "editorLineNumber.foreground": palette.overlay1,
  "editorLineNumber.activeForeground": palette.text,
  "editorLineNumber.dimmedForeground": withOpacity(palette.overlay1, "whisper"),
  "editorCursor.background": palette.mantle,
  "editorCursor.foreground": "#E8B4FF",
  "editorMultiCursor.primary.foreground": "#E8B4FF",
  "editorMultiCursor.primary.background": palette.mantle,
  "editorMultiCursor.secondary.foreground": "#E8B4FFBB",
  "editorMultiCursor.secondary.background": palette.mantle,
  "editor.placeholder.foreground": withOpacity(palette.overlay1, "whisper"),
  "editor.compositionBorder": "#E8B4FFBB",
  "editor.selectionBackground": "#7E5A9E55",
  "editor.selectionForeground": "#FFFFFF",
  "editor.inactiveSelectionBackground": "#7E5A9E35",
  "editor.selectionHighlightBackground": "#7E5A9E30",
  "editor.selectionHighlightBorder": "#7E5A9E50",
  "editor.wordHighlightBackground": withOpacity(palette.lavender, "trace"),
  "editor.wordHighlightBorder": "#9D8CCC45",
  "editor.wordHighlightStrongBackground": "#9D8CCC35",
  "editor.wordHighlightStrongBorder": withOpacity(palette.lavender, "ghost"),
  "editor.wordHighlightTextBackground": withOpacity(palette.lavender, "invisible"),
  "editor.wordHighlightTextBorder": "#9D8CCC35",
};

export const editorFind = {
  "editor.findMatchBackground": "#3D7A5090",
  "editor.findMatchHighlightBackground": "#3D7A5060",
  "editor.findRangeHighlightBackground": "#9D6AAF25",
  "editor.findMatchBorder": withOpacity(palette.sapphire, "medium"),
  "editor.findMatchHighlightBorder": withOpacity(palette.sapphire, "ghost"),
  "editor.findRangeHighlightBorder": "#9D6AAF00",
  "searchEditor.findMatchBackground": "#3D7A5090",
  "searchEditor.findMatchBorder": withOpacity(palette.sapphire, "ghost"),
  "searchEditor.textInputBorder": palette.overlay0,
};

export const editorHighlight = {
  "editor.hoverHighlightBackground": withOpacity(palette.lavender, "trace"),
  "editor.lineHighlightBackground": palette.surface0,
  "editor.lineHighlightBorder": "#2E284000",
  "editorLink.activeForeground": palette.mauve,
  "editor.rangeHighlightBackground": withOpacity(palette.mantle, "dim"),
  "editor.rangeHighlightBorder": "#2E284000",
  "editor.symbolHighlightBackground": "#3D7A5090",
  "editor.symbolHighlightBorder": withOpacity(palette.sapphire, "ghost"),
};

export const editorWhitespace = {
  "editorWhitespace.foreground": withOpacity(palette.overlay0, "dim"),
  "editorIndentGuide.background": withOpacity(palette.overlay0, "whisper"),
  "editorIndentGuide.activeBackground": palette.overlay0,
  "editorIndentGuide.background1": withOpacity(palette.overlay0, "whisper"),
  "editorIndentGuide.activeBackground1": palette.overlay0,
};

export const editorInlayHint = {
  "editorInlayHint.background": palette.mantle,
  "editorInlayHint.foreground": "#7A7590",
  "editorInlayHint.typeForeground": "#7A7590",
  "editorInlayHint.typeBackground": palette.mantle,
  "editorInlayHint.parameterForeground": "#7A7590",
  "editorInlayHint.parameterBackground": palette.mantle,
};

export const editorRuler = {
  "editorRuler.foreground": withOpacity(palette.overlay0, "whisper"),
  "editor.linkedEditingBackground": "#9D6AAF35",
  "editorCodeLens.foreground": "#7A7590",
  "editorLightBulb.foreground": withOpacity(palette.yellow, "low"),
  "editorLightBulbAutoFix.foreground": withOpacity(palette.sapphire, "medium"),
};
