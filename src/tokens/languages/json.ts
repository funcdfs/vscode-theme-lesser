/**
 * JSON 语言特定语法高亮
 *
 * JSON 特有的语法规则
 */

import { syntax } from "../../palette";
import type { TokenColor } from "../../types";

export const json: TokenColor[] = [
  // === 常量 ===
  {
    name: "JSON: 常量",
    scope: "support.constant.json",
    settings: { foreground: syntax.constant },
  },

  // === 属性名 ===
  {
    name: "JSON: 属性名",
    scope: "support.type.property-name.json",
    settings: { foreground: "#82d2ce" },
  },

  // === 字典键 ===
  {
    name: "JSON: 字典键",
    scope: "source.json meta.structure.dictionary.json > string.quoted.json",
    settings: { foreground: syntax.text },
  },
  {
    name: "JSON: 字典键标点",
    scope:
      "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
    settings: { foreground: syntax.text },
  },

  // === 字典值 ===
  {
    name: "JSON: 字典/数组值字符串",
    scope:
      "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
    settings: { foreground: syntax.string },
  },

  // === 语言常量 ===
  {
    name: "JSON: 语言常量",
    scope:
      "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
    settings: { foreground: syntax.text },
  },
];
