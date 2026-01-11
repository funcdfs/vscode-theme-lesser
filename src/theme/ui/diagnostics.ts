/**
 * Diagnostics
 * 
 * Colors for errors, warnings, info, and hints.
 */

import { palette, withOpacity } from "../../palette";

export const editorError = {
  "editorError.foreground": palette.red,
  "editorError.border": withOpacity(palette.red, "none"),
  "editorError.background": withOpacity(palette.red, "invisible"),
  "editorWarning.foreground": withOpacity("#E8A855", "medium"),
  "editorWarning.border": withOpacity("#E8A855", "none"),
  "editorWarning.background": withOpacity("#E8A855", "invisible"),
  "editorInfo.foreground": withOpacity(palette.ocean, "medium"),
  "editorInfo.border": withOpacity(palette.ocean, "none"),
  "editorInfo.background": withOpacity(palette.ocean, "invisible"),
  "editorHint.foreground": withOpacity(palette.green, "medium"),
  "editorHint.border": withOpacity(palette.green, "none"),
  "problemsErrorIcon.foreground": palette.red,
  "problemsWarningIcon.foreground": withOpacity("#E8A855", "medium"),
  "problemsInfoIcon.foreground": withOpacity(palette.ocean, "medium"),
};

export const editorUnnecessary = {
  "editorUnnecessaryCode.border": withOpacity(palette.overlay1, "none"),
  "editorUnnecessaryCode.opacity": "#00000080",
};
