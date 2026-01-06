/**
 * Theme Type Definitions
 */

export interface TokenColor {
  name: string;
  scope: string | string[];
  settings: {
    foreground?: string;
    fontStyle?: string;
  };
}

export interface SemanticTokenColor {
  [key: string]: string | { foreground?: string; fontStyle?: string };
}

export interface ThemeColors {
  [key: string]: string;
}

export interface Theme {
  name: string;
  type: "dark" | "light";
  colors: ThemeColors;
  semanticHighlighting: boolean;
  semanticTokenColors: SemanticTokenColor;
  tokenColors: TokenColor[];
}
