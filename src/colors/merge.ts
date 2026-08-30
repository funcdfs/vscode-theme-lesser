/**
 * 合并冲突颜色
 *
 * 包含 Git 合并冲突时的当前内容、传入内容等颜色配置
 */

import { accent, border, fg, withAlpha } from "../palette";

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
  // === 公共内容（Base）===
  /** 公共内容背景 */
  "merge.commonContentBackground": withAlpha(fg.muted, "20"),
  /** 公共内容头部背景 */
  "merge.commonHeaderBackground": withAlpha(fg.muted, "35"),

  // === 三向合并编辑器 ===
  /** 变更区域背景 */
  "mergeEditor.change.background": withAlpha(accent.green, "15"),
  /** 变更单词背景 */
  "mergeEditor.change.word.background": withAlpha(accent.green, "30"),
  /** Base 侧变更背景 */
  "mergeEditor.changeBase.background": withAlpha(accent.yellow, "15"),
  /** Base 侧变更单词背景 */
  "mergeEditor.changeBase.word.background": withAlpha(accent.yellow, "30"),
  /** 冲突行背景 */
  "mergeEditor.conflictingLines.background": withAlpha(accent.orange, "20"),
  /** 输入 1 背景 */
  "mergeEditor.conflict.input1.background": withAlpha(accent.cyan, "20"),
  /** 输入 2 背景 */
  "mergeEditor.conflict.input2.background": withAlpha(accent.green, "20"),
  /** 未处理冲突边框（聚焦） */
  "mergeEditor.conflict.unhandledFocused.border": accent.orange,
  /** 未处理冲突边框（未聚焦） */
  "mergeEditor.conflict.unhandledUnfocused.border": withAlpha(accent.orange, "50"),
  /** 已处理冲突边框（聚焦） */
  "mergeEditor.conflict.handledFocused.border": withAlpha(accent.green, "75"),
  /** 已处理冲突边框（未聚焦） */
  "mergeEditor.conflict.handledUnfocused.border": withAlpha(accent.green, "35"),
  /** 未处理冲突在小地图/概览标尺上的标记 */
  "mergeEditor.conflict.unhandled.minimapOverViewRuler": accent.orange,
  /** 已处理冲突在小地图/概览标尺上的标记 */
  "mergeEditor.conflict.handled.minimapOverViewRuler": accent.green,

} as const;
