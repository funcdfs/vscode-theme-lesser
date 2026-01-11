/**
 * Theme Build Script
 * 
 * Compiles the modular theme files into a single JSON theme file.
 */

import * as fs from "fs";
import * as path from "path";
import type { Theme, ThemeColors, TokenColor } from "./theme/types";

// Import UI colors
import * as ui from "./theme/ui";

// Import token colors
import * as tokens from "./theme/tokens";

// Import semantic tokens
import { semanticTokenColors } from "./theme/semantic";

/**
 * Collect all UI colors from the UI modules
 */
function collectUIColors(): ThemeColors {
  const colors: ThemeColors = {};

  // Iterate through all exports from UI modules
  for (const [, moduleExports] of Object.entries(ui)) {
    if (typeof moduleExports === "object" && moduleExports !== null) {
      Object.assign(colors, moduleExports);
    }
  }

  return colors;
}

/**
 * Collect all token colors from the token modules
 */
function collectTokenColors(): TokenColor[] {
  const tokenColors: TokenColor[] = [];

  // Base tokens
  if (Array.isArray(tokens.base)) tokenColors.push(...tokens.base);
  if (Array.isArray(tokens.comments)) tokenColors.push(...tokens.comments);
  if (Array.isArray(tokens.constants)) tokenColors.push(...tokens.constants);
  if (Array.isArray(tokens.entities)) tokenColors.push(...tokens.entities);
  if (Array.isArray(tokens.keywords)) tokenColors.push(...tokens.keywords);
  if (Array.isArray(tokens.markup)) tokenColors.push(...tokens.markup);
  if (Array.isArray(tokens.punctuation)) tokenColors.push(...tokens.punctuation);
  if (Array.isArray(tokens.storage)) tokenColors.push(...tokens.storage);
  if (Array.isArray(tokens.strings)) tokenColors.push(...tokens.strings);
  if (Array.isArray(tokens.support)) tokenColors.push(...tokens.support);
  if (Array.isArray(tokens.variables)) tokenColors.push(...tokens.variables);

  return tokenColors;
}

/**
 * Build the complete theme object
 */
function buildTheme(): Theme {
  return {
    name: "lesser",
    type: "dark",
    colors: collectUIColors(),
    semanticHighlighting: true,
    semanticTokenColors: {
      ...semanticTokenColors,
    },
    tokenColors: collectTokenColors(),
  };
}

/**
 * Main build function
 */
function main(): void {
  console.log("Building Lesser theme...");

  const theme = buildTheme();

  // Ensure themes directory exists
  const themesDir = path.join(__dirname, "..", "themes");
  if (!fs.existsSync(themesDir)) {
    fs.mkdirSync(themesDir, { recursive: true });
  }

  // Write the theme file
  const outputPath = path.join(themesDir, "lesser.json");
  fs.writeFileSync(outputPath, JSON.stringify(theme, null, 2));

  console.log(`Theme built successfully: ${outputPath}`);
  console.log(`  - UI colors: ${Object.keys(theme.colors).length}`);
  console.log(`  - Token colors: ${theme.tokenColors.length}`);
  console.log(`  - Semantic tokens: ${Object.keys(theme.semanticTokenColors).length}`);
}

main();
