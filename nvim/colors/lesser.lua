-- Lesser
--
-- 由 src/editors/ 自动生成，请勿直接编辑本文件。
-- 修改颜色请改 src/palette.ts 或 src/editors/groups.ts，然后运行 npm run build。

vim.cmd("hi clear")
if vim.fn.exists("syntax_on") == 1 then
  vim.cmd("syntax reset")
end

vim.o.background = "dark"
vim.g.colors_name = "lesser"

-- 透明背景：在加载配色前设置 vim.g.lesser_transparent = true 即可
local transparent = vim.g.lesser_transparent == true or vim.g.lesser_transparent == 1

local hl = vim.api.nvim_set_hl

--- 透明模式下把背景置空，否则原样返回
local function tp(color)
  return transparent and "NONE" or color
end

-- === 编辑区 ===
hl(0, "Normal", { fg = "#E4E4E4", bg = tp("#1F1F1F") })
hl(0, "NormalNC", { fg = "#E4E4E4", bg = tp("#1F1F1F") })
hl(0, "NormalFloat", { fg = "#E4E4E4", bg = tp("#181818") })
hl(0, "FloatBorder", { fg = "#33303B", bg = tp("#181818") })
hl(0, "FloatTitle", { fg = "#A995F1", bg = tp("#181818"), bold = true })
hl(0, "FloatFooter", { fg = "#8A8A8A", bg = tp("#181818") })
hl(0, "EndOfBuffer", { fg = "#1F1F1F" })
hl(0, "ColorColumn", { bg = "#2B2B2B" })
hl(0, "Conceal", { fg = "#8A8A8A" })
hl(0, "Directory", { fg = "#88C0D0" })
hl(0, "Title", { fg = "#A995F1", bold = true })
hl(0, "Ignore", { fg = "#707070" })

-- === 光标与当前行 ===
hl(0, "Cursor", { fg = "#1F1F1F", bg = "#E4E4E4" })
hl(0, "lCursor", { fg = "#1F1F1F", bg = "#E4E4E4" })
hl(0, "CursorIM", { fg = "#1F1F1F", bg = "#A995F1" })
hl(0, "TermCursor", { fg = "#1F1F1F", bg = "#E4E4E4" })
hl(0, "CursorLine", { bg = "#2B2B2B" })
hl(0, "CursorColumn", { bg = "#2B2B2B" })
hl(0, "MatchParen", { fg = "#B8A9C9", bg = "#3E3B41", bold = true })

-- === 行号与标记列 ===
hl(0, "LineNr", { fg = "#8A8A8A" })
hl(0, "LineNrAbove", { fg = "#707070" })
hl(0, "LineNrBelow", { fg = "#707070" })
hl(0, "CursorLineNr", { fg = "#E4E4E4", bold = true })
hl(0, "SignColumn", { fg = "#8A8A8A", bg = tp("#1F1F1F") })
hl(0, "CursorLineSign", { fg = "#8A8A8A", bg = "#2B2B2B" })
hl(0, "FoldColumn", { fg = "#707070", bg = tp("#1F1F1F") })
hl(0, "CursorLineFold", { fg = "#8A8A8A", bg = "#2B2B2B" })
hl(0, "Folded", { fg = "#8A8A8A", bg = "#302D38" })

-- === 选区与查找 ===
hl(0, "Visual", { bg = "#36483B" })
hl(0, "VisualNOS", { bg = "#2C352E" })
hl(0, "Search", { fg = "#E4E4E4", bg = "#44575D" })
hl(0, "IncSearch", { fg = "#1F1F1F", bg = "#F1B467" })
hl(0, "CurSearch", { fg = "#FFFFFF", bg = "#547078" })
hl(0, "Substitute", { fg = "#1F1F1F", bg = "#ff8080" })
hl(0, "QuickFixLine", { fg = "#E0B050", bg = "#2B2B2B" })

-- === 分割线与状态栏 ===
hl(0, "WinSeparator", { fg = "#33303B", bg = tp("#1F1F1F") })
hl(0, "VertSplit", { link = "WinSeparator" })
hl(0, "StatusLine", { fg = "#B0B0B0", bg = "#181818" })
hl(0, "StatusLineNC", { fg = "#707070", bg = "#181818" })
hl(0, "WinBar", { fg = "#B0B0B0", bg = tp("#1F1F1F") })
hl(0, "WinBarNC", { fg = "#8A8A8A", bg = tp("#1F1F1F") })
hl(0, "TabLine", { fg = "#8A8A8A", bg = "#181818" })
hl(0, "TabLineFill", { bg = "#181818" })
hl(0, "TabLineSel", { fg = "#E4E4E4", bg = "#1F1F1F", bold = true })

-- === 补全菜单 ===
hl(0, "Pmenu", { fg = "#E4E4E4", bg = "#181818" })
hl(0, "PmenuSel", { fg = "#E4E4E4", bg = "#313131", bold = true })
hl(0, "PmenuKind", { fg = "#efb080", bg = "#181818" })
hl(0, "PmenuKindSel", { fg = "#efb080", bg = "#313131" })
hl(0, "PmenuExtra", { fg = "#8A8A8A", bg = "#181818" })
hl(0, "PmenuExtraSel", { fg = "#8A8A8A", bg = "#313131" })
hl(0, "PmenuSbar", { bg = "#181818" })
hl(0, "PmenuThumb", { bg = "#534E56" })
hl(0, "PmenuMatch", { fg = "#88C0D0", bg = "#181818" })
hl(0, "PmenuMatchSel", { fg = "#88C0D0", bg = "#313131", bold = true })
hl(0, "WildMenu", { fg = "#1F1F1F", bg = "#A995F1" })

-- === 消息与提示 ===
hl(0, "ModeMsg", { fg = "#E4E4E4", bold = true })
hl(0, "MsgArea", { fg = "#E4E4E4" })
hl(0, "MsgSeparator", { fg = "#33303B", bg = "#181818" })
hl(0, "MoreMsg", { fg = "#88C0D0" })
hl(0, "Question", { fg = "#88C0D0" })
hl(0, "ErrorMsg", { fg = "#ff8080" })
hl(0, "WarningMsg", { fg = "#F1B467" })
hl(0, "NonText", { fg = "#414141" })
hl(0, "SpecialKey", { fg = "#707070" })
hl(0, "Whitespace", { fg = "#414141" })

-- === 差异对比 ===
hl(0, "DiffAdd", { bg = "#25372C" })
hl(0, "DiffChange", { bg = "#34313F" })
hl(0, "DiffDelete", { fg = "#ff8080", bg = "#412E2E" })
hl(0, "DiffText", { bg = "#294936", bold = true })
hl(0, "Added", { fg = "#6BAF82" })
hl(0, "Changed", { fg = "#9785D9" })
hl(0, "Removed", { fg = "#B64D5E" })

-- === 拼写检查 ===
hl(0, "SpellBad", { sp = "#ff8080", undercurl = true })
hl(0, "SpellCap", { sp = "#F1B467", undercurl = true })
hl(0, "SpellLocal", { sp = "#88C0D0", undercurl = true })
hl(0, "SpellRare", { sp = "#A995F1", undercurl = true })

-- === 注释与字面量 ===
hl(0, "Comment", { fg = "#8B8399" })
hl(0, "SpecialComment", { fg = "#8B8399", bold = true })
hl(0, "Constant", { fg = "#f8c762" })
hl(0, "String", { fg = "#e394dc" })
hl(0, "Character", { fg = "#e394dc" })
hl(0, "SpecialChar", { fg = "#dbd6d2" })
hl(0, "Number", { fg = "#6bc98f" })
hl(0, "Float", { fg = "#6bc98f" })
hl(0, "Boolean", { fg = "#ff8ba7" })

-- === 标识符与函数 ===
hl(0, "Identifier", { fg = "#dbd6d2" })
hl(0, "Function", { fg = "#87c3ff" })
hl(0, "Special", { fg = "#aaa0fa" })
hl(0, "Delimiter", { fg = "#a4a4a4" })
hl(0, "Tag", { fg = "#fad075" })

-- === 关键字与控制流 ===
hl(0, "Statement", { fg = "#ff8ba7" })
hl(0, "Conditional", { fg = "#ff8ba7" })
hl(0, "Repeat", { fg = "#ff8ba7" })
hl(0, "Label", { fg = "#f8c762" })
hl(0, "Operator", { fg = "#6bc98f" })
hl(0, "Keyword", { fg = "#ff8ba7" })
hl(0, "Exception", { fg = "#ff8ba7" })
hl(0, "StorageClass", { fg = "#ff8ba7" })

-- === 预处理与类型 ===
hl(0, "PreProc", { fg = "#a8cc7c" })
hl(0, "Include", { fg = "#a8cc7c" })
hl(0, "Define", { fg = "#a8cc7c" })
hl(0, "Macro", { fg = "#a8cc7c" })
hl(0, "PreCondit", { fg = "#a8cc7c" })
hl(0, "Type", { fg = "#efb080" })
hl(0, "Structure", { fg = "#efb080" })
hl(0, "Typedef", { fg = "#efb080" })

-- === 状态提示 ===
hl(0, "Underlined", { fg = "#81A1C1", underline = true })
hl(0, "Error", { fg = "#ff8080" })
hl(0, "Debug", { fg = "#ff8080" })
hl(0, "Todo", { fg = "#1F1F1F", bg = "#A995F1", bold = true })

-- === 诊断 ===
hl(0, "DiagnosticError", { fg = "#ff8080" })
hl(0, "DiagnosticWarn", { fg = "#F1B467" })
hl(0, "DiagnosticInfo", { fg = "#88C0D0" })
hl(0, "DiagnosticHint", { fg = "#8A8A8A" })
hl(0, "DiagnosticOk", { fg = "#3FA266" })
hl(0, "DiagnosticVirtualTextError", { fg = "#ff8080", bg = "#352929" })
hl(0, "DiagnosticVirtualTextWarn", { fg = "#F1B467", bg = "#342E26" })
hl(0, "DiagnosticVirtualTextInfo", { fg = "#88C0D0", bg = "#2A2F31" })
hl(0, "DiagnosticVirtualTextHint", { fg = "#8A8A8A", bg = "#2A2A2A" })
hl(0, "DiagnosticVirtualTextOk", { fg = "#3FA266", bg = "#222C26" })
hl(0, "DiagnosticUnderlineError", { sp = "#ff8080", undercurl = true })
hl(0, "DiagnosticUnderlineWarn", { sp = "#F1B467", undercurl = true })
hl(0, "DiagnosticUnderlineInfo", { sp = "#88C0D0", undercurl = true })
hl(0, "DiagnosticUnderlineHint", { sp = "#8A8A8A", undercurl = true })
hl(0, "DiagnosticUnderlineOk", { sp = "#3FA266", undercurl = true })
hl(0, "DiagnosticSignError", { link = "DiagnosticError" })
hl(0, "DiagnosticSignWarn", { link = "DiagnosticWarn" })
hl(0, "DiagnosticSignInfo", { link = "DiagnosticInfo" })
hl(0, "DiagnosticSignHint", { link = "DiagnosticHint" })
hl(0, "DiagnosticFloatingError", { link = "DiagnosticError" })
hl(0, "DiagnosticFloatingWarn", { link = "DiagnosticWarn" })
hl(0, "DiagnosticFloatingInfo", { link = "DiagnosticInfo" })
hl(0, "DiagnosticFloatingHint", { link = "DiagnosticHint" })
hl(0, "DiagnosticDeprecated", { sp = "#8A8A8A", strikethrough = true })
hl(0, "DiagnosticUnnecessary", { fg = "#707070" })

-- === LSP ===
hl(0, "LspReferenceText", { bg = "#333333" })
hl(0, "LspReferenceRead", { bg = "#333333" })
hl(0, "LspReferenceWrite", { bg = "#3B3749" })
hl(0, "LspInlayHint", { fg = "#8A8A8A", bg = "#2A2A2A" })
hl(0, "LspCodeLens", { fg = "#8A8A8A" })
hl(0, "LspCodeLensSeparator", { fg = "#707070" })
hl(0, "LspSignatureActiveParameter", { fg = "#88C0D0", bold = true })
hl(0, "LspInfoBorder", { link = "FloatBorder" })

-- === Treesitter - 变量与常量 ===
hl(0, "@variable", { fg = "#dbd6d2" })
hl(0, "@variable.builtin", { fg = "#cc7c8a" })
hl(0, "@variable.parameter", { fg = "#dbd6d2" })
hl(0, "@variable.parameter.builtin", { fg = "#cc7c8a" })
hl(0, "@variable.member", { fg = "#aaa0fa" })
hl(0, "@constant", { fg = "#f8c762" })
hl(0, "@constant.builtin", { fg = "#ff8ba7" })
hl(0, "@constant.macro", { fg = "#a8cc7c" })
hl(0, "@module", { fg = "#efb080" })
hl(0, "@module.builtin", { fg = "#ff8ba7" })
hl(0, "@label", { fg = "#f8c762" })

-- === Treesitter - 字面量 ===
hl(0, "@string", { fg = "#e394dc" })
hl(0, "@string.documentation", { fg = "#8B8399" })
hl(0, "@string.regexp", { fg = "#dbd6d2" })
hl(0, "@string.escape", { fg = "#dbd6d2" })
hl(0, "@string.special", { fg = "#aaa0fa" })
hl(0, "@string.special.symbol", { fg = "#f8c762" })
hl(0, "@string.special.path", { fg = "#81A1C1" })
hl(0, "@string.special.url", { fg = "#81A1C1", underline = true })
hl(0, "@character", { fg = "#e394dc" })
hl(0, "@character.special", { fg = "#aaa0fa" })
hl(0, "@boolean", { fg = "#ff8ba7" })
hl(0, "@number", { fg = "#6bc98f" })
hl(0, "@number.float", { fg = "#6bc98f" })

-- === Treesitter - 类型与函数 ===
hl(0, "@type", { fg = "#efb080" })
hl(0, "@type.builtin", { fg = "#ff8ba7" })
hl(0, "@type.definition", { fg = "#efb080" })
hl(0, "@attribute", { fg = "#a8cc7c" })
hl(0, "@attribute.builtin", { fg = "#a8cc7c" })
hl(0, "@property", { fg = "#aaa0fa" })
hl(0, "@function", { fg = "#87c3ff" })
hl(0, "@function.builtin", { fg = "#ff8ba7" })
hl(0, "@function.call", { fg = "#87c3ff" })
hl(0, "@function.macro", { fg = "#a8cc7c" })
hl(0, "@function.method", { fg = "#87c3ff" })
hl(0, "@function.method.call", { fg = "#87c3ff" })
hl(0, "@constructor", { fg = "#efb080" })
hl(0, "@operator", { fg = "#6bc98f" })

-- === Treesitter - 关键字与标点 ===
hl(0, "@keyword", { fg = "#ff8ba7" })
hl(0, "@keyword.coroutine", { fg = "#ff8ba7" })
hl(0, "@keyword.function", { fg = "#ff8ba7" })
hl(0, "@keyword.operator", { fg = "#6bc98f" })
hl(0, "@keyword.import", { fg = "#a8cc7c" })
hl(0, "@keyword.type", { fg = "#ff8ba7" })
hl(0, "@keyword.modifier", { fg = "#ff8ba7" })
hl(0, "@keyword.repeat", { fg = "#ff8ba7" })
hl(0, "@keyword.return", { fg = "#ff8ba7" })
hl(0, "@keyword.debug", { fg = "#ff8080" })
hl(0, "@keyword.exception", { fg = "#ff8ba7" })
hl(0, "@keyword.conditional", { fg = "#ff8ba7" })
hl(0, "@keyword.conditional.ternary", { fg = "#6bc98f" })
hl(0, "@keyword.directive", { fg = "#a8cc7c" })
hl(0, "@keyword.directive.define", { fg = "#a8cc7c" })
hl(0, "@punctuation.delimiter", { fg = "#a4a4a4" })
hl(0, "@punctuation.bracket", { fg = "#a4a4a4" })
hl(0, "@punctuation.special", { fg = "#aaa0fa" })

-- === Treesitter - 注释与标记 ===
hl(0, "@comment", { fg = "#8B8399" })
hl(0, "@comment.documentation", { fg = "#8B8399" })
hl(0, "@comment.error", { fg = "#ff8080", bold = true })
hl(0, "@comment.warning", { fg = "#F1B467", bold = true })
hl(0, "@comment.todo", { fg = "#A995F1", bold = true })
hl(0, "@comment.note", { fg = "#88C0D0", bold = true })
hl(0, "@markup.strong", { bold = true })
hl(0, "@markup.italic", { italic = true })
hl(0, "@markup.strikethrough", { strikethrough = true })
hl(0, "@markup.underline", { underline = true })
hl(0, "@markup.heading", { fg = "#A995F1", bold = true })
hl(0, "@markup.quote", { fg = "#8A8A8A" })
hl(0, "@markup.math", { fg = "#6bc98f" })
hl(0, "@markup.link", { fg = "#81A1C1" })
hl(0, "@markup.link.label", { fg = "#aaa0fa" })
hl(0, "@markup.link.url", { fg = "#81A1C1", underline = true })
hl(0, "@markup.raw", { fg = "#e394dc" })
hl(0, "@markup.raw.block", { fg = "#e394dc" })
hl(0, "@markup.list", { fg = "#6bc98f" })
hl(0, "@markup.list.checked", { fg = "#3FA266" })
hl(0, "@markup.list.unchecked", { fg = "#8A8A8A" })
hl(0, "@diff.plus", { fg = "#6BAF82" })
hl(0, "@diff.minus", { fg = "#B64D5E" })
hl(0, "@diff.delta", { fg = "#9785D9" })
hl(0, "@tag", { fg = "#fad075" })
hl(0, "@tag.builtin", { fg = "#fad075" })
hl(0, "@tag.attribute", { fg = "#aaa0fa" })
hl(0, "@tag.delimiter", { fg = "#a4a4a4" })

-- === LSP 语义 Token ===
hl(0, "@lsp.type.class", { link = "@type" })
hl(0, "@lsp.type.comment", { link = "@comment" })
hl(0, "@lsp.type.decorator", { link = "@attribute" })
hl(0, "@lsp.type.enum", { link = "@type" })
hl(0, "@lsp.type.enumMember", { link = "@constant" })
hl(0, "@lsp.type.event", { link = "@attribute" })
hl(0, "@lsp.type.function", { link = "@function" })
hl(0, "@lsp.type.interface", { link = "@type" })
hl(0, "@lsp.type.keyword", { link = "@keyword" })
hl(0, "@lsp.type.macro", { link = "@function.macro" })
hl(0, "@lsp.type.method", { link = "@function.method" })
hl(0, "@lsp.type.modifier", { link = "@keyword.modifier" })
hl(0, "@lsp.type.namespace", { link = "@module" })
hl(0, "@lsp.type.number", { link = "@number" })
hl(0, "@lsp.type.operator", { link = "@operator" })
hl(0, "@lsp.type.parameter", { link = "@variable.parameter" })
hl(0, "@lsp.type.property", { link = "@property" })
hl(0, "@lsp.type.regexp", { link = "@string.regexp" })
hl(0, "@lsp.type.string", { link = "@string" })
hl(0, "@lsp.type.struct", { link = "@type" })
hl(0, "@lsp.type.type", { link = "@type" })
hl(0, "@lsp.type.typeParameter", { link = "@type" })
hl(0, "@lsp.type.variable", { link = "@variable" })
hl(0, "@lsp.mod.deprecated", { strikethrough = true })
hl(0, "@lsp.typemod.variable.readonly", { fg = "#cccccc" })
hl(0, "@lsp.typemod.variable.defaultLibrary", { fg = "#cc7c8a" })
hl(0, "@lsp.typemod.function.defaultLibrary", { fg = "#ff8ba7" })

-- === nvim-cmp ===
hl(0, "CmpItemAbbr", { fg = "#E4E4E4" })
hl(0, "CmpItemAbbrDeprecated", { fg = "#707070", strikethrough = true })
hl(0, "CmpItemAbbrMatch", { fg = "#88C0D0", bold = true })
hl(0, "CmpItemAbbrMatchFuzzy", { fg = "#88C0D0" })
hl(0, "CmpItemMenu", { fg = "#8A8A8A" })
hl(0, "CmpItemKindText", { fg = "#dbd6d2" })
hl(0, "CmpItemKindMethod", { fg = "#87c3ff" })
hl(0, "CmpItemKindFunction", { fg = "#87c3ff" })
hl(0, "CmpItemKindConstructor", { fg = "#87c3ff" })
hl(0, "CmpItemKindField", { fg = "#aaa0fa" })
hl(0, "CmpItemKindVariable", { fg = "#dbd6d2" })
hl(0, "CmpItemKindClass", { fg = "#efb080" })
hl(0, "CmpItemKindInterface", { fg = "#efb080" })
hl(0, "CmpItemKindModule", { fg = "#efb080" })
hl(0, "CmpItemKindProperty", { fg = "#aaa0fa" })
hl(0, "CmpItemKindUnit", { fg = "#6bc98f" })
hl(0, "CmpItemKindValue", { fg = "#f8c762" })
hl(0, "CmpItemKindEnum", { fg = "#efb080" })
hl(0, "CmpItemKindKeyword", { fg = "#ff8ba7" })
hl(0, "CmpItemKindSnippet", { fg = "#a8cc7c" })
hl(0, "CmpItemKindColor", { fg = "#e394dc" })
hl(0, "CmpItemKindFile", { fg = "#B0B0B0" })
hl(0, "CmpItemKindFolder", { fg = "#B0B0B0" })
hl(0, "CmpItemKindConstant", { fg = "#f8c762" })
hl(0, "CmpItemKindStruct", { fg = "#efb080" })
hl(0, "CmpItemKindEvent", { fg = "#a8cc7c" })
hl(0, "CmpItemKindOperator", { fg = "#6bc98f" })
hl(0, "CmpItemKindTypeParameter", { fg = "#efb080" })

-- === telescope.nvim ===
hl(0, "TelescopeNormal", { fg = "#E4E4E4", bg = "#181818" })
hl(0, "TelescopeBorder", { fg = "#33303B", bg = "#181818" })
hl(0, "TelescopeTitle", { fg = "#A995F1", bold = true })
hl(0, "TelescopePromptNormal", { fg = "#E4E4E4", bg = "#313131" })
hl(0, "TelescopePromptBorder", { fg = "#313131", bg = "#313131" })
hl(0, "TelescopePromptTitle", { fg = "#1F1F1F", bg = "#A995F1", bold = true })
hl(0, "TelescopePromptPrefix", { fg = "#A995F1" })
hl(0, "TelescopePromptCounter", { fg = "#8A8A8A" })
hl(0, "TelescopeResultsTitle", { fg = "#181818", bg = "#181818" })
hl(0, "TelescopePreviewTitle", { fg = "#1F1F1F", bg = "#3FA266", bold = true })
hl(0, "TelescopeSelection", { fg = "#E0B050", bg = "#2B2B2B" })
hl(0, "TelescopeSelectionCaret", { fg = "#A995F1", bg = "#2B2B2B" })
hl(0, "TelescopeMultiSelection", { fg = "#A995F1" })
hl(0, "TelescopeMatching", { fg = "#88C0D0", bold = true })

-- === nvim-tree ===
hl(0, "NvimTreeNormal", { fg = "#B5B0AA", bg = tp("#181818") })
hl(0, "NvimTreeNormalNC", { fg = "#B5B0AA", bg = tp("#181818") })
hl(0, "NvimTreeWinSeparator", { fg = "#33303B", bg = tp("#181818") })
hl(0, "NvimTreeRootFolder", { fg = "#A995F1", bold = true })
hl(0, "NvimTreeFolderName", { fg = "#88C0D0" })
hl(0, "NvimTreeOpenedFolderName", { fg = "#88C0D0", bold = true })
hl(0, "NvimTreeEmptyFolderName", { fg = "#8A8A8A" })
hl(0, "NvimTreeFolderIcon", { fg = "#88C0D0" })
hl(0, "NvimTreeSpecialFile", { fg = "#f8c762" })
hl(0, "NvimTreeExecFile", { fg = "#3FA266" })
hl(0, "NvimTreeSymlink", { fg = "#88C0D0", underline = true })
hl(0, "NvimTreeIndentMarker", { fg = "#534E56" })
hl(0, "NvimTreeCursorLine", { bg = "#2B2B2B" })
hl(0, "NvimTreeGitNew", { fg = "#8dc8fb" })
hl(0, "NvimTreeGitDirty", { fg = "#9785D9" })
hl(0, "NvimTreeGitStaged", { fg = "#6BAF82" })
hl(0, "NvimTreeGitDeleted", { fg = "#B64D5E" })
hl(0, "NvimTreeGitMerge", { fg = "#A33352" })
hl(0, "NvimTreeGitRenamed", { fg = "#9785D9" })
hl(0, "NvimTreeGitIgnored", { fg = "#606060" })

-- === indent-blankline / which-key / ufo ===
hl(0, "IblIndent", { fg = "#33303B" })
hl(0, "IblWhitespace", { fg = "#33303B" })
hl(0, "IblScope", { fg = "#534E56" })
hl(0, "WhichKey", { fg = "#A995F1" })
hl(0, "WhichKeyGroup", { fg = "#88C0D0" })
hl(0, "WhichKeyDesc", { fg = "#E4E4E4" })
hl(0, "WhichKeySeparator", { fg = "#707070" })
hl(0, "WhichKeyFloat", { bg = "#181818" })
hl(0, "WhichKeyBorder", { fg = "#33303B", bg = "#181818" })
hl(0, "WhichKeyValue", { fg = "#8A8A8A" })
hl(0, "UfoFoldedFg", { fg = "#8A8A8A" })
hl(0, "UfoFoldedBg", { bg = "#302D38" })
hl(0, "UfoFoldedEllipsis", { fg = "#A995F1" })

-- === 终端 ANSI 颜色 ===
vim.g.terminal_color_0 = "#181818"
vim.g.terminal_color_1 = "#E05050"
vim.g.terminal_color_2 = "#5CB85C"
vim.g.terminal_color_3 = "#E5C07B"
vim.g.terminal_color_4 = "#61AFEF"
vim.g.terminal_color_5 = "#C678DD"
vim.g.terminal_color_6 = "#56B6C2"
vim.g.terminal_color_7 = "#E4E4E4"
vim.g.terminal_color_8 = "#6B6B6B"
vim.g.terminal_color_9 = "#F07178"
vim.g.terminal_color_10 = "#98C379"
vim.g.terminal_color_11 = "#E5C07B"
vim.g.terminal_color_12 = "#61AFEF"
vim.g.terminal_color_13 = "#C678DD"
vim.g.terminal_color_14 = "#56B6C2"
vim.g.terminal_color_15 = "#FFFFFF"
