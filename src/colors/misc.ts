/**
 * 其他颜色
 *
 * 包含进度条、滚动条、树形视图、面包屑等杂项 UI 元素的颜色配置
 */

import { fg, bg, border, accent, shadow, withAlpha, fileTree, selection } from "../palette";

export const misc = {
  // === 进度条 ===
  /** 进度条背景 */
  "progressBar.background": accent.green,

  // === 滚动条 ===
  /** 滚动条阴影 */
  "scrollbar.shadow": shadow.none,
  /** 滚动条滑块背景 */
  "scrollbarSlider.background": withAlpha(fg.bright, "10"),
  /** 滚动条滑块悬浮背景 */
  "scrollbarSlider.hoverBackground": withAlpha(fg.bright, "20"),
  /** 滚动条滑块活动背景 */
  "scrollbarSlider.activeBackground": withAlpha(fg.bright, "20"),

  // === 拖动条（Sash）===
  /** 拖动条悬浮边框 - 文件树紫色 */
  "sash.hoverBorder": fileTree.modified,

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

  // === 设置编辑器 ===
  /** 设置修改指示器 */
  "settings.modifiedItemIndicator": accent.violet,

  // === 快速输入（命令面板/搜索框）===
  /** 快速输入背景 - 与侧边栏背景融为一体 */
  "quickInput.background": bg.elevated,
  /** 快速输入前景 */
  "quickInput.foreground": fg.primary,
  /** 快速输入列表焦点背景 */
  "quickInputList.focusBackground": selection.active,
  /** 快速输入列表焦点前景 */
  "quickInputList.focusForeground": fg.primary,
  /** 快速输入标题背景 */
  "quickInputTitle.background": bg.elevated,
  // === 滚动条（补充）===
  /** 滚动条轨道背景 - 透明 */
  "scrollbar.background": border.transparent,

  // === 面包屑（补充）===
  /** 面包屑焦点前景 */
  "breadcrumb.focusForeground": fg.primary,

  // === 问题面板图标 ===
  /** 错误图标 */
  "problemsErrorIcon.foreground": accent.coral,
  /** 警告图标 */
  "problemsWarningIcon.foreground": accent.yellow,
  /** 信息图标 */
  "problemsInfoIcon.foreground": accent.cyan,

  // === 评论视图 ===
  /** 已解决评论图标 */
  "commentsView.resolvedIcon": fg.muted,
  /** 未解决评论图标 */
  "commentsView.unresolvedIcon": accent.violet,

  // === 端口转发 ===
  /** 运行中进程的端口图标 */
  "ports.iconRunningProcessForeground": accent.green,

  // === 搜索 ===
  /** 搜索结果统计信息前景 */
  "search.resultsInfoForeground": fg.muted,
  /** 搜索编辑器匹配背景 */
  "searchEditor.findMatchBackground": withAlpha(accent.cyan, "35"),
  /** 搜索编辑器匹配边框 */
  "searchEditor.findMatchBorder": withAlpha(accent.cyan, "50"),
  /** 简易查找框拖动条边框 */
  "simpleFindWidget.sashBorder": border.default,

  // === 快速输入（补充）===
  /** 列表匹配高亮前景 */
  "quickInputList.focusHighlightForeground": accent.cyan,
  /** 列表焦点项图标前景 */
  "quickInputList.focusIconForeground": fg.primary,
  /** 列表焦点背景（旧键名兼容） */
  "quickInput.list.focusBackground": selection.active,

} as const;
