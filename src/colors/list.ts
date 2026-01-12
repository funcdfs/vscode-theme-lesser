/**
 * 列表颜色
 *
 * 包含列表的所有颜色配置：选择、悬浮、焦点、错误、警告等状态
 */

import { fg, accent, withAlpha, syntax } from "../palette";

export const list = {
  // === 活动选择 ===
  /** 活动选择背景 */
  "list.activeSelectionBackground": withAlpha(fg.primary, "12"),
  /** 活动选择前景 - 金黄色，与奶白色文件名形成明显区分 */
  "list.activeSelectionForeground": syntax.constant,

  // === 非活动选择 ===
  /** 非活动选择背景 */
  "list.inactiveSelectionBackground": withAlpha(fg.primary, "7"),
  /** 非活动选择前景 - 金黄色，保持一致 */
  "list.inactiveSelectionForeground": syntax.constant,

  // === 焦点 ===
  /** 焦点背景 */
  "list.focusBackground": withAlpha(fg.primary, "12"),
  /** 焦点前景 - 金黄色 */
  "list.focusForeground": syntax.constant,

  // === 悬浮 ===
  /** 悬浮背景 */
  "list.hoverBackground": withAlpha(fg.primary, "7"),
  /** 悬浮前景 */
  "list.hoverForeground": fg.primary,

  // === 拖放 ===
  /** 拖放背景 */
  "list.dropBackground": withAlpha(fg.primary, "7"),

  // === 高亮 ===
  /** 高亮前景 */
  "list.highlightForeground": accent.blue,

  // === 状态前景 ===
  /** 弱化前景 */
  "list.deemphasizedForeground": fg.secondary,
  /** 无效项前景 */
  "list.invalidItemForeground": fg.disabled,
  /** 错误前景 */
  "list.errorForeground": accent.redBright,
  /** 警告前景 */
  "list.warningForeground": accent.yellow,
} as const;
