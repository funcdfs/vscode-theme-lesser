/**
 * 通用变量语义高亮
 *
 * 语言特定配置已移至 src/semantic/languages/
 */

import { syntax } from "../palette";
import type { SemanticTokenColor } from "../types";

export const variables: Record<string, SemanticTokenColor> = {
  // === 通用变量 ===
  "variable": syntax.text,
  "parameter": syntax.text,
  "enumMember": syntax.text,

  // === 常量 ===
  "variable.constant": syntax.keyword,
  "variable.readonly": syntax.neutral,

  // === 默认库 ===
  "variable.defaultLibrary": syntax.text,
  "variable.defaultLibrary.globalScope": syntax.neutral,
};
