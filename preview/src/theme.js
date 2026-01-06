export const lesserTheme = {
  base: 'vs-dark',
  inherit: false,
  rules: [
    // Default text
    { token: '', foreground: 'C0C8D8' },
    { token: 'source', foreground: 'C0C8D8' },
    { token: 'text', foreground: 'C0C8D8' },
    
    // Comments
    { token: 'comment', foreground: '7A7595', fontStyle: 'italic' },
    { token: 'comment.block', foreground: '7A7595' },
    { token: 'comment.line', foreground: '7A7595' },
    { token: 'comment.block.documentation', foreground: '8A85A5', fontStyle: 'italic' },
    
    // Keywords
    { token: 'keyword', foreground: '5A9BE6' },
    { token: 'keyword.control', foreground: '5A9BE6' },
    { token: 'keyword.control.flow', foreground: '5A9BE6' },
    { token: 'keyword.control.import', foreground: '5A9BE6' },
    { token: 'keyword.control.export', foreground: '5A9BE6' },
    { token: 'keyword.operator.new', foreground: '5A9BE6' },
    { token: 'keyword.operator.expression', foreground: '5A9BE6' },
    
    // Storage
    { token: 'storage', foreground: '5A9BE6' },
    { token: 'storage.type', foreground: '5A9BE6' },
    { token: 'storage.modifier', foreground: '5A9BE6' },
    { token: 'storage.type.function', foreground: '5A9BE6' },
    { token: 'storage.type.class', foreground: '5A9BE6' },
    
    // Operators
    { token: 'operator', foreground: 'B8C0D0' },
    { token: 'keyword.operator', foreground: 'B8C0D0' },
    { token: 'keyword.operator.arithmetic', foreground: 'B8C0D0' },
    { token: 'keyword.operator.assignment', foreground: 'B8C0D0' },
    { token: 'keyword.operator.comparison', foreground: 'B8C0D0' },
    
    // Punctuation
    { token: 'delimiter', foreground: 'B8C0D0' },
    { token: 'delimiter.bracket', foreground: 'B0B8C8' },
    { token: 'delimiter.parenthesis', foreground: 'B0B8C8' },
    { token: 'delimiter.square', foreground: 'B0B8C8' },
    { token: 'delimiter.curly', foreground: 'B0B8C8' },
    { token: 'punctuation', foreground: 'B8C0D0' },
    { token: 'meta.brace', foreground: 'B0B8C8' },
    
    // Strings
    { token: 'string', foreground: 'E8B89C' },
    { token: 'string.quoted', foreground: 'E8B89C' },
    { token: 'string.template', foreground: 'E8B89C' },
    { token: 'string.interpolated', foreground: 'E8B89C' },
    { token: 'string.regexp', foreground: '80D8C8' },
    
    // Numbers and constants
    { token: 'number', foreground: 'FFE5A0' },
    { token: 'number.float', foreground: 'FFE5A0' },
    { token: 'number.hex', foreground: 'FFE5A0' },
    { token: 'constant', foreground: 'FFE5A0' },
    { token: 'constant.numeric', foreground: 'FFE5A0' },
    { token: 'constant.language', foreground: 'FFE5A0' },
    { token: 'constant.language.boolean', foreground: 'FFE5A0' },
    { token: 'constant.language.null', foreground: 'FFE5A0' },
    { token: 'constant.character.escape', foreground: '80D8C8' },
    
    // Types and classes
    { token: 'type', foreground: 'F0C090' },
    { token: 'type.identifier', foreground: 'F0C090' },
    { token: 'class', foreground: 'F0C090' },
    { token: 'class.identifier', foreground: 'F0C090' },
    { token: 'entity.name.type', foreground: 'F0C090' },
    { token: 'entity.name.class', foreground: 'F0C090' },
    { token: 'support.type', foreground: 'F0C090' },
    { token: 'support.class', foreground: 'F0C090' },
    
    // Interfaces
    { token: 'interface', foreground: '80D8C8' },
    { token: 'entity.name.type.interface', foreground: '80D8C8' },
    
    // Enums
    { token: 'enum', foreground: 'FFE5A0' },
    { token: 'enumMember', foreground: 'FFE5A0' },
    
    // Type parameters
    { token: 'typeParameter', foreground: '80D8C8' },
    
    // Functions
    { token: 'function', foreground: 'C9A0FF' },
    { token: 'function.declaration', foreground: 'C9A0FF' },
    { token: 'entity.name.function', foreground: 'C9A0FF' },
    { token: 'support.function', foreground: 'C9A0FF' },
    { token: 'method', foreground: 'C9A0FF' },
    
    // Variables
    { token: 'variable', foreground: 'C8D0E0' },
    { token: 'variable.other', foreground: 'C0C8D8' },
    { token: 'variable.parameter', foreground: 'C0C8D8' },
    { token: 'parameter', foreground: 'C0C8D8' },
    { token: 'variable.other.constant', foreground: 'FFE5A0' },
    { token: 'variable.language', foreground: '6BC98A' },
    { token: 'variable.language.this', foreground: '6BC98A' },
    { token: 'variable.language.self', foreground: '6BC98A' },
    
    // Properties
    { token: 'property', foreground: '80D8C8' },
    { token: 'variable.other.property', foreground: '80D8C8' },
    { token: 'meta.property', foreground: '80D8C8' },
    
    // Namespace
    { token: 'namespace', foreground: 'A090D0' },
    
    // Decorators/Annotations
    { token: 'annotation', foreground: 'C9A0FF' },
    { token: 'decorator', foreground: 'C9A0FF' },
    { token: 'meta.decorator', foreground: 'C9A0FF' },
    
    // Tags (HTML/JSX)
    { token: 'tag', foreground: '6BC98A' },
    { token: 'tag.id', foreground: '6BC98A' },
    { token: 'metatag', foreground: '6BC98A' },
    { token: 'metatag.html', foreground: '6BC98A' },
    { token: 'metatag.xml', foreground: '6BC98A' },
    
    // Attributes
    { token: 'attribute.name', foreground: '80D8C8' },
    { token: 'attribute.value', foreground: 'E8B89C' },
    { token: 'attribute.value.html', foreground: 'E8B89C' },
    
    // JSON
    { token: 'string.key.json', foreground: '6BC98A' },
    { token: 'string.value.json', foreground: 'E8B89C' },
    
    // CSS
    { token: 'attribute.name.css', foreground: '80D8C8' },
    { token: 'attribute.value.css', foreground: 'C0C8D8' },
    { token: 'attribute.value.number.css', foreground: 'FFE5A0' },
    { token: 'attribute.value.unit.css', foreground: '80D8C8' },
    { token: 'tag.css', foreground: 'F0C090' },
    { token: 'tag.id.css', foreground: '5A9BE6' },
    { token: 'tag.class.css', foreground: 'F0C090' },
    
    // Markdown
    { token: 'markup.heading', foreground: '6BC98A' },
    { token: 'markup.bold', foreground: 'D4A5E8', fontStyle: 'bold' },
    { token: 'markup.italic', foreground: '5A9BE6', fontStyle: 'italic' },
    { token: 'markup.underline.link', foreground: '88C8F0' },
    { token: 'markup.inline.raw', foreground: '80D8C8' },
    
    // Invalid
    { token: 'invalid', foreground: 'FF8090' },
    { token: 'invalid.illegal', foreground: 'FF8090' },

    // Language specific - Rust
    { token: 'lifetime.rust', foreground: '80D8C8' },
    { token: 'macro.rust', foreground: 'C9A0FF' },
    
    // Language specific - Python
    { token: 'decorator.python', foreground: 'C9A0FF' },
    
    // Language specific - Go
    { token: 'package.go', foreground: 'A090D0' },
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
    'editorBracketHighlight.foreground1': '#FFD080',
    'editorBracketHighlight.foreground2': '#E8A0D0',
    'editorBracketHighlight.foreground3': '#80D4E8',
    'editorBracketHighlight.foreground4': '#A0E8C0',
    'editorBracketHighlight.foreground5': '#E8B080',
    'editorBracketHighlight.foreground6': '#C0A0FF',
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
