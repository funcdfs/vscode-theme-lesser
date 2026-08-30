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
  // === 边框（补充）===
  /** 状态栏焦点边框 */
  "statusBar.focusBorder": border.focus,
  /** 调试时状态栏边框 */
  "statusBar.debuggingBorder": border.default,
  /** 无文件夹时状态栏边框 */
  "statusBar.noFolderBorder": border.default,

  // === 状态栏项目（补充）===
  /** 项目焦点边框 */
  "statusBarItem.focusBorder": border.focus,
  /** 项目悬浮前景 */
  "statusBarItem.hoverForeground": fg.primary,
  /** 紧凑项目悬浮背景 */
  "statusBarItem.compactHoverBackground": withAlpha(fg.bright, "20"),
  /** 突出项目前景 */
  "statusBarItem.prominentForeground": fg.primary,
  /** 突出项目悬浮前景 */
  "statusBarItem.prominentHoverForeground": fg.primary,

  // === 错误项目 ===
  /** 错误背景 */
  "statusBarItem.errorBackground": withAlpha(accent.coral, "20"),
  /** 错误前景 */
  "statusBarItem.errorForeground": accent.coral,
  /** 错误悬浮背景 */
  "statusBarItem.errorHoverBackground": withAlpha(accent.coral, "35"),
  /** 错误悬浮前景 */
  "statusBarItem.errorHoverForeground": fg.primary,

  // === 警告项目 ===
  /** 警告背景 */
  "statusBarItem.warningBackground": withAlpha(accent.yellow, "20"),
  /** 警告前景 */
  "statusBarItem.warningForeground": accent.yellow,
  /** 警告悬浮背景 */
  "statusBarItem.warningHoverBackground": withAlpha(accent.yellow, "35"),
  /** 警告悬浮前景 */
  "statusBarItem.warningHoverForeground": fg.primary,

  // === 离线项目 ===
  /** 离线背景 */
  "statusBarItem.offlineBackground": withAlpha(accent.orange, "20"),
  /** 离线前景 */
  "statusBarItem.offlineForeground": accent.orange,
  /** 离线悬浮背景 */
  "statusBarItem.offlineHoverBackground": withAlpha(accent.orange, "35"),
  /** 离线悬浮前景 */
  "statusBarItem.offlineHoverForeground": fg.primary,

  // === 远程项目（补充）===
  /** 远程悬浮背景 */
  "statusBarItem.remoteHoverBackground": withAlpha(accent.violet, "20"),
  /** 远程悬浮前景 */
  "statusBarItem.remoteHoverForeground": fg.primary,

} as const;
