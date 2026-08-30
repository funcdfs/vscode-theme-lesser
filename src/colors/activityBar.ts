/**
 * 活动栏颜色
 *
 * 包含活动栏的背景、前景、徽章等颜色配置
 */

import { fg, bg, border, badge, cream, accent, withAlpha } from "../palette";

export const activityBar = {
  // === 活动栏 ===
  /** 活动栏背景 */
  "activityBar.background": bg.elevated,
  /** 活动栏默认前景（即选中图标颜色）- 奶白色，温暖且突出 */
  "activityBar.foreground": cream.base,
  /** 活动栏非活动前景（未选中图标）- 较暗 */
  "activityBar.inactiveForeground": fg.muted,

  // === 活动栏选中项 ===
  /** 活动栏活动图标前景 - VS Code 已移除该键，保留以兼容 Cursor 等衍生编辑器 */
  "activityBar.activeForeground": cream.base,
  /** 活动栏活动边框 - 紫罗兰色作为左侧指示器 */
  "activityBar.activeBorder": accent.violet,
  /** 活动栏活动背景 - 透明，去除背景色 */
  "activityBar.activeBackground": "#00000000",

  // === 活动栏徽章 ===
  /** 活动栏徽章背景 - 紫色半透明，用于显示未读通知数量 */
  "activityBarBadge.background": badge.activeBg,
  /** 活动栏徽章前景 - 奶白色确保数字清晰可读 */
  "activityBarBadge.foreground": badge.activeFg,
  // === 边框与拖放 ===
  /** 活动栏边框 */
  "activityBar.border": border.default,
  /** 活动栏拖放边框 */
  "activityBar.dropBorder": accent.violet,
  /** 活动栏活动项焦点边框 */
  "activityBar.activeFocusBorder": border.focus,

  // === 顶部活动栏（activityBar.location = top）===
  /** 顶部活动栏背景 */
  "activityBarTop.background": bg.elevated,
  /** 顶部活动栏前景 */
  "activityBarTop.foreground": cream.base,
  /** 顶部活动栏非活动前景 */
  "activityBarTop.inactiveForeground": fg.muted,
  /** 顶部活动栏活动项背景 - 透明 */
  "activityBarTop.activeBackground": withAlpha(accent.violet, "0"),
  /** 顶部活动栏活动项边框 */
  "activityBarTop.activeBorder": accent.violet,
  /** 顶部活动栏拖放边框 */
  "activityBarTop.dropBorder": accent.violet,

  // === 错误与警告徽章 ===
  /** 错误徽章背景 */
  "activityErrorBadge.background": accent.coral,
  /** 错误徽章前景 */
  "activityErrorBadge.foreground": bg.base,
  /** 警告徽章背景 */
  "activityWarningBadge.background": accent.yellow,
  /** 警告徽章前景 */
  "activityWarningBadge.foreground": bg.base,

} as const;
