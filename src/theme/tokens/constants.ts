/**
 * Constant Token Colors
 */

import { palette, withOpacity } from "../../palette";
import type { TokenColor } from "../types";

export const constants: TokenColor[] = [
  {
    name: "Constants",
    scope: "constant",
    settings: { foreground: withOpacity(palette.clay, "medium") },
  },
  {
    name: "Numeric constants",
    scope: [
      "constant.numeric",
      "constant.numeric.integer",
      "constant.numeric.float",
      "constant.numeric.hex",
    ],
    settings: { foreground: withOpacity(palette.pink, "medium") },
  },
  {
    name: "Language constants",
    scope: [
      "constant.language",
      "constant.language.boolean",
      "constant.language.null",
      "constant.language.undefined",
    ],
    settings: { foreground: withOpacity(palette.pink, "medium") },
  },
  {
    name: "Character constants",
    scope: ["constant.character", "constant.other"],
    settings: { foreground: withOpacity(palette.clay, "medium") },
  },
  {
    name: "Escape characters",
    scope: ["constant.character.escape", "constant.character.entity"],
    settings: { foreground: withOpacity(palette.dusk, "medium") },
  },
  {
    name: "Constant placeholder",
    scope: ["constant.other.placeholder", "constant.other.format.placeholder"],
    settings: { foreground: withOpacity(palette.dusk, "medium") },
  },
];
