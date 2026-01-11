/**
 * Diff Editor
 * 
 * Colors for the diff editor and merge conflicts.
 */

import { palette, withOpacity } from "../../palette";

export const diffEditor = {
  "diffEditor.insertedTextBackground": withOpacity(palette.green, "invisible"),
  "diffEditor.insertedTextBorder": withOpacity(palette.green, "none"),
  "diffEditor.removedTextBackground": withOpacity(palette.red, "invisible"),
  "diffEditor.removedTextBorder": withOpacity(palette.red, "none"),
  "diffEditor.insertedLineBackground": withOpacity(palette.green, "invisible"),
  "diffEditor.removedLineBackground": withOpacity(palette.red, "invisible"),
  "diffEditor.border": withOpacity(palette.mantle, "none"),
  "diffEditor.diagonalFill": withOpacity(palette.overlay0, "whisper"),
  "diffEditor.unchangedRegionBackground": palette.mantle,
  "diffEditor.unchangedRegionForeground": palette.overlay1,
  "diffEditor.unchangedCodeBackground": withOpacity(palette.mantle, "whisper"),
  "diffEditor.move.border": withOpacity(palette.lavender, "dim"),
  "diffEditorGutter.insertedLineBackground": withOpacity(palette.green, "ghost"),
  "diffEditorGutter.removedLineBackground": withOpacity(palette.red, "ghost"),
  "diffEditorOverview.insertedForeground": withOpacity(palette.green, "muted"),
  "diffEditorOverview.removedForeground": withOpacity(palette.red, "muted"),
};

export const sideBySideEditor = {
  "sideBySideEditor.horizontalBorder": withOpacity(palette.mantle, "none"),
  "sideBySideEditor.verticalBorder": withOpacity(palette.mantle, "none"),
};

export const multiDiffEditor = {
  "multiDiffEditor.background": palette.mantle,
  "multiDiffEditor.border": withOpacity(palette.mantle, "none"),
  "multiDiffEditorHorizontalSpacing": palette.mantle,
};

export const merge = {
  "merge.currentHeaderBackground": withOpacity(palette.green, "whisper"),
  "merge.currentContentBackground": withOpacity(palette.green, "trace"),
  "merge.incomingHeaderBackground": withOpacity(palette.lavender, "whisper"),
  "merge.incomingContentBackground": withOpacity(palette.lavender, "trace"),
  "merge.border": withOpacity(palette.overlay0, "muted"),
  "merge.commonHeaderBackground": withOpacity(palette.overlay1, "whisper"),
  "merge.commonContentBackground": withOpacity(palette.overlay1, "trace"),
  "editorOverviewRuler.currentContentForeground": withOpacity(palette.green, "medium"),
  "editorOverviewRuler.incomingContentForeground": withOpacity(palette.lavender, "medium"),
  "editorOverviewRuler.commonContentForeground": palette.overlay1,
  "mergeEditor.change.background": withOpacity(palette.green, "trace"),
  "mergeEditor.change.word.background": withOpacity(palette.green, "whisper"),
  "mergeEditor.conflict.handledFocusedBackground": withOpacity(palette.green, "whisper"),
  "mergeEditor.conflict.handledUnfocusedBackground": withOpacity(palette.green, "trace"),
  "mergeEditor.conflict.unhandledFocusedBackground": withOpacity(palette.red, "whisper"),
  "mergeEditor.conflict.unhandledUnfocusedBackground": withOpacity(palette.red, "trace"),
  "mergeEditor.conflictingLines.background": "#E0C08025",
  "mergeEditor.changeBase.background": "#E0C08025",
  "mergeEditor.changeBase.word.background": "#E0C08040",
};
