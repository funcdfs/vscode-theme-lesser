/**
 * Support Token Colors
 */

import { palette, withOpacity } from "../../palette";
import type { TokenColor } from "../types";

export const support: TokenColor[] = [
  {
    name: "Provided values",
    scope: "support",
    settings: { foreground: withOpacity(palette.moss, "medium") },
  },
  {
    name: "Provided functions",
    scope: ["support.function", "support.function.builtin"],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "Provided variables",
    scope: ["support.variable", "support.constant"],
    settings: { foreground: withOpacity(palette.clay, "medium") },
  },
  {
    name: "Property names",
    scope: [
      "support.type.property-name",
      "meta.object-literal.key",
      "string.json support.type.property-name",
      "meta.structure.dictionary.key",
    ],
    settings: { foreground: withOpacity(palette.sand, "medium") },
  },
  {
    name: "JSON string values",
    scope: [
      "meta.structure.dictionary.value string",
      "meta.object-literal.value string",
    ],
    settings: { foreground: withOpacity(palette.peach, "medium") },
  },
  {
    name: "JSON property names",
    scope: [
      "support.type.property-name.json",
      "string.json",
      "punctuation.support.type.property-name.begin.json",
      "punctuation.support.type.property-name.end.json",
    ],
    settings: { foreground: withOpacity(palette.sand, "medium") },
  },
  {
    name: "CSS property names",
    scope: "support.type.property-name.css",
    settings: { foreground: withOpacity(palette.sand, "medium") },
  },
  {
    name: "CSS property values",
    scope: ["support.constant.property-value.css", "meta.property-value.css"],
    settings: { foreground: "#D3C6AADD" },
  },
  {
    name: "CSS vendor prefixes",
    scope: "support.type.vendored.property-name.css",
    settings: { foreground: withOpacity(palette.sand, "medium") },
  },
  {
    name: "Support module",
    scope: ["support.module", "support.other.module"],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "Support type builtin",
    scope: ["support.type.builtin", "support.type.built-in"],
    settings: { foreground: withOpacity(palette.moss, "medium") },
  },
];
