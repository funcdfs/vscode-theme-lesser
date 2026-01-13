/**
 * Python 语言特定语法高亮
 *
 * Python 特有的语法规则，包括装饰器、类型提示、self 参数等
 */

import { syntax } from "../../palette";
import type { TokenColor } from "../../types";

export const python: TokenColor[] = [
  // === 二进制字符串 ===
  {
    name: "Python: 二进制字符串（单引号）",
    scope: "string.quoted.binary.single.python",
    settings: { foreground: syntax.directive },
  },

  // === 省略号 ===
  {
    name: "Python: 省略号",
    scope: "constant.other.ellipsis.python",
    settings: { foreground: syntax.neutral },
  },

  // === 魔术变量 ===
  {
    name: "Python: 魔术变量",
    scope: "support.variable.magic.python",
    settings: { foreground: syntax.text },
  },

  // === 标点 ===
  {
    name: "Python: 参数标点",
    scope:
      "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
    settings: { foreground: syntax.text },
  },
  {
    name: "Python: 块标点",
    scope:
      "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
    settings: { foreground: syntax.text },
  },

  // === Self 参数 ===
  {
    name: "Python: Self 参数",
    scope: "variable.parameter.function.language.special.self.python",
    settings: { foreground: syntax.function },
  },

  // === 类型 ===
  {
    name: "Python: 类型",
    scope: "support.type.python",
    settings: { foreground: syntax.keyword },
  },

  // === 逻辑操作符 ===
  {
    name: "Python: 逻辑操作符",
    scope: "keyword.operator.logical.python",
    settings: { foreground: syntax.keyword },
  },

  // === 函数参数 ===
  {
    name: "Python: 函数参数",
    scope: [
      "variable.parameter.function.python",
      "variable.parameter.function.language.python",
    ],
    settings: { foreground: syntax.constant },
  },

  // === 函数调用 ===
  {
    name: "Python: 函数调用（通用）",
    scope: "meta.function-call.generic.python",
    settings: { foreground: syntax.property },
  },

  // === 字符串占位符 ===
  {
    name: "Python: 字符串占位符",
    scope: "constant.character.format.placeholder.other.python",
    settings: { foreground: syntax.constant },
  },

  // === 装饰器 ===
  {
    name: "Python: 装饰器",
    scope: [
      "meta.function.decorator.python",
      "punctuation.definition.decorator.python",
      "entity.name.function.decorator.python",
    ],
    settings: { foreground: syntax.directive },
  },
  {
    name: "Python: 装饰器支持",
    scope:
      "support.token.decorator.python,meta.function.decorator.identifier.python",
    settings: { foreground: syntax.text },
  },

  // === 关键字控制 ===
  {
    name: "Python: 关键字控制",
    scope: "keyword.control.import.python,keyword.control.flow.python",
    settings: { foreground: syntax.keyword },
  },
];
