/**
 * 小部件颜色
 *
 * 包含建议、悬浮、代码片段、括号匹配等小部件的颜色配置
 */

import { fg, bg, border, special, nature, withAlpha } from "../palette";

export const widgets = {
  // === 建议小部件 ===
  /** 建议小部件背景 */
  "editorSuggestWidget.background": bg.elevated,
  /** 建议小部件边框 */
  "editorSuggestWidget.border": border.default,
  /** 建议小部件前景 */
  "editorSuggestWidget.foreground": fg.primary,
  /** 建议小部件高亮前景 */
  "editorSuggestWidget.highlightForeground": fg.primary,
  /** 建议小部件选中背景 */
  "editorSuggestWidget.selectedBackground": bg.selection,

  // === 悬浮小部件 ===
  /** 悬浮小部件背景 */
  "editorHoverWidget.background": bg.base,
  /** 悬浮小部件边框 */
  "editorHoverWidget.border": border.default,
  /** 悬浮小部件前景 */
  "editorHoverWidget.foreground": fg.primary,

  // === 编辑器小部件 ===
  /** 编辑器小部件背景 */
  "editorWidget.background": bg.elevated,
  /** 编辑器小部件调整边框 */
  "editorWidget.resizeBorder": border.focus,

  // === 代码片段 ===
  /** 代码片段最终制表位高亮边框 */
  "editor.snippetFinalTabstopHighlightBorder": special.snippetBorder,
  /** 代码片段制表位高亮背景 */
  "editor.snippetTabstopHighlightBackground": special.snippetHighlight,

  // === 括号匹配 ===
  /** 括号匹配背景 - 使用薰衣草紫的柔和高亮 */
  "editorBracketMatch.background": withAlpha(nature.lavender, "20"),
  /** 括号匹配边框 - 薰衣草紫边框增强可见性 */
  "editorBracketMatch.border": withAlpha(nature.lavender, "55"),

  // === 括号配对着色 ===
  // 使用自然界颜色，从浅到深表示嵌套层级
  // 语义设计：天空(开阔) → 森林(生长) → 薰衣草(优雅) → 大地(稳定) → 晨曦(温暖) → 薄雾(深远)
  /** 第一层括号 - 天空蓝：最外层，代表开阔的视野 */
  "editorBracketHighlight.foreground1": nature.sky,
  /** 第二层括号 - 森林绿：嵌套生长，代表代码的层次 */
  "editorBracketHighlight.foreground2": nature.forest,
  /** 第三层括号 - 薰衣草紫：优雅深入，代表逻辑的深化 */
  "editorBracketHighlight.foreground3": nature.lavender,
  /** 第四层括号 - 大地棕：稳定沉淀，代表复杂结构的基础 */
  "editorBracketHighlight.foreground4": nature.earth,
  /** 第五层括号 - 晨曦橙：温暖活力，代表深层嵌套的活跃 */
  "editorBracketHighlight.foreground5": nature.dawn,
  /** 第六层括号 - 薄雾灰：神秘深远，代表最深层的抽象 */
  "editorBracketHighlight.foreground6": nature.mist,
  /** 未匹配括号 - 使用错误红色提示 */
  "editorBracketHighlight.unexpectedBracket.foreground": "#E34671",

  // === 调试异常小部件 ===
  /** 调试异常小部件背景 */
  "debugExceptionWidget.background": bg.base,
  /** 调试异常小部件边框 */
  "debugExceptionWidget.border": bg.elevated,
} as const;
