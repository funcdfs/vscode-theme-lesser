/**
 * 变量语义高亮
 *
 * 定义变量相关的语义高亮颜色
 * 包括：常量、只读、全局、默认库变量等
 */

import { syntax, fg } from "../palette";
import type { SemanticTokenColor } from "../types";

/**
 * 变量语义颜色配置
 */
export const variables: Record<string, SemanticTokenColor> = {
  // === 常量 ===
  /** 常量变量 - 使用关键字色 */
  "variable.constant": {
    foreground: syntax.keyword,
  },

  // === 默认库变量 ===
  /** 默认库变量 - 使用普通文本色 */
  "variable.defaultLibrary": {
    foreground: syntax.text,
  },
  /** 全局作用域的默认库变量 - 使用中性色 */
  "variable.defaultLibrary.globalScope": {
    foreground: syntax.neutral,
  },

  // === 只读变量 (C/C++) ===
  /** C++ 只读变量声明 */
  "variable.declaration.readonly:cpp": syntax.neutral,
  /** C 只读变量声明 */
  "variable.declaration.readonly:c": syntax.neutral,
  /** C++ 只读变量 */
  "variable.readonly:cpp": syntax.neutral,
  /** C 只读变量 */
  "variable.readonly:c": syntax.neutral,

  // === 全局变量 (C/C++) ===
  /** C++ 全局变量 - 使用指令色 */
  "variable.global:cpp": syntax.directive,
  /** C 全局变量 - 使用指令色 */
  "variable.global:c": syntax.directive,

  // === 语言特定变量 ===
  /** JavaScript 变量 - 使用中性色 */
  "variable:javascript": syntax.neutral,

  // === 枚举成员 ===
  /** 枚举成员 - 使用普通文本色 */
  "enumMember": {
    foreground: syntax.text,
  },

  // === Python 内置常量 ===
  /** Python 内置只读常量 - 使用关键字色（小写形式） */
  "builtinConstant.readonly.builtin:python": "#82d2ce",
};
