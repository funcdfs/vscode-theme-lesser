/**
 * 差异编辑器颜色
 *
 * 包含差异编辑器中插入、删除、修改等操作的背景颜色配置
 */

import { accent, bg, border, fg, shadow, withAlpha } from "../palette";

export const diff = {
  // === 插入（添加）===
  /** 插入文本背景 */
  "diffEditor.insertedTextBackground": withAlpha(accent.green, "10"),
  /** 插入行背景 */
  "diffEditor.insertedLineBackground": withAlpha(accent.green, "20"),

  // === 删除（移除）===
  /** 删除文本背景 */
  "diffEditor.removedTextBackground": withAlpha(accent.coral, "10"),
  /** 删除行背景 */
  "diffEditor.removedLineBackground": withAlpha(accent.coral, "20"),

  // === 其他 ===
  /** 对角线填充（用于显示差异区域的对角线） */
  "diffEditor.diagonalFill": border.default,
  // === 边框 ===
  /** 差异编辑器边框 */
  "diffEditor.border": border.default,
  /** 插入文本边框 - 透明，仅靠背景表达 */
  "diffEditor.insertedTextBorder": border.transparent,
  /** 删除文本边框 - 透明 */
  "diffEditor.removedTextBorder": border.transparent,

  // === 移动的代码块 ===
  /** 移动块边框 */
  "diffEditor.move.border": withAlpha(accent.violet, "50"),
  /** 活动移动块边框 */
  "diffEditor.moveActive.border": accent.violet,

  // === 折叠的未变更区域 ===
  /** 未变更代码背景 */
  "diffEditor.unchangedCodeBackground": withAlpha(fg.muted, "5"),
  /** 未变更区域背景 */
  "diffEditor.unchangedRegionBackground": bg.elevated,
  /** 未变更区域前景 */
  "diffEditor.unchangedRegionForeground": fg.muted,
  /** 未变更区域阴影 */
  "diffEditor.unchangedRegionShadow": shadow.widget,

  // === 边槽与概览标尺 ===
  /** 边槽插入行背景 */
  "diffEditorGutter.insertedLineBackground": withAlpha(accent.green, "10"),
  /** 边槽删除行背景 */
  "diffEditorGutter.removedLineBackground": withAlpha(accent.coral, "10"),
  /** 概览标尺插入标记 */
  "diffEditorOverview.insertedForeground": withAlpha(accent.green, "50"),
  /** 概览标尺删除标记 */
  "diffEditorOverview.removedForeground": withAlpha(accent.coral, "50"),

} as const;
