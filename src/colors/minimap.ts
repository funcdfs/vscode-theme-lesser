/**
 * 小地图颜色
 *
 * 包含编辑器右侧小地图的颜色配置
 * 用于显示代码概览、高亮、错误、警告等
 */

import { accent, bg, fg, special, withAlpha } from "../palette";

export const minimap = {
  // === 小地图背景 ===
  /** 小地图背景 */
  "minimap.background": bg.base,

  // === 高亮 ===
  /** 查找匹配高亮 */
  "minimap.findMatchHighlight": withAlpha(accent.cyan, "35"),
  /** 选择高亮 */
  "minimap.selectionHighlight": withAlpha(fg.bright, "10"),
  /** 错误高亮 */
  "minimap.errorHighlight": special.minimapError,
  /** 警告高亮 */
  "minimap.warningHighlight": special.minimapWarning,

  // === 小地图边槽 ===
  /** 添加标记背景 */
  "minimapGutter.addedBackground": accent.green,
  /** 修改标记背景 */
  "minimapGutter.modifiedBackground": accent.violet,
  /** 删除标记背景 */
  "minimapGutter.deletedBackground": accent.coral,
} as const;
