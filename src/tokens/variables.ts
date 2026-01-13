/**
 * 变量语法高亮
 *
 * 参数、语言变量、常量等变量相关的语法规则
 */

import { syntax } from "../palette";
import type { TokenColor } from "../types";

export const variables: TokenColor[] = [
  // === 变量 ===
  {
    name: "变量",
    scope: ["variable", "variable.c"],
    settings: { foreground: syntax.text },
  },
  {
    name: "语言变量（this/self）",
    scope: "variable.language",
    settings: { foreground: syntax.self },
  },
  {
    name: "其他常量变量",
    scope: "variable.other.constant",
    settings: { foreground: syntax.property },
  },
  {
    name: "读写变量",
    scope: "variable.other.readwrite",
    settings: { foreground: syntax.text },
  },

  // === 参数 ===
  {
    name: "函数参数",
    scope: "variable.parameter.function",
    settings: { foreground: syntax.text },
  },
  {
    name: "函数参数（通用）",
    scope: ["function.parameter", "function.parameter.ruby", "function.parameter.cs"],
    settings: { foreground: syntax.text },
  },

  // === 属性 ===
  {
    name: "属性",
    scope: [
      "support.variable.property",
      "variable.other.property",
      "variable.other.property.ts",
      "meta.definition.property.ts",
    ],
    settings: { foreground: syntax.property },
  },

  // === 命名空间 ===
  {
    name: "命名空间",
    scope: "entity.name.namespace",
    settings: { foreground: syntax.neutral },
  },
  {
    name: "命名空间类型",
    scope: "entity.name.type.namespace",
    settings: { foreground: syntax.class },
  },
];
