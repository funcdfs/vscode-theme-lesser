/**
 * 标记语法高亮
 *
 * Markdown、Diff 等标记语言的语法规则
 */

import { syntax, fg } from "../palette";
import type { TokenColor } from "../types";

export const markup: TokenColor[] = [
  // === Markdown 标题 ===
  {
    name: "标题",
    scope: "markup.heading",
    settings: { foreground: syntax.text },
  },
  {
    name: "标题标点",
    scope: "markup.heading punctuation.definition.heading, entity.name.section",
    settings: { foreground: "#aaa0fa" },
  },
  {
    name: "Markdown 标题",
    scope: "entity.name.section.markdown",
    settings: { foreground: syntax.text },
  },
  {
    name: "Markdown 标题标点",
    scope: "punctuation.definition.heading.markdown",
    settings: { foreground: syntax.text },
  },
  {
    name: "Markdown Setext 标题",
    scope: "markup.heading.setext",
    settings: { foreground: syntax.text },
  },
  {
    name: "Markdown Setext 标题（CS）",
    scope: [
      "entity.name.label.cs",
      "markup.heading.setext.1.markdown",
      "markup.heading.setext.2.markdown",
    ],
    settings: { foreground: syntax.text },
  },

  // === Markdown 格式 ===
  {
    name: "Markdown 粗体",
    scope: "markup.bold,todo.bold",
    settings: { foreground: syntax.constant },
  },
  {
    name: "Markdown 粗体标点",
    scope: "punctuation.definition.bold",
    settings: { foreground: syntax.function },
  },
  {
    name: "Markdown 粗体标点（定义）",
    scope: "punctuation.definition.bold.markdown",
    settings: { foreground: syntax.constant },
  },
  {
    name: "Markdown 斜体",
    scope: "markup.italic, punctuation.definition.italic,todo.emphasis",
    settings: { foreground: syntax.keyword },
  },
  {
    name: "Markdown 斜体样式",
    scope: "markup.italic.markdown",
    settings: { fontStyle: "italic" },
  },
  {
    name: "Markdown 强调",
    scope: "emphasis md",
    settings: { foreground: syntax.keyword },
  },

  // === Markdown 代码 ===
  {
    name: "Markdown 行内代码",
    scope: "markup.inline.raw.markdown, markup.inline.raw.string.markdown",
    settings: { foreground: syntax.string },
  },

  // === Markdown 列表 ===
  {
    name: "Markdown 列表标点",
    scope: [
      "punctuation.definition.list.begin.markdown",
      "punctuation.definition.list.markdown",
      "beginning.punctuation.definition.list.markdown",
    ],
    settings: { foreground: syntax.text },
  },

  // === Markdown 字符串 ===
  {
    name: "Markdown 字符串标点",
    scope: [
      "punctuation.definition.string.begin.markdown",
      "punctuation.definition.string.end.markdown",
      "punctuation.definition.metadata.markdown",
    ],
    settings: { foreground: syntax.text },
  },
  {
    name: "Markdown 元数据标点",
    scope: "punctuation.definition.metadata.markdown",
    settings: { foreground: syntax.text },
  },

  // === Markdown 链接 ===
  {
    name: "Markdown 链接下划线",
    scope:
      "markup.underline.link.markdown,markup.underline.link.image.markdown",
    settings: { foreground: syntax.keyword },
  },
  {
    name: "Markdown 链接标题",
    scope:
      "string.other.link.title.markdown,string.other.link.description.markdown",
    settings: { foreground: "#aaa0fa" },
  },

  // === Markdown 引用 ===
  {
    name: "Markdown 引用",
    scope: "markup.quote.markdown",
    settings: { foreground: fg.disabled },
  },

  // === Diff ===
  {
    name: "Diff 修改",
    scope: "markup.changed.diff",
    settings: { foreground: syntax.function },
  },
  {
    name: "Diff 头部",
    scope:
      "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
    settings: { foreground: "#aaa0fa" },
  },
  {
    name: "Diff 插入",
    scope: "markup.inserted.diff",
    settings: { foreground: syntax.string },
  },
  {
    name: "Diff 删除",
    scope: "markup.deleted.diff",
    settings: { foreground: syntax.text },
  },
];
