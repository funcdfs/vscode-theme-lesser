/**
 * Rust Token Colors
 */

import { palette, withOpacity } from "../../../palette";
import type { TokenColor } from "../../types";

export const rust: TokenColor[] = [
  {
    name: "Rust lifetimes",
    scope: [
      "entity.name.type.lifetime.rust",
      "punctuation.definition.lifetime.rust",
      "storage.modifier.lifetime.rust",
    ],
    settings: { foreground: withOpacity(palette.teal, "subtle") },
  },
  {
    name: "Rust macros",
    scope: [
      "entity.name.function.macro.rust",
      "support.macro.rust",
      "meta.macro.rust",
    ],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "Rust types",
    scope: [
      "entity.name.type.rust",
      "entity.name.type.struct.rust",
      "entity.name.type.enum.rust",
      "entity.name.type.trait.rust",
      "entity.name.type.union.rust",
    ],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
  {
    name: "Rust type parameters",
    scope: ["entity.name.type.type-parameter.rust"],
    settings: { foreground: withOpacity(palette.teal, "subtle") },
  },
  {
    name: "Rust functions",
    scope: [
      "entity.name.function.rust",
      "meta.function.call.rust entity.name.function",
    ],
    settings: { foreground: withOpacity(palette.lavender, "high") },
  },
  {
    name: "Rust self",
    scope: ["variable.language.self.rust"],
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
  {
    name: "Rust variables",
    scope: ["variable.other.rust"],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "Rust constants",
    scope: ["constant.other.caps.rust", "entity.name.constant.rust"],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "Rust attributes",
    scope: [
      "meta.attribute.rust",
      "punctuation.definition.attribute.rust",
      "punctuation.brackets.attribute.rust",
    ],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "Rust modules",
    scope: ["entity.name.module.rust", "entity.name.namespace.rust"],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "Rust format specifiers",
    scope: ["punctuation.section.embedded.rust", "meta.interpolation.rust"],
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
];
