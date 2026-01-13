/**
 * 其他语言特定语法高亮
 *
 * Haskell、Ruby、Elixir、Groovy、SQL、C#、Unison、Elm、Clojure、
 * CoffeeScript、Makefile、HLSL、Swift、Xi 等语言的语法规则
 */

import { syntax, fg } from "../../palette";
import type { TokenColor } from "../../types";

export const misc: TokenColor[] = [
  // === Haskell ===
  {
    name: "Haskell: 泛型类型变量",
    scope: "variable.other.generic-type.haskell",
    settings: { foreground: syntax.keyword },
  },
  {
    name: "Haskell: 存储类型",
    scope: "storage.type.haskell",
    settings: { foreground: syntax.constant },
  },

  // === Unison ===
  {
    name: "Unison: 标点",
    scope:
      "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
    settings: { foreground: syntax.text },
  },

  // === Ruby ===
  {
    name: "Ruby: 符号",
    scope: "constant.language.symbol.ruby",
    settings: { foreground: syntax.text },
  },

  // === C# ===
  {
    name: "C#: 存储类型",
    scope: "storage.type.cs",
    settings: { foreground: syntax.function },
  },
  {
    name: "C#: 局部变量",
    scope: "entity.name.variable.local.cs",
    settings: { foreground: syntax.text },
  },
  {
    name: "C#/C++: 标签和作用域解析",
    scope: [
      "entity.name.label.cs",
      "entity.name.scope-resolution.function.call",
      "entity.name.scope-resolution.function.definition",
    ],
    settings: { foreground: syntax.function },
  },

  // === Elm ===
  {
    name: "Elm: prelude",
    scope: ["support.type.prelude.elm"],
    settings: { foreground: syntax.text },
  },
  {
    name: "Elm: 常量",
    scope: ["support.constant.elm"],
    settings: { foreground: syntax.constant },
  },

  // === Clojure ===
  {
    name: "Clojure: 全局",
    scope: ["entity.global.clojure"],
    settings: { foreground: syntax.function },
  },
  {
    name: "Clojure: 符号",
    scope: ["meta.symbol.clojure"],
    settings: { foreground: syntax.text },
  },
  {
    name: "Clojure: 常量",
    scope: ["constant.keyword.clojure"],
    settings: { foreground: syntax.text },
  },

  // === CoffeeScript ===
  {
    name: "CoffeeScript: 函数参数",
    scope: [
      "meta.arguments.coffee",
      "variable.parameter.function.coffee",
    ],
    settings: { foreground: syntax.text },
  },

  // === Ini ===
  {
    name: "Ini: 默认文本",
    scope: ["source.ini"],
    settings: { foreground: syntax.string },
  },

  // === Makefile ===
  {
    name: "Makefile: 先决条件",
    scope: ["meta.scope.prerequisites.makefile"],
    settings: { foreground: syntax.text },
  },
  {
    name: "Makefile: 文本颜色",
    scope: ["source.makefile"],
    settings: { foreground: syntax.function },
  },

  // === Groovy ===
  {
    name: "Groovy: 导入名",
    scope: ["storage.modifier.import.groovy"],
    settings: { foreground: syntax.function },
  },
  {
    name: "Groovy: 方法",
    scope: ["meta.method.groovy"],
    settings: { foreground: syntax.property },
  },
  {
    name: "Groovy: 变量",
    scope: ["meta.definition.variable.name.groovy"],
    settings: { foreground: syntax.text },
  },
  {
    name: "Groovy: 继承",
    scope: ["meta.definition.class.inherited.classes.groovy"],
    settings: { foreground: syntax.string },
  },

  // === HLSL ===
  {
    name: "HLSL: 语义",
    scope: ["support.variable.semantic.hlsl"],
    settings: { foreground: syntax.function },
  },
  {
    name: "HLSL: 类型",
    scope: [
      "support.type.texture.hlsl",
      "support.type.sampler.hlsl",
      "support.type.object.hlsl",
      "support.type.object.rw.hlsl",
      "support.type.fx.hlsl",
      "support.type.object.hlsl",
    ],
    settings: { foreground: syntax.keyword },
  },

  // === SQL ===
  {
    name: "SQL: 变量",
    scope: [
      "text.variable",
      "text.bracketed",
    ],
    settings: { foreground: syntax.text },
  },

  // === Swift/VB ASP ===
  {
    name: "Swift/VB ASP: 类型",
    scope: [
      "support.type.swift",
      "support.type.vb.asp",
    ],
    settings: { foreground: syntax.function },
  },

  // === Xi ===
  {
    name: "Xi: 标题 1（关键字）",
    scope: ["entity.name.function.xi"],
    settings: { foreground: syntax.function },
  },
  {
    name: "Xi: 标题 2（可调用）",
    scope: ["entity.name.class.xi"],
    settings: { foreground: syntax.text },
  },
  {
    name: "Xi: 标题 3（属性）",
    scope: ["constant.character.character-class.regexp.xi"],
    settings: { foreground: syntax.text },
  },
  {
    name: "Xi: 标题 4（类型/类/接口）",
    scope: ["constant.regexp.xi"],
    settings: { foreground: syntax.keyword },
  },
  {
    name: "Xi: 标题 5（枚举/预处理器/常量/装饰器）",
    scope: ["keyword.control.xi"],
    settings: { foreground: syntax.text },
  },
  {
    name: "Xi: 标题 6（数字）",
    scope: ["invalid.xi"],
    settings: { foreground: syntax.text },
  },
  {
    name: "Xi: 字符串",
    scope: ["beginning.punctuation.definition.quote.markdown.xi"],
    settings: { foreground: syntax.string },
  },
  {
    name: "Xi: Markdown 列表标点",
    scope: ["beginning.punctuation.definition.list.markdown.xi"],
    settings: { foreground: fg.disabled },
  },
  {
    name: "Xi: 链接字符",
    scope: ["constant.character.xi"],
    settings: { foreground: syntax.property },
  },
  {
    name: "Xi: 强调",
    scope: ["accent.xi"],
    settings: { foreground: syntax.property },
  },
  {
    name: "Xi: Wikiword",
    scope: ["wikiword.xi"],
    settings: { foreground: syntax.constant },
  },
  {
    name: "Xi: 语言操作符",
    scope: ["constant.other.color.rgb-value.xi"],
    settings: { foreground: syntax.text },
  },
  {
    name: "Xi: 弱化元素",
    scope: ["punctuation.definition.tag.xi"],
    settings: { foreground: fg.disabled },
  },

  // === Elixir ===
  {
    name: "Elixir: 符号",
    scope: ["constant.language.symbol.elixir"],
    settings: { foreground: syntax.text },
  },
];
