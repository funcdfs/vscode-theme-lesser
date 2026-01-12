/**
 * Lesser 主题 - Monaco Editor 配置
 * 
 * 颜色同步自 src/palette.ts
 */
export const lesserTheme = {
  base: 'vs-dark',
  inherit: false,
  rules: [
    // === 默认文本 - #dbd6d2 (syntax.text) ===
    { token: '', foreground: 'dbd6d2' },
    { token: 'source', foreground: 'dbd6d2' },
    { token: 'text', foreground: 'dbd6d2' },
    { token: 'identifier', foreground: 'dbd6d2' },
    
    // === 标点/分隔符 - #CCCCCC (syntax.neutral) ===
    { token: 'delimiter', foreground: 'CCCCCC' },
    { token: 'delimiter.bracket', foreground: 'CCCCCC' },
    { token: 'delimiter.parenthesis', foreground: 'CCCCCC' },
    { token: 'delimiter.square', foreground: 'CCCCCC' },
    { token: 'delimiter.curly', foreground: 'CCCCCC' },
    { token: 'delimiter.angle', foreground: 'CCCCCC' },
    { token: 'punctuation', foreground: 'CCCCCC' },
    { token: 'meta.brace', foreground: 'CCCCCC' },
    
    // === 注释 - #8B8399 (fg.comment 基色) ===
    { token: 'comment', foreground: '8B8399' },
    { token: 'comment.block', foreground: '8B8399' },
    { token: 'comment.line', foreground: '8B8399' },
    { token: 'comment.block.documentation', foreground: '9A92A8', fontStyle: 'italic' },
    
    // === 关键字 - #FF8BA7 (syntax.keyword) ===
    { token: 'keyword', foreground: 'FF8BA7' },
    { token: 'keyword.control', foreground: 'FF8BA7' },
    { token: 'keyword.control.flow', foreground: 'FF8BA7' },
    { token: 'keyword.control.import', foreground: 'FF8BA7' },
    { token: 'keyword.control.export', foreground: 'FF8BA7' },
    { token: 'keyword.control.return', foreground: 'FF8BA7' },
    { token: 'keyword.operator.new', foreground: 'FF8BA7' },
    { token: 'keyword.operator.expression', foreground: 'FF8BA7' },
    { token: 'keyword.operator.logical', foreground: 'FF8BA7' },
    
    // === 存储 - #ff8ba7 (syntax.keywordLower) ===
    { token: 'storage', foreground: 'ff8ba7' },
    { token: 'storage.type', foreground: 'ff8ba7' },
    { token: 'storage.modifier', foreground: 'ff8ba7' },
    { token: 'storage.type.function', foreground: 'ff8ba7' },
    { token: 'storage.type.class', foreground: 'ff8ba7' },
    
    // === 操作符 - #5CA55C (syntax.operator) ===
    { token: 'operator', foreground: '5CA55C' },
    { token: 'keyword.operator', foreground: '5CA55C' },
    { token: 'keyword.operator.arithmetic', foreground: '5CA55C' },
    { token: 'keyword.operator.assignment', foreground: '5CA55C' },
    { token: 'keyword.operator.comparison', foreground: '5CA55C' },

    // === 字符串 - #e394dc (syntax.string 基色) ===
    { token: 'string', foreground: 'e394dc' },
    { token: 'string.quoted', foreground: 'e394dc' },
    { token: 'string.quoted.single', foreground: 'e394dc' },
    { token: 'string.quoted.double', foreground: 'e394dc' },
    { token: 'string.template', foreground: 'e394dc' },
    { token: 'string.interpolated', foreground: 'e394dc' },
    { token: 'string.regexp', foreground: 'dbd6d2' },
    
    // === 常量 - #f8c762 (syntax.constant) ===
    { token: 'constant', foreground: 'f8c762' },
    { token: 'constant.character', foreground: 'f8c762' },
    { token: 'constant.other', foreground: 'f8c762' },
    
    // === 数字 - #5CA55C (syntax.number) ===
    { token: 'number', foreground: '5CA55C' },
    { token: 'number.float', foreground: '5CA55C' },
    { token: 'number.hex', foreground: '5CA55C' },
    { token: 'constant.numeric', foreground: '5CA55C' },
    
    // === 语言常量 (true/false/null) - #FF8BA7 ===
    { token: 'constant.language', foreground: 'FF8BA7' },
    { token: 'constant.language.boolean', foreground: 'FF8BA7' },
    { token: 'constant.language.null', foreground: 'FF8BA7' },
    
    // === 转义字符 - #dbd6d2 ===
    { token: 'constant.character.escape', foreground: 'dbd6d2' },
    
    // === 类型/类 - #efb080 (syntax.class) ===
    { token: 'type', foreground: 'efb080' },
    { token: 'type.identifier', foreground: 'efb080' },
    { token: 'class', foreground: 'efb080' },
    { token: 'class.identifier', foreground: 'efb080' },
    { token: 'entity.name.type', foreground: 'efb080' },
    { token: 'entity.name.class', foreground: 'efb080' },
    { token: 'entity.name.type.class', foreground: 'efb080' },
    { token: 'entity.name.type.interface', foreground: 'efb080' },
    { token: 'entity.name.type.struct', foreground: 'efb080' },
    { token: 'entity.name.type.enum', foreground: 'efb080' },
    { token: 'entity.name.type.parameter', foreground: 'efb080' },
    { token: 'support.type', foreground: 'efb080' },
    { token: 'support.type.primitive', foreground: 'efb080' },
    { token: 'support.class', foreground: 'efb080' },
    
    // === 函数 - #87c3ff (syntax.function) ===
    { token: 'function', foreground: '87c3ff' },
    { token: 'function.declaration', foreground: '87c3ff' },
    { token: 'entity.name.function', foreground: '87c3ff' },
    { token: 'entity.name.function.member', foreground: '87c3ff' },
    { token: 'support.function', foreground: '87c3ff' },
    { token: 'method', foreground: '87c3ff' },

    // === 命名空间 - #efb080 ===
    { token: 'namespace', foreground: 'efb080' },
    { token: 'entity.name.namespace', foreground: 'efb080' },
    { token: 'entity.name.module', foreground: 'efb080' },
    
    // === 变量 - #dbd6d2 (syntax.text) ===
    { token: 'variable', foreground: 'dbd6d2' },
    { token: 'variable.other', foreground: 'dbd6d2' },
    { token: 'variable.other.readwrite', foreground: 'dbd6d2' },
    { token: 'variable.parameter', foreground: 'dbd6d2' },
    { token: 'parameter', foreground: 'dbd6d2' },
    
    // === 属性 - #AAA0FA (syntax.property) ===
    { token: 'property', foreground: 'AAA0FA' },
    { token: 'variable.other.property', foreground: 'AAA0FA' },
    { token: 'variable.other.constant', foreground: 'AAA0FA' },
    { token: 'enumMember', foreground: 'dbd6d2' },
    
    // === 语言变量 (this/self) - #CC7C8A (syntax.self) ===
    { token: 'variable.language', foreground: 'CC7C8A' },
    { token: 'variable.language.this', foreground: 'CC7C8A' },
    { token: 'variable.language.self', foreground: 'CC7C8A' },
    { token: 'variable.language.super', foreground: 'CC7C8A' },
    
    // === 标签 - #fad075 (syntax.tagName) ===
    { token: 'tag', foreground: 'fad075' },
    { token: 'tag.html', foreground: 'fad075' },
    { token: 'metatag', foreground: 'fad075' },
    { token: 'metatag.html', foreground: 'fad075' },
    { token: 'metatag.xml', foreground: 'fad075' },
    
    // === 属性名 - #AAA0FA ===
    { token: 'attribute.name', foreground: 'AAA0FA' },
    { token: 'attribute.name.html', foreground: 'AAA0FA' },
    { token: 'attribute.value', foreground: 'e394dc' },
    { token: 'attribute.value.html', foreground: 'e394dc' },
    
    // === 装饰器 - #a8cc7c (syntax.directive) ===
    { token: 'annotation', foreground: 'a8cc7c' },
    { token: 'decorator', foreground: 'a8cc7c' },
    { token: 'meta.decorator', foreground: 'a8cc7c' },

    // === Markup ===
    { token: 'markup.heading', foreground: 'fad075' },
    { token: 'markup.bold', foreground: 'dbd6d2', fontStyle: 'bold' },
    { token: 'markup.italic', foreground: 'dbd6d2', fontStyle: 'italic' },
    { token: 'markup.underline.link', foreground: '87c3ff' },
    { token: 'markup.inline.raw', foreground: 'e394dc' },
    { token: 'markup.quote', foreground: '8B8399' },
    { token: 'markup.deleted', foreground: 'E34671' },
    { token: 'markup.inserted', foreground: '3FA266' },
    { token: 'markup.changed', foreground: 'A995F1' },
    { token: 'string.other.link', foreground: '87c3ff' },
    
    // === JSON ===
    { token: 'string.key.json', foreground: 'AAA0FA' },
    { token: 'string.value.json', foreground: 'e394dc' },
    { token: 'support.type.property-name.json', foreground: 'AAA0FA' },
    
    // === CSS ===
    { token: 'tag.css', foreground: 'efb080' },
    { token: 'tag.id.css', foreground: '87c3ff' },
    { token: 'tag.class.css', foreground: 'efb080' },
    { token: 'attribute.name.css', foreground: 'AAA0FA' },
    { token: 'attribute.value.css', foreground: 'dbd6d2' },
    { token: 'attribute.value.number.css', foreground: '5CA55C' },
    { token: 'attribute.value.unit.css', foreground: '5CA55C' },
    
    // === 无效 - #E34671 (accent.red) ===
    { token: 'invalid', foreground: 'E34671' },
    { token: 'invalid.illegal', foreground: 'E34671' },
  ],
  colors: {
    // === 编辑器背景 - #211D25 (bg.base) ===
    'editor.background': '#211D25',
    'editor.foreground': '#E4E4E4',
    
    // === 行高亮 - #251E2E (bg.surface) ===
    'editor.lineHighlightBackground': '#251E2E',
    'editor.lineHighlightBorder': '#251E2E00',
    
    // === 选择 - #3D3250 (selection) ===
    'editor.selectionBackground': '#3D325099',
    'editor.selectionForeground': '#FFFFFF',
    'editor.inactiveSelectionBackground': '#3D325077',
    
    // === 光标 ===
    'editorCursor.foreground': '#E4E4E4',
    
    // === 行号 ===
    'editorLineNumber.foreground': '#E4E4E442',
    'editorLineNumber.activeForeground': '#E4E4E4EB',
    
    // === 缩进指南 ===
    'editorIndentGuide.background': '#E4E4E413',
    'editorIndentGuide.activeBackground': '#E4E4E430',
    
    // === 空白字符 ===
    'editorWhitespace.foreground': '#505050B3',
    
    // === 括号匹配 - 薰衣草紫 ===
    'editorBracketMatch.background': '#B8A9C933',
    'editorBracketMatch.border': '#B8A9C98D',
    
    // === 括号配对着色 - nature 色系 ===
    'editorBracketHighlight.foreground1': '#7EB8DA',
    'editorBracketHighlight.foreground2': '#8FBC8F',
    'editorBracketHighlight.foreground3': '#B8A9C9',
    'editorBracketHighlight.foreground4': '#C9A86C',
    'editorBracketHighlight.foreground5': '#E0A370',
    'editorBracketHighlight.foreground6': '#A0A0B0',
    
    // === 查找匹配 ===
    'editor.findMatchBackground': '#88C0D066',
    'editor.findMatchHighlightBackground': '#88C0D044',
    'editor.findMatchBorder': '#88C0D0',
    
    // === 单词高亮 ===
    'editor.wordHighlightBackground': '#E4E4E41E',
    'editor.wordHighlightBorder': '#E4E4E430',
    
    // === 小部件 - #211D25 ===
    'editorWidget.background': '#211D25',
    'editorWidget.border': '#E4E4E413',
    'editorSuggestWidget.background': '#211D25',
    'editorSuggestWidget.border': '#E4E4E413',
    'editorSuggestWidget.selectedBackground': '#322840',
    'editorHoverWidget.background': '#211D25',
    'editorHoverWidget.border': '#E4E4E413',
    
    // === 滚动条 ===
    'scrollbarSlider.background': '#E4E4E411',
    'scrollbarSlider.hoverBackground': '#E4E4E41E',
    'scrollbarSlider.activeBackground': '#E4E4E41E',
  },
}
