/**
 * Bracket Matching and Highlighting
 * 
 * Colors for bracket pairs and guides.
 */

import { palette, withOpacity } from "../../palette";

export const editorBracket = {
  "editorBracketMatch.background": "#9D8CCC35",
  "editorBracketMatch.border": withOpacity(palette.lavender, "muted"),
  "editorBracketHighlight.foreground1": palette.sky,
  "editorBracketHighlight.foreground2": "#C0A0FF",
  "editorBracketHighlight.foreground3": palette.green,
  "editorBracketHighlight.foreground4": "#E8A080",
  "editorBracketHighlight.foreground5": palette.sapphire,
  "editorBracketHighlight.foreground6": palette.pink,
  "editorBracketHighlight.unexpectedBracket.foreground": withOpacity(palette.maroon, "medium"),
  "editorBracketPairGuide.activeBackground1": withOpacity(palette.sky, "muted"),
  "editorBracketPairGuide.activeBackground2": withOpacity("#C0A0FF", "dim"),
  "editorBracketPairGuide.activeBackground3": withOpacity(palette.green, "muted"),
  "editorBracketPairGuide.activeBackground4": withOpacity("#E8A080", "dim"),
  "editorBracketPairGuide.activeBackground5": withOpacity(palette.sapphire, "muted"),
  "editorBracketPairGuide.activeBackground6": withOpacity(palette.pink, "dim"),
  "editorBracketPairGuide.background1": "#89DDFF38",
  "editorBracketPairGuide.background2": "#C0A0FF45",
  "editorBracketPairGuide.background3": "#80FFB538",
  "editorBracketPairGuide.background4": "#E8A08045",
  "editorBracketPairGuide.background5": "#5AE89A38",
  "editorBracketPairGuide.background6": "#E8A0D045",
};
