/**
 * Go 语言语义高亮
 */

import { syntax } from "../../palette";
import type { SemanticTokenColor } from "../../types";

export const go: Record<string, SemanticTokenColor> = {
  // === 类型 ===
  "type:go": syntax.class,
  "interface:go": syntax.class,
  "struct:go": syntax.class,
  "namespace:go": syntax.class,
  "typeParameter:go": syntax.class,

  // === 函数 ===
  "function:go": syntax.function,
  "method:go": syntax.function,

  // === 变量 ===
  "variable:go": syntax.text,
  "parameter:go": syntax.text,

  // === 属性 ===
  "property:go": syntax.property,
};
