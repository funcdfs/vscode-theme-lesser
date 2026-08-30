/**
 * 测试与覆盖率颜色
 *
 * 覆盖测试资源管理器状态图标、测试消息 Peek 视图
 * 以及测试覆盖率的编辑器/边槽/小地图着色
 */

import { fg, bg, badge, accent, withAlpha } from "../palette";

export const testing = {
  // === 状态图标 ===
  /** 通过 */
  "testing.iconPassed": accent.green,
  /** 失败 */
  "testing.iconFailed": accent.coral,
  /** 出错 */
  "testing.iconErrored": accent.red,
  /** 排队中 */
  "testing.iconQueued": accent.yellow,
  /** 已跳过 */
  "testing.iconSkipped": fg.muted,
  /** 未运行 */
  "testing.iconUnset": fg.disabled,
  /** 运行按钮 */
  "testing.runAction": accent.green,

  // === 状态图标（结果已过期）===
  /** 通过（已过期） */
  "testing.iconPassed.retired": withAlpha(accent.green, "50"),
  /** 失败（已过期） */
  "testing.iconFailed.retired": withAlpha(accent.coral, "50"),
  /** 出错（已过期） */
  "testing.iconErrored.retired": withAlpha(accent.red, "50"),
  /** 排队中（已过期） */
  "testing.iconQueued.retired": withAlpha(accent.yellow, "50"),
  /** 已跳过（已过期） */
  "testing.iconSkipped.retired": withAlpha(fg.muted, "50"),
  /** 未运行（已过期） */
  "testing.iconUnset.retired": withAlpha(fg.disabled, "50"),

  // === Peek 视图 ===
  /** 测试 Peek 边框 */
  "testing.peekBorder": accent.coral,
  /** 测试 Peek 头部背景 */
  "testing.peekHeaderBackground": withAlpha(accent.coral, "10"),
  /** 测试消息 Peek 边框 */
  "testing.messagePeekBorder": accent.cyan,
  /** 测试消息 Peek 头部背景 */
  "testing.messagePeekHeaderBackground": withAlpha(accent.cyan, "10"),

  // === 测试消息装饰 ===
  /** 错误消息徽章背景 */
  "testing.message.error.badgeBackground": accent.coral,
  /** 错误消息徽章前景 */
  "testing.message.error.badgeForeground": bg.base,
  /** 错误消息徽章边框 */
  "testing.message.error.badgeBorder": withAlpha(accent.coral, "50"),
  /** 错误消息所在行背景 */
  "testing.message.error.lineBackground": withAlpha(accent.coral, "15"),
  /** 信息消息装饰前景 */
  "testing.message.info.decorationForeground": fg.muted,
  /** 信息消息所在行背景 */
  "testing.message.info.lineBackground": withAlpha(accent.cyan, "10"),

  // === 覆盖率 - 已覆盖 ===
  /** 已覆盖代码背景 */
  "testing.coveredBackground": withAlpha(accent.green, "15"),
  /** 已覆盖代码边框 */
  "testing.coveredBorder": withAlpha(accent.green, "35"),
  /** 已覆盖边槽背景 */
  "testing.coveredGutterBackground": withAlpha(accent.green, "50"),
  /** 已覆盖小地图背景 */
  "testing.coveredMinimapBackground": withAlpha(accent.green, "35"),

  // === 覆盖率 - 未覆盖 ===
  /** 未覆盖代码背景 */
  "testing.uncoveredBackground": withAlpha(accent.coral, "15"),
  /** 未覆盖代码边框 */
  "testing.uncoveredBorder": withAlpha(accent.coral, "35"),
  /** 未覆盖分支背景 */
  "testing.uncoveredBranchBackground": withAlpha(accent.yellow, "25"),
  /** 未覆盖边槽背景 */
  "testing.uncoveredGutterBackground": withAlpha(accent.coral, "50"),
  /** 未覆盖小地图背景 */
  "testing.uncoveredMinimapBackground": withAlpha(accent.coral, "35"),

  // === 覆盖率计数徽章 ===
  /** 覆盖率计数徽章背景 */
  "testing.coverCountBadgeBackground": badge.defaultBg,
  /** 覆盖率计数徽章前景 */
  "testing.coverCountBadgeForeground": badge.defaultFg,
} as const;
