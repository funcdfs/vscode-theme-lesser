/**
 * Vue/Svelte/Astro Token Colors
 */

import { palette, withOpacity } from "../../../palette";
import type { TokenColor } from "../../types";

export const vue: TokenColor[] = [
  {
    name: "Vue directives",
    scope: [
      "entity.other.attribute-name.directive.vue",
      "punctuation.definition.directive.vue",
    ],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "Vue component tags",
    scope: [
      "entity.name.tag.component.vue",
      "support.class.component.vue",
    ],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
  {
    name: "Vue attributes",
    scope: ["entity.other.attribute-name.vue"],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "Vue interpolation",
    scope: [
      "punctuation.definition.tag.begin.html.vue",
      "punctuation.definition.tag.end.html.vue",
      "meta.interpolation.vue",
    ],
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
  {
    name: "Svelte tags",
    scope: ["entity.name.tag.svelte"],
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
  {
    name: "Svelte attributes",
    scope: ["entity.other.attribute-name.svelte"],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "Astro",
    scope: [
      "entity.name.tag.astro",
      "support.class.component.astro",
    ],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
];
