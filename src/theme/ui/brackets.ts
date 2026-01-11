/**
 * Bracket Matching and Highlighting
 * 
 * Colors for bracket pairs and guides.
 */

import { palette, withOpacity } from "../../palette";

export const editorBracket = {
  "editorBracketMatch.background": "#9D8CCC35",
  "editorBracketMatch.border": withOpacity(palette.lavender, "muted"),
  // 括号颜色 - 使用调色盘中的颜色，保持协调
  "editorBracketHighlight.foreground1": palette.lavender,   // 薰衣草紫
  "editorBracketHighlight.foreground2": palette.frost,      // 霜蓝
  "editorBracketHighlight.foreground3": palette.peach,      // 赤陶橙
  "editorBracketHighlight.foreground4": palette.dusk,       // 暮紫
  "editorBracketHighlight.foreground5": palette.sand,       // 沙褐
  "editorBracketHighlight.foreground6": palette.clay,       // 陶土
  "editorBracketHighlight.unexpectedBracket.foreground": withOpacity(palette.red, "medium"),
  // 括号配对指引线
  "editorBracketPairGuide.activeBackground1": withOpacity(palette.lavender, "muted"),
  "editorBracketPairGuide.activeBackground2": withOpacity(palette.frost, "muted"),
  "editorBracketPairGuide.activeBackground3": withOpacity(palette.peach, "muted"),
  "editorBracketPairGuide.activeBackground4": withOpacity(palette.dusk, "muted"),
  "editorBracketPairGuide.activeBackground5": withOpacity(palette.sand, "muted"),
  "editorBracketPairGuide.activeBackground6": withOpacity(palette.clay, "muted"),
  "editorBracketPairGuide.background1": withOpacity(palette.lavender, "trace"),
  "editorBracketPairGuide.background2": withOpacity(palette.frost, "trace"),
  "editorBracketPairGuide.background3": withOpacity(palette.peach, "trace"),
  "editorBracketPairGuide.background4": withOpacity(palette.dusk, "trace"),
  "editorBracketPairGuide.background5": withOpacity(palette.sand, "trace"),
  "editorBracketPairGuide.background6": withOpacity(palette.clay, "trace"),
};
