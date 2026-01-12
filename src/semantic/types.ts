/**
 * 类型语义高亮
 *
 * 定义类型相关的语义高亮颜色
 * 包括：类、枚举、命名空间、类型提示等
 */

import { syntax } from "../palette";
import type { SemanticTokenColor } from "../types";

/**
 * 类型语义颜色配置
 */
export const types: Record<string, SemanticTokenColor> = {
  // === 类 ===
  /** 内置类 - 使用关键字色（小写形式） */
  "class.builtin": "#82d2ce",

  /** 类型提示 - 使用关键字色（小写形式） */
  "class.typeHint": "#82d2ce",

  // === Python 特定 ===
  /** Python 类声明 - 使用类色 */
  "class.declaration:python": syntax.class,

  /** Python 类 - 使用数字色 */
  "class:python": {
    foreground: syntax.number,
    fontStyle: "",
  },

  // === C/C++ 特定 ===
  /** C++ 命名空间 - 使用类色 */
  "namespace:cpp": syntax.class,

  /** C++ 类型 - 使用类色 */
  "type:cpp": syntax.class,

  /** C 类型 - 使用类色 */
  "type:c": syntax.class,
};
