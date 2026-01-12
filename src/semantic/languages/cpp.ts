/**
 * C/C++ 语言语义高亮
 */

import { syntax } from "../../palette";
import type { SemanticTokenColor } from "../../types";

export const cpp: Record<string, SemanticTokenColor> = {
  // === 类型 ===
  "type:cpp": syntax.class,
  "type:c": syntax.class,
  "class:cpp": syntax.class,
  "class:c": syntax.class,
  "struct:cpp": syntax.class,
  "struct:c": syntax.class,
  "enum:cpp": syntax.class,
  "enum:c": syntax.class,
  "namespace:cpp": syntax.class,
  "typeParameter:cpp": syntax.class,

  // === 函数 ===
  "function:cpp": syntax.function,
  "function:c": syntax.function,
  "method:cpp": syntax.function,
  "method:c": syntax.function,

  // === 变量 ===
  "variable:cpp": syntax.text,
  "variable:c": syntax.text,
  "parameter:cpp": syntax.text,
  "parameter:c": syntax.text,
  "variable.readonly:cpp": syntax.neutral,
  "variable.readonly:c": syntax.neutral,
  "variable.declaration.readonly:cpp": syntax.neutral,
  "variable.declaration.readonly:c": syntax.neutral,
  "variable.global:cpp": syntax.directive,
  "variable.global:c": syntax.directive,

  // === 属性 ===
  "property:cpp": syntax.property,
  "property:c": syntax.property,
  "property.declaration:cpp": syntax.property,
  "property.declaration:c": syntax.property,

  // === 特殊 ===
  "macro:cpp": syntax.directive,
  "macro:c": syntax.directive,
};
