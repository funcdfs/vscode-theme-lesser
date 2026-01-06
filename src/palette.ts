/**
 * Lesser Theme Color Palette
 * 
 * This file defines all the base colors used throughout the theme.
 * Colors are organized by their semantic meaning.
 */

export interface Palette {
  // Base colors
  base: string;
  mantle: string;
  crust: string;
  surface0: string;
  surface1: string;
  surface2: string;
  overlay0: string;
  overlay1: string;
  overlay2: string;

  // Text colors
  text: string;
  subtext0: string;
  subtext1: string;

  // Accent colors
  lavender: string;
  mauve: string;
  pink: string;
  maroon: string;
  red: string;
  peach: string;
  yellow: string;
  green: string;
  teal: string;
  sky: string;
  sapphire: string;
  blue: string;
}

export const palette: Palette = {
  // Base colors - backgrounds
  base: "#14101A",      // Main editor background
  mantle: "#1A1520",    // Secondary background (widgets, panels)
  crust: "#0D0A12",     // Deepest background (shadows)
  surface0: "#1E1828",  // Elevated surfaces
  surface1: "#252030",  // Hover states
  surface2: "#2A2435",  // Active/selected states

  // Border and separator colors
  overlay0: "#3D3650",  // Borders, separators
  overlay1: "#5A5570",  // Subtle text, line numbers
  overlay2: "#636d83",  // Disabled text

  // Text colors
  text: "#B8BFD0",      // Primary text
  subtext0: "#C0C5D0",  // Secondary text
  subtext1: "#F0F0F0",  // Bright/highlighted text

  // Accent colors
  lavender: "#C2A0FD",  // Primary accent (functions, active elements)
  mauve: "#D4A5E8",     // Links, special highlights
  pink: "#E8A0D0",      // Bracket pair 6
  maroon: "#FF8090",    // Errors, deletions (bright)
  red: "#FF6B8A",       // Errors, deletions
  peach: "#E8B4A0",     // Strings, inherited classes
  yellow: "#FFE5A0",    // Variables, properties, warnings
  green: "#80FFB5",     // Success, additions, tags
  teal: "#7AC0A0",      // Types, classes
  sky: "#89DDFF",       // Keywords
  sapphire: "#5AE89A",  // Success indicators
  blue: "#5A9BE6",      // Info, conditionals
};

// Opacity variants
export const opacity = {
  full: "FF",
  high: "F0",
  medium: "DD",
  low: "CC",
  subtle: "BB",
  faint: "AA",
  dim: "90",
  muted: "77",
  ghost: "55",
  whisper: "40",
  trace: "25",
  invisible: "18",
  none: "00",
} as const;

// Helper function to apply opacity to a color
export function withOpacity(color: string, alpha: keyof typeof opacity): string {
  const hex = color.startsWith("#") ? color.slice(1) : color;
  return `#${hex}${opacity[alpha]}`;
}

// Semantic color mappings
export const semantic = {
  // UI states
  focus: withOpacity(palette.lavender, "faint"),
  selection: "#7E5A9E",
  hover: palette.surface1,
  active: palette.surface2,

  // Git decorations
  added: palette.green,
  modified: palette.lavender,
  deleted: palette.red,
  renamed: palette.lavender,
  untracked: palette.green,
  ignored: palette.overlay1,
  conflicting: palette.red,

  // Diagnostics
  error: palette.red,
  warning: "#E8A855",
  info: palette.blue,
  hint: palette.green,

  // Diff
  diffInserted: withOpacity(palette.green, "invisible"),
  diffRemoved: withOpacity(palette.red, "invisible"),
  diffInsertedLine: withOpacity(palette.green, "invisible"),
  diffRemovedLine: withOpacity(palette.red, "invisible"),
};
