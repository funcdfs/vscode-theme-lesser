/**
 * 差异编辑器颜色
 *
 * 包含差异编辑器中插入、删除、修改等操作的背景颜色配置
 */

import { accent, border, withAlpha } from "../palette";

export const diff = {
  // === 插入（添加）===
  /** 插入文本背景 */
  "diffEditor.insertedTextBackground": withAlpha(accent.green, "13"),
  /** 插入行背景 */
  "diffEditor.insertedLineBackground": withAlpha(accent.green, "20"),

  // === 删除（移除）===
  /** 删除文本背景 */
  "diffEditor.removedTextBackground": withAlpha(accent.redDark, "13"),
  /** 删除行背景 */
  "diffEditor.removedLineBackground": withAlpha(accent.redDark, "20"),

  // === 其他 ===
  /** 对角线填充（用于显示差异区域的对角线） */
  "diffEditor.diagonalFill": border.default,
} as const;
