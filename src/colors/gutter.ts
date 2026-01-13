/**
 * 边槽颜色
 *
 * 包含编辑器边槽（行号左侧区域）和概览标尺的颜色配置
 * 用于显示添加、删除、修改等 Git 状态标记
 */

import { accent, bg, border, fg, withAlpha } from "../palette";

export const gutter = {
  // === 编辑器边槽 ===
  /** 边槽背景 */
  "editorGutter.background": bg.base,
  /** 添加标记背景 */
  "editorGutter.addedBackground": accent.green,
  /** 删除标记背景 */
  "editorGutter.deletedBackground": accent.coral,
  /** 修改标记背景 */
  "editorGutter.modifiedBackground": accent.violet,
  /** 添加标记次要背景 */
  "editorGutter.addedSecondaryBackground": accent.green,
  /** 删除标记次要背景 */
  "editorGutter.deletedSecondaryBackground": accent.coral,
  /** 修改标记次要背景 */
  "editorGutter.modifiedSecondaryBackground": accent.violet,

  // === 概览标尺（滚动条旁边的标记） ===
  /** 概览标尺边框（透明） */
  "editorOverviewRuler.border": border.transparent,
  /** 添加标记前景 */
  "editorOverviewRuler.addedForeground": withAlpha(accent.green, "50"),
  /** 删除标记前景 */
  "editorOverviewRuler.deletedForeground": withAlpha(accent.coral, "50"),
  /** 修改标记前景 */
  "editorOverviewRuler.modifiedForeground": withAlpha(accent.violet, "50"),
  /** 错误标记前景 */
  "editorOverviewRuler.errorForeground": accent.coral,
  /** 警告标记前景 */
  "editorOverviewRuler.warningForeground": withAlpha(accent.yellow, "50"),
  /** 信息标记前景 */
  "editorOverviewRuler.infoForeground": withAlpha(accent.cyan, "50"),
  /** 查找匹配前景 */
  "editorOverviewRuler.findMatchForeground": withAlpha(fg.bright, "10"),
} as const;
