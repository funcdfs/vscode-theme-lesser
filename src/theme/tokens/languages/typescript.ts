/**
 * TypeScript/TSX Token Colors
 */

import { palette, withOpacity } from "../../../palette";
import type { TokenColor } from "../../types";

export const typescript: TokenColor[] = [
  {
    name: "TypeScript type annotations",
    scope: ["meta.type.annotation.ts", "meta.type.annotation.tsx"],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
  {
    name: "TypeScript/JavaScript classes",
    scope: [
      "entity.name.type.class.ts",
      "entity.name.type.class.tsx",
      "entity.name.type.class.js",
      "entity.name.type.class.jsx",
    ],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
  {
    name: "TypeScript/JavaScript interfaces",
    scope: [
      "entity.name.type.interface.ts",
      "entity.name.type.interface.tsx",
    ],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
  {
    name: "TypeScript/JavaScript type aliases",
    scope: [
      "entity.name.type.alias.ts",
      "entity.name.type.alias.tsx",
    ],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
  {
    name: "TypeScript/JavaScript enums",
    scope: [
      "entity.name.type.enum.ts",
      "entity.name.type.enum.tsx",
    ],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
  {
    name: "TypeScript/JavaScript modules",
    scope: [
      "entity.name.type.module.ts",
      "entity.name.type.module.tsx",
      "entity.name.type.module.js",
    ],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "TypeScript/JavaScript functions",
    scope: [
      "entity.name.function.ts",
      "entity.name.function.tsx",
      "entity.name.function.js",
      "entity.name.function.jsx",
    ],
    settings: { foreground: withOpacity(palette.lavender, "high") },
  },
  {
    name: "TypeScript/JavaScript methods",
    scope: [
      "entity.name.function.method.ts",
      "entity.name.function.method.tsx",
      "entity.name.function.method.js",
    ],
    settings: { foreground: withOpacity(palette.lavender, "high") },
  },
  {
    name: "TypeScript/JavaScript variables",
    scope: [
      "variable.other.readwrite.ts",
      "variable.other.readwrite.tsx",
      "variable.other.readwrite.js",
      "variable.other.readwrite.jsx",
    ],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "TypeScript/JavaScript constants",
    scope: [
      "variable.other.constant.ts",
      "variable.other.constant.tsx",
      "variable.other.constant.js",
      "variable.other.constant.jsx",
    ],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "TypeScript/JavaScript properties",
    scope: [
      "variable.other.property.ts",
      "variable.other.property.tsx",
      "variable.other.property.js",
      "variable.other.property.jsx",
    ],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "TypeScript/JavaScript parameters",
    scope: [
      "variable.parameter.ts",
      "variable.parameter.tsx",
      "variable.parameter.js",
      "variable.parameter.jsx",
    ],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "TypeScript/JavaScript this",
    scope: [
      "variable.language.this.ts",
      "variable.language.this.tsx",
      "variable.language.this.js",
      "variable.language.this.jsx",
    ],
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
  {
    name: "TypeScript/JavaScript super",
    scope: [
      "variable.language.super.ts",
      "variable.language.super.tsx",
      "variable.language.super.js",
      "variable.language.super.jsx",
    ],
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
  {
    name: "TypeScript/JavaScript decorators",
    scope: [
      "meta.decorator.ts",
      "meta.decorator.tsx",
      "punctuation.decorator.ts",
      "punctuation.decorator.tsx",
    ],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "JSX/TSX component tags",
    scope: [
      "support.class.component.tsx",
      "support.class.component.jsx",
      "entity.name.tag.tsx",
      "entity.name.tag.jsx",
    ],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
  {
    name: "JSX/TSX attributes",
    scope: [
      "entity.other.attribute-name.tsx",
      "entity.other.attribute-name.jsx",
    ],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
];
