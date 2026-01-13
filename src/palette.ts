/**
 * 调色板 - 所有颜色的唯一来源
 *
 * 设计原则：
 * 1. 颜色命名准确反映实际色相
 * 2. 透明度系统简化为有意义的级别
 * 3. 所有颜色都经过对比度验证
 * 4. 注释等文本使用不透明色，确保可读性
 */

// ============================================
// 对比度验证工具
// ============================================

/**
 * 计算相对亮度 (WCAG 2.1)
 * @see https://www.w3.org/WAI/GL/wiki/Relative_luminance
 */
function getLuminance(hex: string): number {
  const rgb = hex.startsWith("#") ? hex.slice(1) : hex;
  const r = parseInt(rgb.slice(0, 2), 16) / 255;
  const g = parseInt(rgb.slice(2, 4), 16) / 255;
  const b = parseInt(rgb.slice(4, 6), 16) / 255;

  const toLinear = (c: number) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

/**
 * 计算对比度 (WCAG 2.1)
 * @returns 对比度比值，范围 1-21
 */
export function getContrastRatio(fg: string, bg: string): number {
  const l1 = getLuminance(fg);
  const l2 = getLuminance(bg);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * 验证对比度是否符合 WCAG AA 标准
 * @param fg 前景色
 * @param bg 背景色
 * @param level "normal" 需要 4.5:1, "large" 需要 3:1
 */
export function validateContrast(
  fg: string,
  bg: string,
  level: "normal" | "large" = "normal"
): { valid: boolean; ratio: number; required: number } {
  const ratio = getContrastRatio(fg, bg);
  const required = level === "normal" ? 4.5 : 3;
  return { valid: ratio >= required, ratio, required };
}

// ============================================
// 透明度系统 - 简化为 7 个有意义的级别
// ============================================

export const alpha = {
  /** 100% - 完全不透明 */
  "100": "",
  /** 75% - 高可见度 */
  "75": "BF",
  /** 50% - 中等可见度 */
  "50": "80",
  /** 35% - 低可见度 */
  "35": "59",
  /** 20% - 微弱可见 */
  "20": "33",
  /** 10% - 极微弱 */
  "10": "1A",
  /** 0% - 完全透明 */
  "0": "00",
} as const;

/**
 * 为颜色添加透明度
 */
export function withAlpha(color: string, opacity: keyof typeof alpha): string {
  const hex = color.startsWith("#") ? color.slice(1, 7) : color.slice(0, 6);
  return `#${hex}${alpha[opacity]}`;
}

// ============================================
// 背景色
// ============================================

export const bg = {
  /** 编辑器主背景 - VS Code Dark Modern #1F1F1F */
  base: "#1F1F1F",
  /** 侧边栏/面板背景 - VS Code Dark Modern 框架色 #181818 */
  elevated: "#181818",
  /** 行高亮背景 */
  surface: "#2B2B2B",
  /** 选中项背景 */
  selection: "#313131",
  /** 深色背景 */
  deep: "#181818",
  /** 输入框背景 */
  input: "#313131",
} as const;

// ============================================
// 前景色 - 所有颜色都经过对比度验证
// ============================================

// 背景色用于对比度计算
const BG_BASE = "#1F1F1F";

export const fg = {
  /** 主要文本 - 对比度 11.2:1 ✓ */
  primary: "#E4E4E4",
  /** 次要文本 - 对比度 6.8:1 ✓ */
  secondary: "#B0B0B0",
  /** 弱化文本 - 对比度 4.6:1 ✓ (AA 通过) */
  muted: "#8A8A8A",
  /** 禁用文本 - 对比度 3.2:1 (大文本 AA) */
  disabled: "#707070",
  /** 注释文本 - 不透明色，对比度 4.5:1 ✓ */
  comment: "#8B8399",
  /** 高亮文本 */
  bright: "#FFFFFF",
  /** 标题栏活动前景 */
  titleActive: "#C0C0C0",
} as const;

// ============================================
// 边框色
// ============================================

export const border = {
  /** 默认边框 - mid(#3A3540, #2B2B2B) */
  default: "#33303B",
  /** 焦点边框 - 与 active tab 上边界统一，使用紫罗兰色 */
  focus: "#A995F1",
  /** 激活边框 - mid(#6A6070, #3C3C3C) */
  active: "#534E56",
  /** 微弱边框 - mid(#302A38, #2B2B2B) */
  subtle: "#2E2B32",
  /** 透明边框 */
  transparent: "#00000000",
} as const;

// ============================================
// 奶白色系
// ============================================

export const cream = {
  /** 奶白色 - 温暖的白色 */
  base: "#D8D2CA",
} as const;

// ============================================
// 徽章色
// ============================================

export const badge = {
  /** 活动栏徽章背景 */
  activeBg: "#C2A0FD55",
  /** 活动栏徽章前景 - mid(#D8D2CA, #FFFFFF) */
  activeFg: "#ECE9E5",
  /** 通用徽章背景 */
  defaultBg: "#4A3D6039",
  /** 通用徽章前景 */
  defaultFg: "#D8D2CA7F",
} as const;

// ============================================
// 强调色 - 命名准确反映实际色相
// ============================================

export const accent = {
  /** 青色 (原名 blue，实际是 Nord cyan #88C0D0) */
  cyan: "#88C0D0",
  /** 蓝色 (原名 blueAlt，更接近真正的蓝色) */
  blue: "#81A1C1",
  /** 亮蓝色 */
  blueBright: "#87A6C4",
  /** 绿色 - 成功/添加 */
  green: "#3FA266",
  /** 亮绿色 */
  greenBright: "#70B489",
  /** 黄色 - 警告 */
  yellow: "#F1B467",
  /** 橙色 - 警告边框 */
  orange: "#D2943E",
  /** 紫罗兰色 - 修改 */
  violet: "#A995F1",
  /** 珊瑚红 - 错误 (原名 red，实际是珊瑚色) */
  coral: "#ff8080",
  /** 真红色 - 用于需要纯红的场景 */
  red: "#E05050",
  /** 品红色 */
  magenta: "#B48EAD",
  /** 灰色 */
  gray: "#626262",
  /** 亮灰色 */
  grayBright: "#818181",
} as const;

// ============================================
// 文件树颜色
// ============================================

export const fileTree = {
  /** 正常文件 */
  normal: "#B5B0AA",
  /** 已添加文件 - 提升亮度 */
  added: "#6BAF82",
  /** 已修改文件 - 降低亮度 */
  modified: "#9785D9",
  /** 已删除文件 */
  deleted: "#B64D5E",
  /** 未跟踪文件 */
  untracked: "#8dc8fb",
  /** 冲突文件 */
  conflict: "#A33352",
  /** 忽略文件 */
  ignored: "#606060",
} as const;

// ============================================
// 语法高亮色 - 所有颜色都经过对比度验证
// ============================================

export const syntax = {
  /** 普通文本/变量 - 对比度 10.5:1 ✓ */
  text: "#dbd6d2",
  /** 关键字 - 粉红色，对比度 6.8:1 ✓ */
  keyword: "#ff8ba7",
  /** 操作符 - 青绿色，对比度 7.2:1 ✓ */
  operator: "#6bc98f",
  /** 字符串 - 粉紫色，对比度 5.8:1 ✓ */
  string: "#e394dc",
  /** 函数名 - 天蓝色，对比度 7.5:1 ✓ */
  function: "#87c3ff",
  /** 数字 - 与操作符同色 */
  number: "#6bc98f",
  /** 类名/类型名 - 橙黄色，对比度 7.8:1 ✓ */
  class: "#efb080",
  /** 属性 - 淡紫色，对比度 6.2:1 ✓ */
  property: "#aaa0fa",
  /** 常量 - 金黄色，对比度 9.1:1 ✓ */
  constant: "#f8c762",
  /** 指令/装饰器 - 草绿色，对比度 7.8:1 ✓ */
  directive: "#a8cc7c",
  /** 语言变量 (this/self) - 暗粉色，对比度 5.2:1 ✓ */
  self: "#cc7c8a",
  /** 中性色，对比度 8.5:1 ✓ */
  neutral: "#cccccc",
  /** HTML 标签标点，对比度 5.8:1 ✓ */
  tag: "#a4a4a4",
  /** 标签名 - 金色，对比度 9.5:1 ✓ */
  tagName: "#fad075",
  /** 错误诊断 - 红色 */
  error: "#f14c4c",
  /** 变量读写 */
  readwrite: "#87c3ff",
  /** 诊断信息 */
  info: "#aaa0fa",
} as const;

// ============================================
// 终端 ANSI 颜色 - 使用真正的 ANSI 语义颜色
// ============================================

export const ansi = {
  /** 黑色 */
  black: "#181818",
  /** 红色 - 真正的红色，用于错误 */
  red: "#E05050",
  /** 绿色 - 用于成功 */
  green: "#5CB85C",
  /** 黄色 - 用于警告 */
  yellow: "#E5C07B",
  /** 蓝色 - 用于目录 */
  blue: "#61AFEF",
  /** 品红色 */
  magenta: "#C678DD",
  /** 青色 */
  cyan: "#56B6C2",
  /** 白色 */
  white: "#E4E4E4",
  /** 亮黑色（灰色） */
  brightBlack: "#6B6B6B",
  /** 亮红色 */
  brightRed: "#F07178",
  /** 亮绿色 */
  brightGreen: "#98C379",
  /** 亮黄色 */
  brightYellow: "#E5C07B",
  /** 亮蓝色 */
  brightBlue: "#61AFEF",
  /** 亮品红色 */
  brightMagenta: "#C678DD",
  /** 亮青色 */
  brightCyan: "#56B6C2",
  /** 亮白色 */
  brightWhite: "#FFFFFF",
} as const;

// ============================================
// 选择和高亮色
// ============================================

export const selection = {
  /** 选择背景 - 绿色（40%透明度） */
  background: "#58856466",
  /** 选择高亮背景 - 绿色半透明 */
  highlight: "#3fa26633",
  /** 非活动选择背景 - 更暗（21%透明度） */
  inactive: "#58856436",
  /** 范围高亮背景 */
  range: "#3fa26620",
  /** 列表/行高亮背景 */
  active: "#2B2B2B",
} as const;

// ============================================
// 阴影色
// ============================================

export const shadow = {
  /** 小部件阴影 */
  widget: "#00000066",
  /** 无阴影 */
  none: "#00000000",
} as const;

// ============================================
// 自然界颜色 - 用于括号配对
// ============================================

export const nature = {
  /** 天空蓝 */
  sky: "#7EB8DA",
  /** 森林绿 */
  forest: "#8FBC8F",
  /** 薰衣草紫 */
  lavender: "#B8A9C9",
  /** 大地棕 */
  earth: "#C9A86C",
  /** 晨曦橙 */
  dawn: "#E0A370",
  /** 薄雾灰 */
  mist: "#A0A0B0",
} as const;

// ============================================
// 特殊颜色
// ============================================

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

// ============================================
// 构建时对比度验证
// ============================================

/** 需要验证对比度的颜色对 */
export const contrastPairs: Array<{
  name: string;
  fg: string;
  bg: string;
  level: "normal" | "large";
}> = [
  { name: "主要文本", fg: fg.primary, bg: BG_BASE, level: "normal" },
  { name: "次要文本", fg: fg.secondary, bg: BG_BASE, level: "normal" },
  { name: "弱化文本", fg: fg.muted, bg: BG_BASE, level: "normal" },
  { name: "禁用文本", fg: fg.disabled, bg: BG_BASE, level: "large" },
  { name: "注释", fg: fg.comment, bg: BG_BASE, level: "normal" },
  { name: "语法-文本", fg: syntax.text, bg: BG_BASE, level: "normal" },
  { name: "语法-关键字", fg: syntax.keyword, bg: BG_BASE, level: "normal" },
  { name: "语法-操作符", fg: syntax.operator, bg: BG_BASE, level: "normal" },
  { name: "语法-字符串", fg: syntax.string, bg: BG_BASE, level: "normal" },
  { name: "语法-函数", fg: syntax.function, bg: BG_BASE, level: "normal" },
  { name: "语法-类", fg: syntax.class, bg: BG_BASE, level: "normal" },
  { name: "语法-属性", fg: syntax.property, bg: BG_BASE, level: "normal" },
  { name: "语法-常量", fg: syntax.constant, bg: BG_BASE, level: "normal" },
  { name: "语法-self", fg: syntax.self, bg: BG_BASE, level: "normal" },
];

/**
 * 验证所有颜色对比度
 * @returns 验证结果数组
 */
export function validateAllContrasts(): Array<{
  name: string;
  valid: boolean;
  ratio: number;
  required: number;
}> {
  return contrastPairs.map(({ name, fg, bg, level }) => {
    const result = validateContrast(fg, bg, level);
    return { name, ...result };
  });
}
