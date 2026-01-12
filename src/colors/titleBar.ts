/**
 * 标题栏颜色
 *
 * 包含标题栏的活动状态、非活动状态、边框等颜色配置
 */

import { fg, bg, border } from "../palette";

export const titleBar = {
  // === 活动状态 ===
  /** 标题栏活动背景 */
  "titleBar.activeBackground": bg.elevated,
  /** 标题栏活动前景 */
  "titleBar.activeForeground": fg.titleActive,

  // === 非活动状态 ===
  /** 标题栏非活动背景 */
  "titleBar.inactiveBackground": bg.elevated,
  /** 标题栏非活动前景 */
  "titleBar.inactiveForeground": fg.disabled,

  // === 边框 ===
  /** 标题栏边框 */
  "titleBar.border": border.default,
} as const;
