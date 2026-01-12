/**
 * 函数语法高亮
 *
 * 函数定义、调用、支持函数等函数相关的语法规则
 */

import { syntax } from "../palette";
import type { TokenColor } from "../types";

export const functions: TokenColor[] = [
  // === 函数 ===
  {
    name: "函数",
    scope: [
      "entity.name.function",
      "meta.require",
      "support.function",
      "variable.function",
    ],
    settings: { foreground: syntax.function },
  },
  {
    name: "支持函数",
    scope: "support.function",
    settings: { foreground: syntax.function },
  },
  {
    name: "特殊方法",
    scope: "keyword.other.special-method",
    settings: { foreground: "#aaa0fa" },
  },
  {
    name: "函数花括号",
    scope: "function.brace",
    settings: { foreground: syntax.text },
  },

  // === 模块 ===
  {
    name: "模块类型名",
    scope: [
      "entity.name.type.module",
      "support.module.node",
      "support.type.object.module",
    ],
    settings: { foreground: syntax.class },
  },
];
