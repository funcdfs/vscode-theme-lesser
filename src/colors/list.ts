/**
 * 列表颜色
 *
 * 包含列表的所有颜色配置：选择、悬浮、焦点、错误、警告等状态
 */

import { fg, accent, withAlpha, selection } from "../palette";

// 列表选中前景 - 稍暗的金黄色
const listSelectionFg = "#E0B050";

export const list = {
  // === 活动选择 ===
  /** 活动选择背景 */
  "list.activeSelectionBackground": selection.active,
  /** 活动选择前景 - 金黄色，与奶白色文件名形成明显区分 */
  "list.activeSelectionForeground": listSelectionFg,

  // === 非活动选择 ===
  /** 非活动选择背景 */
  "list.inactiveSelectionBackground": selection.active,
  /** 非活动选择前景 - 金黄色，保持一致 */
  "list.inactiveSelectionForeground": listSelectionFg,

  // === 焦点 ===
  /** 焦点背景 */
  "list.focusBackground": selection.active,
  /** 焦点前景 - 金黄色 */
  "list.focusForeground": listSelectionFg,

  // === 悬浮 ===
  /** 悬浮背景 - 微弱灰度 */
  "list.hoverBackground": withAlpha(fg.bright, "10"),
  /** 悬浮前景 */
  "list.hoverForeground": fg.primary,

  // === 拖放 ===
  /** 拖放背景 */
  "list.dropBackground": withAlpha(fg.bright, "10"),

  // === 高亮 ===
  /** 高亮前景 */
  "list.highlightForeground": accent.cyan,

  // === 状态前景 ===
  /** 弱化前景 */
  "list.deemphasizedForeground": fg.secondary,
  /** 无效项前景 */
  "list.invalidItemForeground": fg.disabled,
  /** 错误前景 */
  "list.errorForeground": accent.coral,
  /** 警告前景 */
  "list.warningForeground": accent.yellow,
} as const;
