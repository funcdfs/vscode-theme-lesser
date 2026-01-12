/**
 * 属性语义高亮
 *
 * 定义属性相关的语义高亮颜色
 * 包括：属性声明、属性访问等
 */

import { syntax } from "../palette";
import type { SemanticTokenColor } from "../types";

/**
 * 属性语义颜色配置
 */
export const properties: Record<string, SemanticTokenColor> = {
  // === 通用属性 ===
  /** 支持变量属性 - 使用属性色（大写形式） */
  "support.variable.property": "#AAA0FA",

  // === C/C++ 特定 ===
  /** C++ 属性 - 使用属性色（大写形式） */
  "property:cpp": "#AAA0FA",

  /** C++ 属性声明 - 使用属性色（大写形式） */
  "property.declaration:cpp": "#AAA0FA",

  /** C 属性 - 使用属性色（大写形式） */
  "property:c": "#AAA0FA",

  /** C 属性声明 - 使用属性色（大写形式） */
  "property.declaration:c": "#AAA0FA",
};
