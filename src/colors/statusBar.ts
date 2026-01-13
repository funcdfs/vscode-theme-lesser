/**
 * 状态栏颜色
 *
 * 包含状态栏的背景、前景、调试状态、远程连接等颜色配置
 */

import { fg, bg, border, withAlpha, accent } from "../palette";

export const statusBar = {
  // === 状态栏基础 ===
  /** 状态栏背景 */
  "statusBar.background": bg.elevated,
  /** 状态栏前景 */
  "statusBar.foreground": fg.disabled,
  /** 状态栏边框 */
  "statusBar.border": border.default,

  // === 调试状态 ===
  /** 状态栏调试背景 - 紫色调 */
  "statusBar.debuggingBackground": withAlpha(accent.violet, "10"),
  /** 调试时状态栏前景 */
  "statusBar.debuggingForeground": fg.primary,

  // === 无文件夹状态 ===
  /** 无文件夹时状态栏背景 */
  "statusBar.noFolderBackground": bg.elevated,
  /** 无文件夹时状态栏前景 */
  "statusBar.noFolderForeground": fg.primary,

  // === 状态栏项目 ===
  /** 状态栏项目激活背景 - 紫色调 */
  "statusBarItem.activeBackground": withAlpha(accent.violet, "20"),
  /** 状态栏项目悬浮背景 - 紫色调 */
  "statusBarItem.hoverBackground": withAlpha(accent.violet, "10"),
  /** 状态栏突出项目背景 - 紫色调 */
  "statusBarItem.prominentBackground": withAlpha(accent.violet, "10"),
  /** 状态栏突出项目悬浮背景 - 紫色调 */
  "statusBarItem.prominentHoverBackground": withAlpha(accent.violet, "20"),

  // === 远程连接 ===
  /** 远程连接状态栏背景 */
  "statusBarItem.remoteBackground": bg.elevated,
  /** 远程连接状态栏前景 */
  "statusBarItem.remoteForeground": fg.secondary,
} as const;
