/**
 * Support Token Colors
 */

import { palette, withOpacity } from "../../palette";
import type { TokenColor } from "../types";

export const support: TokenColor[] = [
  {
    name: "Provided values",
    scope: "support",
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
  {
    name: "Provided functions",
    scope: ["support.function", "support.function.builtin"],
    settings: { foreground: withOpacity(palette.lavender, "high") },
  },
  {
    name: "Provided variables",
    scope: ["support.variable", "support.constant"],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "Property names",
    scope: [
      "support.type.property-name",
      "meta.object-literal.key",
      "string.json support.type.property-name",
      "meta.structure.dictionary.key",
    ],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "JSON string values",
    scope: [
      "meta.structure.dictionary.value string",
      "meta.object-literal.value string",
    ],
    settings: { foreground: "#E8B89CBB" },
  },
  {
    name: "JSON property names",
    scope: [
      "support.type.property-name.json",
      "string.json",
      "punctuation.support.type.property-name.begin.json",
      "punctuation.support.type.property-name.end.json",
    ],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "CSS property names",
    scope: "support.type.property-name.css",
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "CSS property values",
    scope: ["support.constant.property-value.css", "meta.property-value.css"],
    settings: { foreground: "#C0C8D8" },
  },
  {
    name: "CSS vendor prefixes",
    scope: "support.type.vendored.property-name.css",
    settings: { foreground: withOpacity(palette.yellow, "subtle") },
  },
  {
    name: "Support module",
    scope: ["support.module", "support.other.module"],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "Support type builtin",
    scope: ["support.type.builtin", "support.type.built-in"],
    settings: { foreground: withOpacity(palette.teal, "subtle") },
  },
];
