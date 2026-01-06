/**
 * Go Token Colors
 */

import { palette, withOpacity } from "../../../palette";
import type { TokenColor } from "../../types";

export const go: TokenColor[] = [
  {
    name: "Go package names",
    scope: "entity.name.package.go",
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "Go type names",
    scope: ["entity.name.type.go", "storage.type.go"],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
  {
    name: "Go interface names",
    scope: "entity.name.type.interface.go",
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
  {
    name: "Go struct field names",
    scope: ["variable.other.field.go", "entity.name.field.go"],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "Go function names",
    scope: ["entity.name.function.go", "support.function.go"],
    settings: { foreground: withOpacity(palette.lavender, "high") },
  },
  {
    name: "Go method receiver",
    scope: "variable.other.receiver.go",
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "Go constants",
    scope: ["constant.other.go", "variable.other.constant.go"],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "Go builtin types",
    scope: ["storage.type.builtin.go", "support.type.builtin.go"],
    settings: { foreground: withOpacity(palette.teal, "subtle") },
  },
  {
    name: "Go builtin functions",
    scope: "support.function.builtin.go",
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
];
