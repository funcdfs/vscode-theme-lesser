/**
 * 终端颜色
 *
 * 使用真正的 ANSI 语义颜色，而不是强行映射到语法高亮色
 * 这确保终端输出符合用户预期：
 * - 红色显示为红色（错误）
 * - 绿色显示为绿色（成功）
 * - 蓝色显示为蓝色（目录）
 */

import { fg, bg, border, accent, ansi, withAlpha } from "../palette";

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
  // === 边框与拖放 ===
  /** 终端边框（分屏分隔线） */
  "terminal.border": border.default,
  /** 终端拖放背景 */
  "terminal.dropBackground": withAlpha(fg.bright, "10"),
  /** 终端标签活动指示条 */
  "terminal.tab.activeBorder": accent.violet,

  // === 选择与悬浮 ===
  /** 非活动选择背景 */
  "terminal.inactiveSelectionBackground": withAlpha(fg.bright, "10"),
  /** 悬浮高亮背景 */
  "terminal.hoverHighlightBackground": withAlpha(accent.cyan, "20"),
  /** 空终端初始提示前景 */
  "terminal.initialHintForeground": fg.disabled,

  // === 查找 ===
  /** 查找匹配背景 */
  "terminal.findMatchBackground": withAlpha(accent.cyan, "50"),
  /** 查找匹配边框 */
  "terminal.findMatchBorder": withAlpha(accent.cyan, "50"),
  /** 查找匹配高亮背景 */
  "terminal.findMatchHighlightBackground": withAlpha(accent.cyan, "35"),
  /** 查找匹配高亮边框 */
  "terminal.findMatchHighlightBorder": withAlpha(accent.cyan, "35"),

  // === Shell 集成命令装饰 ===
  /** 默认命令标记 */
  "terminalCommandDecoration.defaultBackground": fg.muted,
  /** 成功命令标记 */
  "terminalCommandDecoration.successBackground": accent.green,
  /** 失败命令标记 */
  "terminalCommandDecoration.errorBackground": accent.coral,
  /** 命令范围引导线 */
  "terminalCommandGuide.foreground": border.active,

  // === 终端概览标尺 ===
  /** 概览标尺边框 */
  "terminalOverviewRuler.border": border.transparent,
  /** 光标标记 */
  "terminalOverviewRuler.cursorForeground": fg.primary,
  /** 查找匹配标记 */
  "terminalOverviewRuler.findMatchForeground": withAlpha(accent.cyan, "50"),

  // === 终端粘性滚动 ===
  /** 粘性滚动背景 */
  "terminalStickyScroll.background": bg.elevated,
  /** 粘性滚动边框 */
  "terminalStickyScroll.border": border.subtle,
  /** 粘性滚动悬浮背景 */
  "terminalStickyScrollHover.background": bg.selection,

} as const;
