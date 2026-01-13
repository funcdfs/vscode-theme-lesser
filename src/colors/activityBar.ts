/**
 * 活动栏颜色
 *
 * 包含活动栏的背景、前景、徽章等颜色配置
 */

import { fg, bg, badge, cream, accent, withAlpha } from "../palette";

export const activityBar = {
  // === 活动栏 ===
  /** 活动栏背景 */
  "activityBar.background": bg.elevated,
  /** 活动栏默认前景 */
  "activityBar.foreground": fg.primary,
  /** 活动栏非活动前景（未选中图标）- 较暗 */
  "activityBar.inactiveForeground": fg.muted,

  // === 活动栏选中项 ===
  /** 活动栏活动图标前景 - 奶白色，温暖且突出 */
  "activityBar.activeForeground": cream.base,
  /** 活动栏活动边框 - 紫罗兰色作为左侧指示器 */
  "activityBar.activeBorder": accent.violet,
  /** 活动栏活动背景 - 微弱的紫色背景增加对比度 */
  "activityBar.activeBackground": withAlpha(accent.violet, "20"),

  // === 活动栏徽章 ===
  /** 活动栏徽章背景 - 紫色半透明，用于显示未读通知数量 */
  "activityBarBadge.background": badge.activeBg,
  /** 活动栏徽章前景 - 奶白色确保数字清晰可读 */
  "activityBarBadge.foreground": badge.activeFg,
} as const;
