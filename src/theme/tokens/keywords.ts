/**
 * Keyword Token Colors
 */

import { palette, withOpacity } from "../../palette";
import type { TokenColor } from "../types";

export const keywords: TokenColor[] = [
  {
    name: "Keywords",
    scope: "keyword",
    settings: { foreground: withOpacity(palette.ocean, "medium") },
  },
  {
    name: "Control keywords",
    scope: [
      "keyword.control",
      "keyword.control.conditional",
      "keyword.control.loop",
      "keyword.control.flow",
      "keyword.control.import",
      "keyword.control.export",
      "keyword.control.return",
    ],
    settings: { foreground: withOpacity(palette.ocean, "medium") },
  },
  {
    name: "Operators",
    scope: "keyword.operator",
    settings: { foreground: "#D3C6AADD" },
  },
  {
    name: "Arithmetic operators",
    scope: [
      "keyword.operator.arithmetic",
      "keyword.operator.assignment",
      "keyword.operator.comparison",
      "keyword.operator.relational",
    ],
    settings: { foreground: "#D3C6AADD" },
  },
  {
    name: "Special operators",
    scope: [
      "keyword.operator.new",
      "keyword.operator.expression",
      "keyword.operator.logical",
      "keyword.operator.delete",
      "keyword.operator.typeof",
      "keyword.operator.instanceof",
    ],
    settings: { foreground: withOpacity(palette.ocean, "medium") },
  },
  {
    name: "Spread operator",
    scope: "keyword.operator.spread",
    settings: { foreground: withOpacity(palette.ocean, "medium") },
  },
  {
    name: "Units",
    scope: "keyword.other.unit",
    settings: { foreground: withOpacity(palette.clay, "medium") },
  },
  {
    name: "Conditional keywords",
    scope: [
      "keyword.control.conditional.if",
      "keyword.control.conditional.else",
      "keyword.control.conditional.elseif",
      "keyword.control.conditional.switch",
      "keyword.control.conditional.case",
    ],
    settings: { foreground: withOpacity(palette.ocean, "medium") },
  },
  {
    name: "Exception keywords",
    scope: [
      "keyword.control.exception",
      "keyword.control.exception.try",
      "keyword.control.exception.catch",
      "keyword.control.exception.finally",
      "keyword.control.exception.throw",
    ],
    settings: { foreground: withOpacity(palette.ocean, "medium") },
  },
  {
    name: "Keyword other",
    scope: ["keyword.other", "keyword.other.unit.suffix"],
    settings: { foreground: withOpacity(palette.ocean, "medium") },
  },
];
