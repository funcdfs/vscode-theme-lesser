/**
 * 核心语法高亮
 *
 * 字符串、注释、关键字、操作符等基础语法元素
 * 这些是所有语言共享的基础语法规则
 */

import { syntax, fg } from "../palette";
import type { TokenColor } from "../types";

export const core: TokenColor[] = [
  // === 字符串 ===
  {
    name: "字符串",
    scope: [
      "string",
      "punctuation.definition.string.begin",
      "punctuation.definition.string.end",
    ],
    settings: { foreground: syntax.string },
  },

  // === 注释 ===
  {
    name: "注释",
    scope:
      "comment, punctuation.definition.comment, comment.line.double-slash, comment.block.documentation",
    settings: {
      foreground: fg.disabled,
    },
  },
  {
    name: "注释中的链接",
    scope: "comment markup.link",
    settings: { foreground: syntax.text },
  },

  // === 关键字 ===
  {
    name: "关键字",
    scope: "keyword",
    settings: { foreground: syntax.keyword },
  },
  {
    name: "控制指令",
    scope: "keyword.control.directive",
    settings: { foreground: syntax.directive },
  },

  // === 操作符 ===
  {
    name: "操作符",
    scope: "keyword.operator",
    settings: { foreground: syntax.operator },
  },
  {
    name: "逻辑操作符",
    scope: "keyword.operator.logical",
    settings: { foreground: syntax.operator },
  },
  {
    name: "位操作符",
    scope: "keyword.operator.bitwise",
    settings: { foreground: syntax.operator },
  },
  {
    name: "算术操作符",
    scope: [
      "keyword.operator.arithmetic",
      "keyword.operator.comparison",
      "keyword.operator.decrement",
      "keyword.operator.increment",
      "keyword.operator.relational",
    ],
    settings: { foreground: syntax.operator },
  },
  {
    name: "通道操作符",
    scope: "keyword.operator.channel",
    settings: { foreground: syntax.operator },
  },
  {
    name: "复合赋值操作符",
    scope: "keyword.operator.assignment.compound",
    settings: { foreground: syntax.operator },
  },
  {
    name: "赋值操作符",
    scope: ["keyword.operator.assignment"],
    settings: { foreground: syntax.operator },
  },
  {
    name: "特殊操作符",
    scope: [
      "keyword.operator.expression.instanceof",
      "keyword.operator.new",
      "keyword.operator.ternary",
      "keyword.operator.optional",
      "keyword.operator.expression.keyof",
      "keyword.operator.expression.delete",
      "keyword.operator.expression.in",
      "keyword.operator.expression.of",
      "keyword.operator.expression.typeof",
      "keyword.operator.expression.void",
    ],
    settings: { foreground: syntax.keyword },
  },
  {
    name: "删除操作符",
    scope: "keyword.operator.delete",
    settings: { foreground: syntax.keyword },
  },
  {
    name: "模块操作符",
    scope: ["keyword.operator.module"],
    settings: { foreground: syntax.keyword },
  },

  // === 存储 ===
  {
    name: "存储",
    scope: ["storage", "token.storage"],
    settings: { foreground: syntax.keywordLower },
  },
  {
    name: "存储修饰符（引用/指针）",
    scope: ["storage.modifier.reference", "storage.modifier.pointer"],
    settings: { foreground: syntax.neutral },
  },

  // === 正则表达式 ===
  {
    name: "正则表达式",
    scope: "string.regexp",
    settings: { foreground: syntax.text },
  },
  {
    name: "正则表达式量词",
    scope: "keyword.operator.quantifier.regexp",
    settings: { foreground: syntax.constant },
  },

  // === 转义字符 ===
  {
    name: "转义字符",
    scope: "constant.character.escape",
    settings: { foreground: syntax.text },
  },

  // === 数字 ===
  {
    name: "数字",
    scope: "constant.numeric",
    settings: { foreground: syntax.operator },
  },

  // === 常量 ===
  {
    name: "常量定义标点",
    scope: "punctuation.definition.constant",
    settings: { foreground: syntax.constant },
  },
  {
    name: "其他符号常量",
    scope: "constant.other.symbol",
    settings: { foreground: syntax.text },
  },

  // === 嵌入 ===
  {
    name: "嵌入变量",
    scope: "variable.interpolation",
    settings: { foreground: syntax.text },
  },
  {
    name: "嵌入标点",
    scope:
      "punctuation.section.embedded.begin,punctuation.section.embedded.end",
    settings: { foreground: syntax.keyword },
  },
  {
    name: "字符串插值",
    scope: [
      "punctuation.definition.template-expression.begin",
      "punctuation.definition.template-expression.end",
      "punctuation.section.embedded",
    ],
    settings: { foreground: syntax.keyword },
  },
  {
    name: "模板表达式重置",
    scope: ["meta.template.expression"],
    settings: { foreground: syntax.text },
  },
  {
    name: "模板字面量标点",
    scope: ["punctuation.quasi.element"],
    settings: { foreground: syntax.keyword },
  },

  // === 无效 ===
  {
    name: "无效",
    scope:
      "invalid.illegal, invalid.illegal.bad-ampersand.html, invalid.broken, invalid.deprecated, invalid.unimplemented",
    settings: { foreground: syntax.text },
  },

  // === 诊断 ===
  {
    name: "诊断：信息",
    scope: "token.info-token",
    settings: { foreground: "#aaa0fa" },
  },
  {
    name: "诊断：警告",
    scope: "token.warn-token",
    settings: { foreground: syntax.constant },
  },
  {
    name: "诊断：错误",
    scope: "token.error-token",
    settings: { foreground: syntax.error },
  },
  {
    name: "诊断：调试",
    scope: "token.debug-token",
    settings: { foreground: syntax.keyword },
  },
];
