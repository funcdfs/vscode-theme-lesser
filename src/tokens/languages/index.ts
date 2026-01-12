/**
 * 语言特定语法高亮汇总
 *
 * 导出所有语言特定的 token 颜色规则
 */

import type { TokenColor } from "../../types";

import { python } from "./python";
import { cpp } from "./cpp";
import { javascript } from "./javascript";
import { java } from "./java";
import { rust } from "./rust";
import { go } from "./go";
import { php } from "./php";
import { css } from "./css";
import { json } from "./json";
import { html } from "./html";
import { markdown } from "./markdown";
import { misc } from "./misc";

/**
 * 所有语言特定的 token 颜色规则
 *
 * 按语言分组，便于维护和查找
 */
export const languages: TokenColor[] = [
  ...python,
  ...cpp,
  ...javascript,
  ...java,
  ...rust,
  ...go,
  ...php,
  ...css,
  ...json,
  ...html,
  ...markdown,
  ...misc,
];

// 导出各语言模块，便于单独使用
export { python } from "./python";
export { cpp } from "./cpp";
export { javascript } from "./javascript";
export { java } from "./java";
export { rust } from "./rust";
export { go } from "./go";
export { php } from "./php";
export { css } from "./css";
export { json } from "./json";
export { html } from "./html";
export { markdown } from "./markdown";
export { misc } from "./misc";
