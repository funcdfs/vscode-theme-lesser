/**
 * 编辑器颜色
 *
 * 包含编辑器主区域的所有颜色配置：背景、光标、选择、高亮、行号、缩进指南等
 */

import { fg, bg, border, accent, selection, special, withAlpha } from "../palette";

export const editor = {
  // === 基础 ===
  /** 编辑器背景 */
  "editor.background": bg.base,
  /** 编辑器前景 */
  "editor.foreground": fg.primary,

  // === 光标 ===
  /** 光标颜色 */
  "editorCursor.foreground": fg.primary,

  // === 行高亮 ===
  /** 行高亮背景 */
  "editor.lineHighlightBackground": bg.surface,
  /** 行高亮边框 */
  "editor.lineHighlightBorder": bg.surface,

  // === 选择 ===
  /** 选择背景 */
  "editor.selectionBackground": selection.background,
  /** 选择高亮背景 */
  "editor.selectionHighlightBackground": selection.highlight,
  /** 非活动选择背景 */
  "editor.inactiveSelectionBackground": selection.inactive,

  // === 查找 ===
  /** 查找匹配背景 */
  "editor.findMatchBackground": withAlpha(accent.blue, "40"),
  /** 查找匹配高亮背景 */
  "editor.findMatchHighlightBackground": withAlpha(accent.blue, "27"),
  /** 查找范围高亮背景 */
  "editor.findRangeHighlightBackground": withAlpha(fg.primary, "7"),

  // === 高亮 ===
  /** 悬浮高亮背景 */
  "editor.hoverHighlightBackground": withAlpha(fg.primary, "12"),
  /** 单词高亮背景 */
  "editor.wordHighlightBackground": withAlpha(fg.primary, "12"),
  /** 单词强高亮背景 */
  "editor.wordHighlightStrongBackground": border.active,
  /** 范围高亮背景 */
  "editor.rangeHighlightBackground": selection.range,

  // === 代码片段 ===
  /** 代码片段最终制表位高亮边框 */
  "editor.snippetFinalTabstopHighlightBorder": special.snippetBorder,
  /** 代码片段制表位高亮背景 */
  "editor.snippetTabstopHighlightBackground": special.snippetHighlight,

  // === 行号 ===
  /** 行号前景 */
  "editorLineNumber.foreground": fg.muted,
  /** 活动行号前景 */
  "editorLineNumber.activeForeground": fg.primary,

  // === 缩进指南 ===
  /** 缩进指南背景 */
  "editorIndentGuide.background1": border.default,
  /** 活动缩进指南背景 */
  "editorIndentGuide.activeBackground1": border.active,

  // === 标尺 ===
  /** 标尺前景 */
  "editorRuler.foreground": fg.muted,

  // === 代码透镜 ===
  /** 代码透镜前景 */
  "editorCodeLens.foreground": fg.muted,

  // === 链接 ===
  /** 活动链接前景 */
  "editorLink.activeForeground": fg.primary,

  // === 空白字符 ===
  /** 空白字符前景 */
  "editorWhitespace.foreground": special.whitespace,

  // === 括号匹配 ===
  /** 括号匹配背景 */
  "editorBracketMatch.background": withAlpha(fg.primary, "12"),
  /** 括号匹配边框 */
  "editorBracketMatch.border": withAlpha(bg.elevated, "0"),

  // === 错误和警告 ===
  /** 错误前景 */
  "editorError.foreground": accent.red,
  /** 错误边框 */
  "editorError.border": withAlpha(accent.red, "0"),
  /** 警告前景 */
  "editorWarning.foreground": accent.yellow,
  /** 警告边框 */
  "editorWarning.border": withAlpha(fg.primary, "0"),

  // === 内联提示 ===
  /** 内联提示背景 */
  "editorInlayHint.background": border.transparent,
  /** 内联提示前景 */
  "editorInlayHint.foreground": fg.muted,
  /** 参数内联提示背景 */
  "editorInlayHint.parameterBackground": border.transparent,
  /** 参数内联提示前景 */
  "editorInlayHint.parameterForeground": fg.muted,
  /** 类型内联提示背景 */
  "editorInlayHint.typeBackground": border.transparent,
  /** 类型内联提示前景 */
  "editorInlayHint.typeForeground": fg.muted,

  // === 标记导航 ===
  /** 标记导航背景 */
  "editorMarkerNavigation.background": special.markerNav,
  /** 标记导航错误背景 */
  "editorMarkerNavigationError.background": special.markerNavError,
  /** 标记导航警告背景 */
  "editorMarkerNavigationWarning.background": special.snippetBorder,

  // === 编辑器组 ===
  /** 编辑器组边框 */
  "editorGroup.border": border.default,
  /** 编辑器组拖放背景 */
  "editorGroup.dropBackground": withAlpha(fg.primary, "7"),
  /** 编辑器组空背景 */
  "editorGroup.emptyBackground": bg.elevated,

  // === 编辑器组头部 ===
  /** 无标签页背景 */
  "editorGroupHeader.noTabsBackground": bg.elevated,
  /** 标签页背景 */
  "editorGroupHeader.tabsBackground": bg.elevated,
  /** 标签页边框 */
  "editorGroupHeader.tabsBorder": border.default,

  // === 编辑器小部件 ===
  /** 编辑器小部件背景 */
  "editorWidget.background": bg.elevated,
  /** 编辑器小部件调整边框 */
  "editorWidget.resizeBorder": border.focus,
} as const;
