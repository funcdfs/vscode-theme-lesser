/**
 * 终端颜色
 *
 * 使用真正的 ANSI 语义颜色，而不是强行映射到语法高亮色
 * 这确保终端输出符合用户预期：
 * - 红色显示为红色（错误）
 * - 绿色显示为绿色（成功）
 * - 蓝色显示为蓝色（目录）
 */

import { fg, bg, ansi, withAlpha } from "../palette";

export const terminal = {
  // === 终端基础 ===
  /** 终端背景 */
  "terminal.background": bg.elevated,
  /** 终端前景 */
  "terminal.foreground": fg.primary,
  /** 终端选择背景 */
  "terminal.selectionBackground": withAlpha(fg.bright, "20"),

  // === 终端光标 ===
  /** 终端光标背景 */
  "terminalCursor.background": bg.elevated,
  /** 终端光标前景 */
  "terminalCursor.foreground": fg.primary,

  // === ANSI 基础颜色 ===
  /** ANSI 黑色 */
  "terminal.ansiBlack": ansi.black,
  /** ANSI 红色 - 用于错误输出 */
  "terminal.ansiRed": ansi.red,
  /** ANSI 绿色 - 用于成功/添加 */
  "terminal.ansiGreen": ansi.green,
  /** ANSI 黄色 - 用于警告/路径 */
  "terminal.ansiYellow": ansi.yellow,
  /** ANSI 蓝色 - 用于目录/链接 */
  "terminal.ansiBlue": ansi.blue,
  /** ANSI 品红色 - 用于特殊标记 */
  "terminal.ansiMagenta": ansi.magenta,
  /** ANSI 青色 - 用于数据/表达式 */
  "terminal.ansiCyan": ansi.cyan,
  /** ANSI 白色 */
  "terminal.ansiWhite": ansi.white,

  // === ANSI 亮色 ===
  /** ANSI 亮黑色（灰色） */
  "terminal.ansiBrightBlack": ansi.brightBlack,
  /** ANSI 亮红色 */
  "terminal.ansiBrightRed": ansi.brightRed,
  /** ANSI 亮绿色 */
  "terminal.ansiBrightGreen": ansi.brightGreen,
  /** ANSI 亮黄色 */
  "terminal.ansiBrightYellow": ansi.brightYellow,
  /** ANSI 亮蓝色 */
  "terminal.ansiBrightBlue": ansi.brightBlue,
  /** ANSI 亮品红色 */
  "terminal.ansiBrightMagenta": ansi.brightMagenta,
  /** ANSI 亮青色 */
  "terminal.ansiBrightCyan": ansi.brightCyan,
  /** ANSI 亮白色 */
  "terminal.ansiBrightWhite": ansi.brightWhite,
} as const;
