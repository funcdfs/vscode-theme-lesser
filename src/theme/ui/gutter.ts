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
  "editorGutter.commentUnresolvedGlyphForeground": "#E0C080",
  "editorGutter.foldingControlForeground": palette.overlay1,
};

export const editorComments = {
  "editorCommentsWidget.resolvedBorder": withOpacity(palette.green, "medium"),
  "editorCommentsWidget.unresolvedBorder": "#E0C080",
  "editorCommentsWidget.rangeBackground": withOpacity(palette.lavender, "invisible"),
  "editorCommentsWidget.rangeBorder": "#9D8CCC35",
  "editorCommentsWidget.rangeActiveBackground": withOpacity(palette.lavender, "trace"),
  "editorCommentsWidget.rangeActiveBorder": withOpacity(palette.lavender, "ghost"),
};
