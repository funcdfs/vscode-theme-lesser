/**
 * 合并冲突颜色
 *
 * 包含 Git 合并冲突时的当前内容、传入内容等颜色配置
 */

import { accent, border, withAlpha } from "../palette";

export const merge = {
  // === 合并边框 ===
  /** 合并边框 - 透明 */
  "merge.border": border.transparent,

  // === 当前内容（HEAD）===
  /** 当前内容背景 - 青色半透明 */
  "merge.currentContentBackground": withAlpha(accent.cyan, "35"),
  /** 当前内容头部背景 - 青色较深 */
  "merge.currentHeaderBackground": withAlpha(accent.cyan, "50"),

  // === 传入内容（Incoming）===
  /** 传入内容背景 - 绿色半透明 */
  "merge.incomingContentBackground": withAlpha(accent.green, "35"),
  /** 传入内容头部背景 - 绿色较深 */
  "merge.incomingHeaderBackground": withAlpha(accent.green, "50"),
} as const;
