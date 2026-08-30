/**
 * Vim / Neovim 配色生成的类型定义
 */

/** 字体样式 */
export type HighlightStyle =
  | "bold"
  | "italic"
  | "underline"
  | "undercurl"
  | "strikethrough"
  | "reverse";

/**
 * 一条高亮规则
 *
 * 要么给出颜色（fg/bg/sp/style），要么用 link 指向另一个组
 */
export interface HighlightGroup {
  /** 高亮组名，如 "Normal"、"@variable.builtin" */
  name: string;
  /** 前景色 */
  fg?: string;
  /** 背景色 */
  bg?: string;
  /** 下划线/波浪线颜色 */
  sp?: string;
  /** 字体样式 */
  style?: HighlightStyle[];
  /** 链接到其他高亮组 */
  link?: string;
  /** 背景是否随 transparent 选项置空（仅 Neovim 生效） */
  transparent?: boolean;
}

/** 一组带标题的高亮规则，标题会渲染成注释 */
export interface HighlightSection {
  /** 分组标题 */
  title: string;
  /** 该分组下的高亮规则 */
  groups: HighlightGroup[];
}
