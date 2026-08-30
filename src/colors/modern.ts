/**
 * 现代布局颜色（VS Code 1.135）
 *
 * 覆盖新的浮动式工作台：surface 卡片、modern 活动栏与标签页、
 * 命令中心、横幅、多文件差异编辑器与并排编辑器
 */

import { fg, bg, border, accent, cream, withAlpha } from "../palette";

export const modern = {
  // === Surface 卡片容器 ===
  /** 卡片背景 */
  "surface.background": bg.card,
  /** 卡片前景 */
  "surface.foreground": fg.primary,
  /** 卡片边框 */
  "surface.border": border.default,

  // === 现代活动栏 ===
  /** 活动栏背景 */
  "modernActivityBar.background": bg.elevated,
  /** 窗口非活动时的活动栏背景 */
  "modernActivityBar.inactiveBackground": bg.elevated,
  /** 活动项背景 */
  "modernActivityBar.activeBackground": withAlpha(accent.violet, "20"),
  /** 活动项前景 */
  "modernActivityBar.activeForeground": cream.base,
  /** 悬浮背景 */
  "modernActivityBar.hoverBackground": withAlpha(fg.bright, "10"),
  /** 悬浮前景 */
  "modernActivityBar.hoverForeground": fg.primary,

  // === 现代标签页（通用）===
  /** 活动标签背景 */
  "modernTab.activeBackground": bg.card,
  /** 活动标签前景 */
  "modernTab.activeForeground": fg.primary,
  /** 标签悬浮背景 */
  "modernTab.hoverBackground": withAlpha(fg.bright, "5"),
  /** 标签悬浮前景 */
  "modernTab.hoverForeground": fg.primary,

  // === 现代编辑器标签页 ===
  /** 活动标签背景 */
  "modernEditorTab.activeBackground": bg.base,
  /** 活动标签前景 */
  "modernEditorTab.activeForeground": fg.primary,
  /** 非活动标签背景 - 透明，融入标签栏 */
  "modernEditorTab.inactiveBackground": border.transparent,
  /** 标签悬浮背景 */
  "modernEditorTab.hoverBackground": withAlpha(fg.bright, "5"),
  /** 标签悬浮前景 */
  "modernEditorTab.hoverForeground": fg.primary,
  /** 活动标签悬浮背景 */
  "modernEditorTab.activeHoverBackground": bg.base,
  /** 活动标签操作按钮背景 */
  "modernEditorTab.activeActionBackground": bg.base,
  /** 活动标签悬浮时操作按钮背景 */
  "modernEditorTab.activeHoverActionBackground": bg.selection,
  /** 标签悬浮时操作按钮背景 */
  "modernEditorTab.hoverActionBackground": bg.selection,
  /** 选中标签操作按钮背景 */
  "modernEditorTab.selectedActionBackground": bg.selection,

  // === 命令中心（标题栏搜索框）===
  /** 命令中心背景 */
  "commandCenter.background": bg.card,
  /** 命令中心前景 */
  "commandCenter.foreground": fg.secondary,
  /** 命令中心边框 */
  "commandCenter.border": border.default,
  /** 命令中心悬浮背景 */
  "commandCenter.activeBackground": bg.overlay,
  /** 命令中心悬浮前景 */
  "commandCenter.activeForeground": fg.primary,
  /** 命令中心悬浮边框 */
  "commandCenter.activeBorder": border.focus,
  /** 窗口非活动时前景 */
  "commandCenter.inactiveForeground": fg.disabled,
  /** 窗口非活动时边框 */
  "commandCenter.inactiveBorder": border.subtle,
  /** 调试中背景 */
  "commandCenter.debuggingBackground": withAlpha(accent.violet, "20"),

  // === 横幅（标题栏下方提示条）===
  /** 横幅背景 */
  "banner.background": bg.selection,
  /** 横幅前景 */
  "banner.foreground": fg.primary,
  /** 横幅图标前景 */
  "banner.iconForeground": accent.cyan,

  // === 窗口边框 ===
  /** 窗口活动边框 */
  "window.activeBorder": border.default,
  /** 窗口非活动边框 */
  "window.inactiveBorder": border.subtle,

  // === 内置浏览器 ===
  /** 浏览器页面边框 */
  "browser.border": border.default,

  // === 多文件差异编辑器 ===
  /** 背景 */
  "multiDiffEditor.background": bg.base,
  /** 边框 */
  "multiDiffEditor.border": border.default,
  /** 文件头背景 */
  "multiDiffEditor.headerBackground": bg.elevated,

  // === 并排编辑器 ===
  /** 上下并排分隔线 */
  "sideBySideEditor.horizontalBorder": border.default,
  /** 左右并排分隔线 */
  "sideBySideEditor.verticalBorder": border.default,

  // === 编辑器留白与输出视图 ===
  /** 居中布局两侧留白背景 */
  "editorPane.background": bg.elevated,
  /** 输出视图背景 */
  "outputView.background": bg.elevated,
  /** 输出视图粘性滚动背景 */
  "outputViewStickyScroll.background": bg.elevated,

  // === 配置文件编辑器 ===
  /** 分栏拖动条边框 */
  "profiles.sashBorder": border.default,
} as const;
