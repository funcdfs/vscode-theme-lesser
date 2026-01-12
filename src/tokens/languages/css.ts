/**
 * CSS/SCSS/LESS 语言特定语法高亮
 *
 * CSS、SCSS、LESS 特有的语法规则
 */

import { syntax } from "../../palette";
import type { TokenColor } from "../../types";

export const css: TokenColor[] = [
  // === 操作符 ===
  {
    name: "CSS/SCSS/LESS: 操作符",
    scope: "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
    settings: { foreground: syntax.text },
  },

  // === 标准颜色名 ===
  {
    name: "CSS: 标准颜色名",
    scope: [
      "support.constant.color.w3c-standard-color-name.css",
      "support.constant.color.w3c-standard-color-name.scss",
    ],
    settings: { foreground: syntax.constant },
  },

  // === 逗号 ===
  {
    name: "CSS: 逗号",
    scope: "punctuation.separator.list.comma.css",
    settings: { foreground: syntax.text },
  },

  // === 属性名 ===
  {
    name: "CSS: 属性名",
    scope: "meta.property-name.css",
    settings: { foreground: syntax.class },
  },

  // === 属性值 ===
  {
    name: "CSS: 属性值",
    scope: "meta.property-value.css",
    settings: { foreground: syntax.string },
  },

  // === 颜色常量 ===
  {
    name: "CSS: 颜色常量",
    scope: "constant.other.color",
    settings: { foreground: syntax.number },
  },

  // === 属性 ===
  {
    name: "属性",
    scope: "entity.other.attribute-name",
    settings: { foreground: "#aaa0fa" },
  },
  {
    name: "属性 ID",
    scope: "entity.other.attribute-name.id",
    settings: { foreground: "#aaa0fa" },
  },
  {
    name: "CSS: 属性类",
    scope: "entity.other.attribute-name.class.css",
    settings: { foreground: syntax.constant },
  },

  // === 选择器 ===
  {
    name: "选择器",
    scope: "meta.selector",
    settings: { foreground: syntax.keyword },
  },

  // === 单位 ===
  {
    name: "单位",
    scope: "keyword.other.unit",
    settings: { foreground: syntax.number },
  },

  // === 控制元素 ===
  {
    name: "控制元素",
    scope: "control.elements, keyword.operator.less",
    settings: { foreground: syntax.constant },
  },

  // === RGB 值 ===
  {
    name: "RGB 值",
    scope: "rgb-value",
    settings: { foreground: syntax.text },
  },
  {
    name: "RGB 值（内联）",
    scope: "inline-color-decoration rgb-value",
    settings: { foreground: syntax.constant },
  },
  {
    name: "RGB 值（Less）",
    scope: "less rgb-value",
    settings: { foreground: syntax.constant },
  },

  // === Sass 选择器 ===
  {
    name: "Sass: 选择器",
    scope: "selector.sass",
    settings: { foreground: syntax.text },
  },

  // === 伪元素/伪类 ===
  {
    name: "CSS 伪元素/伪类样式",
    scope: [
      "entity.other.attribute-name.pseudo-element",
      "entity.other.attribute-name.pseudo-class",
    ],
    settings: { foreground: syntax.text },
  },
];
