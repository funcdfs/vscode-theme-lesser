/**
 * JavaScript/JSX Token Colors
 */

import { palette, withOpacity } from "../../../palette";
import type { TokenColor } from "../../types";

export const javascript: TokenColor[] = [
  {
    name: "Arrow functions",
    scope: "storage.type.function.arrow",
    settings: { foreground: withOpacity(palette.sky, "medium") },
  },
  {
    name: "Import/Export",
    scope: [
      "keyword.control.import",
      "keyword.control.export",
      "keyword.control.from",
      "keyword.control.as",
    ],
    settings: { foreground: withOpacity(palette.sky, "medium") },
  },
  {
    name: "Module specifiers",
    scope: ["string.quoted.module-ref", "meta.import string"],
    settings: { foreground: "#E8B89CBB" },
  },
];
