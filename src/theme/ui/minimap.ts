/**
 * Minimap
 * 
 * Colors for the minimap (code overview on the right).
 */

import { palette, withOpacity } from "../../palette";

export const minimap = {
  "minimap.findMatchHighlight": withOpacity(palette.green, "muted"),
  "minimap.selectionHighlight": "#7E5A9E70",
  "minimap.errorHighlight": palette.red,
  "minimap.warningHighlight": withOpacity("#E8A855", "dim"),
  "minimap.background": palette.base,
  "minimap.selectionOccurrenceHighlight": "#7E5A9E50",
  "minimap.foregroundOpacity": "#000000DD",
  "minimapSlider.background": withOpacity(palette.lavender, "invisible"),
  "minimapSlider.hoverBackground": "#9D8CCC30",
  "minimapSlider.activeBackground": "#9D8CCC45",
  "minimapGutter.addedBackground": withOpacity(palette.green, "muted"),
  "minimapGutter.modifiedBackground": withOpacity(palette.lavender, "muted"),
  "minimapGutter.deletedBackground": withOpacity(palette.red, "muted"),
};
