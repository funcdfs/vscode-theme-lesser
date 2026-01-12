/**
 * 小部件颜色
 *
 * 包含建议、悬浮、代码片段、括号匹配等小部件的颜色配置
 */

import { fg, bg, border, special, withAlpha } from "../palette";

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
  "editorBracketMatch.background": withAlpha(fg.bright, "12"),
  /** 括号匹配边框（透明） */
  "editorBracketMatch.border": withAlpha(bg.elevated, "0"),

  // === 调试异常小部件 ===
  /** 调试异常小部件背景 */
  "debugExceptionWidget.background": bg.base,
  /** 调试异常小部件边框 */
  "debugExceptionWidget.border": bg.elevated,
} as const;
