/**
 * Java/Kotlin 语言语义高亮
 */

import { syntax } from "../../palette";
import type { SemanticTokenColor } from "../../types";

export const java: Record<string, SemanticTokenColor> = {
  // === Java 类型 ===
  "class:java": syntax.class,
  "type:java": syntax.class,
  "interface:java": syntax.class,
  "enum:java": syntax.class,
  "typeParameter:java": syntax.class,
  "namespace:java": syntax.class,

  // === Java 函数 ===
  "function:java": syntax.function,
  "method:java": syntax.function,

  // === Java 变量 ===
  "variable:java": syntax.text,
  "parameter:java": syntax.text,

  // === Java 属性 ===
  "property:java": syntax.property,

  // === Java 特殊 ===
  "annotation:java": syntax.directive,

  // === Kotlin 类型 ===
  "class:kotlin": syntax.class,
  "type:kotlin": syntax.class,
  "interface:kotlin": syntax.class,
  "enum:kotlin": syntax.class,
  "typeParameter:kotlin": syntax.class,
  "namespace:kotlin": syntax.class,

  // === Kotlin 函数 ===
  "function:kotlin": syntax.function,
  "method:kotlin": syntax.function,

  // === Kotlin 变量 ===
  "variable:kotlin": syntax.text,
  "parameter:kotlin": syntax.text,

  // === Kotlin 属性 ===
  "property:kotlin": syntax.property,

  // === Kotlin 特殊 ===
  "annotation:kotlin": syntax.directive,
};
