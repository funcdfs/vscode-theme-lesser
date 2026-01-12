/**
 * 通用特殊语义高亮
 *
 * 语言特定配置已移至 src/semantic/languages/
 */

import { syntax } from "../palette";
import type { SemanticTokenColor } from "../types";

export const special: Record<string, SemanticTokenColor> = {
  // === Self 参数 ===
  "selfParameter": syntax.selfLower,
  "selfKeyword": syntax.selfLower,

  // === 宏/装饰器 ===
  "macro": syntax.directive,
  "annotation": syntax.directive,

  // === 操作符重载 ===
  "operatorOverload": syntax.neutral,
  "memberOperatorOverload": syntax.neutral,
};
