/**
 * 其他颜色
 *
 * 包含进度条、滚动条、树形视图、面包屑等杂项 UI 元素的颜色配置
 */

import { fg, bg, border, accent, shadow, withAlpha } from "../palette";

export const misc = {
  // === 进度条 ===
  /** 进度条背景 */
  "progressBar.background": accent.green,

  // === 滚动条 ===
  /** 滚动条阴影 */
  "scrollbar.shadow": shadow.none,
  /** 滚动条滑块背景 */
  "scrollbarSlider.background": withAlpha(fg.bright, "7"),
  /** 滚动条滑块悬浮背景 */
  "scrollbarSlider.hoverBackground": withAlpha(fg.bright, "12"),
  /** 滚动条滑块活动背景 */
  "scrollbarSlider.activeBackground": withAlpha(fg.bright, "12"),

  // === 树形视图 ===
  /** 树形视图缩进指南描边 */
  "tree.indentGuidesStroke": border.active,
  /** 树形视图非活动缩进指南描边 */
  "tree.inactiveIndentGuidesStroke": border.default,

  // === 面包屑 ===
  /** 面包屑背景 */
  "breadcrumb.background": bg.base,
  /** 面包屑前景 */
  "breadcrumb.foreground": fg.secondary,
  /** 面包屑活动选择前景 */
  "breadcrumb.activeSelectionForeground": fg.primary,
  /** 面包屑选择器背景 */
  "breadcrumbPicker.background": bg.elevated,
} as const;
