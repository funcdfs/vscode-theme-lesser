/**
 * 设置编辑器颜色
 *
 * 覆盖设置页的行状态、表单控件（文本框/数字框/下拉框/复选框）
 */

import { fg, bg, border, accent, syntax, withAlpha } from "../palette";

export const settings = {
  // === 分组与行 ===
  /** 分组标题前景 */
  "settings.headerForeground": fg.primary,
  /** 分组标题边框 */
  "settings.headerBorder": border.default,
  /** 分组标题悬浮前景 */
  "settings.settingsHeaderHoverForeground": fg.secondary,
  /** 焦点行背景 */
  "settings.focusedRowBackground": withAlpha(fg.bright, "5"),
  /** 焦点行边框 */
  "settings.focusedRowBorder": withAlpha(accent.violet, "35"),
  /** 行悬浮背景 */
  "settings.rowHoverBackground": withAlpha(fg.bright, "5"),
  /** 分栏拖动条边框 */
  "settings.sashBorder": border.default,

  // === 文本输入 ===
  /** 文本框背景 */
  "settings.textInputBackground": bg.input,
  /** 文本框前景 */
  "settings.textInputForeground": fg.primary,
  /** 文本框边框 */
  "settings.textInputBorder": border.default,

  // === 数字输入 ===
  /** 数字框背景 */
  "settings.numberInputBackground": bg.input,
  /** 数字框前景 - 与语法数字色一致 */
  "settings.numberInputForeground": syntax.number,
  /** 数字框边框 */
  "settings.numberInputBorder": border.default,

  // === 下拉框 ===
  /** 下拉框背景 */
  "settings.dropdownBackground": bg.input,
  /** 下拉框前景 */
  "settings.dropdownForeground": fg.primary,
  /** 下拉框边框 */
  "settings.dropdownBorder": border.default,
  /** 下拉列表边框 */
  "settings.dropdownListBorder": border.default,

  // === 复选框 ===
  /** 复选框背景 */
  "settings.checkboxBackground": bg.input,
  /** 复选框前景 */
  "settings.checkboxForeground": fg.primary,
  /** 复选框边框 */
  "settings.checkboxBorder": border.default,
} as const;
