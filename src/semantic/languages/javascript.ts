/**
 * JavaScript/TypeScript 语言语义高亮
 */

import { syntax } from "../../palette";
import type { SemanticTokenColor } from "../../types";

export const javascript: Record<string, SemanticTokenColor> = {
  // === TypeScript 类型 ===
  "type:typescript": syntax.class,
  "type:typescriptreact": syntax.class,
  "interface:typescript": syntax.class,
  "interface:typescriptreact": syntax.class,
  "enum:typescript": syntax.class,
  "enum:typescriptreact": syntax.class,
  "typeParameter:typescript": syntax.class,
  "typeParameter:typescriptreact": syntax.class,
  "namespace:typescript": syntax.class,
  "namespace:typescriptreact": syntax.class,

  // === JavaScript 类型 ===
  "class:javascript": syntax.class,
  "class:javascriptreact": syntax.class,
  "class:typescript": syntax.class,
  "class:typescriptreact": syntax.class,

  // === 函数 ===
  "function:javascript": syntax.function,
  "function:javascriptreact": syntax.function,
  "function:typescript": syntax.function,
  "function:typescriptreact": syntax.function,
  "method:javascript": syntax.function,
  "method:javascriptreact": syntax.function,
  "method:typescript": syntax.function,
  "method:typescriptreact": syntax.function,

  // === 变量 ===
  "variable:javascript": syntax.text,
  "variable:typescript": syntax.text,
  "parameter:javascript": syntax.text,
  "parameter:typescript": syntax.text,

  // === 属性 ===
  "property:javascript": syntax.property,
  "property:typescript": syntax.property,
};
