/**
 * String Token Colors
 */

import { palette, withOpacity } from "../../palette";
import type { TokenColor } from "../types";

export const strings: TokenColor[] = [
  {
    name: "Strings",
    scope: [
      "string",
      "string.quoted",
      "string.quoted.single",
      "string.quoted.double",
      "string.template",
    ],
    settings: { foreground: withOpacity(palette.peach, "soft") },
  },
  {
    name: "String interpolation",
    scope: ["string.interpolated", "meta.string-contents.quoted"],
    settings: { foreground: withOpacity(palette.peach, "soft") },
  },
  {
    name: "Regex",
    scope: ["string.regexp", "string.regexp.js"],
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
  {
    name: "Markup link descriptions",
    scope: "string.other.link",
    settings: { foreground: withOpacity(palette.ocean, "medium") },
  },
  {
    name: "String unquoted",
    scope: ["string.unquoted", "string.unquoted.heredoc"],
    settings: { foreground: withOpacity(palette.peach, "soft") },
  },
  {
    name: "String quoted other",
    scope: ["string.quoted.other", "string.quoted.angle"],
    settings: { foreground: withOpacity(palette.peach, "soft") },
  },
];
