/**
 * 通用属性语义高亮
 *
 * 语言特定配置已移至 src/semantic/languages/
 */

import { syntax } from "../palette";
import type { SemanticTokenColor } from "../types";

export const properties: Record<string, SemanticTokenColor> = {
  // === 通用属性 ===
  "property": syntax.property,
  "property.declaration": syntax.property,
};
