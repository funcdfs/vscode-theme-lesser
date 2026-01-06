export const lesserTheme = {
  base: 'vs-dark',
  inherit: false,
  rules: [
    // Default text - #C0C8D8
    { token: '', foreground: 'C0C8D8' },
    { token: 'source', foreground: 'C0C8D8' },
    { token: 'text', foreground: 'C0C8D8' },
    { token: 'identifier', foreground: 'C0C8D8' },
    
    // Meta and punctuation - #B8C0D0
    { token: 'delimiter', foreground: 'B8C0D0' },
    { token: 'delimiter.bracket', foreground: 'B8C0D0' },
    { token: 'delimiter.parenthesis', foreground: 'B8C0D0' },
    { token: 'delimiter.square', foreground: 'B8C0D0' },
    { token: 'delimiter.curly', foreground: 'B8C0D0' },
    { token: 'delimiter.angle', foreground: 'B8C0D0' },
    { token: 'punctuation', foreground: 'B8C0D0' },
    { token: 'meta.brace', foreground: 'B8C0D0' },
    { token: 'operator', foreground: 'B8C0D0' },
    
    // Comments - #7A7595
    { token: 'comment', foreground: '7A7595' },
    { token: 'comment.block', foreground: '7A7595' },
    { token: 'comment.line', foreground: '7A7595' },
    { token: 'comment.block.documentation', foreground: '8A85A5', fontStyle: 'italic' },
    
    // Keywords - #89DDFF (with DD alpha)
    { token: 'keyword', foreground: '89DDFF' },
    { token: 'keyword.control', foreground: '89DDFF' },
    { token: 'keyword.control.flow', foreground: '89DDFF' },
    { token: 'keyword.control.import', foreground: '89DDFF' },
    { token: 'keyword.control.export', foreground: '89DDFF' },
    { token: 'keyword.control.return', foreground: '89DDFF' },
    { token: 'keyword.operator.new', foreground: '89DDFF' },
    { token: 'keyword.operator.expression', foreground: '89DDFF' },
    { token: 'keyword.operator.logical', foreground: '89DDFF' },
    
    // Storage - #89DDFF
    { token: 'storage', foreground: '89DDFF' },
    { token: 'storage.type', foreground: '89DDFF' },
    { token: 'storage.modifier', foreground: '89DDFF' },
    { token: 'storage.type.function', foreground: '89DDFF' },
    { token: 'storage.type.class', foreground: '89DDFF' },
    
    // Operators - #B8C0D0
    { token: 'keyword.operator', foreground: 'B8C0D0' },
    { token: 'keyword.operator.arithmetic', foreground: 'B8C0D0' },
    { token: 'keyword.operator.assignment', foreground: 'B8C0D0' },
    { token: 'keyword.operator.comparison', foreground: 'B8C0D0' },

    // Strings - #E8B89C (with BB alpha)
    { token: 'string', foreground: 'E8B89C' },
    { token: 'string.quoted', foreground: 'E8B89C' },
    { token: 'string.quoted.single', foreground: 'E8B89C' },
    { token: 'string.quoted.double', foreground: 'E8B89C' },
    { token: 'string.template', foreground: 'E8B89C' },
    { token: 'string.interpolated', foreground: 'E8B89C' },
    { token: 'string.regexp', foreground: '80FFB5' },
    
    // Constants - #FFE5A0 (with CC alpha)
    { token: 'constant', foreground: 'FFE5A0' },
    { token: 'constant.character', foreground: 'FFE5A0' },
    { token: 'constant.other', foreground: 'FFE5A0' },
    
    // Numeric constants - #E8B89C (with AA alpha)
    { token: 'number', foreground: 'E8B89C' },
    { token: 'number.float', foreground: 'E8B89C' },
    { token: 'number.hex', foreground: 'E8B89C' },
    { token: 'constant.numeric', foreground: 'E8B89C' },
    
    // Language constants (true/false/null) - #E8B89C
    { token: 'constant.language', foreground: 'E8B89C' },
    { token: 'constant.language.boolean', foreground: 'E8B89C' },
    { token: 'constant.language.null', foreground: 'E8B89C' },
    
    // Escape characters - #80FFB5
    { token: 'constant.character.escape', foreground: '80FFB5' },
    
    // Types and classes - #7AC0A0 (with DD alpha)
    { token: 'type', foreground: '7AC0A0' },
    { token: 'type.identifier', foreground: '7AC0A0' },
    { token: 'class', foreground: '7AC0A0' },
    { token: 'class.identifier', foreground: '7AC0A0' },
    { token: 'entity.name.type', foreground: '7AC0A0' },
    { token: 'entity.name.class', foreground: '7AC0A0' },
    { token: 'entity.name.type.class', foreground: '7AC0A0' },
    { token: 'entity.name.type.interface', foreground: '7AC0A0' },
    { token: 'entity.name.type.struct', foreground: '7AC0A0' },
    { token: 'entity.name.type.enum', foreground: '7AC0A0' },
    { token: 'entity.name.type.parameter', foreground: '7AC0A0' },
    { token: 'support.type', foreground: '7AC0A0' },
    { token: 'support.type.primitive', foreground: '7AC0A0' },
    { token: 'support.class', foreground: '7AC0A0' },
    
    // Functions - #C2A0FD (with F0 alpha)
    { token: 'function', foreground: 'C2A0FD' },
    { token: 'function.declaration', foreground: 'C2A0FD' },
    { token: 'entity.name.function', foreground: 'C2A0FD' },
    { token: 'entity.name.function.member', foreground: 'C2A0FD' },
    { token: 'support.function', foreground: 'C2A0FD' },
    { token: 'method', foreground: 'C2A0FD' },

    // Namespace - #C2A0FD
    { token: 'namespace', foreground: 'C2A0FD' },
    { token: 'entity.name.namespace', foreground: 'C2A0FD' },
    { token: 'entity.name.module', foreground: 'C2A0FD' },
    
    // Variables - #FFE5A0 (with CC alpha)
    { token: 'variable', foreground: 'FFE5A0' },
    { token: 'variable.other', foreground: 'FFE5A0' },
    { token: 'variable.other.readwrite', foreground: 'FFE5A0' },
    { token: 'variable.other.constant', foreground: 'FFE5A0' },
    { token: 'variable.other.property', foreground: 'FFE5A0' },
    { token: 'variable.parameter', foreground: 'FFE5A0' },
    { token: 'parameter', foreground: 'FFE5A0' },
    { token: 'property', foreground: 'FFE5A0' },
    { token: 'enumMember', foreground: 'FFE5A0' },
    
    // Language variables (this/self/super) - #80FFB5
    { token: 'variable.language', foreground: '80FFB5' },
    { token: 'variable.language.this', foreground: '80FFB5' },
    { token: 'variable.language.self', foreground: '80FFB5' },
    { token: 'variable.language.super', foreground: '80FFB5' },
    
    // Tags - #80FFB5
    { token: 'tag', foreground: '80FFB5' },
    { token: 'tag.html', foreground: '80FFB5' },
    { token: 'metatag', foreground: '80FFB5' },
    { token: 'metatag.html', foreground: '80FFB5' },
    { token: 'metatag.xml', foreground: '80FFB5' },
    
    // Attributes - #FFE5A0
    { token: 'attribute.name', foreground: 'FFE5A0' },
    { token: 'attribute.name.html', foreground: 'FFE5A0' },
    { token: 'attribute.value', foreground: 'E8B89C' },
    { token: 'attribute.value.html', foreground: 'E8B89C' },
    
    // Decorators - #C2A0FD
    { token: 'annotation', foreground: 'C2A0FD' },
    { token: 'decorator', foreground: 'C2A0FD' },
    { token: 'meta.decorator', foreground: 'C2A0FD' },

    // Markup - headings #80FFB5, bold #D4A5E8, italic #5A9BE6
    { token: 'markup.heading', foreground: '80FFB5' },
    { token: 'markup.bold', foreground: 'D4A5E8', fontStyle: 'bold' },
    { token: 'markup.italic', foreground: '5A9BE6', fontStyle: 'italic' },
    { token: 'markup.underline.link', foreground: '88C8F0' },
    { token: 'markup.inline.raw', foreground: '80FFB5' },
    { token: 'markup.quote', foreground: 'E8B4A0' },
    { token: 'markup.deleted', foreground: 'FF8090' },
    { token: 'markup.inserted', foreground: '5A9BE6' },
    { token: 'markup.changed', foreground: '80FFB5' },
    { token: 'string.other.link', foreground: 'D4A5E8' },
    
    // JSON - keys #FFE5A0, values #E8B89C
    { token: 'string.key.json', foreground: 'FFE5A0' },
    { token: 'string.value.json', foreground: 'E8B89C' },
    { token: 'support.type.property-name.json', foreground: 'FFE5A0' },
    
    // CSS
    { token: 'tag.css', foreground: '7AC0A0' },
    { token: 'tag.id.css', foreground: '5A9BE6' },
    { token: 'tag.class.css', foreground: '7AC0A0' },
    { token: 'attribute.name.css', foreground: 'FFE5A0' },
    { token: 'attribute.value.css', foreground: 'C0C8D8' },
    { token: 'attribute.value.number.css', foreground: 'E8B89C' },
    { token: 'attribute.value.unit.css', foreground: 'E8B89C' },
    
    // Invalid - #FF8090
    { token: 'invalid', foreground: 'FF8090' },
    { token: 'invalid.illegal', foreground: 'FF8090' },
  ],
  colors: {
    'editor.background': '#14101A',
    'editor.foreground': '#B8BFD0',
    'editor.lineHighlightBackground': '#1E1828',
    'editor.lineHighlightBorder': '#2E284000',
    'editor.selectionBackground': '#7E5A9E55',
    'editor.selectionForeground': '#FFFFFF',
    'editor.inactiveSelectionBackground': '#7E5A9E35',
    'editorCursor.foreground': '#E8B4FF',
    'editorLineNumber.foreground': '#5A5570',
    'editorLineNumber.activeForeground': '#B8BFD0',
    'editorIndentGuide.background': '#3D365060',
    'editorIndentGuide.activeBackground': '#3D3650',
    'editorWhitespace.foreground': '#3D365080',
    'editorBracketMatch.background': '#9D8CCC35',
    'editorBracketMatch.border': '#9D8CCC70',
    'editorBracketHighlight.foreground1': '#89DDFF',
    'editorBracketHighlight.foreground2': '#C0A0FF',
    'editorBracketHighlight.foreground3': '#80FFB5',
    'editorBracketHighlight.foreground4': '#E8A080',
    'editorBracketHighlight.foreground5': '#5AE89A',
    'editorBracketHighlight.foreground6': '#E8A0D0',
    'editor.findMatchBackground': '#3D7A5090',
    'editor.findMatchHighlightBackground': '#3D7A5060',
    'editor.findMatchBorder': '#5AE89ADD',
    'editor.wordHighlightBackground': '#9D8CCC25',
    'editor.wordHighlightBorder': '#9D8CCC45',
    'editorWidget.background': '#1A1520',
    'editorWidget.border': '#3D3650',
    'editorSuggestWidget.background': '#1A1520',
    'editorSuggestWidget.border': '#3D3650',
    'editorSuggestWidget.selectedBackground': '#2A2435',
    'editorHoverWidget.background': '#1A1520',
    'editorHoverWidget.border': '#3D3650',
    'scrollbarSlider.background': '#9D8CCC22',
    'scrollbarSlider.hoverBackground': '#9D8CCC40',
    'scrollbarSlider.activeBackground': '#9D8CCC55',
  },
}
