/**
 * C/C++ 语言特定语法高亮
 *
 * C 和 C++ 特有的语法规则，包括布尔字面量、操作符、this 等
 */

import { syntax } from "../../palette";
import type { TokenColor } from "../../types";

export const cpp: TokenColor[] = [
  // === 布尔字面量 ===
  {
    name: "C++: 布尔字面量",
    scope: ["constant.language.false.cpp", "constant.language.true.cpp"],
    settings: { foreground: "#82d2ce" },
  },

  // === this ===
  {
    name: "C++: this",
    scope: "variable.language.this.cpp",
    settings: { foreground: "#82d2ce" },
  },

  // === 函数 ===
  {
    name: "C/C++: 函数",
    scope: "meta.function.c,meta.function.cpp",
    settings: { foreground: syntax.text },
  },

  // === 块标点 ===
  {
    name: "C/C++: 块标点",
    scope:
      "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
    settings: { foreground: syntax.text },
  },

  // === 操作符 ===
  {
    name: "C: 操作符赋值",
    scope:
      "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
    settings: { foreground: syntax.keyword },
  },
  {
    name: "C/C++: 其他标点",
    scope: "punctuation.separator.c,punctuation.separator.cpp",
    settings: { foreground: syntax.keyword },
  },
  {
    name: "C/C++: sizeof 操作符",
    scope: "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
    settings: { foreground: syntax.keyword },
  },

  // === POSIX 类型 ===
  {
    name: "C/C++: POSIX 保留类型",
    scope: "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
    settings: { foreground: syntax.text },
  },

  // === 控制指令 ===
  {
    name: "关键字控制指令",
    scope: "keyword.control.directive.include.cpp",
    settings: { foreground: syntax.directive },
  },
];
