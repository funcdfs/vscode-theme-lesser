/**
 * 调试颜色
 *
 * 覆盖断点与调试工具栏图标、变量视图的值着色、
 * 调试控制台以及调试时的堆栈帧高亮
 */

import { fg, border, accent, syntax, withAlpha } from "../palette";

export const debug = {
  // === 断点图标 ===
  /** 断点 */
  "debugIcon.breakpointForeground": accent.red,
  /** 已禁用断点 */
  "debugIcon.breakpointDisabledForeground": fg.disabled,
  /** 未验证断点 */
  "debugIcon.breakpointUnverifiedForeground": fg.muted,
  /** 当前堆栈帧 */
  "debugIcon.breakpointCurrentStackframeForeground": accent.yellow,
  /** 堆栈帧 */
  "debugIcon.breakpointStackframeForeground": accent.orange,

  // === 调试工具栏图标 ===
  /** 启动 */
  "debugIcon.startForeground": accent.green,
  /** 继续 */
  "debugIcon.continueForeground": accent.blue,
  /** 暂停 */
  "debugIcon.pauseForeground": accent.cyan,
  /** 停止 */
  "debugIcon.stopForeground": accent.coral,
  /** 断开连接 */
  "debugIcon.disconnectForeground": accent.coral,
  /** 重启 */
  "debugIcon.restartForeground": accent.green,
  /** 单步跳过 */
  "debugIcon.stepOverForeground": accent.blue,
  /** 单步进入 */
  "debugIcon.stepIntoForeground": accent.blue,
  /** 单步跳出 */
  "debugIcon.stepOutForeground": accent.blue,
  /** 单步回退 */
  "debugIcon.stepBackForeground": accent.blue,
  /** 调试工具栏边框 */
  "debugToolBar.border": border.default,

  // === 变量视图取值着色 ===
  /** 变量名 */
  "debugTokenExpression.name": syntax.property,
  /** 变量值 */
  "debugTokenExpression.value": syntax.text,
  /** 字符串值 */
  "debugTokenExpression.string": syntax.string,
  /** 数字值 */
  "debugTokenExpression.number": syntax.number,
  /** 布尔值 */
  "debugTokenExpression.boolean": syntax.keyword,
  /** 类型 */
  "debugTokenExpression.type": syntax.class,
  /** 错误值 */
  "debugTokenExpression.error": accent.coral,

  // === 调试视图标签 ===
  /** 状态标签背景 */
  "debugView.stateLabelBackground": withAlpha(accent.violet, "20"),
  /** 状态标签前景 */
  "debugView.stateLabelForeground": fg.primary,
  /** 异常标签背景 */
  "debugView.exceptionLabelBackground": withAlpha(accent.coral, "35"),
  /** 异常标签前景 */
  "debugView.exceptionLabelForeground": fg.primary,
  /** 值变更高亮 */
  "debugView.valueChangedHighlight": accent.violet,

  // === 调试控制台 ===
  /** 信息输出 */
  "debugConsole.infoForeground": accent.cyan,
  /** 警告输出 */
  "debugConsole.warningForeground": accent.yellow,
  /** 错误输出 */
  "debugConsole.errorForeground": accent.coral,
  /** 来源标签 */
  "debugConsole.sourceForeground": fg.muted,
  /** 输入提示图标 */
  "debugConsoleInputIcon.foreground": accent.violet,

  // === 编辑器内的调试高亮 ===
  /** 当前堆栈帧所在行背景 */
  "editor.stackFrameHighlightBackground": withAlpha(accent.yellow, "20"),
  /** 聚焦堆栈帧所在行背景 */
  "editor.focusedStackFrameHighlightBackground": withAlpha(accent.green, "20"),
} as const;
