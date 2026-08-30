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
  // === 小地图渲染 ===
  /** 代码不透明度 - alpha 控制小地图内容的淡出程度 */
  "minimap.foregroundOpacity": "#000000CC",

  // === 高亮（补充）===
  /** 信息高亮 */
  "minimap.infoHighlight": withAlpha(accent.cyan, "50"),
  /** 选中词出现位置高亮 */
  "minimap.selectionOccurrenceHighlight": withAlpha(fg.muted, "50"),
  /** AI 编辑高亮 */
  "minimap.chatEditHighlight": withAlpha(accent.violet, "35"),

  // === 小地图滑块 ===
  /** 滑块背景 */
  "minimapSlider.background": withAlpha(fg.bright, "10"),
  /** 滑块悬浮背景 */
  "minimapSlider.hoverBackground": withAlpha(fg.bright, "20"),
  /** 滑块活动背景 */
  "minimapSlider.activeBackground": withAlpha(fg.bright, "25"),

} as const;
