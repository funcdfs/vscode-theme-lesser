/**
 * Java 语言特定语法高亮
 *
 * Java 特有的语法规则
 */

import { syntax } from "../../palette";
import type { TokenColor } from "../../types";

export const java: TokenColor[] = [
  // === 类型 ===
  {
    name: "Java: 类型",
    scope: ["storage.type.annotation.java", "storage.type.object.array.java"],
    settings: { foreground: syntax.function },
  },

  // === 源代码 ===
  {
    name: "Java: 源代码",
    scope: "source.java",
    settings: { foreground: syntax.text },
  },

  // === 标点和块 ===
  {
    name: "Java: 标点和块",
    scope:
      "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
    settings: { foreground: syntax.text },
  },

  // === 方法元数据 ===
  {
    name: "Java: 方法元数据",
    scope: "meta.method.java",
    settings: { foreground: "#aaa0fa" },
  },

  // === 修饰符和类型 ===
  {
    name: "Java: 修饰符和类型",
    scope:
      "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
    settings: { foreground: syntax.function },
  },

  // === instanceof 操作符 ===
  {
    name: "Java: instanceof 操作符",
    scope: "keyword.operator.instanceof.java",
    settings: { foreground: syntax.keyword },
  },

  // === 变量名 ===
  {
    name: "Java: 变量名",
    scope: "meta.definition.variable.name.java",
    settings: { foreground: syntax.text },
  },

  // === 变量 ===
  {
    name: "Java: 变量",
    scope: "token.variable.parameter.java",
    settings: { foreground: syntax.text },
  },

  // === 导入 ===
  {
    name: "Java: 导入",
    scope: "import.storage.java",
    settings: { foreground: syntax.function },
  },

  // === 包关键字 ===
  {
    name: "Java: 包关键字",
    scope: "token.package.keyword",
    settings: { foreground: syntax.keyword },
  },

  // === 包标识符 ===
  {
    name: "Java: 包标识符",
    scope: "token.package",
    settings: { foreground: syntax.text },
  },

  // === 存储类型 ===
  {
    name: "Java: 存储类型",
    scope: "token.storage.type.java",
    settings: { foreground: syntax.function },
  },
];
