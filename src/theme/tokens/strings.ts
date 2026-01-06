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
    settings: { foreground: "#E8B89CBB" },
  },
  {
    name: "String interpolation",
    scope: ["string.interpolated", "meta.string-contents.quoted"],
    settings: { foreground: "#E8B89CBB" },
  },
  {
    name: "Regex",
    scope: ["string.regexp", "string.regexp.js"],
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
  {
    name: "Markup link descriptions",
    scope: "string.other.link",
    settings: { foreground: palette.mauve },
  },
  {
    name: "String unquoted",
    scope: ["string.unquoted", "string.unquoted.heredoc"],
    settings: { foreground: "#90A8E8" },
  },
  {
    name: "String quoted other",
    scope: ["string.quoted.other", "string.quoted.angle"],
    settings: { foreground: "#90A8E8" },
  },
];
