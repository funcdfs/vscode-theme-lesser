/**
 * Go 语言特定语法高亮
 *
 * Go 特有的语法规则
 */

import { syntax } from "../../palette";
import type { TokenColor } from "../../types";

export const go: TokenColor[] = [
  // === 赋值操作符 ===
  {
    name: "Go: 赋值操作符",
    scope: ["keyword.operator.assignment.go"],
    settings: { foreground: syntax.function },
  },

  // === 算术和地址操作符 ===
  {
    name: "Go: 算术和地址操作符",
    scope: [
      "keyword.operator.arithmetic.go",
      "keyword.operator.address.go",
    ],
    settings: { foreground: syntax.keyword },
  },

  // === 包名 ===
  {
    name: "Go: 包名",
    scope: ["entity.name.package.go"],
    settings: { foreground: syntax.function },
  },
];
