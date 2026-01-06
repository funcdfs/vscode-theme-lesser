/**
 * Markup Token Colors
 */

import { palette, withOpacity } from "../../palette";
import type { TokenColor } from "../types";

export const markup: TokenColor[] = [
  {
    name: "Markup quotes",
    scope: "markup.quote",
    settings: { foreground: withOpacity(palette.peach, "subtle") },
  },
  {
    name: "Markup headings",
    scope: ["markup.heading", "entity.name.section", "markup.heading.setext"],
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
  {
    name: "Markup bold",
    scope: "markup.bold",
    settings: { foreground: palette.mauve, fontStyle: "bold" },
  },
  {
    name: "Markup italics",
    scope: "markup.italic",
    settings: { foreground: withOpacity(palette.blue, "medium"), fontStyle: "italic" },
  },
  {
    name: "Markup strikethrough",
    scope: "markup.strikethrough",
    settings: { foreground: palette.overlay1, fontStyle: "strikethrough" },
  },
  {
    name: "Markup links",
    scope: "markup.underline.link",
    settings: { foreground: "#88C8F0B3" },
  },
  {
    name: "Markup code",
    scope: ["markup.inline.raw", "markup.fenced_code", "markup.raw"],
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
  {
    name: "Markup inserted",
    scope: "markup.inserted",
    settings: { foreground: withOpacity(palette.blue, "medium") },
  },
  {
    name: "Markup deleted",
    scope: "markup.deleted",
    settings: { foreground: withOpacity(palette.maroon, "medium") },
  },
  {
    name: "Markup changed",
    scope: "markup.changed",
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
];
