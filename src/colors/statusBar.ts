/**
 * 状态栏颜色
 *
 * 包含状态栏的背景、前景、调试状态、远程连接等颜色配置
 */

import { fg, bg, border, withAlpha } from "../palette";

export const statusBar = {
  // === 状态栏基础 ===
  /** 状态栏背景 */
  "statusBar.background": bg.elevated,
  /** 状态栏前景 */
  "statusBar.foreground": fg.disabled,
  /** 状态栏边框 */
  "statusBar.border": border.default,

  // === 调试状态 ===
  /** 调试时状态栏背景 */
  "statusBar.debuggingBackground": withAlpha(fg.bright, "11"),
  /** 调试时状态栏前景 */
  "statusBar.debuggingForeground": fg.primary,

  // === 无文件夹状态 ===
  /** 无文件夹时状态栏背景 */
  "statusBar.noFolderBackground": bg.elevated,
  /** 无文件夹时状态栏前景 */
  "statusBar.noFolderForeground": fg.primary,

  // === 状态栏项目 ===
  /** 状态栏项目激活背景 */
  "statusBarItem.activeBackground": withAlpha(fg.bright, "12"),
  /** 状态栏项目悬浮背景 */
  "statusBarItem.hoverBackground": withAlpha(fg.bright, "7"),
  /** 状态栏突出项目背景 */
  "statusBarItem.prominentBackground": withAlpha(fg.bright, "7"),
  /** 状态栏突出项目悬浮背景 */
  "statusBarItem.prominentHoverBackground": withAlpha(fg.bright, "12"),

  // === 远程连接 ===
  /** 远程连接状态栏背景 */
  "statusBarItem.remoteBackground": bg.elevated,
  /** 远程连接状态栏前景 */
  "statusBarItem.remoteForeground": fg.secondary,
} as const;
