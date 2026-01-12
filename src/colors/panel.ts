/**
 * 面板颜色
 *
 * 包含底部面板（终端、输出、问题等）的背景、边框、标题等颜色配置
 */

import { fg, bg, border, withAlpha } from "../palette";

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
} as const;
