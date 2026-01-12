/**
 * Protocol Buffers 语言语义高亮
 */

import { syntax } from "../../palette";
import type { SemanticTokenColor } from "../../types";

export const proto: Record<string, SemanticTokenColor> = {
  // === 类型 ===
  "type:proto": syntax.class,
  "type:proto3": syntax.class,
  "class:proto": syntax.class,
  "class:proto3": syntax.class,
  "enum:proto": syntax.class,
  "enum:proto3": syntax.class,
  "namespace:proto": syntax.class,
  "namespace:proto3": syntax.class,

  // === 函数（RPC） ===
  "function:proto": syntax.function,
  "function:proto3": syntax.function,
  "method:proto": syntax.function,
  "method:proto3": syntax.function,

  // === 属性（字段） ===
  "property:proto": syntax.property,
  "property:proto3": syntax.property,
};
