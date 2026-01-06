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
    { token: 'keyword', foreground: '89DDFF' },
    { token: 'keyword.control', foreground: '89DDFF' },
    { token: 'keyword.control.flow', foreground: '89DDFF' },
    { token: 'keyword.control.import', foreground: '89DDFF' },
    { token: 'keyword.control.export', foreground: '89DDFF' },
    { token: 'keyword.operator.new', foreground: '89DDFF' },
    { token: 'keyword.operator.expression', foreground: '89DDFF' },
    
    // Storage
    { token: 'storage', foreground: '89DDFF' },
    { token: 'storage.type', foreground: '89DDFF' },
    { token: 'storage.modifier', foreground: '89DDFF' },
    { token: 'storage.type.function', foreground: '89DDFF' },
    { token: 'storage.type.class', foreground: '89DDFF' },
    
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
    { token: 'string.regexp', foreground: '80FFB5' },
    
    // Numbers and constants
    { token: 'number', foreground: 'FFE5A0' },
    { token: 'number.float', foreground: 'FFE5A0' },
    { token: 'number.hex', foreground: 'FFE5A0' },
    { token: 'constant', foreground: '5A9BE6' },
    { token: 'constant.numeric', foreground: 'FFE5A0' },
    { token: 'constant.language', foreground: '5A9BE6' },
    { token: 'constant.language.boolean', foreground: '5A9BE6' },
    { token: 'constant.language.null', foreground: '5A9BE6' },
    { token: 'constant.character.escape', foreground: '80FFB5' },
    
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
    { token: 'interface', foreground: '80FFB5' },
    { token: 'entity.name.type.interface', foreground: '80FFB5' },
    
    // Enums
    { token: 'enum', foreground: 'FFE5A0' },
    { token: 'enumMember', foreground: 'FFE5A0' },
    
    // Type parameters
    { token: 'typeParameter', foreground: '80FFB5' },
    
    // Functions
    { token: 'function', foreground: 'C2A0FD' },
    { token: 'function.declaration', foreground: 'C2A0FD' },
    { token: 'entity.name.function', foreground: 'C2A0FD' },
    { token: 'support.function', foreground: 'C2A0FD' },
    { token: 'method', foreground: 'C2A0FD' },
    
    // Variables
    { token: 'variable', foreground: 'FFE5A0' },
    { token: 'variable.other', foreground: 'FFE5A0' },
    { token: 'variable.parameter', foreground: 'FFE5A0' },
    { token: 'parameter', foreground: 'FFE5A0' },
    { token: 'variable.other.constant', foreground: 'FFE5A0' },
    { token: 'variable.language', foreground: '80FFB5' },
    { token: 'variable.language.this', foreground: '80FFB5' },
    { token: 'variable.language.self', foreground: '80FFB5' },
    
    // Properties
    { token: 'property', foreground: '80FFB5' },
    { token: 'variable.other.property', foreground: '80FFB5' },
    { token: 'meta.property', foreground: '80FFB5' },
    
    // Namespace
    { token: 'namespace', foreground: 'C2A0FD' },
    
    // Decorators/Annotations
    { token: 'annotation', foreground: 'C2A0FD' },
    { token: 'decorator', foreground: 'C2A0FD' },
    { token: 'meta.decorator', foreground: 'C2A0FD' },
    
    // Tags (HTML/JSX)
    { token: 'tag', foreground: '80FFB5' },
    { token: 'tag.id', foreground: '80FFB5' },
    { token: 'metatag', foreground: '80FFB5' },
    { token: 'metatag.html', foreground: '80FFB5' },
    { token: 'metatag.xml', foreground: '80FFB5' },
    
    // Attributes
    { token: 'attribute.name', foreground: '80FFB5' },
    { token: 'attribute.value', foreground: 'E8B89C' },
    { token: 'attribute.value.html', foreground: 'E8B89C' },
    
    // JSON
    { token: 'string.key.json', foreground: '80FFB5' },
    { token: 'string.value.json', foreground: 'E8B89C' },
    { token: 'support.type.property-name.json', foreground: '80FFB5' },
    
    // CSS
    { token: 'attribute.name.css', foreground: '80FFB5' },
    { token: 'attribute.value.css', foreground: 'C0C8D8' },
    { token: 'attribute.value.number.css', foreground: 'FFE5A0' },
    { token: 'attribute.value.unit.css', foreground: '80FFB5' },
    { token: 'tag.css', foreground: 'F0C090' },
    { token: 'tag.id.css', foreground: '89DDFF' },
    { token: 'tag.class.css', foreground: 'F0C090' },
    
    // Markdown
    { token: 'markup.heading', foreground: '80FFB5' },
    { token: 'markup.bold', foreground: 'D4A5E8', fontStyle: 'bold' },
    { token: 'markup.italic', foreground: '89DDFF', fontStyle: 'italic' },
    { token: 'markup.underline.link', foreground: '88C8F0' },
    { token: 'markup.inline.raw', foreground: '80FFB5' },
    { token: 'string.other.link', foreground: 'D4A5E8' },
    
    // Invalid
    { token: 'invalid', foreground: 'FF8090' },
    { token: 'invalid.illegal', foreground: 'FF8090' },

    // Language specific - Rust
    { token: 'lifetime.rust', foreground: '80FFB5' },
    { token: 'macro.rust', foreground: 'C2A0FD' },
    
    // Language specific - Python
    { token: 'decorator.python', foreground: 'C2A0FD' },
    
    // Language specific - Go
    { token: 'package.go', foreground: 'C2A0FD' },
    { token: 'type.go', foreground: 'F0C090' },
    { token: 'struct.go', foreground: 'F0C090' },
    { token: 'interface.go', foreground: '80FFB5' },
    { token: 'function.go', foreground: 'C2A0FD' },
    { token: 'method.go', foreground: 'C2A0FD' },
    { token: 'variable.go', foreground: 'FFE5A0' },
    { token: 'constant.go', foreground: '5A9BE6' },
    { token: 'property.go', foreground: '80FFB5' },
    { token: 'type.go', foreground: 'F0C090' },
    { token: 'interface.go', foreground: '80FFB5' },
    { token: 'struct.go', foreground: 'F0C090' },
    { token: 'function.go', foreground: 'C2A0FD' },
    { token: 'variable.go', foreground: 'FFE5A0' },
    { token: 'constant.go', foreground: '5A9BE6' },
    { token: 'property.go', foreground: '80FFB5' },
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
