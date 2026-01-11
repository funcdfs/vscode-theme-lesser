/**
 * Debug
 * 
 * Colors for debugging UI elements.
 */

import { palette, withOpacity } from "../../palette";

export const debug = {
  "debugToolBar.background": palette.mantle,
  "debugToolBar.border": palette.overlay0,
  "debugExceptionWidget.background": palette.mantle,
  "debugExceptionWidget.border": palette.red,
  "debugConsole.infoForeground": withOpacity(palette.ocean, "medium"),
  "debugConsole.warningForeground": withOpacity("#E8A855", "medium"),
  "debugConsole.errorForeground": palette.red,
  "debugConsole.sourceForeground": palette.overlay1,
  "debugConsoleInputIcon.foreground": withOpacity(palette.lavender, "faint"),
};

export const debugIcon = {
  "debugIcon.breakpointForeground": palette.red,
  "debugIcon.breakpointDisabledForeground": palette.overlay1,
  "debugIcon.breakpointUnverifiedForeground": "#E8A855",
  "debugIcon.breakpointCurrentStackframeForeground": "#E0C080",
  "debugIcon.breakpointStackframeForeground": withOpacity(palette.green, "medium"),
  "debugIcon.startForeground": withOpacity(palette.green, "medium"),
  "debugIcon.pauseForeground": withOpacity(palette.ocean, "medium"),
  "debugIcon.stopForeground": palette.red,
  "debugIcon.disconnectForeground": palette.red,
  "debugIcon.restartForeground": withOpacity(palette.green, "medium"),
  "debugIcon.stepOverForeground": withOpacity(palette.ocean, "medium"),
  "debugIcon.stepIntoForeground": withOpacity(palette.ocean, "medium"),
  "debugIcon.stepOutForeground": withOpacity(palette.ocean, "medium"),
  "debugIcon.continueForeground": withOpacity(palette.green, "medium"),
  "debugIcon.stepBackForeground": withOpacity(palette.ocean, "medium"),
};

export const debugToken = {
  "debugTokenExpression.name": palette.dusk,
  "debugTokenExpression.value": palette.text,
  "debugTokenExpression.string": palette.peach,
  "debugTokenExpression.boolean": withOpacity(palette.pink, "medium"),
  "debugTokenExpression.number": withOpacity(palette.pink, "medium"),
  "debugTokenExpression.error": palette.red,
  "debugView.exceptionLabelForeground": "#FFFFFF",
  "debugView.exceptionLabelBackground": palette.red,
  "debugView.stateLabelForeground": palette.text,
  "debugView.stateLabelBackground": palette.mantle,
  "debugView.valueChangedHighlight": withOpacity(palette.ocean, "medium"),
};
