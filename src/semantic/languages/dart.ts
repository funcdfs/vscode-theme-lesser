/**
 * Dart/Flutter 语言语义高亮
 */

import { syntax } from "../../palette";
import type { SemanticTokenColor } from "../../types";

export const dart: Record<string, SemanticTokenColor> = {
  // === 类型 ===
  "class:dart": syntax.class,
  "type:dart": syntax.class,
  "enum:dart": syntax.class,
  "typeParameter:dart": syntax.class,

  // === 函数 ===
  "function:dart": syntax.function,
  "method:dart": syntax.function,

  // === 变量 ===
  "variable:dart": syntax.text,
  "parameter:dart": syntax.text,

  // === 属性 ===
  "property:dart": syntax.property,

  // === 特殊 ===
  "annotation:dart": syntax.directive,
};
