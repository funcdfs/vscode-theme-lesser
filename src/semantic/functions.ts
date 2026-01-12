/**
 * 通用函数语义高亮
 *
 * 语言特定配置已移至 src/semantic/languages/
 */

import { syntax } from "../palette";
import type { SemanticTokenColor } from "../types";

export const functions: Record<string, SemanticTokenColor> = {
  // === 通用函数 ===
  "function": syntax.function,
  "function.declaration": syntax.function,
  "function.builtin": syntax.keywordLower,
  "method": syntax.function,
  "method.declaration": syntax.function,
};
