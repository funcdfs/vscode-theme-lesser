/**
 * 基础控件颜色
 *
 * 覆盖复选框、单选框、快捷键标签、工具栏与操作栏等通用控件
 */

import { fg, bg, border, accent, withAlpha } from "../palette";

export const controls = {
  // === 复选框 ===
  /** 复选框背景 */
  "checkbox.background": bg.input,
  /** 复选框前景 */
  "checkbox.foreground": fg.primary,
  /** 复选框边框 */
  "checkbox.border": border.default,
  /** 所在项被选中时的复选框背景 */
  "checkbox.selectBackground": bg.elevated,
  /** 所在项被选中时的复选框边框 */
  "checkbox.selectBorder": border.focus,
  /** 禁用复选框背景 */
  "checkbox.disabled.background": withAlpha(bg.input, "50"),
  /** 禁用复选框前景 */
  "checkbox.disabled.foreground": fg.disabled,

  // === 单选框 ===
  /** 选中项背景 */
  "radio.activeBackground": withAlpha(accent.violet, "20"),
  /** 选中项前景 */
  "radio.activeForeground": fg.primary,
  /** 选中项边框 */
  "radio.activeBorder": accent.violet,
  /** 未选中项背景 */
  "radio.inactiveBackground": border.transparent,
  /** 未选中项前景 */
  "radio.inactiveForeground": fg.secondary,
  /** 未选中项边框 */
  "radio.inactiveBorder": border.subtle,
  /** 未选中项悬浮背景 */
  "radio.inactiveHoverBackground": withAlpha(fg.bright, "10"),

  // === 快捷键标签 ===
  /** 快捷键标签背景 */
  "keybindingLabel.background": withAlpha(fg.bright, "10"),
  /** 快捷键标签前景 */
  "keybindingLabel.foreground": fg.primary,
  /** 快捷键标签边框 */
  "keybindingLabel.border": border.default,
  /** 快捷键标签底部边框 */
  "keybindingLabel.bottomBorder": border.active,
  /** 快捷键表格头部背景 */
  "keybindingTable.headerBackground": withAlpha(fg.bright, "5"),
  /** 快捷键表格行背景 */
  "keybindingTable.rowsBackground": withAlpha(fg.bright, "5"),

  // === 工具栏与操作栏 ===
  /** 工具栏悬浮背景 */
  "toolbar.hoverBackground": withAlpha(fg.bright, "10"),
  /** 工具栏悬浮描边 */
  "toolbar.hoverOutline": border.transparent,
  /** 工具栏按下背景 */
  "toolbar.activeBackground": withAlpha(fg.bright, "20"),
  /** 操作栏切换项背景 */
  "actionBar.toggledBackground": withAlpha(accent.violet, "20"),

  // === 其他通用控件 ===
  /** 下拉列表背景 */
  "dropdown.listBackground": bg.elevated,
  /** 工作台图标默认颜色 */
  "icon.foreground": fg.secondary,
  /** 按钮边框 */
  "button.border": border.transparent,
  /** 次要按钮边框 */
  "button.secondaryBorder": border.default,
  /** 按钮分隔线 */
  "button.separator": withAlpha(fg.bright, "35"),
} as const;
