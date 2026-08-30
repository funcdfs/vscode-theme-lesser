/**
 * 菜单颜色
 *
 * 包含菜单和菜单栏的背景、前景、边框、分隔符等颜色配置
 */

import { fg, bg, border, withAlpha, accent } from "../palette";

export const menu = {
  // === 菜单 ===
  /** 菜单背景 */
  "menu.background": bg.elevated,
  /** 菜单前景 */
  "menu.foreground": fg.primary,
  /** 菜单边框 */
  "menu.border": border.default,
  /** 菜单分隔符背景 */
  "menu.separatorBackground": border.default,

  // === 菜单栏 ===
  /** 菜单栏选择背景 - 紫色调 */
  "menubar.selectionBackground": withAlpha(accent.violet, "10"),
  // === 菜单选中项 ===
  /** 选中项背景 - 紫色调 */
  "menu.selectionBackground": withAlpha(accent.violet, "20"),
  /** 选中项前景 */
  "menu.selectionForeground": fg.primary,
  /** 选中项边框 - 透明 */
  "menu.selectionBorder": border.transparent,

  // === 菜单栏（补充）===
  /** 菜单栏选中项前景 */
  "menubar.selectionForeground": fg.primary,
  /** 菜单栏选中项边框 - 透明 */
  "menubar.selectionBorder": border.transparent,

} as const;
