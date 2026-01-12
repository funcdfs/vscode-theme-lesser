/**
 * 标记语法高亮
 *
 * 通用标记语言规则（非 Markdown 特定）和 Diff 语法规则
 * Markdown 特定规则已移至 src/tokens/languages/markdown.ts
 */

import { syntax, fg } from "../palette";
import type { TokenColor } from "../types";

export const markup: TokenColor[] = [
  // === 通用标记规则 ===
  {
    name: "通用标题",
    scope: "markup.heading",
    settings: { foreground: syntax.class },
  },
  {
    name: "通用标题标点",
    scope: "markup.heading punctuation.definition.heading, entity.name.section",
    settings: { foreground: syntax.property },
  },
  {
    name: "通用粗体",
    scope: "markup.bold, todo.bold",
    settings: {
      foreground: syntax.constant,
      fontStyle: "bold",
    },
  },
  {
    name: "通用斜体",
    scope: "markup.italic, todo.emphasis",
    settings: {
      foreground: syntax.keyword,
      fontStyle: "italic",
    },
  },
  {
    name: "通用行内代码",
    scope: "markup.inline.raw",
    settings: { foreground: syntax.string },
  },
  {
    name: "通用引用",
    scope: "markup.quote",
    settings: {
      foreground: fg.muted,
      fontStyle: "italic",
    },
  },
  {
    name: "通用链接",
    scope: "markup.underline.link",
    settings: { foreground: syntax.function },
  },
  {
    name: "通用列表标点",
    scope: "markup.list punctuation.definition.list",
    settings: { foreground: syntax.operator },
  },

  // === Diff ===
  {
    name: "Diff 修改",
    scope: "markup.changed.diff",
    settings: { foreground: syntax.function },
  },
  {
    name: "Diff 头部",
    scope: [
      "meta.diff.header.from-file",
      "meta.diff.header.to-file",
      "punctuation.definition.from-file.diff",
      "punctuation.definition.to-file.diff",
    ],
    settings: { foreground: syntax.property },
  },
  {
    name: "Diff 插入",
    scope: "markup.inserted.diff",
    settings: { foreground: syntax.directive },
  },
  {
    name: "Diff 删除",
    scope: "markup.deleted.diff",
    settings: { foreground: syntax.self },
  },
];
