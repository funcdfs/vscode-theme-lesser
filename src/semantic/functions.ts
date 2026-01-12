/**
 * 函数语义高亮
 *
 * 定义函数相关的语义高亮颜色
 * 包括：函数声明、内置函数、方法等
 */

import { syntax, fg } from "../palette";
import type { SemanticTokenColor } from "../types";

/**
 * 函数语义颜色配置
 */
export const functions: Record<string, SemanticTokenColor> = {
  // === 函数基础 ===
  /** 普通函数调用 - 使用数字色（函数调用色） */
  "function": syntax.number,

  /** 函数声明 - 使用函数色，加粗 */
  "function.declaration": {
    foreground: syntax.function,
    fontStyle: "bold",
  },

  /** 内置函数 - 使用关键字色（小写形式） */
  "function.builtin": "#82d2ce",

  /** 实体函数名 - 使用数字色（大写形式） */
  "entity.name.function": {
    foreground: "#EBC88D",
  },

  // === 方法 ===
  /** 方法声明 - 使用函数色，加粗 */
  "method.declaration": {
    foreground: syntax.function,
    fontStyle: "bold",
  },

  // === C/C++ 特定 ===
  /** C++ 函数 - 使用主要前景色，加粗 */
  "function:cpp": {
    foreground: fg.primary,
    fontStyle: "bold",
  },

  /** C 函数 - 使用主要前景色，加粗 */
  "function:c": {
    foreground: fg.primary,
    fontStyle: "bold",
  },

  /** C++ 方法 - 使用类色 */
  "method:cpp": {
    foreground: syntax.class,
    fontStyle: "",
  },

  // === Python 特定 ===
  /** Python 方法 - 使用数字色 */
  "method:python": {
    foreground: syntax.number,
    fontStyle: "",
  },

  // === CMake 特定 ===
  /** CMake 函数 - 使用类色 */
  "function:cmake": syntax.class,
};
