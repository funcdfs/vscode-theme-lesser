/**
 * 面板颜色
 *
 * 包含底部面板（终端、输出、问题等）的背景、边框、标题等颜色配置
 */

import { fg, bg, border, badge, shadow, accent, withAlpha } from "../palette";

export const panel = {
  // === 面板基础 ===
  /** 面板背景 */
  "panel.background": bg.elevated,
  /** 面板边框 */
  "panel.border": border.default,

  // === 面板标题 ===
  /** 面板标题活动边框（透明） */
  "panelTitle.activeBorder": withAlpha(fg.primary, "0"),
  /** 面板标题活动前景 */
  "panelTitle.activeForeground": fg.primary,
  /** 面板标题非活动前景 */
  "panelTitle.inactiveForeground": fg.secondary,
  // === 拖放与边框 ===
  /** 面板拖放边框 */
  "panel.dropBorder": accent.violet,
  /** 面板标题栏边框 */
  "panelTitle.border": border.default,
  /** 面板输入框边框 */
  "panelInput.border": border.default,

  // === 面板标题徽章 ===
  /** 标题徽章背景 */
  "panelTitleBadge.background": badge.defaultBg,
  /** 标题徽章前景 */
  "panelTitleBadge.foreground": badge.defaultFg,

  // === 面板分区（多视图堆叠）===
  /** 分区边框 */
  "panelSection.border": border.default,
  /** 分区拖放背景 */
  "panelSection.dropBackground": withAlpha(fg.bright, "10"),
  /** 分区头背景 */
  "panelSectionHeader.background": bg.elevated,
  /** 分区头前景 */
  "panelSectionHeader.foreground": fg.muted,
  /** 分区头边框 */
  "panelSectionHeader.border": border.subtle,

  // === 粘性滚动 ===
  /** 粘性滚动背景 */
  "panelStickyScroll.background": bg.elevated,
  /** 粘性滚动边框 */
  "panelStickyScroll.border": border.subtle,
  /** 粘性滚动阴影 */
  "panelStickyScroll.shadow": shadow.widget,

} as const;
