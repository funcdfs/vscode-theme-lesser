/**
 * 合并冲突颜色
 *
 * 包含 Git 合并冲突时的当前内容、传入内容等颜色配置
 */

import { accent, withAlpha } from "../palette";

export const merge = {
  // === 合并边框 ===
  /** 合并边框 - 透明 */
  "merge.border": "#2A2A2A00",

  // === 当前内容（HEAD）===
  /** 当前内容背景 - 蓝色半透明 */
  "merge.currentContentBackground": withAlpha(accent.blue, "30"),
  /** 当前内容头部背景 - 蓝色较深 */
  "merge.currentHeaderBackground": withAlpha(accent.blue, "40"),

  // === 传入内容（Incoming）===
  /** 传入内容背景 - 绿色半透明 */
  "merge.incomingContentBackground": withAlpha(accent.green, "30"),
  /** 传入内容头部背景 - 绿色较深 */
  "merge.incomingHeaderBackground": withAlpha(accent.green, "40"),
} as const;
