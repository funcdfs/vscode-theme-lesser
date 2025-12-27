# Lesser

A dark theme for VS Code, designed for **JavaScript**, **Go**, **C++**, **Python**, and **Markdown**.

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/YOUR_PUBLISHER_NAME.lesser)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/YOUR_PUBLISHER_NAME.lesser)

## Preview

![Preview](images/preview.png)

```javascript
// JavaScript
const greeting = async (name) => {
  const message = `Hello, ${name}!`;
  console.log(message);
  return { success: true, data: message };
};
```

```python
# Python
def fibonacci(n: int) -> list[int]:
    """Generate fibonacci sequence."""
    seq = [0, 1]
    for _ in range(n - 2):
        seq.append(seq[-1] + seq[-2])
    return seq
```

```go
// Go
func main() {
    messages := make(chan string)
    go func() { messages <- "ping" }()
    msg := <-messages
    fmt.Println(msg)
}
```

## Installation

1. Open **Extensions** in VS Code (`Cmd+Shift+X` / `Ctrl+Shift+X`)
2. Search for `lesser`
3. Click **Install**
4. Select **Lesser** from `Preferences > Color Theme`

## Features

- 🎨 Carefully crafted color palette with purple accents
- 📝 Optimized for readability in long coding sessions
- 🔤 Enhanced Markdown syntax highlighting
- 🌙 True dark background (`#211d25`)

## Color Palette

| Element | Color |
|---------|-------|
| Background | `#211d25` |
| Foreground | `#abb2bf` |
| Accent | `#b2aaca` |
| Cursor | `#80FFB5` |
| Selection | `#be84bf` |
| String | `#ce9887` |
| Keyword | `#c789d6` |

## History

Originally published as **KONNG**. Renamed to **Lesser** after losing the original publisher key.

## Author

Designed by [@funcdfs](https://github.com/funcdfs)

## License

MIT
