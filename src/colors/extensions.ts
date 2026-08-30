/**
 * 扩展视图颜色
 *
 * 覆盖扩展市场按钮、扩展徽章、扩展/MCP 图标与配置文件徽章
 */

import { fg, bg, border, accent, withAlpha } from "../palette";

export const extensions = {
  // === 扩展操作按钮 ===
  /** 按钮背景 - 深紫罗兰色 */
  "extensionButton.background": "#7568B0",
  /** 按钮前景 */
  "extensionButton.foreground": "#FFFFFF",
  /** 按钮悬浮背景 */
  "extensionButton.hoverBackground": "#8A7BC7",
  /** 按钮边框 */
  "extensionButton.border": border.transparent,
  /** 按钮分隔线 */
  "extensionButton.separator": withAlpha(fg.bright, "35"),

  // === 扩展徽章 ===
  /** 远程扩展徽章背景 */
  "extensionBadge.remoteBackground": withAlpha(accent.violet, "35"),
  /** 远程扩展徽章前景 */
  "extensionBadge.remoteForeground": fg.primary,

  // === 扩展图标 ===
  /** 评分星标 */
  "extensionIcon.starForeground": accent.yellow,
  /** 已验证发布者 */
  "extensionIcon.verifiedForeground": accent.cyan,
  /** 预发布版本 */
  "extensionIcon.preReleaseForeground": accent.orange,
  /** 赞助 */
  "extensionIcon.sponsorForeground": accent.magenta,
  /** 私有扩展 */
  "extensionIcon.privateForeground": fg.muted,

  // === MCP 服务器 ===
  /** MCP 评分星标 */
  "mcpIcon.starForeground": accent.yellow,

  // === 配置文件徽章 ===
  /** 配置文件徽章背景 */
  "profileBadge.background": bg.selection,
  /** 配置文件徽章前景 */
  "profileBadge.foreground": fg.primary,
} as const;
