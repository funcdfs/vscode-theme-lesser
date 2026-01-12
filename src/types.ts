/**
 * 类型定义
 *
 * 定义 VS Code 主题所需的所有 TypeScript 类型
 */

/**
 * Token 颜色规则
 *
 * 用于定义语法高亮规则，对应 tokenColors 数组中的每个元素
 */
export interface TokenColor {
  /** 规则名称（用于注释说明） */
  name: string;
  /** TextMate 作用域，可以是单个字符串或字符串数组 */
  scope: string | string[];
  /** 样式设置 */
  settings: {
    /** 前景色（十六进制颜色值） */
    foreground?: string;
    /** 字体样式：italic, bold, underline，可组合使用 */
    fontStyle?: string;
  };
}

/**
 * 语义 Token 颜色
 *
 * 用于定义语义高亮颜色，可以是简单的颜色字符串或包含样式的对象
 */
export type SemanticTokenColor =
  | string
  | {
      /** 前景色 */
      foreground?: string;
      /** 字体样式 */
      fontStyle?: string;
    };

/**
 * 语义 Token 颜色映射
 *
 * 键为语义 token 类型（如 "function.declaration"），值为颜色或样式对象
 */
export type SemanticTokenColors = Record<string, SemanticTokenColor>;

/**
 * UI 颜色映射
 *
 * 键为 VS Code UI 元素标识符（如 "editor.background"），值为颜色字符串
 */
export type UIColors = Record<string, string>;

/**
 * 完整主题定义
 *
 * 对应 VS Code 主题 JSON 文件的完整结构
 */
export interface Theme {
  /** 主题名称 */
  name: string;
  /** 主题类型：深色或浅色 */
  type: "dark" | "light";
  /** UI 颜色配置 */
  colors: UIColors;
  /** 是否启用语义高亮 */
  semanticHighlighting: boolean;
  /** 语义 Token 颜色配置 */
  semanticTokenColors: SemanticTokenColors;
  /** 语法高亮 Token 颜色配置 */
  tokenColors: TokenColor[];
}
