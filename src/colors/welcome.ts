/**
 * 欢迎页与富文本颜色
 *
 * 覆盖欢迎页/演练、Markdown 警告块以及帮助文档中的引用与代码片段
 */

import { fg, bg, border, accent, withAlpha } from "../palette";

export const welcome = {
  // === 欢迎页 ===
  /** 欢迎页背景 */
  "welcomePage.background": bg.base,
  /** 磁贴背景 */
  "welcomePage.tileBackground": bg.elevated,
  /** 磁贴悬浮背景 */
  "welcomePage.tileHoverBackground": bg.card,
  /** 磁贴边框 */
  "welcomePage.tileBorder": border.default,
  /** 进度条背景 */
  "welcomePage.progress.background": bg.input,
  /** 进度条前景 */
  "welcomePage.progress.foreground": accent.violet,
  /** 演练步骤标题前景 */
  "walkthrough.stepTitle.foreground": fg.primary,

  // === Markdown 警告块 ===
  /** Note */
  "markdownAlert.note.foreground": accent.cyan,
  /** Tip */
  "markdownAlert.tip.foreground": accent.green,
  /** Important */
  "markdownAlert.important.foreground": accent.violet,
  /** Warning */
  "markdownAlert.warning.foreground": accent.yellow,
  /** Caution */
  "markdownAlert.caution.foreground": accent.coral,

  // === 富文本 ===
  /** 引用块背景 */
  "textBlockQuote.background": withAlpha(fg.bright, "5"),
  /** 引用块左边框 */
  "textBlockQuote.border": accent.violet,
  /** 代码块背景 */
  "textCodeBlock.background": withAlpha(fg.bright, "5"),
  /** 行内代码背景 */
  "textPreformat.background": withAlpha(fg.bright, "10"),
  /** 行内代码边框 */
  "textPreformat.border": border.subtle,
} as const;
