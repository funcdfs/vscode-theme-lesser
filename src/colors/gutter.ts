/**
 * 边槽颜色
 *
 * 包含编辑器边槽（行号左侧区域）和概览标尺的颜色配置
 * 用于显示添加、删除、修改等 Git 状态标记
 */

import { accent, bg, border, withAlpha } from "../palette";

export const gutter = {
  // === 编辑器边槽 ===
  /** 边槽背景 */
  "editorGutter.background": bg.base,
  /** 添加标记背景 */
  "editorGutter.addedBackground": accent.green,
  /** 删除标记背景 */
  "editorGutter.deletedBackground": accent.red,
  /** 修改标记背景 */
  "editorGutter.modifiedBackground": accent.violet,
  /** 添加标记次要背景 */
  "editorGutter.addedSecondaryBackground": accent.green,
  /** 删除标记次要背景 */
  "editorGutter.deletedSecondaryBackground": accent.red,
  /** 修改标记次要背景 */
  "editorGutter.modifiedSecondaryBackground": accent.violet,

  // === 概览标尺（滚动条旁边的标记） ===
  /** 概览标尺边框（透明） */
  "editorOverviewRuler.border": border.transparent,
  /** 添加标记前景 */
  "editorOverviewRuler.addedForeground": withAlpha(accent.green, "52"),
  /** 删除标记前景 */
  "editorOverviewRuler.deletedForeground": withAlpha(accent.red, "52"),
  /** 修改标记前景 */
  "editorOverviewRuler.modifiedForeground": withAlpha(accent.violet, "52"),
  /** 错误标记前景 */
  "editorOverviewRuler.errorForeground": accent.redDark,
  /** 警告标记前景 */
  "editorOverviewRuler.warningForeground": withAlpha(accent.yellow, "52"),
  /** 信息标记前景 */
  "editorOverviewRuler.infoForeground": withAlpha(accent.blue, "52"),
  /** 查找匹配前景 */
  "editorOverviewRuler.findMatchForeground": "#E4E4E411",
} as const;
