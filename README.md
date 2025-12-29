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

![Lesser Theme Preview](https://raw.githubusercontent.com/funcdfs/vscode-theme-lesser/refs/heads/master/image.png)

> 🎨 **[Live Preview](https://vscode-theme-lesser.vercel.app/)** — Try the theme in your browser

## Install

search **"lesser"** in VS Code Extensions (`Cmd+Shift+X` / `Ctrl+Shift+X`)


## Palette

| Category | Color | Hex | Preview |
|----------|-------|-----|---------|
| **Editor** | | | |
| Background | `#211d25` | ![](https://img.shields.io/badge/-211d25-211d25?style=flat-square) | Dark base |
| Foreground | `#abb2bf` | ![](https://img.shields.io/badge/-abb2bf-abb2bf?style=flat-square) | Default text |
| Cursor | `#80FFB5` | ![](https://img.shields.io/badge/-80FFB5-80FFB5?style=flat-square) | Mint green |
| Selection | `#be84bf` | ![](https://img.shields.io/badge/-be84bf-be84bf?style=flat-square) | Soft pink |
| Accent | `#b2aaca` | ![](https://img.shields.io/badge/-b2aaca-b2aaca?style=flat-square) | Lavender |
| **Syntax** | | | |
| Keyword | `#c789d6` | ![](https://img.shields.io/badge/-c789d6-c789d6?style=flat-square) | Purple |
| String | `#ce9887` | ![](https://img.shields.io/badge/-ce9887-ce9887?style=flat-square) | Salmon |
| Function | `#6a9be8` | ![](https://img.shields.io/badge/-6a9be8-6a9be8?style=flat-square) | Blue |
| Class/Type | `#FAC29A` | ![](https://img.shields.io/badge/-FAC29A-FAC29A?style=flat-square) | Peach |
| Variable | `#bdc3cf` | ![](https://img.shields.io/badge/-bdc3cf-bdc3cf?style=flat-square) | Light gray |
| Constant | `#FFF2B3` | ![](https://img.shields.io/badge/-FFF2B3-FFF2B3?style=flat-square) | Yellow |
| Comment | `#6b7089` | ![](https://img.shields.io/badge/-6b7089-6b7089?style=flat-square) | Muted |
| **Semantic** | | | |
| Tag | `#80FFB5` | ![](https://img.shields.io/badge/-80FFB5-80FFB5?style=flat-square) | Mint |
| Attribute | `#7dd3c0` | ![](https://img.shields.io/badge/-7dd3c0-7dd3c0?style=flat-square) | Teal |
| Decorator | `#AFB6FF` | ![](https://img.shields.io/badge/-AFB6FF-AFB6FF?style=flat-square) | Periwinkle |
| Escape | `#7dd3c0` | ![](https://img.shields.io/badge/-7dd3c0-7dd3c0?style=flat-square) | Cyan |



todo1: 当前激活的 tab 页的背景色应该和其他一样，不要太突出。否则会和 ignore 文件颜色混一块。 
todo2： 错误的显示太繁杂了。优化。为典雅红色标识+ 黄色 backgourn 标识，而不是现在的两种下划线一样的东西。
todo3：文件树中的 update 颜色应该和编辑器中 update 的颜色一样。不应是棕色点开确是 Update。（ git update）。棕色是用来做文件树中的 WARN 的。
todo4： 终端中的光标的颜色太亮了。（虽然和编辑器中相同，但是终端是块状光标。所以可以为终端的光标 修改为 80% 颜色）
todo5: 检查控制 台的颜色。错误红色。warning 棕色。info 蓝色。整理不要出现颜色的差错。 
整理整体的 错误红色。 warning 棕色。info 蓝色。确保 UI 细节不会误导用户 
todo6: 查找 kiro 的 background 颜色。vscode theme kiro 的背景颜色是更加深一点的，进行替换。
