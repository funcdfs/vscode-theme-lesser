/**
 * Markup Token Colors
 */

import { palette, withOpacity } from "../../palette";
import type { TokenColor } from "../types";

export const markup: TokenColor[] = [
  {
    name: "Markup quotes",
    scope: "markup.quote",
    settings: { foreground: withOpacity(palette.peach, "medium") },
  },
  {
    name: "Markup headings",
    scope: ["markup.heading", "entity.name.section", "markup.heading.setext"],
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
  {
    name: "Markup bold",
    scope: "markup.bold",
    settings: { foreground: withOpacity(palette.sand, "medium"), fontStyle: "bold" },
  },
  {
    name: "Markup italics",
    scope: "markup.italic",
    settings: { foreground: withOpacity(palette.frost, "medium"), fontStyle: "italic" },
  },
  {
    name: "Markup strikethrough",
    scope: "markup.strikethrough",
    settings: { foreground: withOpacity(palette.overlay1, "medium"), fontStyle: "strikethrough" },
  },
  {
    name: "Markup links",
    scope: "markup.underline.link",
    settings: { foreground: withOpacity(palette.ocean, "medium") },
  },
  {
    name: "Markup code",
    scope: ["markup.inline.raw", "markup.fenced_code", "markup.raw"],
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
  {
    name: "Markup inserted",
    scope: "markup.inserted",
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
  {
    name: "Markup deleted",
    scope: "markup.deleted",
    settings: { foreground: withOpacity(palette.red, "medium") },
  },
  {
    name: "Markup changed",
    scope: "markup.changed",
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
];
