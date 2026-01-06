/**
 * Miscellaneous Language Token Colors
 */

import { palette, withOpacity } from "../../../palette";
import type { TokenColor } from "../../types";

export const misc: TokenColor[] = [
  // SQL
  {
    name: "SQL keywords",
    scope: ["keyword.other.DML.sql", "keyword.other.DDL.sql", "keyword.other.sql"],
    settings: { foreground: withOpacity(palette.sky, "medium") },
  },
  {
    name: "SQL functions",
    scope: "support.function.sql",
    settings: { foreground: withOpacity(palette.lavender, "high") },
  },

  // YAML
  {
    name: "YAML keys",
    scope: ["entity.name.tag.yaml", "support.type.property-name.yaml"],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "YAML anchors",
    scope: ["entity.name.type.anchor.yaml", "variable.other.alias.yaml"],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },

  // TOML
  {
    name: "TOML keys",
    scope: ["support.type.property-name.toml", "entity.name.tag.toml"],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },

  // INI
  {
    name: "INI keys",
    scope: "keyword.other.definition.ini",
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },

  // Shell
  {
    name: "Shell variables",
    scope: ["variable.other.normal.shell", "variable.other.special.shell"],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "Shell commands",
    scope: "support.function.builtin.shell",
    settings: { foreground: withOpacity(palette.lavender, "high") },
  },

  // Makefile
  {
    name: "Makefile targets",
    scope: "entity.name.function.target.makefile",
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
  {
    name: "Makefile variables",
    scope: "variable.other.makefile",
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },

  // Dockerfile
  {
    name: "Dockerfile keywords",
    scope: "keyword.other.special-method.dockerfile",
    settings: { foreground: withOpacity(palette.sky, "medium") },
  },

  // GraphQL
  {
    name: "GraphQL types",
    scope: ["support.type.graphql", "entity.name.type.graphql"],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },
  {
    name: "GraphQL fields",
    scope: "variable.graphql",
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "GraphQL directives",
    scope: "entity.name.function.directive.graphql",
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },

  // Java
  {
    name: "Java annotations",
    scope: ["storage.type.annotation.java", "punctuation.definition.annotation.java"],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },

  // C#
  {
    name: "C# attributes",
    scope: ["meta.attribute.csharp", "entity.name.type.attribute.csharp"],
    settings: { foreground: withOpacity(palette.lavender, "medium") },
  },

  // PHP
  {
    name: "PHP variables",
    scope: ["variable.other.php", "punctuation.definition.variable.php"],
    settings: { foreground: "#C0C8D8" },
  },

  // Ruby
  {
    name: "Ruby symbols",
    scope: ["constant.other.symbol.ruby", "constant.other.symbol.hashkey.ruby"],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "Ruby interpolation",
    scope: ["punctuation.section.interpolation.ruby", "meta.embedded.line.ruby"],
    settings: { foreground: palette.mauve },
  },

  // Lua
  {
    name: "Lua",
    scope: ["variable.other.lua", "support.function.lua"],
    settings: { foreground: "#C0C8D8" },
  },

  // Perl
  {
    name: "Perl",
    scope: ["variable.other.readwrite.perl", "punctuation.definition.variable.perl"],
    settings: { foreground: "#C0C8D8" },
  },

  // Haskell
  {
    name: "Haskell",
    scope: ["entity.name.function.haskell", "entity.name.type.haskell"],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },

  // Scala
  {
    name: "Scala",
    scope: ["entity.name.class.scala", "storage.type.scala"],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },

  // Kotlin
  {
    name: "Kotlin",
    scope: ["entity.name.type.class.kotlin", "storage.type.kotlin"],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },

  // Swift
  {
    name: "Swift",
    scope: ["entity.name.type.swift", "storage.type.swift"],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },

  // Elixir
  {
    name: "Elixir",
    scope: ["entity.name.type.module.elixir", "variable.other.constant.elixir"],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },

  // Clojure
  {
    name: "Clojure",
    scope: ["entity.name.function.clojure", "constant.keyword.clojure"],
    settings: { foreground: withOpacity(palette.lavender, "high") },
  },

  // F#
  {
    name: "F#",
    scope: ["entity.name.type.fsharp", "entity.name.function.fsharp"],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },

  // OCaml
  {
    name: "OCaml",
    scope: ["entity.name.type.ocaml", "entity.name.function.ocaml"],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },

  // Zig
  {
    name: "Zig",
    scope: ["entity.name.type.zig", "entity.name.function.zig", "storage.type.zig"],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },

  // Nim
  {
    name: "Nim",
    scope: ["entity.name.type.nim", "entity.name.function.nim"],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },

  // Julia
  {
    name: "Julia",
    scope: ["entity.name.type.julia", "entity.name.function.julia"],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },

  // R
  {
    name: "R",
    scope: ["entity.name.function.r", "variable.other.r"],
    settings: { foreground: withOpacity(palette.lavender, "high") },
  },

  // MATLAB
  {
    name: "MATLAB",
    scope: ["entity.name.function.matlab", "variable.other.matlab"],
    settings: { foreground: withOpacity(palette.lavender, "high") },
  },

  // Terraform
  {
    name: "Terraform",
    scope: [
      "entity.name.type.terraform",
      "variable.other.terraform",
      "support.type.property-name.terraform",
    ],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },

  // Ansible
  {
    name: "Ansible",
    scope: ["entity.name.tag.ansible", "support.type.property-name.ansible"],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },

  // Protobuf
  {
    name: "Protobuf",
    scope: ["entity.name.type.protobuf", "entity.name.class.message.protobuf"],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },

  // Thrift
  {
    name: "Thrift",
    scope: ["entity.name.type.thrift", "entity.name.function.thrift"],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },

  // Prisma
  {
    name: "Prisma",
    scope: ["entity.name.type.prisma", "entity.name.function.attribute.prisma"],
    settings: { foreground: withOpacity(palette.teal, "medium") },
  },

  // Meta
  {
    name: "Meta path",
    scope: ["meta.path", "meta.qualified-name"],
    settings: { foreground: "#C0C8D8" },
  },
  {
    name: "Meta function-call",
    scope: ["meta.function-call", "meta.method-call"],
    settings: { foreground: "#C0C8D8" },
  },
  {
    name: "Meta mapping key",
    scope: ["meta.mapping.key", "meta.object.member"],
    settings: { foreground: withOpacity(palette.yellow, "low") },
  },
  {
    name: "Embedded source",
    scope: ["meta.embedded", "source.embedded"],
    settings: { foreground: "#C0C8D8" },
  },

  // Invalid
  {
    name: "Invalid",
    scope: ["invalid", "invalid.illegal", "invalid.deprecated"],
    settings: { foreground: withOpacity(palette.maroon, "medium") },
  },
];
