/**
 * 终端颜色
 *
 * 包含集成终端的 ANSI 颜色、光标、选择、背景等颜色配置
 */

import { fg, bg, accent, withAlpha } from "../palette";

export const terminal = {
  // === 终端基础 ===
  /** 终端背景 */
  "terminal.background": bg.elevated,
  /** 终端前景 */
  "terminal.foreground": fg.primary,
  /** 终端选择背景 */
  "terminal.selectionBackground": withAlpha(fg.primary, "12"),

  // === 终端光标 ===
  /** 终端光标背景 */
  "terminalCursor.background": bg.elevated,
  /** 终端光标前景 */
  "terminalCursor.foreground": fg.primary,

  // === ANSI 基础颜色 ===
  /** ANSI 黑色 */
  "terminal.ansiBlack": bg.deep,
  /** ANSI 红色 */
  "terminal.ansiRed": accent.redBright,
  /** ANSI 绿色 */
  "terminal.ansiGreen": accent.green,
  /** ANSI 黄色 */
  "terminal.ansiYellow": accent.orange,
  /** ANSI 蓝色 */
  "terminal.ansiBlue": accent.blueAlt,
  /** ANSI 品红色 */
  "terminal.ansiMagenta": accent.magenta,
  /** ANSI 青色 */
  "terminal.ansiCyan": accent.blue,
  /** ANSI 白色 */
  "terminal.ansiWhite": fg.bright,

  // === ANSI 亮色 ===
  /** ANSI 亮黑色（灰色） */
  "terminal.ansiBrightBlack": fg.muted,
  /** ANSI 亮红色 */
  "terminal.ansiBrightRed": accent.redBright,
  /** ANSI 亮绿色 */
  "terminal.ansiBrightGreen": accent.greenBright,
  /** ANSI 亮黄色 */
  "terminal.ansiBrightYellow": accent.yellow,
  /** ANSI 亮蓝色 */
  "terminal.ansiBrightBlue": accent.blueBright,
  /** ANSI 亮品红色 */
  "terminal.ansiBrightMagenta": accent.magenta,
  /** ANSI 亮青色 */
  "terminal.ansiBrightCyan": accent.blue,
  /** ANSI 亮白色 */
  "terminal.ansiBrightWhite": fg.bright,
} as const;
