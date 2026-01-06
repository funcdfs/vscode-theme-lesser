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
  "debugConsole.infoForeground": withOpacity(palette.blue, "medium"),
  "debugConsole.warningForeground": withOpacity("#E8A855", "medium"),
  "debugConsole.errorForeground": palette.red,
  "debugConsole.sourceForeground": palette.overlay1,
  "debugConsoleInputIcon.foreground": withOpacity(palette.lavender, "faint"),
};

export const debugIcon = {
  "debugIcon.breakpointForeground": palette.red,
  "debugIcon.breakpointDisabledForeground": palette.overlay1,
  "debugIcon.breakpointUnverifiedForeground": "#E8A855",
  "debugIcon.breakpointCurrentStackframeForeground": withOpacity(palette.yellow, "low"),
  "debugIcon.breakpointStackframeForeground": withOpacity(palette.sapphire, "medium"),
  "debugIcon.startForeground": withOpacity(palette.sapphire, "medium"),
  "debugIcon.pauseForeground": withOpacity(palette.blue, "medium"),
  "debugIcon.stopForeground": palette.red,
  "debugIcon.disconnectForeground": palette.red,
  "debugIcon.restartForeground": withOpacity(palette.sapphire, "medium"),
  "debugIcon.stepOverForeground": withOpacity(palette.blue, "medium"),
  "debugIcon.stepIntoForeground": withOpacity(palette.blue, "medium"),
  "debugIcon.stepOutForeground": withOpacity(palette.blue, "medium"),
  "debugIcon.continueForeground": withOpacity(palette.sapphire, "medium"),
  "debugIcon.stepBackForeground": withOpacity(palette.blue, "medium"),
};

export const debugToken = {
  "debugTokenExpression.name": palette.mauve,
  "debugTokenExpression.value": palette.text,
  "debugTokenExpression.string": palette.peach,
  "debugTokenExpression.boolean": withOpacity(palette.yellow, "low"),
  "debugTokenExpression.number": withOpacity(palette.yellow, "low"),
  "debugTokenExpression.error": palette.red,
  "debugView.exceptionLabelForeground": "#FFFFFF",
  "debugView.exceptionLabelBackground": palette.red,
  "debugView.stateLabelForeground": palette.text,
  "debugView.stateLabelBackground": palette.mantle,
  "debugView.valueChangedHighlight": withOpacity(palette.blue, "medium"),
};
