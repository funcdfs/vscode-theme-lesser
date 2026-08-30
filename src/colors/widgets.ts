/**
 * 小部件颜色
 *
 * 包含建议、悬浮、代码片段、括号匹配等小部件的颜色配置
 */

import { fg, bg, border, special, nature, accent, shadow, selection, withAlpha } from "../palette";

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
  // === 建议小部件（补充）===
  /** 焦点项匹配高亮前景 */
  "editorSuggestWidget.focusHighlightForeground": accent.cyan,
  /** 焦点项描边 */
  "editorSuggestWidget.focusOutline": border.focus,
  /** 选中项前景 */
  "editorSuggestWidget.selectedForeground": fg.primary,
  /** 选中项图标前景 */
  "editorSuggestWidget.selectedIconForeground": fg.primary,
  /** 建议列表状态栏前景 */
  "editorSuggestWidgetStatus.foreground": fg.muted,

  // === 悬浮小部件（补充）===
  /** 悬浮内容匹配高亮前景 */
  "editorHoverWidget.highlightForeground": accent.cyan,
  /** 悬浮小部件状态栏背景 */
  "editorHoverWidget.statusBarBackground": bg.elevated,

  // === 粘性滚动（作用域面包屑）===
  /** 粘性滚动背景 */
  "editorStickyScroll.background": bg.base,
  /** 粘性滚动边框 */
  "editorStickyScroll.border": border.subtle,
  /** 粘性滚动阴影 */
  "editorStickyScroll.shadow": shadow.widget,
  /** 粘性滚动边槽背景 */
  "editorStickyScrollGutter.background": bg.base,
  /** 粘性滚动悬浮背景 */
  "editorStickyScrollHover.background": bg.selection,

  // === 快速修复菜单 ===
  /** 菜单背景 */
  "editorActionList.background": bg.elevated,
  /** 菜单前景 */
  "editorActionList.foreground": fg.primary,
  /** 焦点项背景 */
  "editorActionList.focusBackground": selection.active,
  /** 焦点项前景 */
  "editorActionList.focusForeground": fg.primary,

  // === 标记导航（补充）===
  /** 错误标记头部背景 */
  "editorMarkerNavigationError.headerBackground": withAlpha(accent.coral, "20"),
  /** 警告标记头部背景 */
  "editorMarkerNavigationWarning.headerBackground": withAlpha(accent.yellow, "20"),
  /** 信息标记背景 */
  "editorMarkerNavigationInfo.background": bg.elevated,
  /** 信息标记头部背景 */
  "editorMarkerNavigationInfo.headerBackground": withAlpha(accent.cyan, "20"),

  // === 代码评论小部件 ===
  /** 评论范围背景 */
  "editorCommentsWidget.rangeBackground": withAlpha(accent.cyan, "10"),
  /** 活动评论范围背景 */
  "editorCommentsWidget.rangeActiveBackground": withAlpha(accent.cyan, "20"),
  /** 回复输入框背景 */
  "editorCommentsWidget.replyInputBackground": bg.elevated,
  /** 已解决评论边框 */
  "editorCommentsWidget.resolvedBorder": fg.muted,
  /** 未解决评论边框 */
  "editorCommentsWidget.unresolvedBorder": accent.violet,

  // === 括号配对指南 ===
  /** 第一层指南 - 天空蓝 */
  "editorBracketPairGuide.background1": withAlpha(nature.sky, "35"),
  /** 第二层指南 - 森林绿 */
  "editorBracketPairGuide.background2": withAlpha(nature.forest, "35"),
  /** 第三层指南 - 薰衣草紫 */
  "editorBracketPairGuide.background3": withAlpha(nature.lavender, "35"),
  /** 第四层指南 - 大地棕 */
  "editorBracketPairGuide.background4": withAlpha(nature.earth, "35"),
  /** 第五层指南 - 晨曦橙 */
  "editorBracketPairGuide.background5": withAlpha(nature.dawn, "35"),
  /** 第六层指南 - 薄雾灰 */
  "editorBracketPairGuide.background6": withAlpha(nature.mist, "35"),
  /** 活动第一层指南 */
  "editorBracketPairGuide.activeBackground1": nature.sky,
  /** 活动第二层指南 */
  "editorBracketPairGuide.activeBackground2": nature.forest,
  /** 活动第三层指南 */
  "editorBracketPairGuide.activeBackground3": nature.lavender,
  /** 活动第四层指南 */
  "editorBracketPairGuide.activeBackground4": nature.earth,
  /** 活动第五层指南 */
  "editorBracketPairGuide.activeBackground5": nature.dawn,
  /** 活动第六层指南 */
  "editorBracketPairGuide.activeBackground6": nature.mist,

} as const;
