/**
 * Storage Token Colors
 */

import { palette, withOpacity } from "../../palette";
import type { TokenColor } from "../types";

export const storage: TokenColor[] = [
  {
    name: "Storage keywords",
    scope: ["storage", "storage.type", "storage.modifier"],
    settings: { foreground: withOpacity(palette.ocean, "medium"), fontStyle: "normal" },
  },
  {
    name: "Storage type function",
    scope: ["storage.type.function", "storage.type.function.arrow"],
    settings: { foreground: withOpacity(palette.ocean, "medium") },
  },
  {
    name: "Storage type class",
    scope: "storage.type.class",
    settings: { foreground: withOpacity(palette.ocean, "medium") },
  },
  {
    name: "Storage type primitive",
    scope: [
      "storage.type.primitive",
      "storage.type.built-in",
      "storage.type.builtin",
    ],
    settings: { foreground: withOpacity(palette.moss, "medium") },
  },
];
