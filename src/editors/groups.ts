/**
 * Vim / Neovim 高亮组定义
 *
 * 所有取值来自 src/palette.ts，与 VS Code 主题共用同一套颜色。
 * VS Code 里的半透明色在这里用 blend() 按背景压平成实色。
 */

import {
  fg,
  bg,
  border,
  accent,
  syntax,
  nature,
  fileTree,
  ansi,
  blend,
} from "../palette";
import type { HighlightSection } from "./types";

// ============================================
// 压平后的常用色
// ============================================

/** 选区背景 - 对应 editor.selectionBackground #58856466 */
const selectionBg = blend("#588564", bg.base, 0.4);
/** 查找匹配背景 - 对应 editor.findMatchBackground */
const findBg = blend(accent.cyan, bg.base, 0.5);
/** 查找高亮背景 - 对应 editor.findMatchHighlightBackground */
const findHighlightBg = blend(accent.cyan, bg.base, 0.35);
/** 当前行背景 */
const cursorLineBg = bg.surface;
/** 补全菜单选中项背景 */
const pmenuSelBg = bg.selection;
/** 列表选中项前景 - 与 list.activeSelectionForeground 一致 */
const listSelectionFg = "#E0B050";
/** 括号匹配背景 */
const matchParenBg = blend(nature.lavender, bg.base, 0.2);
/** 空白字符前景 - 对应 editorWhitespace.foreground #505050B3 */
const whitespaceFg = blend("#505050", bg.base, 0.7);

// diff 背景（VS Code 用半透明叠加，这里压平）
const diffAddBg = blend(accent.green, bg.base, 0.18);
const diffTextBg = blend(accent.green, bg.base, 0.32);
const diffDeleteBg = blend(accent.coral, bg.base, 0.15);
const diffChangeBg = blend(accent.violet, bg.base, 0.15);

// 诊断虚拟文本背景
const errorBg = blend(accent.coral, bg.base, 0.1);
const warnBg = blend(accent.yellow, bg.base, 0.1);
const infoBg = blend(accent.cyan, bg.base, 0.1);
const hintBg = blend(fg.muted, bg.base, 0.1);

// 引用高亮
const referenceBg = blend(fg.primary, bg.base, 0.1);
const referenceWriteBg = blend(accent.violet, bg.base, 0.2);

/**
 * 编辑器界面高亮组（Vim / Neovim 通用）
 */
export const uiSections: HighlightSection[] = [
  {
    title: "编辑区",
    groups: [
      { name: "Normal", fg: fg.primary, bg: bg.base, transparent: true },
      { name: "NormalNC", fg: fg.primary, bg: bg.base, transparent: true },
      { name: "NormalFloat", fg: fg.primary, bg: bg.elevated, transparent: true },
      { name: "FloatBorder", fg: border.default, bg: bg.elevated, transparent: true },
      { name: "FloatTitle", fg: accent.violet, bg: bg.elevated, style: ["bold"], transparent: true },
      { name: "FloatFooter", fg: fg.muted, bg: bg.elevated, transparent: true },
      { name: "EndOfBuffer", fg: bg.base, transparent: true },
      { name: "ColorColumn", bg: cursorLineBg },
      { name: "Conceal", fg: fg.muted },
      { name: "Directory", fg: accent.cyan },
      { name: "Title", fg: accent.violet, style: ["bold"] },
      { name: "Ignore", fg: fg.disabled },
    ],
  },
  {
    title: "光标与当前行",
    groups: [
      { name: "Cursor", fg: bg.base, bg: fg.primary },
      { name: "lCursor", fg: bg.base, bg: fg.primary },
      { name: "CursorIM", fg: bg.base, bg: accent.violet },
      { name: "TermCursor", fg: bg.base, bg: fg.primary },
      { name: "CursorLine", bg: cursorLineBg },
      { name: "CursorColumn", bg: cursorLineBg },
      { name: "MatchParen", fg: nature.lavender, bg: matchParenBg, style: ["bold"] },
    ],
  },
  {
    title: "行号与标记列",
    groups: [
      { name: "LineNr", fg: fg.muted, transparent: true },
      { name: "LineNrAbove", fg: fg.disabled, transparent: true },
      { name: "LineNrBelow", fg: fg.disabled, transparent: true },
      { name: "CursorLineNr", fg: fg.primary, style: ["bold"] },
      { name: "SignColumn", fg: fg.muted, bg: bg.base, transparent: true },
      { name: "CursorLineSign", fg: fg.muted, bg: cursorLineBg },
      { name: "FoldColumn", fg: fg.disabled, bg: bg.base, transparent: true },
      { name: "CursorLineFold", fg: fg.muted, bg: cursorLineBg },
      { name: "Folded", fg: fg.muted, bg: blend(accent.violet, bg.base, 0.12) },
    ],
  },
  {
    title: "选区与查找",
    groups: [
      { name: "Visual", bg: selectionBg },
      { name: "VisualNOS", bg: blend("#588564", bg.base, 0.22) },
      { name: "Search", fg: fg.primary, bg: findHighlightBg },
      { name: "IncSearch", fg: bg.base, bg: accent.yellow },
      { name: "CurSearch", fg: fg.bright, bg: findBg },
      { name: "Substitute", fg: bg.base, bg: accent.coral },
      { name: "QuickFixLine", fg: listSelectionFg, bg: cursorLineBg },
    ],
  },
  {
    title: "分割线与状态栏",
    groups: [
      { name: "WinSeparator", fg: border.default, bg: bg.base, transparent: true },
      { name: "VertSplit", link: "WinSeparator" },
      { name: "StatusLine", fg: fg.secondary, bg: bg.elevated },
      { name: "StatusLineNC", fg: fg.disabled, bg: bg.elevated },
      { name: "WinBar", fg: fg.secondary, bg: bg.base, transparent: true },
      { name: "WinBarNC", fg: fg.muted, bg: bg.base, transparent: true },
      { name: "TabLine", fg: fg.muted, bg: bg.elevated },
      { name: "TabLineFill", bg: bg.elevated },
      { name: "TabLineSel", fg: fg.primary, bg: bg.base, style: ["bold"] },
    ],
  },
  {
    title: "补全菜单",
    groups: [
      { name: "Pmenu", fg: fg.primary, bg: bg.elevated },
      { name: "PmenuSel", fg: fg.primary, bg: pmenuSelBg, style: ["bold"] },
      { name: "PmenuKind", fg: syntax.class, bg: bg.elevated },
      { name: "PmenuKindSel", fg: syntax.class, bg: pmenuSelBg },
      { name: "PmenuExtra", fg: fg.muted, bg: bg.elevated },
      { name: "PmenuExtraSel", fg: fg.muted, bg: pmenuSelBg },
      { name: "PmenuSbar", bg: bg.elevated },
      { name: "PmenuThumb", bg: border.active },
      { name: "PmenuMatch", fg: accent.cyan, bg: bg.elevated },
      { name: "PmenuMatchSel", fg: accent.cyan, bg: pmenuSelBg, style: ["bold"] },
      { name: "WildMenu", fg: bg.base, bg: accent.violet },
    ],
  },
  {
    title: "消息与提示",
    groups: [
      { name: "ModeMsg", fg: fg.primary, style: ["bold"] },
      { name: "MsgArea", fg: fg.primary },
      { name: "MsgSeparator", fg: border.default, bg: bg.elevated },
      { name: "MoreMsg", fg: accent.cyan },
      { name: "Question", fg: accent.cyan },
      { name: "ErrorMsg", fg: accent.coral },
      { name: "WarningMsg", fg: accent.yellow },
      { name: "NonText", fg: whitespaceFg },
      { name: "SpecialKey", fg: fg.disabled },
      { name: "Whitespace", fg: whitespaceFg },
    ],
  },
  {
    title: "差异对比",
    groups: [
      { name: "DiffAdd", bg: diffAddBg },
      { name: "DiffChange", bg: diffChangeBg },
      { name: "DiffDelete", fg: accent.coral, bg: diffDeleteBg },
      { name: "DiffText", bg: diffTextBg, style: ["bold"] },
      { name: "Added", fg: fileTree.added },
      { name: "Changed", fg: fileTree.modified },
      { name: "Removed", fg: fileTree.deleted },
    ],
  },
  {
    title: "拼写检查",
    groups: [
      { name: "SpellBad", sp: accent.coral, style: ["undercurl"] },
      { name: "SpellCap", sp: accent.yellow, style: ["undercurl"] },
      { name: "SpellLocal", sp: accent.cyan, style: ["undercurl"] },
      { name: "SpellRare", sp: accent.violet, style: ["undercurl"] },
    ],
  },
];

/**
 * 语法高亮组（Vim / Neovim 通用）
 *
 * 取值与 VS Code 主题的 tokenColors 一一对应
 */
export const syntaxSections: HighlightSection[] = [
  {
    title: "注释与字面量",
    groups: [
      { name: "Comment", fg: fg.comment },
      { name: "SpecialComment", fg: fg.comment, style: ["bold"] },
      { name: "Constant", fg: syntax.constant },
      { name: "String", fg: syntax.string },
      { name: "Character", fg: syntax.string },
      { name: "SpecialChar", fg: syntax.text },
      { name: "Number", fg: syntax.number },
      { name: "Float", fg: syntax.number },
      { name: "Boolean", fg: syntax.keyword },
    ],
  },
  {
    title: "标识符与函数",
    groups: [
      { name: "Identifier", fg: syntax.text },
      { name: "Function", fg: syntax.function },
      { name: "Special", fg: syntax.property },
      { name: "Delimiter", fg: syntax.tag },
      { name: "Tag", fg: syntax.tagName },
    ],
  },
  {
    title: "关键字与控制流",
    groups: [
      { name: "Statement", fg: syntax.keyword },
      { name: "Conditional", fg: syntax.keyword },
      { name: "Repeat", fg: syntax.keyword },
      { name: "Label", fg: syntax.constant },
      { name: "Operator", fg: syntax.operator },
      { name: "Keyword", fg: syntax.keyword },
      { name: "Exception", fg: syntax.keyword },
      { name: "StorageClass", fg: syntax.keyword },
    ],
  },
  {
    title: "预处理与类型",
    groups: [
      { name: "PreProc", fg: syntax.directive },
      { name: "Include", fg: syntax.directive },
      { name: "Define", fg: syntax.directive },
      { name: "Macro", fg: syntax.directive },
      { name: "PreCondit", fg: syntax.directive },
      { name: "Type", fg: syntax.class },
      { name: "Structure", fg: syntax.class },
      { name: "Typedef", fg: syntax.class },
    ],
  },
  {
    title: "状态提示",
    groups: [
      { name: "Underlined", fg: accent.blue, style: ["underline"] },
      { name: "Error", fg: accent.coral },
      { name: "Debug", fg: accent.coral },
      { name: "Todo", fg: bg.base, bg: accent.violet, style: ["bold"] },
    ],
  },
];

/** 终端 ANSI 16 色，顺序与 g:terminal_color_0..15 对应 */
export const terminalColors: string[] = [
  ansi.black,
  ansi.red,
  ansi.green,
  ansi.yellow,
  ansi.blue,
  ansi.magenta,
  ansi.cyan,
  ansi.white,
  ansi.brightBlack,
  ansi.brightRed,
  ansi.brightGreen,
  ansi.brightYellow,
  ansi.brightBlue,
  ansi.brightMagenta,
  ansi.brightCyan,
  ansi.brightWhite,
];

/**
 * Neovim 专属高亮组
 *
 * 诊断、LSP、Treesitter 捕获组与常用插件，Vim 8 不识别这些组名
 */
export const nvimSections: HighlightSection[] = [
  {
    title: "诊断",
    groups: [
      { name: "DiagnosticError", fg: accent.coral },
      { name: "DiagnosticWarn", fg: accent.yellow },
      { name: "DiagnosticInfo", fg: accent.cyan },
      { name: "DiagnosticHint", fg: fg.muted },
      { name: "DiagnosticOk", fg: accent.green },
      { name: "DiagnosticVirtualTextError", fg: accent.coral, bg: errorBg },
      { name: "DiagnosticVirtualTextWarn", fg: accent.yellow, bg: warnBg },
      { name: "DiagnosticVirtualTextInfo", fg: accent.cyan, bg: infoBg },
      { name: "DiagnosticVirtualTextHint", fg: fg.muted, bg: hintBg },
      { name: "DiagnosticVirtualTextOk", fg: accent.green, bg: blend(accent.green, bg.base, 0.1) },
      { name: "DiagnosticUnderlineError", sp: accent.coral, style: ["undercurl"] },
      { name: "DiagnosticUnderlineWarn", sp: accent.yellow, style: ["undercurl"] },
      { name: "DiagnosticUnderlineInfo", sp: accent.cyan, style: ["undercurl"] },
      { name: "DiagnosticUnderlineHint", sp: fg.muted, style: ["undercurl"] },
      { name: "DiagnosticUnderlineOk", sp: accent.green, style: ["undercurl"] },
      { name: "DiagnosticSignError", link: "DiagnosticError" },
      { name: "DiagnosticSignWarn", link: "DiagnosticWarn" },
      { name: "DiagnosticSignInfo", link: "DiagnosticInfo" },
      { name: "DiagnosticSignHint", link: "DiagnosticHint" },
      { name: "DiagnosticFloatingError", link: "DiagnosticError" },
      { name: "DiagnosticFloatingWarn", link: "DiagnosticWarn" },
      { name: "DiagnosticFloatingInfo", link: "DiagnosticInfo" },
      { name: "DiagnosticFloatingHint", link: "DiagnosticHint" },
      { name: "DiagnosticDeprecated", sp: fg.muted, style: ["strikethrough"] },
      { name: "DiagnosticUnnecessary", fg: fg.disabled },
    ],
  },
  {
    title: "LSP",
    groups: [
      { name: "LspReferenceText", bg: referenceBg },
      { name: "LspReferenceRead", bg: referenceBg },
      { name: "LspReferenceWrite", bg: referenceWriteBg },
      { name: "LspInlayHint", fg: fg.muted, bg: hintBg },
      { name: "LspCodeLens", fg: fg.muted },
      { name: "LspCodeLensSeparator", fg: fg.disabled },
      { name: "LspSignatureActiveParameter", fg: accent.cyan, style: ["bold"] },
      { name: "LspInfoBorder", link: "FloatBorder" },
    ],
  },
  {
    title: "Treesitter - 变量与常量",
    groups: [
      { name: "@variable", fg: syntax.text },
      { name: "@variable.builtin", fg: syntax.self },
      { name: "@variable.parameter", fg: syntax.text },
      { name: "@variable.parameter.builtin", fg: syntax.self },
      { name: "@variable.member", fg: syntax.property },
      { name: "@constant", fg: syntax.constant },
      { name: "@constant.builtin", fg: syntax.keyword },
      { name: "@constant.macro", fg: syntax.directive },
      { name: "@module", fg: syntax.class },
      { name: "@module.builtin", fg: syntax.keyword },
      { name: "@label", fg: syntax.constant },
    ],
  },
  {
    title: "Treesitter - 字面量",
    groups: [
      { name: "@string", fg: syntax.string },
      { name: "@string.documentation", fg: fg.comment },
      { name: "@string.regexp", fg: syntax.text },
      { name: "@string.escape", fg: syntax.text },
      { name: "@string.special", fg: syntax.property },
      { name: "@string.special.symbol", fg: syntax.constant },
      { name: "@string.special.path", fg: accent.blue },
      { name: "@string.special.url", fg: accent.blue, style: ["underline"] },
      { name: "@character", fg: syntax.string },
      { name: "@character.special", fg: syntax.property },
      { name: "@boolean", fg: syntax.keyword },
      { name: "@number", fg: syntax.number },
      { name: "@number.float", fg: syntax.number },
    ],
  },
  {
    title: "Treesitter - 类型与函数",
    groups: [
      { name: "@type", fg: syntax.class },
      { name: "@type.builtin", fg: syntax.keyword },
      { name: "@type.definition", fg: syntax.class },
      { name: "@attribute", fg: syntax.directive },
      { name: "@attribute.builtin", fg: syntax.directive },
      { name: "@property", fg: syntax.property },
      { name: "@function", fg: syntax.function },
      { name: "@function.builtin", fg: syntax.keyword },
      { name: "@function.call", fg: syntax.function },
      { name: "@function.macro", fg: syntax.directive },
      { name: "@function.method", fg: syntax.function },
      { name: "@function.method.call", fg: syntax.function },
      { name: "@constructor", fg: syntax.class },
      { name: "@operator", fg: syntax.operator },
    ],
  },
  {
    title: "Treesitter - 关键字与标点",
    groups: [
      { name: "@keyword", fg: syntax.keyword },
      { name: "@keyword.coroutine", fg: syntax.keyword },
      { name: "@keyword.function", fg: syntax.keyword },
      { name: "@keyword.operator", fg: syntax.operator },
      { name: "@keyword.import", fg: syntax.directive },
      { name: "@keyword.type", fg: syntax.keyword },
      { name: "@keyword.modifier", fg: syntax.keyword },
      { name: "@keyword.repeat", fg: syntax.keyword },
      { name: "@keyword.return", fg: syntax.keyword },
      { name: "@keyword.debug", fg: accent.coral },
      { name: "@keyword.exception", fg: syntax.keyword },
      { name: "@keyword.conditional", fg: syntax.keyword },
      { name: "@keyword.conditional.ternary", fg: syntax.operator },
      { name: "@keyword.directive", fg: syntax.directive },
      { name: "@keyword.directive.define", fg: syntax.directive },
      { name: "@punctuation.delimiter", fg: syntax.tag },
      { name: "@punctuation.bracket", fg: syntax.tag },
      { name: "@punctuation.special", fg: syntax.property },
    ],
  },
  {
    title: "Treesitter - 注释与标记",
    groups: [
      { name: "@comment", fg: fg.comment },
      { name: "@comment.documentation", fg: fg.comment },
      { name: "@comment.error", fg: accent.coral, style: ["bold"] },
      { name: "@comment.warning", fg: accent.yellow, style: ["bold"] },
      { name: "@comment.todo", fg: accent.violet, style: ["bold"] },
      { name: "@comment.note", fg: accent.cyan, style: ["bold"] },
      { name: "@markup.strong", style: ["bold"] },
      { name: "@markup.italic", style: ["italic"] },
      { name: "@markup.strikethrough", style: ["strikethrough"] },
      { name: "@markup.underline", style: ["underline"] },
      { name: "@markup.heading", fg: accent.violet, style: ["bold"] },
      { name: "@markup.quote", fg: fg.muted },
      { name: "@markup.math", fg: syntax.number },
      { name: "@markup.link", fg: accent.blue },
      { name: "@markup.link.label", fg: syntax.property },
      { name: "@markup.link.url", fg: accent.blue, style: ["underline"] },
      { name: "@markup.raw", fg: syntax.string },
      { name: "@markup.raw.block", fg: syntax.string },
      { name: "@markup.list", fg: syntax.operator },
      { name: "@markup.list.checked", fg: accent.green },
      { name: "@markup.list.unchecked", fg: fg.muted },
      { name: "@diff.plus", fg: fileTree.added },
      { name: "@diff.minus", fg: fileTree.deleted },
      { name: "@diff.delta", fg: fileTree.modified },
      { name: "@tag", fg: syntax.tagName },
      { name: "@tag.builtin", fg: syntax.tagName },
      { name: "@tag.attribute", fg: syntax.property },
      { name: "@tag.delimiter", fg: syntax.tag },
    ],
  },
  {
    title: "LSP 语义 Token",
    groups: [
      { name: "@lsp.type.class", link: "@type" },
      { name: "@lsp.type.comment", link: "@comment" },
      { name: "@lsp.type.decorator", link: "@attribute" },
      { name: "@lsp.type.enum", link: "@type" },
      { name: "@lsp.type.enumMember", link: "@constant" },
      { name: "@lsp.type.event", link: "@attribute" },
      { name: "@lsp.type.function", link: "@function" },
      { name: "@lsp.type.interface", link: "@type" },
      { name: "@lsp.type.keyword", link: "@keyword" },
      { name: "@lsp.type.macro", link: "@function.macro" },
      { name: "@lsp.type.method", link: "@function.method" },
      { name: "@lsp.type.modifier", link: "@keyword.modifier" },
      { name: "@lsp.type.namespace", link: "@module" },
      { name: "@lsp.type.number", link: "@number" },
      { name: "@lsp.type.operator", link: "@operator" },
      { name: "@lsp.type.parameter", link: "@variable.parameter" },
      { name: "@lsp.type.property", link: "@property" },
      { name: "@lsp.type.regexp", link: "@string.regexp" },
      { name: "@lsp.type.string", link: "@string" },
      { name: "@lsp.type.struct", link: "@type" },
      { name: "@lsp.type.type", link: "@type" },
      { name: "@lsp.type.typeParameter", link: "@type" },
      { name: "@lsp.type.variable", link: "@variable" },
      { name: "@lsp.mod.deprecated", style: ["strikethrough"] },
      { name: "@lsp.typemod.variable.readonly", fg: syntax.neutral },
      { name: "@lsp.typemod.variable.defaultLibrary", fg: syntax.self },
      { name: "@lsp.typemod.function.defaultLibrary", fg: syntax.keyword },
    ],
  },
];

/**
 * 常用插件高亮组（Neovim）
 *
 * 覆盖本地实际安装的插件：nvim-cmp、telescope、nvim-tree、
 * indent-blankline、which-key、nvim-ufo
 */
export const pluginSections: HighlightSection[] = [
  {
    title: "nvim-cmp",
    groups: [
      { name: "CmpItemAbbr", fg: fg.primary },
      { name: "CmpItemAbbrDeprecated", fg: fg.disabled, style: ["strikethrough"] },
      { name: "CmpItemAbbrMatch", fg: accent.cyan, style: ["bold"] },
      { name: "CmpItemAbbrMatchFuzzy", fg: accent.cyan },
      { name: "CmpItemMenu", fg: fg.muted },
      { name: "CmpItemKindText", fg: syntax.text },
      { name: "CmpItemKindMethod", fg: syntax.function },
      { name: "CmpItemKindFunction", fg: syntax.function },
      { name: "CmpItemKindConstructor", fg: syntax.function },
      { name: "CmpItemKindField", fg: syntax.property },
      { name: "CmpItemKindVariable", fg: syntax.text },
      { name: "CmpItemKindClass", fg: syntax.class },
      { name: "CmpItemKindInterface", fg: syntax.class },
      { name: "CmpItemKindModule", fg: syntax.class },
      { name: "CmpItemKindProperty", fg: syntax.property },
      { name: "CmpItemKindUnit", fg: syntax.number },
      { name: "CmpItemKindValue", fg: syntax.constant },
      { name: "CmpItemKindEnum", fg: syntax.class },
      { name: "CmpItemKindKeyword", fg: syntax.keyword },
      { name: "CmpItemKindSnippet", fg: syntax.directive },
      { name: "CmpItemKindColor", fg: syntax.string },
      { name: "CmpItemKindFile", fg: fg.secondary },
      { name: "CmpItemKindFolder", fg: fg.secondary },
      { name: "CmpItemKindConstant", fg: syntax.constant },
      { name: "CmpItemKindStruct", fg: syntax.class },
      { name: "CmpItemKindEvent", fg: syntax.directive },
      { name: "CmpItemKindOperator", fg: syntax.operator },
      { name: "CmpItemKindTypeParameter", fg: syntax.class },
    ],
  },
  {
    title: "telescope.nvim",
    groups: [
      { name: "TelescopeNormal", fg: fg.primary, bg: bg.elevated },
      { name: "TelescopeBorder", fg: border.default, bg: bg.elevated },
      { name: "TelescopeTitle", fg: accent.violet, style: ["bold"] },
      { name: "TelescopePromptNormal", fg: fg.primary, bg: bg.input },
      { name: "TelescopePromptBorder", fg: bg.input, bg: bg.input },
      { name: "TelescopePromptTitle", fg: bg.base, bg: accent.violet, style: ["bold"] },
      { name: "TelescopePromptPrefix", fg: accent.violet },
      { name: "TelescopePromptCounter", fg: fg.muted },
      { name: "TelescopeResultsTitle", fg: bg.elevated, bg: bg.elevated },
      { name: "TelescopePreviewTitle", fg: bg.base, bg: accent.green, style: ["bold"] },
      { name: "TelescopeSelection", fg: listSelectionFg, bg: cursorLineBg },
      { name: "TelescopeSelectionCaret", fg: accent.violet, bg: cursorLineBg },
      { name: "TelescopeMultiSelection", fg: accent.violet },
      { name: "TelescopeMatching", fg: accent.cyan, style: ["bold"] },
    ],
  },
  {
    title: "nvim-tree",
    groups: [
      { name: "NvimTreeNormal", fg: fileTree.normal, bg: bg.elevated, transparent: true },
      { name: "NvimTreeNormalNC", fg: fileTree.normal, bg: bg.elevated, transparent: true },
      { name: "NvimTreeWinSeparator", fg: border.default, bg: bg.elevated, transparent: true },
      { name: "NvimTreeRootFolder", fg: accent.violet, style: ["bold"] },
      { name: "NvimTreeFolderName", fg: accent.cyan },
      { name: "NvimTreeOpenedFolderName", fg: accent.cyan, style: ["bold"] },
      { name: "NvimTreeEmptyFolderName", fg: fg.muted },
      { name: "NvimTreeFolderIcon", fg: accent.cyan },
      { name: "NvimTreeSpecialFile", fg: syntax.constant },
      { name: "NvimTreeExecFile", fg: accent.green },
      { name: "NvimTreeSymlink", fg: accent.cyan, style: ["underline"] },
      { name: "NvimTreeIndentMarker", fg: border.active },
      { name: "NvimTreeCursorLine", bg: cursorLineBg },
      { name: "NvimTreeGitNew", fg: fileTree.untracked },
      { name: "NvimTreeGitDirty", fg: fileTree.modified },
      { name: "NvimTreeGitStaged", fg: fileTree.added },
      { name: "NvimTreeGitDeleted", fg: fileTree.deleted },
      { name: "NvimTreeGitMerge", fg: fileTree.conflict },
      { name: "NvimTreeGitRenamed", fg: fileTree.modified },
      { name: "NvimTreeGitIgnored", fg: fileTree.ignored },
    ],
  },
  {
    title: "indent-blankline / which-key / ufo",
    groups: [
      { name: "IblIndent", fg: border.default },
      { name: "IblWhitespace", fg: border.default },
      { name: "IblScope", fg: border.active },
      { name: "WhichKey", fg: accent.violet },
      { name: "WhichKeyGroup", fg: accent.cyan },
      { name: "WhichKeyDesc", fg: fg.primary },
      { name: "WhichKeySeparator", fg: fg.disabled },
      { name: "WhichKeyFloat", bg: bg.elevated },
      { name: "WhichKeyBorder", fg: border.default, bg: bg.elevated },
      { name: "WhichKeyValue", fg: fg.muted },
      { name: "UfoFoldedFg", fg: fg.muted },
      { name: "UfoFoldedBg", bg: blend(accent.violet, bg.base, 0.12) },
      { name: "UfoFoldedEllipsis", fg: accent.violet },
    ],
  },
];
