" Lesser
"
" 由 src/editors/ 自动生成，请勿直接编辑本文件。
" 修改颜色请改 src/palette.ts 或 src/editors/groups.ts，然后运行 npm run build。

hi clear
if exists("syntax_on")
  syntax reset
endif

set background=dark
let g:colors_name = "lesser"

" === 编辑区 ===
hi Normal guifg=#E4E4E4 guibg=#1F1F1F gui=NONE
hi NormalNC guifg=#E4E4E4 guibg=#1F1F1F gui=NONE
hi NormalFloat guifg=#E4E4E4 guibg=#181818 gui=NONE
hi FloatBorder guifg=#33303B guibg=#181818 gui=NONE
hi FloatTitle guifg=#A995F1 guibg=#181818 gui=bold
hi FloatFooter guifg=#8A8A8A guibg=#181818 gui=NONE
hi EndOfBuffer guifg=#1F1F1F guibg=NONE gui=NONE
hi ColorColumn guifg=NONE guibg=#2B2B2B gui=NONE
hi Conceal guifg=#8A8A8A guibg=NONE gui=NONE
hi Directory guifg=#88C0D0 guibg=NONE gui=NONE
hi Title guifg=#A995F1 guibg=NONE gui=bold
hi Ignore guifg=#707070 guibg=NONE gui=NONE

" === 光标与当前行 ===
hi Cursor guifg=#1F1F1F guibg=#E4E4E4 gui=NONE
hi lCursor guifg=#1F1F1F guibg=#E4E4E4 gui=NONE
hi CursorIM guifg=#1F1F1F guibg=#A995F1 gui=NONE
hi TermCursor guifg=#1F1F1F guibg=#E4E4E4 gui=NONE
hi CursorLine guifg=NONE guibg=#2B2B2B gui=NONE
hi CursorColumn guifg=NONE guibg=#2B2B2B gui=NONE
hi MatchParen guifg=#B8A9C9 guibg=#3E3B41 gui=bold

" === 行号与标记列 ===
hi LineNr guifg=#8A8A8A guibg=NONE gui=NONE
hi LineNrAbove guifg=#707070 guibg=NONE gui=NONE
hi LineNrBelow guifg=#707070 guibg=NONE gui=NONE
hi CursorLineNr guifg=#E4E4E4 guibg=NONE gui=bold
hi SignColumn guifg=#8A8A8A guibg=#1F1F1F gui=NONE
hi CursorLineSign guifg=#8A8A8A guibg=#2B2B2B gui=NONE
hi FoldColumn guifg=#707070 guibg=#1F1F1F gui=NONE
hi CursorLineFold guifg=#8A8A8A guibg=#2B2B2B gui=NONE
hi Folded guifg=#8A8A8A guibg=#302D38 gui=NONE

" === 选区与查找 ===
hi Visual guifg=NONE guibg=#36483B gui=NONE
hi VisualNOS guifg=NONE guibg=#2C352E gui=NONE
hi Search guifg=#E4E4E4 guibg=#44575D gui=NONE
hi IncSearch guifg=#1F1F1F guibg=#F1B467 gui=NONE
hi CurSearch guifg=#FFFFFF guibg=#547078 gui=NONE
hi Substitute guifg=#1F1F1F guibg=#ff8080 gui=NONE
hi QuickFixLine guifg=#E0B050 guibg=#2B2B2B gui=NONE

" === 分割线与状态栏 ===
hi WinSeparator guifg=#33303B guibg=#1F1F1F gui=NONE
hi! link VertSplit WinSeparator
hi StatusLine guifg=#B0B0B0 guibg=#181818 gui=NONE
hi StatusLineNC guifg=#707070 guibg=#181818 gui=NONE
hi WinBar guifg=#B0B0B0 guibg=#1F1F1F gui=NONE
hi WinBarNC guifg=#8A8A8A guibg=#1F1F1F gui=NONE
hi TabLine guifg=#8A8A8A guibg=#181818 gui=NONE
hi TabLineFill guifg=NONE guibg=#181818 gui=NONE
hi TabLineSel guifg=#E4E4E4 guibg=#1F1F1F gui=bold

" === 补全菜单 ===
hi Pmenu guifg=#E4E4E4 guibg=#181818 gui=NONE
hi PmenuSel guifg=#E4E4E4 guibg=#313131 gui=bold
hi PmenuKind guifg=#efb080 guibg=#181818 gui=NONE
hi PmenuKindSel guifg=#efb080 guibg=#313131 gui=NONE
hi PmenuExtra guifg=#8A8A8A guibg=#181818 gui=NONE
hi PmenuExtraSel guifg=#8A8A8A guibg=#313131 gui=NONE
hi PmenuSbar guifg=NONE guibg=#181818 gui=NONE
hi PmenuThumb guifg=NONE guibg=#534E56 gui=NONE
hi PmenuMatch guifg=#88C0D0 guibg=#181818 gui=NONE
hi PmenuMatchSel guifg=#88C0D0 guibg=#313131 gui=bold
hi WildMenu guifg=#1F1F1F guibg=#A995F1 gui=NONE

" === 消息与提示 ===
hi ModeMsg guifg=#E4E4E4 guibg=NONE gui=bold
hi MsgArea guifg=#E4E4E4 guibg=NONE gui=NONE
hi MsgSeparator guifg=#33303B guibg=#181818 gui=NONE
hi MoreMsg guifg=#88C0D0 guibg=NONE gui=NONE
hi Question guifg=#88C0D0 guibg=NONE gui=NONE
hi ErrorMsg guifg=#ff8080 guibg=NONE gui=NONE
hi WarningMsg guifg=#F1B467 guibg=NONE gui=NONE
hi NonText guifg=#414141 guibg=NONE gui=NONE
hi SpecialKey guifg=#707070 guibg=NONE gui=NONE
hi Whitespace guifg=#414141 guibg=NONE gui=NONE

" === 差异对比 ===
hi DiffAdd guifg=NONE guibg=#25372C gui=NONE
hi DiffChange guifg=NONE guibg=#34313F gui=NONE
hi DiffDelete guifg=#ff8080 guibg=#412E2E gui=NONE
hi DiffText guifg=NONE guibg=#294936 gui=bold
hi Added guifg=#6BAF82 guibg=NONE gui=NONE
hi Changed guifg=#9785D9 guibg=NONE gui=NONE
hi Removed guifg=#B64D5E guibg=NONE gui=NONE

" === 拼写检查 ===
hi SpellBad guifg=NONE guibg=NONE guisp=#ff8080 gui=undercurl
hi SpellCap guifg=NONE guibg=NONE guisp=#F1B467 gui=undercurl
hi SpellLocal guifg=NONE guibg=NONE guisp=#88C0D0 gui=undercurl
hi SpellRare guifg=NONE guibg=NONE guisp=#A995F1 gui=undercurl

" === 注释与字面量 ===
hi Comment guifg=#8B8399 guibg=NONE gui=NONE
hi SpecialComment guifg=#8B8399 guibg=NONE gui=bold
hi Constant guifg=#f8c762 guibg=NONE gui=NONE
hi String guifg=#e394dc guibg=NONE gui=NONE
hi Character guifg=#e394dc guibg=NONE gui=NONE
hi SpecialChar guifg=#dbd6d2 guibg=NONE gui=NONE
hi Number guifg=#6bc98f guibg=NONE gui=NONE
hi Float guifg=#6bc98f guibg=NONE gui=NONE
hi Boolean guifg=#ff8ba7 guibg=NONE gui=NONE

" === 标识符与函数 ===
hi Identifier guifg=#dbd6d2 guibg=NONE gui=NONE
hi Function guifg=#87c3ff guibg=NONE gui=NONE
hi Special guifg=#aaa0fa guibg=NONE gui=NONE
hi Delimiter guifg=#a4a4a4 guibg=NONE gui=NONE
hi Tag guifg=#fad075 guibg=NONE gui=NONE

" === 关键字与控制流 ===
hi Statement guifg=#ff8ba7 guibg=NONE gui=NONE
hi Conditional guifg=#ff8ba7 guibg=NONE gui=NONE
hi Repeat guifg=#ff8ba7 guibg=NONE gui=NONE
hi Label guifg=#f8c762 guibg=NONE gui=NONE
hi Operator guifg=#6bc98f guibg=NONE gui=NONE
hi Keyword guifg=#ff8ba7 guibg=NONE gui=NONE
hi Exception guifg=#ff8ba7 guibg=NONE gui=NONE
hi StorageClass guifg=#ff8ba7 guibg=NONE gui=NONE

" === 预处理与类型 ===
hi PreProc guifg=#a8cc7c guibg=NONE gui=NONE
hi Include guifg=#a8cc7c guibg=NONE gui=NONE
hi Define guifg=#a8cc7c guibg=NONE gui=NONE
hi Macro guifg=#a8cc7c guibg=NONE gui=NONE
hi PreCondit guifg=#a8cc7c guibg=NONE gui=NONE
hi Type guifg=#efb080 guibg=NONE gui=NONE
hi Structure guifg=#efb080 guibg=NONE gui=NONE
hi Typedef guifg=#efb080 guibg=NONE gui=NONE

" === 状态提示 ===
hi Underlined guifg=#81A1C1 guibg=NONE gui=underline
hi Error guifg=#ff8080 guibg=NONE gui=NONE
hi Debug guifg=#ff8080 guibg=NONE gui=NONE
hi Todo guifg=#1F1F1F guibg=#A995F1 gui=bold

" === 终端 ANSI 颜色 ===
let g:terminal_ansi_colors = ['#181818', '#E05050', '#5CB85C', '#E5C07B', '#61AFEF', '#C678DD', '#56B6C2', '#E4E4E4', '#6B6B6B', '#F07178', '#98C379', '#E5C07B', '#61AFEF', '#C678DD', '#56B6C2', '#FFFFFF']
