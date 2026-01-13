/**
 * 预览视图颜色
 *
 * 包含 Peek 视图（查看定义、查看引用等）的边框、背景、结果等颜色配置
 */

import { fg, bg, border, accent, withAlpha } from "../palette";

export const peekView = {
  // === 预览视图边框 ===
  /** 预览视图边框 */
  "peekView.border": fg.muted,

  // === 预览视图编辑器 ===
  /** 预览视图编辑器背景 */
  "peekViewEditor.background": bg.elevated,
  /** 预览视图编辑器匹配高亮背景 */
  "peekViewEditor.matchHighlightBackground": withAlpha(accent.cyan, "35"),
  /** 预览视图编辑器边槽背景 */
  "peekViewEditorGutter.background": bg.elevated,

  // === 预览视图结果 ===
  /** 预览视图结果背景 */
  "peekViewResult.background": bg.elevated,
  /** 预览视图结果文件前景 */
  "peekViewResult.fileForeground": fg.primary,
  /** 预览视图结果行前景 */
  "peekViewResult.lineForeground": fg.secondary,
  /** 预览视图结果匹配高亮背景 */
  "peekViewResult.matchHighlightBackground": withAlpha(accent.cyan, "35"),
  /** 预览视图结果选中背景 */
  "peekViewResult.selectionBackground": bg.selection,
  /** 预览视图结果选中前景 */
  "peekViewResult.selectionForeground": fg.primary,

  // === 预览视图标题 ===
  /** 预览视图标题背景 */
  "peekViewTitle.background": bg.deep,
  /** 预览视图标题描述前景 */
  "peekViewTitleDescription.foreground": fg.primary,
  /** 预览视图标题标签前景 */
  "peekViewTitleLabel.foreground": fg.primary,
} as const;
