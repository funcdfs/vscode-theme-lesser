/**
 * 标签页颜色
 *
 * 包含编辑器标签页的活动、非活动、悬浮等状态颜色配置
 * 以及标签页头部区域的颜色配置
 */

import { fg, bg, border, accent, withAlpha } from "../palette";

export const tabs = {
  // === 标签页头部 ===
  /** 无标签页时的背景 */
  "editorGroupHeader.noTabsBackground": bg.elevated,
  /** 标签页区域背景 */
  "editorGroupHeader.tabsBackground": bg.elevated,
  /** 标签页区域边框 */
  "editorGroupHeader.tabsBorder": border.default,

  // === 活动标签页 ===
  /** 活动标签页背景 */
  "tab.activeBackground": bg.base,
  /** 活动标签页底部边框 */
  "tab.activeBorder": bg.base,
  /** 活动标签页顶部边框 - 紫罗兰色，作为主题色标识当前标签 */
  "tab.activeBorderTop": accent.violet,
  /** 活动标签页前景 */
  "tab.activeForeground": fg.primary,

  // === 非活动标签页 ===
  /** 非活动标签页背景 */
  "tab.inactiveBackground": bg.elevated,
  /** 非活动标签页前景 */
  "tab.inactiveForeground": fg.muted,

  // === 标签页边框 ===
  /** 标签页边框 */
  "tab.border": border.default,

  // === 悬浮状态 ===
  /** 标签页悬浮背景（透明） */
  "tab.hoverBackground": withAlpha(fg.primary, "0"),

  // === 未聚焦状态 ===
  /** 未聚焦时活动标签页边框 */
  "tab.unfocusedActiveBorder": bg.base,
  /** 未聚焦时活动标签页顶部边框 - 降低透明度的紫罗兰色 */
  "tab.unfocusedActiveBorderTop": withAlpha(accent.violet, "52"),
  /** 未聚焦时活动标签页前景 */
  "tab.unfocusedActiveForeground": fg.secondary,
  /** 未聚焦时悬浮背景 */
  "tab.unfocusedHoverBackground": "#2A2A2AB3",
  /** 未聚焦时悬浮边框（透明） */
  "tab.unfocusedHoverBorder": "#88C0D000",
  /** 未聚焦时非活动标签页前景 */
  "tab.unfocusedInactiveForeground": fg.secondary,

  // === 修改状态（未保存文件）===
  /** 活动标签页修改边框 */
  "tab.activeModifiedBorder": accent.violet,
  /** 非活动标签页修改边框 */
  "tab.inactiveModifiedBorder": withAlpha(accent.violet, "52"),
  /** 未聚焦时活动标签页修改边框 */
  "tab.unfocusedActiveModifiedBorder": withAlpha(accent.violet, "52"),
  /** 未聚焦时非活动标签页修改边框 */
  "tab.unfocusedInactiveModifiedBorder": withAlpha(accent.violet, "40"),
} as const;
