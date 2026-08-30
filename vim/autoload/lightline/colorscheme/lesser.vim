" Lesser
"
" 由 src/editors/ 自动生成，请勿直接编辑本文件。
" 修改颜色请改 src/palette.ts 或 src/editors/groups.ts，然后运行 npm run build。

let s:p = {'normal': {}, 'inactive': {}, 'insert': {}, 'replace': {}, 'visual': {}, 'tabline': {}}

let s:p.normal.left = [ [ '#1F1F1F', '#A995F1', 234, 141 ], [ '#E4E4E4', '#181818', 252, 233 ] ]
let s:p.normal.right = [ [ '#1F1F1F', '#A995F1', 234, 141 ], [ '#B0B0B0', '#181818', 248, 233 ] ]
let s:p.normal.middle = [ [ '#8A8A8A', '#181818', 244, 233 ] ]
let s:p.normal.error = [ [ '#1F1F1F', '#ff8080', 234, 210 ] ]
let s:p.normal.warning = [ [ '#1F1F1F', '#F1B467', 234, 215 ] ]
let s:p.insert.left = [ [ '#1F1F1F', '#3FA266', 234, 35 ], [ '#E4E4E4', '#181818', 252, 233 ] ]
let s:p.insert.right = [ [ '#1F1F1F', '#3FA266', 234, 35 ], [ '#B0B0B0', '#181818', 248, 233 ] ]
let s:p.insert.middle = [ [ '#8A8A8A', '#181818', 244, 233 ] ]
let s:p.replace.left = [ [ '#1F1F1F', '#ff8080', 234, 210 ], [ '#E4E4E4', '#181818', 252, 233 ] ]
let s:p.replace.right = [ [ '#1F1F1F', '#ff8080', 234, 210 ], [ '#B0B0B0', '#181818', 248, 233 ] ]
let s:p.replace.middle = [ [ '#8A8A8A', '#181818', 244, 233 ] ]
let s:p.visual.left = [ [ '#1F1F1F', '#88C0D0', 234, 110 ], [ '#E4E4E4', '#181818', 252, 233 ] ]
let s:p.visual.right = [ [ '#1F1F1F', '#88C0D0', 234, 110 ], [ '#B0B0B0', '#181818', 248, 233 ] ]
let s:p.visual.middle = [ [ '#8A8A8A', '#181818', 244, 233 ] ]
let s:p.inactive.left = [ [ '#707070', '#181818', 242, 233 ], [ '#707070', '#181818', 242, 233 ] ]
let s:p.inactive.right = [ [ '#707070', '#181818', 242, 233 ], [ '#707070', '#181818', 242, 233 ] ]
let s:p.inactive.middle = [ [ '#707070', '#181818', 242, 233 ] ]
let s:p.tabline.left = [ [ '#8A8A8A', '#181818', 244, 233 ] ]
let s:p.tabline.tabsel = [ [ '#E4E4E4', '#1F1F1F', 252, 234 ] ]
let s:p.tabline.middle = [ [ '#33303B', '#181818', 16, 233 ] ]
let s:p.tabline.right = [ [ '#8A8A8A', '#181818', 244, 233 ] ]

let g:lightline#colorscheme#lesser#palette = lightline#colorscheme#flatten(s:p)
