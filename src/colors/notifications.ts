/**
 * 通知颜色
 *
 * 包含通知弹窗的背景、前景、链接等颜色配置
 */

import { fg, bg, border, accent } from "../palette";

export const notifications = {
  // === 通知基础 ===
  /** 通知背景 */
  "notifications.background": bg.elevated,
  /** 通知前景 */
  "notifications.foreground": fg.primary,

  // === 通知链接 ===
  /** 通知链接前景 */
  "notificationLink.foreground": accent.cyan,
  // === 边框 ===
  /** 通知边框 */
  "notifications.border": border.default,
  /** 通知中心边框 */
  "notificationCenter.border": border.default,
  /** 通知弹窗边框 */
  "notificationToast.border": border.default,

  // === 通知中心头部 ===
  /** 头部背景 */
  "notificationCenterHeader.background": bg.deep,
  /** 头部前景 */
  "notificationCenterHeader.foreground": fg.secondary,

  // === 通知图标 ===
  /** 错误图标 */
  "notificationsErrorIcon.foreground": accent.coral,
  /** 警告图标 */
  "notificationsWarningIcon.foreground": accent.yellow,
  /** 信息图标 */
  "notificationsInfoIcon.foreground": accent.cyan,

} as const;
