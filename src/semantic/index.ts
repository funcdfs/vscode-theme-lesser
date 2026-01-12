/**
 * 语义高亮汇总导出
 *
 * 合并所有语义高亮颜色为单一对象
 * 对应 cursor.json 的 "semanticTokenColors" 部分
 */

import { variables } from "./variables";
import { functions } from "./functions";
import { types } from "./types";
import { properties } from "./properties";
import { special } from "./special";
import type { SemanticTokenColors } from "../types";

/**
 * 完整的语义高亮颜色配置
 *
 * 合并所有语义模块，导出为单一对象
 */
export const semanticTokenColors: SemanticTokenColors = {
  ...variables,
  ...functions,
  ...types,
  ...properties,
  ...special,
};

// 同时导出各个子模块，便于单独使用
export { variables } from "./variables";
export { functions } from "./functions";
export { types } from "./types";
export { properties } from "./properties";
export { special } from "./special";
