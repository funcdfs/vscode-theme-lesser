/**
 * 边槽颜色
 *
 * 包含编辑器边槽（行号左侧区域）和概览标尺的颜色配置
 * 用于显示添加、删除、修改等 Git 状态标记
 */

import { accent, bg, border, fg, nature, withAlpha } from "../palette";

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
  // === 编辑器边槽（补充）===
  /** 折叠控件前景 */
  "editorGutter.foldingControlForeground": fg.muted,
  /** 可评论范围标记前景 */
  "editorGutter.commentRangeForeground": fg.disabled,
  /** 评论图标前景 */
  "editorGutter.commentGlyphForeground": fg.secondary,
  /** 未解决评论图标前景 */
  "editorGutter.commentUnresolvedGlyphForeground": accent.violet,
  /** 草稿评论图标前景 */
  "editorGutter.commentDraftGlyphForeground": fg.muted,
  /** 边槽条目背景 */
  "editorGutter.itemBackground": withAlpha(fg.bright, "10"),
  /** 边槽条目图标前景 */
  "editorGutter.itemGlyphForeground": fg.primary,

  // === 概览标尺（补充）===
  /** 概览标尺背景 */
  "editorOverviewRuler.background": bg.base,
  /** 括号匹配标记 */
  "editorOverviewRuler.bracketMatchForeground": withAlpha(nature.lavender, "50"),
  /** 范围高亮标记 */
  "editorOverviewRuler.rangeHighlightForeground": withAlpha(accent.violet, "35"),
  /** 选择高亮标记 */
  "editorOverviewRuler.selectionHighlightForeground": withAlpha(accent.green, "35"),
  /** 单词高亮标记 */
  "editorOverviewRuler.wordHighlightForeground": withAlpha(fg.primary, "35"),
  /** 单词强高亮标记 */
  "editorOverviewRuler.wordHighlightStrongForeground": withAlpha(accent.violet, "35"),
  /** 单词文本高亮标记 */
  "editorOverviewRuler.wordHighlightTextForeground": withAlpha(fg.primary, "25"),
  /** 评论标记 */
  "editorOverviewRuler.commentForeground": withAlpha(accent.cyan, "50"),
  /** 未解决评论标记 */
  "editorOverviewRuler.commentUnresolvedForeground": withAlpha(accent.violet, "50"),
  /** 草稿评论标记 */
  "editorOverviewRuler.commentDraftForeground": withAlpha(fg.muted, "50"),
  /** 合并 - 公共内容标记 */
  "editorOverviewRuler.commonContentForeground": withAlpha(fg.muted, "35"),
  /** 合并 - 当前内容标记 */
  "editorOverviewRuler.currentContentForeground": withAlpha(accent.cyan, "50"),
  /** 合并 - 传入内容标记 */
  "editorOverviewRuler.incomingContentForeground": withAlpha(accent.green, "50"),

} as const;
