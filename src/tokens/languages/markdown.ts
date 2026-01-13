/**
 * Markdown 语言特定语法高亮
 *
 * 从语义角度设计 Markdown 专属样式：
 * - 标题：使用 class 色（结构性元素，类似类定义）
 * - 粗体：使用 constant 色（强调重要性，类似常量）
 * - 斜体：使用 keyword 色 + 斜体样式（语气强调，类似关键字）
 * - 链接：使用 function 色 + 透明度（可交互元素，类似函数调用）
 * - 代码：使用 string 色（字面量内容）
 * - 引用：使用 muted 前景色（次要内容）
 * - 列表：使用 operator 色（结构标记）
 */

import { syntax, fg, withAlpha } from "../../palette";
import type { TokenColor } from "../../types";

export const markdown: TokenColor[] = [
  // ============================================
  // 标题 - 结构性元素，使用 class 色系
  // ============================================
  {
    name: "Markdown: 标题内容",
    scope: [
      "entity.name.section.markdown",
      "markup.heading.markdown",
      "markup.heading.setext.1.markdown",
      "markup.heading.setext.2.markdown",
    ],
    settings: { foreground: syntax.class },
  },
  {
    name: "Markdown: 标题标点 (#)",
    scope: "punctuation.definition.heading.markdown",
    settings: { foreground: withAlpha(syntax.class, "50") },
  },

  // ============================================
  // 粗体 - 强调重要性，使用 constant 色
  // ============================================
  {
    name: "Markdown: 粗体内容",
    scope: "markup.bold.markdown",
    settings: {
      foreground: syntax.constant,
      fontStyle: "bold",
    },
  },
  {
    name: "Markdown: 粗体标点 (** 或 __)",
    scope: "punctuation.definition.bold.markdown",
    settings: { foreground: withAlpha(syntax.constant, "50") },
  },

  // ============================================
  // 斜体 - 语气强调，使用 keyword 色 + 斜体
  // ============================================
  {
    name: "Markdown: 斜体内容",
    scope: "markup.italic.markdown",
    settings: {
      foreground: syntax.keyword,
      fontStyle: "italic",
    },
  },
  {
    name: "Markdown: 斜体标点 (* 或 _)",
    scope: "punctuation.definition.italic.markdown",
    settings: { foreground: withAlpha(syntax.keyword, "50") },
  },

  // ============================================
  // 链接 - 可交互元素，使用 function 色 + 透明度
  // ============================================
  {
    name: "Markdown: 链接文本",
    scope: "string.other.link.title.markdown",
    settings: { foreground: syntax.function },
  },
  {
    name: "Markdown: 链接描述",
    scope: "string.other.link.description.markdown",
    settings: { foreground: syntax.function },
  },
  {
    name: "Markdown: 链接 URL",
    scope: [
      "markup.underline.link.markdown",
      "markup.underline.link.image.markdown",
    ],
    settings: { foreground: withAlpha(syntax.function, "50") },
  },
  {
    name: "Markdown: 链接标点 ([] 和 ())",
    scope: [
      "punctuation.definition.link.markdown",
      "punctuation.definition.link.title.begin.markdown",
      "punctuation.definition.link.title.end.markdown",
      "punctuation.definition.metadata.markdown",
    ],
    settings: { foreground: withAlpha(syntax.function, "35") },
  },

  // ============================================
  // 图片 - 类似链接，使用 directive 色区分
  // ============================================
  {
    name: "Markdown: 图片描述",
    scope: "string.other.link.description.title.markdown",
    settings: { foreground: syntax.directive },
  },
  {
    name: "Markdown: 图片标点 (!)",
    scope: "punctuation.definition.image.markdown",
    settings: { foreground: withAlpha(syntax.directive, "50") },
  },

  // ============================================
  // 代码 - 字面量内容，使用 string 色
  // ============================================
  {
    name: "Markdown: 行内代码",
    scope: [
      "markup.inline.raw.string.markdown",
      "markup.inline.raw.markdown",
    ],
    settings: { foreground: syntax.string },
  },
  {
    name: "Markdown: 代码块",
    scope: "markup.fenced_code.block.markdown",
    settings: { foreground: syntax.string },
  },
  {
    name: "Markdown: 代码标点 (` 或 ```)",
    scope: [
      "punctuation.definition.raw.markdown",
      "punctuation.definition.markdown",
    ],
    settings: { foreground: withAlpha(syntax.string, "50") },
  },
  {
    name: "Markdown: 代码块语言标识",
    scope: "fenced_code.block.language.markdown",
    settings: { foreground: syntax.property },
  },

  // ============================================
  // 列表 - 结构标记，使用 operator 色
  // ============================================
  {
    name: "Markdown: 无序列表标点 (- * +)",
    scope: [
      "punctuation.definition.list.begin.markdown",
      "beginning.punctuation.definition.list.markdown",
    ],
    settings: { foreground: syntax.operator },
  },
  {
    name: "Markdown: 有序列表数字",
    scope: "punctuation.definition.list.markdown",
    settings: { foreground: syntax.number },
  },

  // ============================================
  // 引用 - 次要内容，使用 muted 前景色
  // ============================================
  {
    name: "Markdown: 引用内容",
    scope: "markup.quote.markdown",
    settings: {
      foreground: fg.muted,
      fontStyle: "italic",
    },
  },
  {
    name: "Markdown: 引用标点 (>)",
    scope: "punctuation.definition.quote.begin.markdown",
    settings: { foreground: withAlpha(syntax.property, "50") },
  },

  // ============================================
  // 分隔线 - 使用 muted 色
  // ============================================
  {
    name: "Markdown: 分隔线 (--- 或 ***)",
    scope: "meta.separator.markdown",
    settings: { foreground: fg.muted },
  },

  // ============================================
  // 删除线 - 使用 self 色 + 删除线样式
  // ============================================
  {
    name: "Markdown: 删除线",
    scope: "markup.strikethrough.markdown",
    settings: {
      foreground: fg.disabled,
      fontStyle: "strikethrough",
    },
  },

  // ============================================
  // 表格 - 使用 property 色
  // ============================================
  {
    name: "Markdown: 表格",
    scope: [
      "meta.table.markdown",
      "markup.table.markdown",
    ],
    settings: { foreground: syntax.text },
  },
  {
    name: "Markdown: 表格分隔符 (|)",
    scope: [
      "punctuation.separator.table-cell.markdown",
      "punctuation.definition.table.markdown",
      "meta.table.header.markdown punctuation",
    ],
    settings: { foreground: withAlpha(syntax.property, "50") },
  },
  {
    name: "Markdown: 表格对齐标记 (---)",
    scope: [
      "punctuation.definition.table-cell-alignment.markdown",
      "punctuation.separator.table-row.markdown",
      "meta.table.header-separator.markdown",
    ],
    settings: { foreground: withAlpha(syntax.property, "35") },
  },
  {
    name: "Markdown: 表格表头",
    scope: [
      "meta.table.header.markdown",
      "markup.table.header.markdown",
    ],
    settings: {
      foreground: syntax.property,
      fontStyle: "bold",
    },
  },

  // ============================================
  // 脚注 - 使用 readwrite 色
  // ============================================
  {
    name: "Markdown: 脚注引用",
    scope: "meta.link.reference.markdown",
    settings: { foreground: syntax.readwrite },
  },
  {
    name: "Markdown: 脚注定义",
    scope: "meta.link.reference.def.markdown",
    settings: { foreground: withAlpha(syntax.readwrite, "50") },
  },

  // ============================================
  // 任务列表 - 使用 directive 色
  // ============================================
  {
    name: "Markdown: 任务列表复选框",
    scope: "markup.list.unnumbered.markdown meta.paragraph.markdown",
    settings: { foreground: syntax.text },
  },
];
