/**
 * 源代码管理图（SCM Graph）颜色
 *
 * 覆盖源代码管理视图中提交图的分支连线与引用标签
 */

import { fg, bg, accent, nature } from "../palette";

export const scmGraph = {
  // === 分支连线 ===
  /** 连线 1 - 天空蓝 */
  "scmGraph.foreground1": nature.sky,
  /** 连线 2 - 森林绿 */
  "scmGraph.foreground2": nature.forest,
  /** 连线 3 - 薰衣草紫 */
  "scmGraph.foreground3": nature.lavender,
  /** 连线 4 - 大地棕 */
  "scmGraph.foreground4": nature.earth,
  /** 连线 5 - 晨曦橙 */
  "scmGraph.foreground5": nature.dawn,

  // === 引用标签 ===
  /** 本地引用（分支/标签） */
  "scmGraph.historyItemRefColor": accent.violet,
  /** 远程引用 */
  "scmGraph.historyItemRemoteRefColor": accent.cyan,
  /** 基线引用 */
  "scmGraph.historyItemBaseRefColor": accent.yellow,

  // === 悬浮详情 ===
  /** 悬浮标签前景 */
  "scmGraph.historyItemHoverLabelForeground": fg.primary,
  /** 悬浮默认标签背景 */
  "scmGraph.historyItemHoverDefaultLabelBackground": bg.selection,
  /** 悬浮默认标签前景 */
  "scmGraph.historyItemHoverDefaultLabelForeground": fg.primary,
  /** 悬浮新增行前景 */
  "scmGraph.historyItemHoverAdditionsForeground": accent.green,
  /** 悬浮删除行前景 */
  "scmGraph.historyItemHoverDeletionsForeground": accent.coral,
} as const;
