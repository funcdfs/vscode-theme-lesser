/**
 * 类型语法高亮
 *
 * 类、命名空间、存储类型等类型相关的语法规则
 */

import { syntax } from "../palette";
import type { TokenColor } from "../types";

export const types: TokenColor[] = [
  // === 类 ===
  {
    name: "类",
    scope: "support.class, entity.name.type.class",
    settings: { foreground: syntax.class },
  },
  {
    name: "类名",
    scope: [
      "entity.name.class",
      "variable.other.class.js",
      "variable.other.class.ts",
      "entity.name.class.identifier.namespace.type",
    ],
    settings: { foreground: syntax.class },
  },
  {
    name: "继承类",
    scope: "entity.other.inherited-class",
    settings: { foreground: syntax.class },
  },

  // === 类型 ===
  {
    name: "类型名",
    scope: "entity.name.type",
    settings: { foreground: syntax.class },
  },

  // === 块作用域 ===
  {
    name: "块作用域",
    scope: "block.scope.end,block.scope.begin",
    settings: { foreground: syntax.text },
  },
  {
    name: "方括号",
    scope: "meta.brace.square",
    settings: { foreground: syntax.text },
  },
];
