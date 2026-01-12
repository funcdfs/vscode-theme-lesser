/**
 * 标点语法高亮
 *
 * 括号、分隔符等标点符号的语法规则
 */

import { syntax } from "../palette";
import type { TokenColor } from "../types";

export const punctuation: TokenColor[] = [
  // === 分隔符 ===
  {
    name: "分隔符",
    scope: "punctuation.separator.delimiter",
    settings: { foreground: syntax.text },
  },

  // === YAML ===
  {
    name: "YAML 块序列项标点",
    scope: "punctuation.definition.block.sequence.item.yaml",
    settings: { foreground: syntax.text },
  },
];
