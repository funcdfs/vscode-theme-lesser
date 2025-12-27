<div align="center">

# Lesser

**A minimal dark theme for VS Code with purple accents**

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/funcdfs.lesser?style=flat-square&color=b2aaca)](https://marketplace.visualstudio.com/items?itemName=funcdfs.lesser)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/funcdfs.lesser?style=flat-square&color=c789d6)](https://marketplace.visualstudio.com/items?itemName=funcdfs.lesser)
[![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/funcdfs.lesser?style=flat-square&color=ce9887)](https://marketplace.visualstudio.com/items?itemName=funcdfs.lesser)
[![GitHub](https://img.shields.io/github/license/funcdfs/vscode-theme-lesser?style=flat-square&color=80FFB5)](https://github.com/funcdfs/vscode-theme-lesser)

[Install](https://marketplace.visualstudio.com/items?itemName=funcdfs.lesser) · [Preview](https://funcdfs.github.io/vscode-theme-lesser) · [GitHub](https://github.com/funcdfs/vscode-theme-lesser)

</div>

---

## Preview

![Lesser Theme Preview](https://raw.githubusercontent.com/funcdfs/vscode-theme-lesser/main/images/preview.png)

> 🎨 **[Live Preview](https://funcdfs.github.io/vscode-theme-lesser)** — Try the theme in your browser

## Install

```
ext install funcdfs.lesser
```

Or search **"lesser"** in VS Code Extensions (`Cmd+Shift+X` / `Ctrl+Shift+X`)

## Features

| | |
|---|---|
| 🌙 **Dark Background** | True dark `#211d25` for comfortable coding |
| 💜 **Purple Accents** | Elegant purple tones throughout |
| 📖 **Readable** | Optimized contrast for long sessions |
| 🔤 **Multi-language** | JavaScript, Go, C++, Python, Markdown |

## Palette

```
Background   #211d25  ████████
Foreground   #abb2bf  ████████
Accent       #b2aaca  ████████
Cursor       #80FFB5  ████████
Selection    #be84bf  ████████
String       #ce9887  ████████
Keyword      #c789d6  ████████
```

## Code Samples

<details>
<summary>JavaScript</summary>

```javascript
const greeting = async (name) => {
  const message = `Hello, ${name}!`;
  console.log(message);
  return { success: true, data: message };
};
```

</details>

<details>
<summary>Python</summary>

```python
def fibonacci(n: int) -> list[int]:
    """Generate fibonacci sequence."""
    seq = [0, 1]
    for _ in range(n - 2):
        seq.append(seq[-1] + seq[-2])
    return seq
```

</details>

<details>
<summary>Go</summary>

```go
func main() {
    messages := make(chan string)
    go func() { messages <- "ping" }()
    msg := <-messages
    fmt.Println(msg)
}
```

</details>

---

<div align="center">

Made with 💜 by [@funcdfs](https://github.com/funcdfs)

</div>
