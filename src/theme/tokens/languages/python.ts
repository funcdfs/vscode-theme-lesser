/**
 * Python Token Colors
 */

import { palette, withOpacity } from "../../../palette";
import type { TokenColor } from "../../types";

export const python: TokenColor[] = [
  {
    name: "Python decorators",
    scope: [
      "entity.name.function.decorator.python",
      "meta.function.decorator.python",
    ],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "Python magic methods",
    scope: "support.function.magic.python",
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "Python classes",
    scope: ["entity.name.type.class.python", "support.type.python"],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
  {
    name: "Python functions",
    scope: [
      "entity.name.function.python",
      "meta.function-call.python entity.name.function",
    ],
    settings: { foreground: withOpacity(palette.lavender, "high") },
  },
  {
    name: "Python self/cls",
    scope: [
      "variable.parameter.function.language.special.self.python",
      "variable.parameter.function.language.special.cls.python",
      "variable.language.special.self.python",
      "variable.language.special.cls.python",
    ],
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
  {
    name: "Python variables",
    scope: [
      "variable.other.python",
      "meta.member.access.python variable.other",
    ],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "Python parameters",
    scope: ["variable.parameter.function.python"],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "Python builtin types",
    scope: ["support.type.python", "support.type.exception.python"],
    settings: { foreground: withOpacity(palette.teal, "subtle") },
  },
  {
    name: "Python builtin functions",
    scope: ["support.function.builtin.python"],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
];
