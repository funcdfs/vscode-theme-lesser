/**
 * Rust 语言特定语法高亮
 *
 * Rust 特有的语法规则，包括生命周期、标准函数等
 */

import { syntax } from "../../palette";
import type { TokenColor } from "../../types";

export const rust: TokenColor[] = [
  // === 生命周期 ===
  {
    name: "Rust: 生命周期修饰符",
    scope: "storage.modifier.lifetime.rust",
    settings: { foreground: syntax.text },
  },
  {
    name: "Rust: 生命周期名称",
    scope: "entity.name.lifetime.rust",
    settings: { foreground: syntax.function },
  },

  // === 标准函数 ===
  {
    name: "Rust: 标准函数",
    scope: "support.function.std.rust",
    settings: { foreground: "#aaa0fa" },
  },

  // === 语言变量 ===
  {
    name: "Rust: 语言变量",
    scope: "variable.language.rust",
    settings: { foreground: syntax.text },
  },

  // === 操作符 ===
  {
    name: "Rust: 杂项操作符",
    scope: "keyword.operator.misc.rust",
    settings: { foreground: syntax.text },
  },
  {
    name: "Rust: sigil 操作符",
    scope: "keyword.operator.sigil.rust",
    settings: { foreground: syntax.keyword },
  },

  // === 核心常量 ===
  {
    name: "Rust: 核心常量",
    scope: "support.constant.core.rust",
    settings: { foreground: syntax.constant },
  },
];
