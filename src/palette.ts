/**
 * 调色板 - 所有颜色的唯一来源
 *
 * 颜色值完全来自 cursor.json，按语义分组
 * 这是整个主题的颜色基础，所有其他模块都应该引用这里的颜色常量
 */

// === 背景色 ===
// 用于各种 UI 元素的背景
export const bg = {
  /** 编辑器主背景 - editor.background */
  base: "#181818",
  /** 侧边栏/面板背景 - sideBar.background */
  elevated: "#141414",
  /** 行高亮背景 - editor.lineHighlightBackground */
  surface: "#262626",
  /** 选中项背景 - editorSuggestWidget.selectedBackground */
  selection: "#343434",
  /** 深色背景 - peekViewTitle.background */
  deep: "#242424",
  /** 输入框背景 - input.background */
  input: "#E4E4E40A",
} as const;

// === 前景色 ===
// 用于文本和图标
export const fg = {
  /** 主要文本 - foreground */
  primary: "#E4E4E4EB",
  /** 次要文本 - activityBar.foreground */
  secondary: "#E4E4E48D",
  /** 弱化文本 - editorLineNumber.foreground */
  muted: "#E4E4E442",
  /** 禁用文本 - input.placeholderForeground */
  disabled: "#E4E4E45E",
  /** 高亮文本 - terminal.ansiWhite */
  bright: "#E4E4E4",
  /** 标题栏活动前景 - titleBar.activeForeground */
  titleActive: "#E4E4E484",
} as const;

// === 边框色 ===
// 用于分隔线和边框
export const border = {
  /** 默认边框 - editorGroup.border */
  default: "#E4E4E413",
  /** 焦点边框 - focusBorder */
  focus: "#E4E4E426",
  /** 激活边框 - tree.indentGuidesStroke */
  active: "#E4E4E430",
  /** 微弱边框 - pickerGroup.border */
  subtle: "#E4E4E41C",
  /** 透明边框 */
  transparent: "#00000000",
} as const;


// === 徽章色 ===
// 用于活动栏徽章、通知徽章等提示性元素
export const badge = {
  /** 活动栏徽章背景 - 紫色半透明，用于重要通知 */
  activeBg: "#C2A0FD55",
  /** 活动栏徽章前景 - 纯白色，确保可读性 */
  activeFg: "#FFFFFF",
  /** 通用徽章背景 - 深紫色低透明度，用于次要提示 */
  defaultBg: "#4A3D6039",
  /** 通用徽章前景 - 半透明白色，柔和显示 */
  defaultFg: "#FFFFFF7F",
} as const;

// === 强调色 ===
// 用于高亮、徽章、按钮等强调元素
export const accent = {
  /** 主强调色 */
  blue: "#88C0D0",
  /** 备选蓝色 - button.background */
  blueAlt: "#81A1C1",
  /** 亮蓝色 - button.hoverBackground */
  blueBright: "#87A6C4",
  /** 成功/添加 - progressBar.background */
  green: "#3FA266",
  /** 亮绿色 - gitDecoration.addedResourceForeground */
  greenBright: "#70B489",
  /** 警告 - editorWarning.foreground */
  yellow: "#F1B467",
  /** 警告 - inputValidation.warningBorder */
  orange: "#D2943E",
  /** 修改 - editorGutter.modifiedBackground */
  violet: "#A995F1",
  /** 错误 - errorForeground */
  red: "#E34671",
  /** 亮红色 - terminal.ansiRed */
  redBright: "#FC6B83",
  /** 深红色 - editorOverviewRuler.errorForeground */
  redDark: "#B80049",
  /** 品红色 - terminal.ansiMagenta */
  magenta: "#B48EAD",
  /** 灰色 - button.secondaryBackground */
  gray: "#626262",
  /** 亮灰色 - button.secondaryHoverBackground */
  grayBright: "#818181",
} as const;

// === 语法高亮色 ===
// 用于代码语法高亮
// 注意：同一颜色统一使用小写
export const syntax = {
  /** 普通文本/变量 */
  text: "#d6d6dd",
  /** 关键字/控制流 - 清脆粉红色（大写形式） */
  keyword: "#FF8BA7",
  /** 关键字/控制流 - 清脆粉红色（小写形式） */
  keywordLower: "#ff8ba7",
  /** 表达式符号/操作符 - 青绿色（大写形式） */
  operator: "#82D2CE",
  /** 表达式符号/操作符 - 青绿色（小写形式） */
  operatorLower: "#82d2ce",
  /** 字符串 */
  string: "#e394dc",
  /** 函数名 */
  function: "#efb080",
  /** 数字 - 使用表达式符号色 */
  number: "#82D2CE",
  /** 类名 */
  class: "#87c3ff",
  /** 属性 - 大写形式 */
  property: "#AAA0FA",
  /** 属性 - 小写形式 */
  propertyLower: "#aaa0fa",
  /** 常量 */
  constant: "#f8c762",
  /** 指令/装饰器 */
  directive: "#a8cc7c",
  /** 语言变量 (this/self) - 大写形式 */
  self: "#CC7C8A",
  /** 语言变量 (this/self) - 小写形式 */
  selfLower: "#cc7c8a",
  /** 中性色 */
  neutral: "#CCCCCC",
  /** HTML 标签标点 */
  tag: "#A4A4A4",
  /** 标签名 */
  tagName: "#fad075",
  /** 错误诊断 */
  error: "#F14C4C",
  /** 变量读写 - 大写形式 */
  readwrite: "#87C3FF",
  /** 变量读写 - 小写形式 */
  readwriteLower: "#87c3ff",
} as const;

// === 选择和高亮色 ===
// 用于编辑器选择和高亮
export const selection = {
  /** 选择背景 - editor.selectionBackground */
  background: "#40404099",
  /** 选择高亮背景 - editor.selectionHighlightBackground */
  highlight: "#404040CC",
  /** 非活动选择背景 - editor.inactiveSelectionBackground */
  inactive: "#40404077",
  /** 范围高亮背景 - editor.rangeHighlightBackground */
  range: "#40404052",
} as const;

// === 阴影色 ===
export const shadow = {
  /** 小部件阴影 - widget.shadow */
  widget: "#00000066",
  /** 无阴影 */
  none: "#00000000",
} as const;

// === 透明度后缀 ===
// 用于为颜色添加透明度
export const alpha = {
  "100": "",       // 完全不透明
  "92": "EB",      // 高不透明度
  "55": "8D",      // 中等不透明度
  "52": "84",      // 中等偏低
  "40": "66",      // 中等
  "30": "4D",      // 低不透明度
  "27": "44",      // 较低
  "26": "42",      // 较低
  "20": "33",      // 更低
  "19": "30",      // 微弱
  "15": "26",      // 很微弱
  "13": "22",      // 极微弱
  "12": "1E",      // 极微弱
  "11": "1C",      // 几乎透明
  "10": "1A",      // 几乎透明
  "7": "11",       // 极淡
  "4": "0A",       // 几乎不可见
  "0": "00",       // 完全透明
} as const;

/**
 * 为颜色添加透明度
 *
 * @param color - 6 位或 8 位十六进制颜色值（带或不带 # 前缀）
 * @param opacity - 透明度级别（对应 alpha 对象的键）
 * @returns 8 位十六进制颜色字符串
 *
 * @example
 * withAlpha("#88C0D0", "40") // 返回 "#88C0D066"
 * withAlpha("E4E4E4", "55")  // 返回 "#E4E4E48D"
 */
export function withAlpha(color: string, opacity: keyof typeof alpha): string {
  // 移除 # 前缀（如果存在），并只取前 6 位
  const hex = color.startsWith("#") ? color.slice(1, 7) : color.slice(0, 6);
  return `#${hex}${alpha[opacity]}`;
}

// === 特殊颜色 ===
// 一些特殊用途的颜色
export const special = {
  /** 代码片段高亮背景 */
  snippetHighlight: "#CCCCCC55",
  /** 代码片段边框 */
  snippetBorder: "#CCCCCC",
  /** 空白字符前景 */
  whitespace: "#505050B3",
  /** 标记导航背景 */
  markerNav: "#ffffff70",
  /** 标记导航错误背景 */
  markerNavError: "#E34671C0",
  /** 小地图错误高亮 */
  minimapError: "#CD2A4F",
  /** 小地图警告高亮 */
  minimapWarning: "#ea7620",
} as const;
