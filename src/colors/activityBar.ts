/**
 * 活动栏颜色
 *
 * 包含活动栏的背景、前景、徽章等颜色配置
 */

import { fg, bg, accent } from "../palette";

export const activityBar = {
  // === 活动栏 ===
  /** 活动栏背景 */
  "activityBar.background": bg.elevated,
  /** 活动栏前景 */
  "activityBar.foreground": fg.secondary,

  // === 活动栏徽章 ===
  /** 活动栏徽章背景 */
  "activityBarBadge.background": accent.blue,
  /** 活动栏徽章前景 */
  "activityBarBadge.foreground": bg.elevated,
} as const;
