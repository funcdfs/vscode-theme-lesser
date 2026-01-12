/**
 * 特殊语义高亮
 *
 * 定义特殊语义高亮颜色
 * 包括：self 参数、宏、装饰器、操作符重载等
 */

import { syntax } from "../palette";
import type { SemanticTokenColor } from "../types";

/**
 * 特殊语义颜色配置
 */
export const special: Record<string, SemanticTokenColor> = {
  // === Self 参数 ===
  /** self/this 参数 - 使用 self 色（小写形式） */
  "selfParameter": "#cc7c8a",

  // === 宏 ===
  /** 宏 - 使用指令色 */
  "macro": syntax.directive,

  // === 装饰器 (Python) ===
  /** Python 装饰器 - 使用指令色 */
  "*.decorator:python": {
    foreground: syntax.directive,
    fontStyle: "",
  },

  /** Python 内置装饰器 - 使用指令色 */
  "class.decorator.builtin:python": syntax.directive,

  // === 操作符重载 ===
  /** 操作符重载 - 使用中性色 */
  "operatorOverload": syntax.neutral,

  /** 成员操作符重载 - 使用中性色 */
  "memberOperatorOverload": syntax.neutral,
};
