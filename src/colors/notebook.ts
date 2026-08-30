/**
 * 笔记本（Notebook）颜色
 *
 * 覆盖 Jupyter / Interactive Window 单元格、输出容器、
 * 单元格滚动条与运行状态图标
 */

import { fg, bg, border, accent, withAlpha } from "../palette";

export const notebook = {
  // === 编辑区 ===
  /** 笔记本编辑器背景 */
  "notebook.editorBackground": bg.base,
  /** 单元格编辑器背景 */
  "notebook.cellEditorBackground": bg.elevated,
  /** 单元格边框 */
  "notebook.cellBorderColor": border.default,
  /** 单元格悬浮背景 */
  "notebook.cellHoverBackground": withAlpha(fg.bright, "5"),
  /** 单元格插入指示线 */
  "notebook.cellInsertionIndicator": accent.violet,
  /** 单元格工具栏分隔线 */
  "notebook.cellToolbarSeparator": border.subtle,
  /** 单元格状态栏项悬浮背景 */
  "notebook.cellStatusBarItemHoverBackground": withAlpha(accent.violet, "20"),

  // === 焦点与选中 ===
  /** 焦点单元格背景 */
  "notebook.focusedCellBackground": withAlpha(fg.bright, "5"),
  /** 焦点单元格边框 */
  "notebook.focusedCellBorder": accent.violet,
  /** 焦点编辑器边框 */
  "notebook.focusedEditorBorder": border.focus,
  /** 非焦点时的焦点单元格边框 */
  "notebook.inactiveFocusedCellBorder": border.active,
  /** 选中单元格背景 */
  "notebook.selectedCellBackground": withAlpha(accent.violet, "10"),
  /** 选中单元格边框 */
  "notebook.selectedCellBorder": withAlpha(accent.violet, "50"),
  /** 非焦点时的选中单元格边框 */
  "notebook.inactiveSelectedCellBorder": border.active,
  /** 符号高亮背景 */
  "notebook.symbolHighlightBackground": withAlpha(accent.cyan, "20"),

  // === 输出容器 ===
  /** 输出容器背景 */
  "notebook.outputContainerBackgroundColor": bg.elevated,
  /** 输出容器边框 */
  "notebook.outputContainerBorderColor": border.subtle,

  // === 滚动条 ===
  /** 单元格滚动条滑块背景 */
  "notebookScrollbarSlider.background": withAlpha(fg.bright, "10"),
  /** 单元格滚动条滑块悬浮背景 */
  "notebookScrollbarSlider.hoverBackground": withAlpha(fg.bright, "20"),
  /** 单元格滚动条滑块活动背景 */
  "notebookScrollbarSlider.activeBackground": withAlpha(fg.bright, "25"),

  // === 运行状态 ===
  /** 运行成功图标 */
  "notebookStatusSuccessIcon.foreground": accent.green,
  /** 运行错误图标 */
  "notebookStatusErrorIcon.foreground": accent.coral,
  /** 运行中图标 */
  "notebookStatusRunningIcon.foreground": accent.cyan,
  /** 概览标尺上的运行中单元格标记 */
  "notebookEditorOverviewRuler.runningCellForeground": accent.cyan,
} as const;
