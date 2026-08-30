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
  "editor.lineHighlightBackground": selection.active,
  /** 行高亮边框 */
  "editor.lineHighlightBorder": selection.active,

  // === 选择 ===
  /** 选择背景 */
  "editor.selectionBackground": selection.background,
  /** 选择高亮背景 */
  "editor.selectionHighlightBackground": selection.highlight,
  /** 非活动选择背景 */
  "editor.inactiveSelectionBackground": selection.inactive,

  // === 查找 ===
  /** 查找匹配背景 */
  "editor.findMatchBackground": withAlpha(accent.cyan, "50"),
  /** 查找匹配高亮背景 */
  "editor.findMatchHighlightBackground": withAlpha(accent.cyan, "35"),
  /** 查找范围高亮背景 */
  "editor.findRangeHighlightBackground": withAlpha(fg.primary, "10"),

  // === 高亮 ===
  /** 悬浮高亮背景 */
  "editor.hoverHighlightBackground": withAlpha(fg.primary, "10"),
  /** 单词高亮背景 */
  "editor.wordHighlightBackground": withAlpha(fg.primary, "10"),
  /** 单词强高亮背景 */
  "editor.wordHighlightStrongBackground": border.active,
  /** 范围高亮背景 */
  "editor.rangeHighlightBackground": selection.range,

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

  // === 错误和警告 ===
  /** 错误前景 */
  "editorError.foreground": accent.coral,
  /** 错误边框 */
  "editorError.border": withAlpha(accent.coral, "0"),
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
  "editorGroup.dropBackground": withAlpha(fg.primary, "10"),
  /** 编辑器组空背景 */
  "editorGroup.emptyBackground": bg.elevated,

  // === 编辑器容器 ===
  /** 编辑器边框（现代布局） */
  "editor.border": border.default,
  /** 输入法组合边框 */
  "editor.compositionBorder": accent.violet,
  /** 编辑器占位提示前景 */
  "editor.placeholder.foreground": fg.disabled,

  // === 光标（多光标）===
  /** 光标背景 - 被光标覆盖的字符颜色 */
  "editorCursor.background": bg.base,
  /** 主光标前景 */
  "editorMultiCursor.primary.foreground": fg.primary,
  /** 主光标背景 */
  "editorMultiCursor.primary.background": bg.base,
  /** 次光标前景 - 紫罗兰色便于区分 */
  "editorMultiCursor.secondary.foreground": accent.violet,
  /** 次光标背景 */
  "editorMultiCursor.secondary.background": bg.base,

  // === 查找（边框与文字）===
  /** 查找匹配边框 */
  "editor.findMatchBorder": withAlpha(accent.cyan, "50"),
  /** 查找匹配文字前景 */
  "editor.findMatchForeground": fg.bright,
  /** 查找匹配高亮边框 */
  "editor.findMatchHighlightBorder": withAlpha(accent.cyan, "35"),
  /** 查找匹配高亮文字前景 */
  "editor.findMatchHighlightForeground": fg.primary,
  /** 查找范围高亮边框 - 透明，保持极简 */
  "editor.findRangeHighlightBorder": border.transparent,

  // === 高亮边框 - 一律透明，仅靠背景区分 ===
  /** 选择高亮边框 */
  "editor.selectionHighlightBorder": border.transparent,
  /** 范围高亮边框 */
  "editor.rangeHighlightBorder": border.transparent,
  /** 单词高亮边框 */
  "editor.wordHighlightBorder": border.transparent,
  /** 单词强高亮边框 */
  "editor.wordHighlightStrongBorder": border.transparent,
  /** 单词文本高亮背景 */
  "editor.wordHighlightTextBackground": withAlpha(fg.primary, "10"),
  /** 单词文本高亮边框 */
  "editor.wordHighlightTextBorder": border.transparent,
  /** 符号高亮背景 */
  "editor.symbolHighlightBackground": withAlpha(accent.cyan, "20"),
  /** 符号高亮边框 */
  "editor.symbolHighlightBorder": border.transparent,
  /** 联动编辑（重命名标签）背景 */
  "editor.linkedEditingBackground": withAlpha(accent.violet, "20"),

  // === 折叠 ===
  /** 折叠区域背景 */
  "editor.foldBackground": withAlpha(accent.violet, "15"),
  /** 折叠占位符前景 */
  "editor.foldPlaceholderForeground": fg.muted,

  // === 非焦点行高亮 ===
  /** 编辑器失焦时的当前行背景 */
  "editor.inactiveLineHighlightBackground": withAlpha(fg.bright, "5"),

  // === 调试内联值 ===
  /** 内联值背景 */
  "editor.inlineValuesBackground": withAlpha(accent.violet, "15"),
  /** 内联值前景 */
  "editor.inlineValuesForeground": fg.muted,

  // === 代码片段（补充）===
  /** 最终制表位高亮背景 */
  "editor.snippetFinalTabstopHighlightBackground": withAlpha(accent.violet, "20"),
  /** 制表位高亮边框 */
  "editor.snippetTabstopHighlightBorder": border.transparent,

  // === 行号（补充）===
  /** 活动行号前景（旧键名兼容） */
  "editorActiveLineNumber.foreground": fg.primary,
  /** 相对行号的暗淡前景 */
  "editorLineNumber.dimmedForeground": fg.disabled,

  // === 诊断（信息/提示）===
  /** 信息前景 */
  "editorInfo.foreground": accent.cyan,
  /** 信息边框 - 透明 */
  "editorInfo.border": border.transparent,
  /** 信息背景 - 透明，保持极简 */
  "editorInfo.background": withAlpha(accent.cyan, "0"),
  /** 错误背景 - 透明 */
  "editorError.background": withAlpha(accent.coral, "0"),
  /** 警告背景 - 透明 */
  "editorWarning.background": withAlpha(accent.yellow, "0"),
  /** 提示前景 */
  "editorHint.foreground": fg.muted,
  /** 提示边框 - 透明 */
  "editorHint.border": border.transparent,

  // === 特殊字符与冗余代码 ===
  /** Unicode 高亮背景 */
  "editorUnicodeHighlight.background": withAlpha(accent.yellow, "15"),
  /** Unicode 高亮边框 */
  "editorUnicodeHighlight.border": accent.orange,
  /** 冗余代码不透明度 - alpha 决定淡出程度 */
  "editorUnnecessaryCode.opacity": "#00000099",
  /** 冗余代码边框 - 透明，仅靠淡出表达 */
  "editorUnnecessaryCode.border": border.transparent,

  // === 灯泡（快速修复）===
  /** 快速修复灯泡 */
  "editorLightBulb.foreground": accent.yellow,
  /** 自动修复灯泡 */
  "editorLightBulbAutoFix.foreground": accent.cyan,
  /** AI 修复灯泡 */
  "editorLightBulbAi.foreground": accent.violet,

  // === 缩进指南（多级）===
  /** 缩进指南 1（默认）*/
  "editorIndentGuide.background": border.default,
  /** 缩进指南 2 */
  "editorIndentGuide.background2": border.default,
  /** 缩进指南 3 */
  "editorIndentGuide.background3": border.default,
  /** 缩进指南 4 */
  "editorIndentGuide.background4": border.default,
  /** 缩进指南 5 */
  "editorIndentGuide.background5": border.default,
  /** 缩进指南 6 */
  "editorIndentGuide.background6": border.default,
  /** 活动缩进指南 1（默认）*/
  "editorIndentGuide.activeBackground": border.active,
  /** 活动缩进指南 2 */
  "editorIndentGuide.activeBackground2": border.active,
  /** 活动缩进指南 3 */
  "editorIndentGuide.activeBackground3": border.active,
  /** 活动缩进指南 4 */
  "editorIndentGuide.activeBackground4": border.active,
  /** 活动缩进指南 5 */
  "editorIndentGuide.activeBackground5": border.active,
  /** 活动缩进指南 6 */
  "editorIndentGuide.activeBackground6": border.active,

  // === 编辑器组（补充）===
  /** 拖放提示背景 */
  "editorGroup.dropIntoPromptBackground": bg.elevated,
  /** 拖放提示前景 */
  "editorGroup.dropIntoPromptForeground": fg.primary,
  /** 拖放提示边框 */
  "editorGroup.dropIntoPromptBorder": border.default,
  /** 聚焦的空编辑器组边框 */
  "editorGroup.focusedEmptyBorder": border.focus,
  /** 编辑器组头部边框 */
  "editorGroupHeader.border": border.default,

  // === 编辑器小部件（补充）===
  /** 小部件边框 */
  "editorWidget.border": border.default,
  /** 小部件前景 */
  "editorWidget.foreground": fg.primary,
  /** 查找/替换等小部件边框 */
  "widget.border": border.default,

} as const;
