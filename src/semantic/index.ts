/**
 * 语义高亮汇总导出
 *
 * 合并所有语义高亮颜色为单一对象
 */

import { variables } from "./variables";
import { functions } from "./functions";
import { types } from "./types";
import { properties } from "./properties";
import { special } from "./special";
import { languages } from "./languages";
import type { SemanticTokenColors } from "../types";

/**
 * 完整的语义高亮颜色配置
 */
export const semanticTokenColors: SemanticTokenColors = {
  ...variables,
  ...functions,
  ...types,
  ...properties,
  ...special,
  ...languages,
};

// 导出子模块
export { variables } from "./variables";
export { functions } from "./functions";
export { types } from "./types";
export { properties } from "./properties";
export { special } from "./special";
export { languages } from "./languages";
