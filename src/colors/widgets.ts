/**
 * 小部件颜色
 *
 * 包含建议、悬浮、代码片段、括号匹配等小部件的颜色配置
 */

import { fg, bg, border, special, nature, accent, withAlpha } from "../palette";

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
  /** 括号匹配背景 */
  "editorBracketMatch.background": withAlpha(nature.lavender, "20"),
  /** 括号匹配边框 */
  "editorBracketMatch.border": withAlpha(nature.lavender, "50"),

  // === 括号配对着色 ===
  /** 第一层括号 - 天空蓝 */
  "editorBracketHighlight.foreground1": nature.sky,
  /** 第二层括号 - 森林绿 */
  "editorBracketHighlight.foreground2": nature.forest,
  /** 第三层括号 - 薰衣草紫 */
  "editorBracketHighlight.foreground3": nature.lavender,
  /** 第四层括号 - 大地棕 */
  "editorBracketHighlight.foreground4": nature.earth,
  /** 第五层括号 - 晨曦橙 */
  "editorBracketHighlight.foreground5": nature.dawn,
  /** 第六层括号 - 薄雾灰 */
  "editorBracketHighlight.foreground6": nature.mist,
  /** 未匹配括号 - 使用错误红色提示 */
  "editorBracketHighlight.unexpectedBracket.foreground": accent.coral,

  // === 调试异常小部件 ===
  /** 调试异常小部件背景 */
  "debugExceptionWidget.background": bg.base,
  /** 调试异常小部件边框 */
  "debugExceptionWidget.border": bg.elevated,
} as const;
