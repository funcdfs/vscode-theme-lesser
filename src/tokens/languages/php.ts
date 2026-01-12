/**
 * PHP 语言特定语法高亮
 *
 * PHP 特有的语法规则
 */

import { syntax } from "../../palette";
import type { TokenColor } from "../../types";

export const php: TokenColor[] = [
  // === 类名 ===
  {
    name: "PHP: 类名",
    scope: "variable.other.class.php",
    settings: { foreground: syntax.text },
  },

  // === 命名空间 ===
  {
    name: "PHP: Use 语句",
    scope:
      "support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php",
    settings: { foreground: syntax.function },
  },

  // === 错误抑制 ===
  {
    name: "PHP: 错误抑制",
    scope: "keyword.operator.error-control.php",
    settings: { foreground: syntax.keyword },
  },

  // === instanceof 操作符 ===
  {
    name: "PHP: instanceof 操作符",
    scope: "keyword.operator.type.php",
    settings: { foreground: syntax.keyword },
  },

  // === 数组索引 ===
  {
    name: "PHP: 数组索引开始（双引号）",
    scope: "punctuation.section.array.begin.php",
    settings: { foreground: syntax.text },
  },
  {
    name: "PHP: 数组索引结束（双引号）",
    scope: "punctuation.section.array.end.php",
    settings: { foreground: syntax.text },
  },

  // === 非法类型提示 ===
  {
    name: "PHP: 非法非空类型提示",
    scope: "invalid.illegal.non-null-typehinted.php",
    settings: { foreground: syntax.error },
  },

  // === 类型 ===
  {
    name: "PHP: 类型",
    scope:
      "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
    settings: { foreground: syntax.function },
  },

  // === 函数调用 ===
  {
    name: "PHP: 函数调用",
    scope:
      "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
    settings: { foreground: "#aaa0fa" },
  },

  // === 函数/块标点 ===
  {
    name: "PHP: 函数/块标点",
    scope:
      "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
    settings: { foreground: syntax.text },
  },

  // === 常量 ===
  {
    name: "PHP: 常量",
    scope:
      "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
    settings: { foreground: syntax.constant },
  },

  // === Goto ===
  {
    name: "PHP: Goto",
    scope: "entity.name.goto-label.php,support.other.php",
    settings: { foreground: "#aaa0fa" },
  },

  // === 逻辑/位操作符 ===
  {
    name: "PHP: 逻辑/位操作符",
    scope:
      "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
    settings: { foreground: syntax.text },
  },

  // === 正则操作符 ===
  {
    name: "PHP: 正则操作符",
    scope: "keyword.operator.regexp.php",
    settings: { foreground: syntax.keyword },
  },

  // === 比较操作符 ===
  {
    name: "PHP: 比较操作符",
    scope: "keyword.operator.comparison.php",
    settings: { foreground: syntax.text },
  },

  // === Heredoc/Nowdoc ===
  {
    name: "PHP: Heredoc/Nowdoc",
    scope: "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
    settings: { foreground: syntax.keyword },
  },

  // === Laravel Blade ===
  {
    name: "Laravel Blade 标签和 @",
    scope: [
      "entity.name.tag.laravel-blade",
      "support.constant.laravel-blade",
    ],
    settings: { foreground: syntax.keyword },
  },
];
