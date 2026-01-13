/**
 * 基础 UI 颜色
 *
 * 包含前景、背景、边框、阴影、焦点等基础颜色配置
 */

import { fg, bg, border, shadow, accent, badge, cream } from "../palette";

export const base = {
  // === 前景色 ===
  /** 默认前景色 */
  "foreground": fg.primary,
  /** 错误前景色 */
  "errorForeground": accent.coral,

  // === 焦点边框 ===
  /** 焦点边框颜色 */
  "focusBorder": border.focus,

  // === 选择 ===
  /** 选择背景 */
  "selection.background": border.active,

  // === 小部件 ===
  /** 小部件阴影 */
  "widget.shadow": shadow.widget,

  // === 按钮 ===
  /** 按钮背景 */
  "button.background": accent.blue,
  /** 按钮前景 */
  "button.foreground": "#191c22",
  /** 按钮悬浮背景 */
  "button.hoverBackground": accent.blueBright,
  /** 次要按钮背景 */
  "button.secondaryBackground": accent.gray,
  /** 次要按钮前景 */
  "button.secondaryForeground": fg.primary,
  /** 次要按钮悬浮背景 */
  "button.secondaryHoverBackground": accent.grayBright,

  // === SCM 输入框按钮（提交按钮）===
  /** SCM 输入框按钮背景 */
  "scmInputButton.background": accent.violet,
  /** SCM 输入框按钮前景 */
  "scmInputButton.foreground": cream.base,
  /** SCM 输入框按钮悬浮背景 */
  "scmInputButton.hoverBackground": "#B8A5F5",

  // === 徽章 ===
  /** 通用徽章背景 */
  "badge.background": badge.defaultBg,
  /** 通用徽章前景 */
  "badge.foreground": badge.defaultFg,

  // === 下拉框 ===
  /** 下拉框背景 */
  "dropdown.background": bg.base,
  /** 下拉框边框 */
  "dropdown.border": border.default,
  /** 下拉框前景 */
  "dropdown.foreground": fg.primary,

  // === 文本链接 ===
  /** 文本链接前景 */
  "textLink.foreground": accent.blue,
  /** 文本链接活动前景 */
  "textLink.activeForeground": accent.blueBright,
  /** 预格式化文本前景 */
  "textPreformat.foreground": accent.cyan,
  /** 文本分隔符前景 */
  "textSeparator.foreground": accent.cyan,

  // === 扩展按钮 ===
  /** 扩展按钮突出背景 */
  "extensionButton.prominentBackground": accent.gray,
  /** 扩展按钮突出前景 */
  "extensionButton.prominentForeground": fg.primary,
  /** 扩展按钮突出悬浮背景 */
  "extensionButton.prominentHoverBackground": accent.grayBright,

  // === 选择器组 ===
  /** 选择器组边框 */
  "pickerGroup.border": border.subtle,
  /** 选择器组前景 */
  "pickerGroup.foreground": fg.primary,

  // === 调试工具栏 ===
  /** 调试工具栏背景 */
  "debugToolBar.background": bg.elevated,

  // === 调试异常小部件 ===
  /** 调试异常小部件背景 */
  "debugExceptionWidget.background": bg.base,
  /** 调试异常小部件边框 */
  "debugExceptionWidget.border": bg.elevated,

  // === 图表颜色 ===
  /** 图表绿色 */
  "charts.green": accent.green,
  /** 图表红色 */
  "charts.red": accent.coral,
  /** 图表黄色 */
  "charts.yellow": accent.yellow,

  // === 演练背景 ===
  /** 演练嵌入编辑器背景 */
  "walkThrough.embeddedEditorBackground": bg.elevated,
} as const;
