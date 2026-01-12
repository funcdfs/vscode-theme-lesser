/**
 * 终端颜色
 *
 * 包含集成终端的 ANSI 颜色、光标、选择、背景等颜色配置
 *
 * 设计理念：终端颜色与语法高亮保持语义一致
 * - 红色：错误、删除 → 对应 syntax.keyword (粉红色系)
 * - 绿色：成功、添加 → 对应 syntax.directive (绿色系)
 * - 黄色：警告、修改 → 对应 syntax.constant (金黄色系)
 * - 蓝色：信息、链接 → 对应 syntax.class (蓝色系)
 * - 品红：特殊、装饰 → 粉紫色系（不带透明度）
 * - 青色：数据、表达式 → 对应 syntax.operator (青绿色系)
 */

import { fg, bg, syntax, withAlpha } from "../palette";

// 终端品红色 - 与 syntax.string 同色但不带透明度
// 终端颜色不应该有透明度，否则会影响可读性
const terminalMagenta = "#e394dc";

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
  // 与语法高亮保持语义一致，确保视觉统一
  /** ANSI 黑色 - 深色背景 */
  "terminal.ansiBlack": bg.deep,
  /** ANSI 红色 - 对应关键字/错误色，用于错误输出 */
  "terminal.ansiRed": syntax.keyword,
  /** ANSI 绿色 - 对应指令色，用于成功/添加 */
  "terminal.ansiGreen": syntax.directive,
  /** ANSI 黄色 - 对应常量色，用于警告/路径 */
  "terminal.ansiYellow": syntax.constant,
  /** ANSI 蓝色 - 对应类名色，用于目录/链接 */
  "terminal.ansiBlue": syntax.class,
  /** ANSI 品红色 - 粉紫色，用于特殊标记（不带透明度） */
  "terminal.ansiMagenta": terminalMagenta,
  /** ANSI 青色 - 对应操作符色，用于数据/表达式 */
  "terminal.ansiCyan": syntax.operator,
  /** ANSI 白色 - 主要前景色 */
  "terminal.ansiWhite": fg.bright,

  // === ANSI 亮色 ===
  // 亮色版本用于高亮显示，保持与基础色的语义关联
  /** ANSI 亮黑色（灰色）- 弱化文本 */
  "terminal.ansiBrightBlack": fg.muted,
  /** ANSI 亮红色 - 对应 self 色，用于强调错误 */
  "terminal.ansiBrightRed": syntax.self,
  /** ANSI 亮绿色 - 对应函数色，用于强调成功 */
  "terminal.ansiBrightGreen": syntax.function,
  /** ANSI 亮黄色 - 对应标签名色，用于强调警告 */
  "terminal.ansiBrightYellow": syntax.tagName,
  /** ANSI 亮蓝色 - 对应属性色，用于强调信息 */
  "terminal.ansiBrightBlue": syntax.property,
  /** ANSI 亮品红色 - 粉紫色，保持一致（不带透明度） */
  "terminal.ansiBrightMagenta": terminalMagenta,
  /** ANSI 亮青色 - 对应操作符色，保持一致 */
  "terminal.ansiBrightCyan": syntax.operator,
  /** ANSI 亮白色 - 高亮前景色 */
  "terminal.ansiBrightWhite": fg.bright,
} as const;
