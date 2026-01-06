/**
 * Comment Token Colors
 */

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
    settings: { foreground: "#7A7595" },
  },
  {
    name: "Documentation comments",
    scope: ["comment.block.documentation", "comment.block.javadoc"],
    settings: { foreground: "#8A85A5", fontStyle: "italic" },
  },
];
