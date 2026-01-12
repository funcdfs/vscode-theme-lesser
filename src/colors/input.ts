/**
 * 输入框颜色
 *
 * 包含输入框的所有颜色配置：背景、边框、前景、占位符、选项和验证状态
 */

import { fg, bg, border, accent, withAlpha } from "../palette";

export const input = {
  // === 基础输入框 ===
  /** 输入框背景 */
  "input.background": bg.input,
  /** 输入框边框 */
  "input.border": border.default,
  /** 输入框前景 */
  "input.foreground": fg.primary,
  /** 输入框占位符前景 */
  "input.placeholderForeground": fg.disabled,

  // === 输入选项 ===
  /** 输入选项激活边框 */
  "inputOption.activeBorder": withAlpha(fg.primary, "0"),
  /** 输入选项激活背景 */
  "inputOption.activeBackground": withAlpha(fg.primary, "12"),

  // === 验证状态 - 错误 ===
  /** 错误验证背景 */
  "inputValidation.errorBackground": bg.elevated,
  /** 错误验证边框 */
  "inputValidation.errorBorder": accent.red,
  /** 错误验证前景 */
  "inputValidation.errorForeground": accent.redBright,

  // === 验证状态 - 信息 ===
  /** 信息验证背景 */
  "inputValidation.infoBackground": bg.elevated,
  /** 信息验证边框 */
  "inputValidation.infoBorder": accent.blue,
  /** 信息验证前景 */
  "inputValidation.infoForeground": accent.blue,

  // === 验证状态 - 警告 ===
  /** 警告验证背景 */
  "inputValidation.warningBackground": bg.elevated,
  /** 警告验证边框 */
  "inputValidation.warningBorder": accent.orange,
  /** 警告验证前景 */
  "inputValidation.warningForeground": accent.yellow,
} as const;
