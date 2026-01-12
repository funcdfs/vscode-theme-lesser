/**
 * 语法高亮 Token 颜色汇总
 *
 * 合并所有 token 颜色为单一数组，对应 cursor.json 的 "tokenColors"
 */

import type { TokenColor } from "../types";

import { core } from "./core";
import { variables } from "./variables";
import { functions } from "./functions";
import { types } from "./types";
import { markup } from "./markup";
import { punctuation } from "./punctuation";
import { languages } from "./languages";

/**
 * 所有 token 颜色规则
 *
 * 按以下顺序组织：
 * 1. 核心语法（字符串、注释、关键字、操作符）
 * 2. 变量语法（参数、语言变量、常量）
 * 3. 函数语法（定义、调用、支持函数）
 * 4. 类型语法（类、命名空间、存储）
 * 5. 标记语法（Markdown、Diff）
 * 6. 标点语法（括号、分隔符）
 * 7. 语言特定规则
 */
export const tokenColors: TokenColor[] = [
  ...core,
  ...variables,
  ...functions,
  ...types,
  ...markup,
  ...punctuation,
  ...languages,
];

// 导出各模块，便于单独使用
export { core } from "./core";
export { variables } from "./variables";
export { functions } from "./functions";
export { types } from "./types";
export { markup } from "./markup";
export { punctuation } from "./punctuation";
export { languages } from "./languages";
