/**
 * 主题主入口
 *
 * 导出完整的 VS Code 主题对象
 * 将所有模块（colors、semanticTokenColors、tokenColors）合并为单一主题
 */

import type { Theme } from "./types";
import { colors } from "./colors";
import { semanticTokenColors } from "./semantic";
import { tokenColors } from "./tokens";

/**
 * 主题名称
 *
 * 来自 cursor.json 的原始主题名称
 */
export const THEME_NAME = "Cursor Dark Anysphere v0.0.3";

/**
 * 主题类型
 *
 * 深色主题
 */
export const THEME_TYPE = "dark" as const;

/**
 * 完整的 VS Code 主题对象
 *
 * 包含所有颜色配置，可直接导出为 JSON 文件
 */
export const theme: Theme = {
  name: THEME_NAME,
  type: THEME_TYPE,
  colors,
  semanticHighlighting: true,
  semanticTokenColors,
  tokenColors,
};

// 导出各个子模块，便于单独使用
export { colors } from "./colors";
export { semanticTokenColors } from "./semantic";
export { tokenColors } from "./tokens";

// 导出类型定义
export type { Theme, TokenColor, SemanticTokenColor, SemanticTokenColors, UIColors } from "./types";

// 导出调色板，便于扩展
export * from "./palette";

// 默认导出完整主题
export default theme;
