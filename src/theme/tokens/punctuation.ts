/**
 * Punctuation Token Colors
 */

import { palette, withOpacity } from "../../palette";
import type { TokenColor } from "../types";

export const punctuation: TokenColor[] = [
  {
    name: "Embedded template punctuation",
    scope: "string.template meta.embedded",
    settings: { foreground: "#D3C6AADD" },
  },
  {
    name: "Tag brackets",
    scope: "punctuation.definition.tag",
    settings: { foreground: withOpacity(palette.green, "medium"), fontStyle: "normal" },
  },
  {
    name: "Key/value separators",
    scope: [
      "punctuation.separator",
      "punctuation.separator.key-value",
      "punctuation.separator.dictionary",
    ],
    settings: { foreground: "#D3C6AADD" },
  },
  {
    name: "Template expressions",
    scope: [
      "punctuation.definition.template-expression",
      "punctuation.definition.interpolation",
    ],
    settings: { foreground: withOpacity(palette.dusk, "medium") },
  },
  {
    name: "Embedded section punctuation",
    scope: "punctuation.section.embedded",
    settings: { foreground: withOpacity(palette.dusk, "medium") },
  },
  {
    name: "Markup list punctuation",
    scope: "punctuation.definition.list",
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
  {
    name: "Brackets",
    scope: ["punctuation.brackets", "punctuation.section.brackets", "meta.brace"],
    settings: { foreground: "#9DA9A0DD" },
  },
  {
    name: "Punctuation accessor",
    scope: [
      "punctuation.accessor",
      "punctuation.accessor.dot",
      "punctuation.accessor.arrow",
      "punctuation.accessor.double-colon",
    ],
    settings: { foreground: "#D3C6AADD" },
  },
  {
    name: "Punctuation section block",
    scope: [
      "punctuation.section.block.begin",
      "punctuation.section.block.end",
      "punctuation.section.braces.begin",
      "punctuation.section.braces.end",
    ],
    settings: { foreground: "#9DA9A0DD" },
  },
  {
    name: "Punctuation section parens",
    scope: [
      "punctuation.section.parens.begin",
      "punctuation.section.parens.end",
      "punctuation.section.group.begin",
      "punctuation.section.group.end",
    ],
    settings: { foreground: "#9DA9A0DD" },
  },
  {
    name: "Punctuation section brackets",
    scope: [
      "punctuation.section.brackets.begin",
      "punctuation.section.brackets.end",
      "punctuation.section.array.begin",
      "punctuation.section.array.end",
    ],
    settings: { foreground: "#9DA9A0DD" },
  },
  {
    name: "Punctuation section generic",
    scope: [
      "punctuation.definition.generic.begin",
      "punctuation.definition.generic.end",
      "punctuation.section.generic.begin",
      "punctuation.section.generic.end",
    ],
    settings: { foreground: "#9DA9A0DD" },
  },
  {
    name: "Punctuation terminator",
    scope: ["punctuation.terminator", "punctuation.terminator.statement"],
    settings: { foreground: "#D3C6AADD" },
  },
  {
    name: "Punctuation continuation",
    scope: [
      "punctuation.separator.continuation",
      "punctuation.separator.continuation.line",
    ],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
];
