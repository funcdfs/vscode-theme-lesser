/**
 * Editor Gutter
 * 
 * Colors for the gutter (line numbers, folding, git decorations).
 */

import { palette, withOpacity } from "../../palette";

export const editorGutter = {
  "editorGutter.background": palette.base,
  "editorGutter.modifiedBackground": withOpacity(palette.lavender, "low"),
  "editorGutter.addedBackground": withOpacity(palette.green, "low"),
  "editorGutter.deletedBackground": withOpacity(palette.red, "low"),
  "editorGutter.commentRangeForeground": palette.overlay1,
  "editorGutter.commentGlyphForeground": palette.text,
  "editorGutter.commentUnresolvedGlyphForeground": withOpacity(palette.yellow, "low"),
  "editorGutter.foldingControlForeground": palette.overlay1,
};

export const editorComments = {
  "editorCommentsWidget.resolvedBorder": withOpacity(palette.sapphire, "medium"),
  "editorCommentsWidget.unresolvedBorder": withOpacity(palette.yellow, "low"),
  "editorCommentsWidget.rangeBackground": withOpacity(palette.lavender, "invisible"),
  "editorCommentsWidget.rangeBorder": "#9D8CCC35",
  "editorCommentsWidget.rangeActiveBackground": withOpacity(palette.lavender, "trace"),
  "editorCommentsWidget.rangeActiveBorder": withOpacity(palette.lavender, "ghost"),
};
