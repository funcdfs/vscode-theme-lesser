/**
 * 通知颜色
 *
 * 包含通知弹窗的背景、前景、链接等颜色配置
 */

import { fg, bg, accent } from "../palette";

export const notifications = {
  // === 通知基础 ===
  /** 通知背景 */
  "notifications.background": bg.elevated,
  /** 通知前景 */
  "notifications.foreground": fg.primary,

  // === 通知链接 ===
  /** 通知链接前景 */
  "notificationLink.foreground": accent.blue,
} as const;
