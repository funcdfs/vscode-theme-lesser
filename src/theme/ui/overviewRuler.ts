/**
 * Overview Ruler
 * 
 * Colors for the overview ruler (scrollbar decorations).
 */

import { palette, withOpacity } from "../../palette";

export const editorOverviewRuler = {
  "editorOverviewRuler.border": withOpacity(palette.mantle, "none"),
  "editorOverviewRuler.findMatchForeground": withOpacity(palette.green, "muted"),
  "editorOverviewRuler.rangeHighlightForeground": "#7E5A9E70",
  "editorOverviewRuler.selectionHighlightForeground": "#7E5A9E70",
  "editorOverviewRuler.wordHighlightForeground": withOpacity(palette.lavender, "muted"),
  "editorOverviewRuler.wordHighlightStrongForeground": withOpacity(palette.lavender, "dim"),
  "editorOverviewRuler.wordHighlightTextForeground": "#9D8CCC50",
  "editorOverviewRuler.modifiedForeground": withOpacity(palette.lavender, "dim"),
  "editorOverviewRuler.addedForeground": withOpacity(palette.green, "dim"),
  "editorOverviewRuler.deletedForeground": withOpacity(palette.red, "dim"),
  "editorOverviewRuler.errorForeground": withOpacity(palette.red, "high"),
  "editorOverviewRuler.warningForeground": withOpacity("#E8A855", "dim"),
  "editorOverviewRuler.infoForeground": withOpacity(palette.ocean, "medium"),
  "editorOverviewRuler.bracketMatchForeground": withOpacity(palette.lavender, "dim"),
};
