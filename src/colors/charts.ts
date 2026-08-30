/**
 * 图表颜色
 *
 * 覆盖工作台内的图表渲染（如扩展用量、终端 CPU 曲线等）
 */

import { fg, border, accent, withAlpha } from "../palette";

export const charts = {
  // === 图表调色 ===
  /** 图表前景 */
  "charts.foreground": fg.primary,
  /** 图表横向辅助线 */
  "charts.lines": border.default,
  /** 蓝色 */
  "charts.blue": accent.blue,
  /** 橙色 */
  "charts.orange": accent.orange,
  /** 紫色 */
  "charts.purple": accent.violet,

  // === 图表骨架 ===
  /** 折线颜色 */
  "chart.line": accent.violet,
  /** 坐标轴 */
  "chart.axis": withAlpha(fg.muted, "60"),
  /** 网格参考线 */
  "chart.guide": withAlpha(fg.muted, "25"),
} as const;
