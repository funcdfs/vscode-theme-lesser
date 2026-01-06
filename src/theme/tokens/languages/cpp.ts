/**
 * C/C++ Token Colors
 */

import { palette, withOpacity } from "../../../palette";
import type { TokenColor } from "../../types";

export const cpp: TokenColor[] = [
  {
    name: "C++ namespace",
    scope: ["entity.name.namespace.cpp", "entity.name.scope-resolution.cpp"],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "C++ class and type names",
    scope: [
      "entity.name.type.cpp",
      "entity.name.type.class.cpp",
      "entity.name.type.class.templated.cpp",
      "storage.type.cpp",
      "storage.type.built-in.cpp",
      "storage.type.built-in.primitive.cpp",
    ],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
  {
    name: "C++ struct names",
    scope: [
      "entity.name.type.struct.cpp",
      "meta.head.struct.cpp entity.name.type",
    ],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
  {
    name: "C++ enum names",
    scope: [
      "entity.name.type.enum.cpp",
      "meta.head.enum.cpp entity.name.type",
    ],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
  {
    name: "C++ template types",
    scope: [
      "entity.name.type.template.cpp",
      "storage.type.template.cpp",
      "storage.type.template.argument.cpp",
    ],
    settings: { foreground: withOpacity(palette.teal, "subtle") },
  },
  {
    name: "C++ function names",
    scope: [
      "entity.name.function.cpp",
      "entity.name.function.templated.cpp",
      "entity.name.function.definition.cpp",
      "meta.function.definition.cpp entity.name.function",
    ],
    settings: { foreground: withOpacity(palette.lavender, "high") },
  },
  {
    name: "C++ member functions",
    scope: [
      "entity.name.function.member.cpp",
      "entity.name.function.member.static.cpp",
      "entity.name.function.call.cpp",
    ],
    settings: { foreground: withOpacity(palette.lavender, "high") },
  },
  {
    name: "C++ operator overloads",
    scope: [
      "entity.name.function.operator.cpp",
      "entity.name.function.operator.member.cpp",
      "keyword.operator.overload.cpp",
    ],
    settings: { foreground: withOpacity(palette.lavender, "high") },
  },
  {
    name: "C++ preprocessor macros",
    scope: [
      "entity.name.function.preprocessor.cpp",
      "meta.preprocessor.macro.cpp entity.name.function",
    ],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },
  {
    name: "C++ preprocessor directives",
    scope: [
      "keyword.control.directive.cpp",
      "meta.preprocessor.cpp",
      "keyword.control.directive.include.cpp",
      "keyword.control.directive.define.cpp",
      "keyword.control.directive.conditional.cpp",
    ],
    settings: { foreground: withOpacity(palette.sky, "medium") },
  },
  {
    name: "C++ include paths",
    scope: [
      "string.quoted.other.lt-gt.include.cpp",
      "string.quoted.double.include.cpp",
    ],
    settings: { foreground: "#90A8E8" },
  },
  {
    name: "C++ variables and parameters",
    scope: [
      "variable.other.cpp",
      "variable.other.local.cpp",
      "variable.parameter.cpp",
    ],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "C++ member fields",
    scope: [
      "variable.other.property.cpp",
      "variable.other.member.cpp",
      "variable.other.object.access.cpp",
    ],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "C++ static members",
    scope: [
      "variable.other.property.static.cpp",
      "variable.other.object.property.cpp",
    ],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "C++ global variables",
    scope: ["variable.other.global.cpp"],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "C++ enum members",
    scope: ["variable.other.enummember.cpp", "constant.other.enum.cpp"],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "C++ keywords",
    scope: [
      "keyword.control.cpp",
      "keyword.other.cpp",
      "storage.modifier.cpp",
    ],
    settings: { foreground: withOpacity(palette.sky, "medium") },
  },
  {
    name: "C++ new/delete operators",
    scope: [
      "keyword.operator.new.cpp",
      "keyword.operator.delete.cpp",
      "keyword.operator.wordlike.cpp",
    ],
    settings: { foreground: withOpacity(palette.sky, "medium") },
  },
  {
    name: "C++ this pointer",
    scope: ["variable.language.this.cpp"],
    settings: { foreground: withOpacity(palette.green, "medium") },
  },
  {
    name: "C++ constants",
    scope: ["constant.language.cpp", "constant.numeric.cpp"],
    settings: { foreground: "#E8B89CAA" },
  },
  {
    name: "C++ strings",
    scope: ["string.quoted.double.cpp", "string.quoted.single.cpp"],
    settings: { foreground: "#E8B89CBB" },
  },
  {
    name: "C++ comments",
    scope: ["comment.line.double-slash.cpp", "comment.block.cpp"],
    settings: { foreground: "#7A7595" },
  },
  {
    name: "C++ labels",
    scope: ["entity.name.label.cpp", "entity.name.goto-label.cpp"],
    settings: { foreground: "#C0C8D8DD" },
  },
];
