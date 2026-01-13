/**
 * 通用类型语义高亮
 *
 * 语言特定配置已移至 src/semantic/languages/
 */

import { syntax } from "../palette";
import type { SemanticTokenColor } from "../types";

export const types: Record<string, SemanticTokenColor> = {
  // === 通用类型 ===
  "type": syntax.class,
  "interface": syntax.class,
  "struct": syntax.class,
  "enum": syntax.class,
  "typeParameter": syntax.class,
  "namespace": syntax.class,
  "class": syntax.class,

  // === 内置类型 ===
  "class.builtin": syntax.keyword,
  "class.typeHint": syntax.keyword,
};
