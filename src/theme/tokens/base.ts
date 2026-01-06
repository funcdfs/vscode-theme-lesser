/**
 * Base Token Colors
 * 
 * Fallback and base token colors for syntax highlighting.
 */

import type { TokenColor } from "../types";

export const base: TokenColor[] = [
  {
    name: "Global fallback",
    scope: [
      "source",
      "text",
      "meta",
      "punctuation",
      "support",
      "entity",
      "variable",
      "constant",
      "keyword",
      "storage",
      "string",
      "comment",
    ],
    settings: { foreground: "#C0C8D8" },
  },
  {
    name: "Default text",
    scope: ["source", "text"],
    settings: { foreground: "#C0C8D8" },
  },
  {
    name: "Meta and punctuation fallback",
    scope: [
      "meta",
      "meta.block",
      "meta.brace",
      "meta.embedded",
      "punctuation",
      "punctuation.definition",
      "punctuation.separator",
      "punctuation.terminator",
      "punctuation.accessor",
    ],
    settings: { foreground: "#B8C0D0" },
  },
  {
    name: "Support fallback",
    scope: [
      "support",
      "support.function",
      "support.variable",
      "support.constant",
      "support.other",
    ],
    settings: { foreground: "#C0C8D8" },
  },
];
