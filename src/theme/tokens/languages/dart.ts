/**
 * Dart Token Colors
 */

import { palette, withOpacity } from "../../../palette";
import type { TokenColor } from "../../types";

export const dart: TokenColor[] = [
  {
    name: "Dart classes and types",
    scope: [
      "support.class.dart",
      "entity.name.type.dart",
      "entity.name.type.class.dart",
      "entity.name.type.enum.dart",
      "storage.type.dart",
      "storage.type.primitive.dart",
    ],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
  {
    name: "Dart variables and properties",
    scope: [
      "variable.other.dart",
      "variable.other.readwrite.dart",
      "variable.parameter.dart",
      "entity.name.variable.dart",
    ],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "Dart properties",
    scope: [
      "variable.other.property.dart",
      "variable.other.object.property.dart",
      "meta.property.dart",
    ],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "Dart constants and enum members",
    scope: [
      "constant.other.dart",
      "constant.numeric.dart",
      "variable.other.constant.dart",
      "variable.other.enummember.dart",
      "entity.name.variable.enum-member.dart",
      "constant.other.enum.dart",
      "support.constant.dart",
    ],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "Dart language constants",
    scope: ["constant.language.dart"],
    settings: { foreground: "#E8B89CAA" },
  },
  {
    name: "Dart functions and methods",
    scope: [
      "entity.name.function.dart",
      "support.function.dart",
      "meta.function-call.dart entity.name.function",
    ],
    settings: { foreground: withOpacity(palette.lavender, "high") },
  },
  {
    name: "Dart keywords",
    scope: [
      "keyword.dart",
      "keyword.control.dart",
      "keyword.operator.dart",
      "storage.modifier.dart",
    ],
    settings: { foreground: withOpacity(palette.sky, "medium") },
  },
  {
    name: "Dart strings",
    scope: [
      "string.dart",
      "string.quoted.dart",
      "string.interpolated.dart",
    ],
    settings: { foreground: "#E8B89CBB" },
  },
  {
    name: "Dart annotations",
    scope: [
      "meta.annotation.dart",
      "storage.type.annotation.dart",
      "punctuation.definition.annotation.dart",
    ],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "Dart source fallback",
    scope: [
      "source.dart",
      "meta.dart",
      "meta.block.dart",
      "meta.class.dart",
      "meta.function.dart",
    ],
    settings: { foreground: "#C0C8D8" },
  },
];
