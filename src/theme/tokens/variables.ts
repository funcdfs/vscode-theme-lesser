/**
 * Variable Token Colors
 */

import { palette, withOpacity } from "../../palette";
import type { TokenColor } from "../types";

export const variables: TokenColor[] = [
  {
    name: "Variable names",
    scope: ["entity.name.variable", "variable"],
    settings: { foreground: withOpacity(palette.frost, "medium") },
  },
  {
    name: "Variable other",
    scope: ["variable.other", "variable.other.readwrite"],
    settings: { foreground: withOpacity(palette.frost, "medium") },
  },
  {
    name: "Variable constant",
    scope: ["variable.other.constant", "variable.other.constant.property"],
    settings: { foreground: withOpacity(palette.clay, "medium") },
  },
  {
    name: "Object property",
    scope: [
      "variable.other.property",
      "variable.other.object.property",
      "meta.property.object",
    ],
    settings: { foreground: withOpacity(palette.sand, "medium") },
  },
  {
    name: "Function parameters",
    scope: [
      "variable.parameter",
      "meta.function.parameters variable",
      "meta.parameters variable",
    ],
    settings: { foreground: withOpacity(palette.frost, "medium"), fontStyle: "normal" },
  },
  {
    name: "Language variables",
    scope: [
      "variable.language",
      "variable.language.this",
      "variable.language.self",
      "variable.language.super",
    ],
    settings: { foreground: withOpacity(palette.dusk, "medium") },
  },
  {
    name: "Variable annotation",
    scope: ["variable.annotation", "variable.other.annotation"],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "Variable function",
    scope: ["variable.function", "variable.function.member"],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "Variable other member",
    scope: ["variable.other.member", "variable.other.field"],
    settings: { foreground: withOpacity(palette.sand, "medium") },
  },
  {
    name: "Static properties",
    scope: [
      "variable.other.static",
      "variable.other.object.access",
      "constant.other.property",
    ],
    settings: { foreground: withOpacity(palette.clay, "medium") },
  },
];
