/**
 * Rust 语言语义高亮
 */

import { syntax } from "../../palette";
import type { SemanticTokenColor } from "../../types";

export const rust: Record<string, SemanticTokenColor> = {
  // === 类型 ===
  "type:rust": syntax.class,
  "struct:rust": syntax.class,
  "enum:rust": syntax.class,
  "interface:rust": syntax.class,  // trait
  "typeParameter:rust": syntax.class,
  "namespace:rust": syntax.class,

  // === 函数 ===
  "function:rust": syntax.function,
  "method:rust": syntax.function,

  // === 变量 ===
  "variable:rust": syntax.text,
  "parameter:rust": syntax.text,

  // === 属性 ===
  "property:rust": syntax.property,

  // === 特殊 ===
  "macro:rust": syntax.directive,
  "lifetime:rust": syntax.selfLower,
  "selfKeyword:rust": syntax.selfLower,
};
