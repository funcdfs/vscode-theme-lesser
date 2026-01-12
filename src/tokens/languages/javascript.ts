/**
 * JavaScript/TypeScript 语言特定语法高亮
 *
 * JavaScript 和 TypeScript 特有的语法规则
 */

import { syntax } from "../../palette";
import type { TokenColor } from "../../types";

export const javascript: TokenColor[] = [
  // === 键值分隔符 ===
  {
    name: "JavaScript/TypeScript: 键值分隔符",
    scope: "punctuation.separator.key-value",
    settings: { foreground: syntax.text },
  },

  // === 导入操作符 ===
  {
    name: "JavaScript/TypeScript: 导入操作符",
    scope: "keyword.operator.expression.import",
    settings: { foreground: "#aaa0fa" },
  },

  // === Math 对象 ===
  {
    name: "JavaScript/TypeScript: Math",
    scope: "support.constant.math",
    settings: { foreground: syntax.function },
  },
  {
    name: "JavaScript/TypeScript: Math 属性",
    scope: "support.constant.property.math",
    settings: { foreground: syntax.constant },
  },

  // === Console 对象 ===
  {
    name: "JavaScript/TypeScript: Console 对象",
    scope: "support.type.object.console",
    settings: { foreground: syntax.text },
  },
  {
    name: "JavaScript: Console 函数",
    scope: "entity.name.function.js,support.function.console.js",
    settings: { foreground: syntax.number },
  },

  // === Process 属性 ===
  {
    name: "JavaScript/TypeScript: Process 属性",
    scope: "support.variable.property.process",
    settings: { foreground: syntax.constant },
  },

  // === 变量 ===
  {
    name: "JavaScript: 变量（读写）",
    scope:
      "meta.object-literal.key,support.variable.object.process,support.variable.object.node",
    settings: { foreground: syntax.text },
  },

  // === 复合赋值操作符 ===
  {
    name: "复合赋值操作符 js/ts",
    scope:
      "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
    settings: { foreground: syntax.text },
  },

  // === TypeScript 原始类型 ===
  {
    name: "TypeScript: 原始/内置类型",
    scope:
      "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
    settings: { foreground: syntax.keyword },
  },

  // === Flow 类型 ===
  {
    name: "JS Flowtype",
    scope: ["support.type.type.flowtype"],
    settings: { foreground: "#aaa0fa" },
  },
  {
    name: "JS Flow",
    scope: ["support.type.primitive"],
    settings: { foreground: syntax.function },
  },

  // === 类属性 ===
  {
    name: "JS 类属性",
    scope: ["meta.property.object"],
    settings: { foreground: syntax.text },
  },

  // === 函数参数 ===
  {
    name: "JS 函数参数",
    scope: ["variable.parameter.function.js"],
    settings: { foreground: syntax.text },
  },

  // === 模板字面量 ===
  {
    name: "JS 模板字面量标点",
    scope: [
      "keyword.other.template.begin",
      "keyword.other.template.end",
      "keyword.other.substitution.begin",
      "keyword.other.substitution.end",
    ],
    settings: { foreground: syntax.string },
  },

  // === 斜体属性 ===
  {
    name: "JavaScript/TypeScript: 斜体",
    scope:
      "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
    settings: { fontStyle: "italic" },
  },
];
