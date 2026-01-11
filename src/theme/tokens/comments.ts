/**
 * Comment Token Colors
 */

import { palette, withOpacity } from "../../palette";
import type { TokenColor } from "../types";

export const comments: TokenColor[] = [
  {
    name: "Comments",
    scope: [
      "comment",
      "punctuation.definition.comment",
      "string.comment",
      "comment.block",
      "comment.line",
    ],
    settings: { foreground: withOpacity(palette.dusk, "muted") },
  },
  {
    name: "Documentation comments",
    scope: ["comment.block.documentation", "comment.block.javadoc"],
    settings: { foreground: withOpacity(palette.dusk, "dim") },
  },
];
