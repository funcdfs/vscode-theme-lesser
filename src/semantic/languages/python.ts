/**
 * Python 语言语义高亮
 */

import { syntax } from "../../palette";
import type { SemanticTokenColor } from "../../types";

export const python: Record<string, SemanticTokenColor> = {
  // === 类型 ===
  "class:python": syntax.class,
  "class.declaration:python": syntax.class,
  "type:python": syntax.class,

  // === 函数 ===
  "function:python": syntax.function,
  "method:python": syntax.function,

  // === 变量 ===
  "variable:python": syntax.text,
  "parameter:python": syntax.text,
  "builtinConstant.readonly.builtin:python": syntax.keyword,

  // === 属性 ===
  "property:python": syntax.property,

  // === 特殊 ===
  "*.decorator:python": {
    foreground: syntax.directive,
    fontStyle: "",
  },
  "class.decorator.builtin:python": syntax.directive,
  "selfParameter:python": syntax.self,
};
