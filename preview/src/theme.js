export const lesserTheme = {
  base: 'vs-dark',
  inherit: false,
  rules: [
    // Default text
    { token: '', foreground: 'bdc3cf' },
    { token: 'source', foreground: 'bdc3cf' },
    { token: 'text', foreground: 'bdc3cf' },
    
    // Comments
    { token: 'comment', foreground: '6b7089', fontStyle: 'italic' },
    { token: 'comment.block', foreground: '6b7089' },
    { token: 'comment.line', foreground: '6b7089' },
    { token: 'comment.block.documentation', foreground: '6b7089', fontStyle: 'italic' },
    
    // Keywords
    { token: 'keyword', foreground: 'AFB6FF' },
    { token: 'keyword.control', foreground: 'AFB6FF' },
    { token: 'keyword.control.flow', foreground: 'AFB6FF' },
    { token: 'keyword.control.import', foreground: 'AFB6FF' },
    { token: 'keyword.control.export', foreground: 'AFB6FF' },
    { token: 'keyword.operator.new', foreground: 'AFB6FF' },
    { token: 'keyword.operator.expression', foreground: 'AFB6FF' },
    
    // Storage
    { token: 'storage', foreground: 'AFB6FF' },
    { token: 'storage.type', foreground: 'AFB6FF' },
    { token: 'storage.modifier', foreground: 'AFB6FF' },
    { token: 'storage.type.function', foreground: 'AFB6FF' },
    { token: 'storage.type.class', foreground: 'AFB6FF' },
    
    // Operators
    { token: 'operator', foreground: 'BBBBBB' },
    { token: 'keyword.operator', foreground: 'BBBBBB' },
    { token: 'keyword.operator.arithmetic', foreground: 'BBBBBB' },
    { token: 'keyword.operator.assignment', foreground: 'BBBBBB' },
    { token: 'keyword.operator.comparison', foreground: 'BBBBBB' },
    
    // Punctuation
    { token: 'delimiter', foreground: 'BBBBBB' },
    { token: 'delimiter.bracket', foreground: 'abb2bf' },
    { token: 'delimiter.parenthesis', foreground: 'abb2bf' },
    { token: 'delimiter.square', foreground: 'abb2bf' },
    { token: 'delimiter.curly', foreground: 'abb2bf' },
    { token: 'punctuation', foreground: 'BBBBBB' },
    { token: 'meta.brace', foreground: 'abb2bf' },
    
    // Strings
    { token: 'string', foreground: '808aFF' },
    { token: 'string.quoted', foreground: '808aFF' },
    { token: 'string.template', foreground: '808aFF' },
    { token: 'string.interpolated', foreground: '808aFF' },
    { token: 'string.regexp', foreground: '7dd3c0' },
    
    // Numbers and constants
    { token: 'number', foreground: 'FFF2B3' },
    { token: 'number.float', foreground: 'FFF2B3' },
    { token: 'number.hex', foreground: 'FFF2B3' },
    { token: 'constant', foreground: 'FFF2B3' },
    { token: 'constant.numeric', foreground: 'FFF2B3' },
    { token: 'constant.language', foreground: 'FFF2B3' },
    { token: 'constant.language.boolean', foreground: 'FFF2B3' },
    { token: 'constant.language.null', foreground: 'FFF2B3' },
    { token: 'constant.character.escape', foreground: '7dd3c0' },
    
    // Types and classes
    { token: 'type', foreground: 'FAC29A' },
    { token: 'type.identifier', foreground: 'FAC29A' },
    { token: 'class', foreground: 'FAC29A' },
    { token: 'class.identifier', foreground: 'FAC29A' },
    { token: 'entity.name.type', foreground: 'FAC29A' },
    { token: 'entity.name.class', foreground: 'FAC29A' },
    { token: 'support.type', foreground: 'FAC29A' },
    { token: 'support.class', foreground: 'FAC29A' },
    
    // Interfaces
    { token: 'interface', foreground: '7dd3c0' },
    { token: 'entity.name.type.interface', foreground: '7dd3c0' },
    
    // Enums
    { token: 'enum', foreground: 'FFF2B3' },
    { token: 'enumMember', foreground: 'FFF2B3' },
    
    // Type parameters
    { token: 'typeParameter', foreground: '7dd3c0' },
    
    // Functions
    { token: 'function', foreground: '6a9be8' },
    { token: 'function.declaration', foreground: '6a9be8' },
    { token: 'entity.name.function', foreground: '6a9be8' },
    { token: 'support.function', foreground: '6a9be8' },
    { token: 'method', foreground: '6a9be8' },
    
    // Variables
    { token: 'variable', foreground: 'c5cad3' },
    { token: 'variable.other', foreground: 'bdc3cf' },
    { token: 'variable.parameter', foreground: 'bdc3cf' },
    { token: 'parameter', foreground: 'bdc3cf' },
    { token: 'variable.other.constant', foreground: 'FFF2B3' },
    { token: 'variable.language', foreground: '80FFB5' },
    { token: 'variable.language.this', foreground: '80FFB5' },
    { token: 'variable.language.self', foreground: '80FFB5' },
    
    // Properties
    { token: 'property', foreground: '7dd3c0' },
    { token: 'variable.other.property', foreground: '7dd3c0' },
    { token: 'meta.property', foreground: '7dd3c0' },
    
    // Namespace
    { token: 'namespace', foreground: 'b2aaca' },
    
    // Decorators/Annotations
    { token: 'annotation', foreground: 'AFB6FF' },
    { token: 'decorator', foreground: 'AFB6FF' },
    { token: 'meta.decorator', foreground: 'AFB6FF' },
    
    // Tags (HTML/JSX)
    { token: 'tag', foreground: '80FFB5' },
    { token: 'tag.id', foreground: '80FFB5' },
    { token: 'metatag', foreground: '80FFB5' },
    { token: 'metatag.html', foreground: '80FFB5' },
    { token: 'metatag.xml', foreground: '80FFB5' },
    
    // Attributes
    { token: 'attribute.name', foreground: '7dd3c0' },
    { token: 'attribute.value', foreground: '808aFF' },
    { token: 'attribute.value.html', foreground: '808aFF' },
    
    // JSON
    { token: 'string.key.json', foreground: '80FFB5' },
    { token: 'string.value.json', foreground: '808aFF' },
    
    // CSS
    { token: 'attribute.name.css', foreground: '7dd3c0' },
    { token: 'attribute.value.css', foreground: 'bdc3cf' },
    { token: 'attribute.value.number.css', foreground: 'FFF2B3' },
    { token: 'attribute.value.unit.css', foreground: '7dd3c0' },
    { token: 'tag.css', foreground: 'FAC29A' },
    { token: 'tag.id.css', foreground: '6a9be8' },
    { token: 'tag.class.css', foreground: 'FAC29A' },
    
    // Markdown
    { token: 'markup.heading', foreground: '80FFB5' },
    { token: 'markup.bold', foreground: 'C789D6', fontStyle: 'bold' },
    { token: 'markup.italic', foreground: '6a9be8', fontStyle: 'italic' },
    { token: 'markup.underline.link', foreground: '7fbeeb' },
    { token: 'markup.inline.raw', foreground: '7dd3c0' },
    
    // Invalid
    { token: 'invalid', foreground: 'FF8080' },
    { token: 'invalid.illegal', foreground: 'FF8080' },

    // Language specific - Rust
    { token: 'lifetime.rust', foreground: '7dd3c0' },
    { token: 'macro.rust', foreground: 'AFB6FF' },
    
    // Language specific - Python
    { token: 'decorator.python', foreground: 'AFB6FF' },
    
    // Language specific - Go
    { token: 'package.go', foreground: 'b2aaca' },
  ],
  colors: {
    'editor.background': '#1a1721',
    'editor.foreground': '#abb2bf',
    'editor.lineHighlightBackground': '#211d25',
    'editor.lineHighlightBorder': '#2E303E00',
    'editor.selectionBackground': '#9B6B9B55',
    'editor.selectionForeground': '#ffffff',
    'editor.inactiveSelectionBackground': '#9B6B9B35',
    'editorCursor.foreground': '#80FFB5',
    'editorLineNumber.foreground': '#636d83',
    'editorLineNumber.activeForeground': '#abb2bf',
    'editorIndentGuide.background': '#3d434f60',
    'editorIndentGuide.activeBackground': '#3d434f',
    'editorWhitespace.foreground': '#3d434f80',
    'editorBracketMatch.background': '#b2aaca30',
    'editorBracketMatch.border': '#b2aaca60',
    'editorBracketHighlight.foreground1': '#FFF2B3CC',
    'editorBracketHighlight.foreground2': '#c789d6',
    'editorBracketHighlight.foreground3': '#00D4FFCC',
    'editorBracketHighlight.foreground4': '#80FFB5CC',
    'editorBracketHighlight.foreground5': '#da7a43CC',
    'editorBracketHighlight.foreground6': '#b370ff',
    'editor.findMatchBackground': '#19664080',
    'editor.findMatchHighlightBackground': '#19664050',
    'editor.findMatchBorder': '#1FD660CC',
    'editor.wordHighlightBackground': '#b2aaca20',
    'editor.wordHighlightBorder': '#b2aaca40',
    'editorWidget.background': '#211d25',
    'editorWidget.border': '#3d434f',
    'editorSuggestWidget.background': '#211d25',
    'editorSuggestWidget.border': '#3d434f',
    'editorSuggestWidget.selectedBackground': '#211d25',
    'editorHoverWidget.background': '#211d25',
    'editorHoverWidget.border': '#3d434f',
    'scrollbarSlider.background': '#c1d9ff18',
    'scrollbarSlider.hoverBackground': '#c1d9ff30',
    'scrollbarSlider.activeBackground': '#c1d9ff45',
  },
}
