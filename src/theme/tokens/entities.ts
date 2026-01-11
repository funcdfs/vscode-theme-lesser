/**
 * Entity Token Colors
 */

import { palette, withOpacity } from "../../palette";
import type { TokenColor } from "../types";

export const entities: TokenColor[] = [
  {
    name: "Namespace",
    scope: [
      "entity.name.namespace",
      "entity.name.module",
      "entity.name.package",
      "support.other.namespace",
    ],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "Class names",
    scope: [
      "entity.name.class",
      "entity.name.type.class",
      "support.class",
      "meta.class entity.name.type",
    ],
    settings: { foreground: withOpacity(palette.moss, "medium") },
  },
  {
    name: "Interface names",
    scope: ["entity.name.type.interface", "support.type.interface"],
    settings: { foreground: withOpacity(palette.moss, "medium") },
  },
  {
    name: "Struct names",
    scope: ["entity.name.type.struct", "storage.type.struct"],
    settings: { foreground: withOpacity(palette.moss, "medium") },
  },
  {
    name: "Enum names",
    scope: ["entity.name.type.enum", "support.type.enum"],
    settings: { foreground: withOpacity(palette.moss, "medium") },
  },
  {
    name: "Enum members",
    scope: [
      "variable.other.enummember",
      "constant.other.enum",
      "entity.name.variable.enum-member",
      "variable.other.constant.object",
      "support.type.object.module",
    ],
    settings: { foreground: withOpacity(palette.clay, "medium") },
  },
  {
    name: "Type parameters",
    scope: [
      "entity.name.type.parameter",
      "meta.type.parameters entity.name.type",
    ],
    settings: { foreground: withOpacity(palette.dusk, "medium") },
  },
  {
    name: "Named entities",
    scope: "entity.name",
    settings: { foreground: withOpacity(palette.moss, "medium") },
  },
  {
    name: "Function names",
    scope: ["entity.name.function", "meta.function-call entity.name.function"],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "Method names",
    scope: ["entity.name.function.member", "meta.function.method"],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "Tags",
    scope: ["entity.name.tag", "meta.tag entity.name.tag"],
    settings: { foreground: withOpacity(palette.green, "medium"), fontStyle: "normal" },
  },
  {
    name: "Static types",
    scope: [
      "entity.name.type",
      "storage.type.cs",
      "support.type",
      "support.type.primitive",
    ],
    settings: { foreground: withOpacity(palette.moss, "medium") },
  },
  {
    name: "Tag attributes",
    scope: [
      "entity.other.attribute-name",
      "meta.tag.attributes entity.other.attribute-name",
    ],
    settings: { foreground: withOpacity(palette.sand, "medium"), fontStyle: "normal" },
  },
  {
    name: "Inherited classes",
    scope: ["entity.other.inherited-class", "entity.name.type.inherited"],
    settings: { foreground: withOpacity(palette.peach, "medium") },
  },
  {
    name: "CSS ID selectors",
    scope: "entity.other.attribute-name.id",
    settings: { foreground: withOpacity(palette.ocean, "medium") },
  },
  {
    name: "CSS class selectors",
    scope: "entity.other.attribute-name.class",
    settings: { foreground: withOpacity(palette.moss, "medium") },
  },
  {
    name: "Pseudo CSS",
    scope: [
      "entity.other.attribute-name.pseudo-element",
      "entity.other.attribute-name.pseudo-class",
    ],
    settings: { foreground: withOpacity(palette.peach, "medium") },
  },
  {
    name: "Decorators",
    scope: [
      "meta.decorator",
      "meta.decorator entity.name.function",
      "meta.annotation",
      "storage.type.annotation",
    ],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "Entity name constant",
    scope: ["entity.name.constant", "meta.constant entity.name"],
    settings: { foreground: withOpacity(palette.clay, "medium") },
  },
  {
    name: "Entity name label",
    scope: ["entity.name.label", "entity.name.goto-label"],
    settings: { foreground: "#D3C6AADD" },
  },
  {
    name: "Entity name section",
    scope: ["entity.name.section"],
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
];
