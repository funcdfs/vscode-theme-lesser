/**
 * Lesser Theme Color Palette
 * 
 * This file defines all the base colors used throughout the theme.
 * Colors are organized by their semantic meaning.
 */

export interface Palette {
  // Base colors
  base: string;
  mantle: string;
  crust: string;
  surface0: string;
  surface1: string;
  surface2: string;
  overlay0: string;
  overlay1: string;
  overlay2: string;

  // Text colors
  text: string;
  subtext0: string;
  subtext1: string;

  // Core accent colors - 核心强调色
  lavender: string;    // 薰衣草紫 - 函数
  pink: string;        // 玫瑰粉 - 数字/布尔
  red: string;         // 珊瑚红 - 错误
  peach: string;       // 赤陶橙 - 字符串
  green: string;       // 苔藓绿 - 标签/this

  // Nature palette - 自然调色盘 (主要语法色)
  frost: string;       // 霜蓝 - 变量
  ocean: string;       // 海蓝 - 关键字
  moss: string;        // 苔绿 - 类型/类
  sand: string;        // 沙褐 - 属性/字段
  clay: string;        // 陶土 - 常量
  dusk: string;        // 暮紫 - 特殊标识
}

export const palette: Palette = {
  // Base colors - backgrounds
  base: "#14101A",      // Main editor background
  mantle: "#1A1520",    // Secondary background (widgets, panels)
  crust: "#0D0A12",     // Deepest background (shadows)
  surface0: "#1E1828",  // Elevated surfaces
  surface1: "#252030",  // Hover states
  surface2: "#2A2435",  // Active/selected states

  // Border and separator colors
  overlay0: "#3D3650",  // Borders, separators
  overlay1: "#5A5570",  // Subtle text, line numbers
  overlay2: "#636d83",  // Disabled text

  // Text colors
  text: "#B8BFD0",      // Primary text
  subtext0: "#C0C5D0",  // Secondary text
  subtext1: "#F0F0F0",  // Bright/highlighted text

  // Core accent colors - 核心强调色 (保留必要的)
  lavender: "#C2A0FD",  // 薰衣草紫 - 函数名
  pink: "#D699B6",      // 玫瑰粉 - 数字/布尔常量
  red: "#E67E80",       // 珊瑚红 - 错误/删除
  peach: "#D4A373",     // 赤陶橙 - 字符串
  green: "#7EC9A0",     // 青绿 - HTML标签 (亮而不浓)

  // Nature palette - 自然调色盘 (典雅区分，色相间隔大)
  frost: "#7EC4E6",     // 霜蓝 - 变量名 (明亮天蓝)
  ocean: "#4A7DB8",     // 海蓝 - 关键字 (深邃纯蓝)
  moss: "#9EBC8A",      // 苔绿 - 类型/类 (黄绿调，区别于 green)
  sand: "#C9B89A",      // 沙褐 - 属性/字段 (暖米色)
  clay: "#D4A190",      // 陶土 - 常量 (暖橙粉)
  dusk: "#B8A5C8",      // 暮紫 - this/self/特殊 (淡紫，区别于 lavender)
};

// Opacity variants
export const opacity = {
  full: "FF",
  high: "F0",
  medium: "DD",
  low: "CC",
  subtle: "BB",
  soft: "B3",      // 70% - 字符串专用
  faint: "AA",
  dim: "90",
  muted: "77",
  ghost: "55",
  whisper: "40",
  trace: "25",
  invisible: "18",
  none: "00",
} as const;

// Helper function to apply opacity to a color
export function withOpacity(color: string, alpha: keyof typeof opacity): string {
  const hex = color.startsWith("#") ? color.slice(1) : color;
  return `#${hex}${opacity[alpha]}`;
}

// Semantic color mappings
export const semantic = {
  // UI states
  focus: withOpacity(palette.lavender, "faint"),
  selection: "#7E5A9E",
  hover: palette.surface1,
  active: palette.surface2,

  // Git decorations
  added: palette.green,
  modified: palette.lavender,
  deleted: palette.red,
  renamed: palette.lavender,
  untracked: palette.green,
  ignored: palette.overlay1,
  conflicting: palette.red,

  // Diagnostics
  error: palette.red,
  warning: "#DBBC7F",
  info: palette.ocean,
  hint: palette.green,

  // Diff
  diffInserted: withOpacity(palette.green, "invisible"),
  diffRemoved: withOpacity(palette.red, "invisible"),
  diffInsertedLine: withOpacity(palette.green, "invisible"),
  diffRemovedLine: withOpacity(palette.red, "invisible"),
};
