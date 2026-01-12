/**
 * 侧边栏颜色
 *
 * 包含侧边栏的背景、前景、边框、标题、分区头等颜色配置
 */

import { fg, bg, border, fileTree } from "../palette";

export const sideBar = {
  // === 侧边栏基础 ===
  /** 侧边栏背景 */
  "sideBar.background": bg.elevated,
  /** 侧边栏前景 - 正常文件使用奶白色 */
  "sideBar.foreground": fileTree.normal,
  /** 侧边栏边框 */
  "sideBar.border": border.default,

  // === 侧边栏标题 ===
  /** 侧边栏标题前景 */
  "sideBarTitle.foreground": fg.secondary,

  // === 侧边栏分区头 ===
  /** 侧边栏分区头背景 */
  "sideBarSectionHeader.background": bg.elevated,
  /** 侧边栏分区头前景 */
  "sideBarSectionHeader.foreground": fg.muted,
} as const;
