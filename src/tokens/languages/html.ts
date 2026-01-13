/**
 * HTML/Vue 语言特定语法高亮
 *
 * HTML 和 Vue 特有的语法规则
 */

import { syntax } from "../../palette";
import type { TokenColor } from "../../types";

export const html: TokenColor[] = [
  // === 标签标点 ===
  {
    name: "HTML: 标签标点",
    scope: "punctuation.definition.tag",
    settings: { foreground: syntax.tag },
  },

  // === 标签 ===
  {
    name: "Meta: 标签",
    scope: "meta.tag",
    settings: { foreground: syntax.tagName },
  },
  {
    name: "HTML: 标签",
    scope: ["entity.name.tag.html"],
    settings: { foreground: syntax.class },
  },

  // === Vue 标签 ===
  {
    name: "Vue: 标签",
    scope: [
      "entity.name.tag.template",
      "entity.name.tag.script",
      "entity.name.tag.style",
    ],
    settings: { foreground: syntax.property },
  },

  // === 实体 ===
  {
    name: "HTML/Pug 转义字符和实体",
    scope: ["constant.character.entity"],
    settings: { foreground: syntax.text },
  },

  // === DOM ===
  {
    name: "DOM: 对象",
    scope: "support.type.object.dom",
    settings: { foreground: syntax.text },
  },
  {
    name: "DOM: 变量/属性",
    scope: "support.variable.dom,support.variable.property.dom",
    settings: { foreground: syntax.text },
  },

  // === Edge 支持常量 ===
  {
    name: "支持常量: Edge",
    scope: "support.constant.edge",
    settings: { foreground: syntax.keyword },
  },
];
