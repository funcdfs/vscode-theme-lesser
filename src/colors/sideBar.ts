/**
 * 侧边栏颜色
 *
 * 包含侧边栏的背景、前景、边框、标题、分区头等颜色配置
 */

import { fg, bg, border, shadow, fileTree, withAlpha } from "../palette";

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
  // === 拖放 ===
  /** 侧边栏拖放背景 */
  "sideBar.dropBackground": withAlpha(fg.bright, "10"),

  // === 标题栏（补充）===
  /** 侧边栏标题背景 */
  "sideBarTitle.background": bg.elevated,
  /** 侧边栏标题边框 */
  "sideBarTitle.border": border.default,
  /** 侧边栏分区头边框 */
  "sideBarSectionHeader.border": border.subtle,
  /** 顶部活动栏与视图之间的分隔线 */
  "sideBarActivityBarTop.border": border.default,

  // === 粘性滚动 ===
  /** 粘性滚动背景 */
  "sideBarStickyScroll.background": bg.elevated,
  /** 粘性滚动边框 */
  "sideBarStickyScroll.border": border.subtle,
  /** 粘性滚动阴影 */
  "sideBarStickyScroll.shadow": shadow.widget,

} as const;
