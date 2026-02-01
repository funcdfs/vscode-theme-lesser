
# todo

我在当前的 vscode 主题下面创建了两个目录。vim 和 nvim。目前是空的，但是 vscode 主题是完善的，我希望你帮我进行完善主题。分别构建 nvim 和 vim 的主题。

要求创建好两个完整的主题之后，然后采用文件拷贝的方式，不要使用插件


我的 vim 的目录是： /Users/n/.vim/colors

```
~/.vim 
> ls
colors  pack    viminfo vimrc

~/.vim 
> pwd      
/Users/n/.vim

~/.vim 
> tree -L 3
.
├── colors
│   └── gruvbox-material.vim
├── pack
│   ├── colors
│   │   └── start
│   └── plugins
│       └── start
├── viminfo
└── vimrc

7 directories, 3 files

~/.vim 
> 
```

我的 nvim 的目录是： /Users/n/.config/nvim/

```
nvim on git main [x!] via lua 
> tree -L 3
.
├── after
│   └── queries
│       └── cpp
├── init.lua
├── lazy-lock.json
├── lua
│   ├── core
│   │   ├── autocmds.lua
│   │   ├── keymaps.lua
│   │   ├── neovide.lua
│   │   ├── options.lua
│   │   ├── theme-switcher.lua
│   │   └── utils.lua
│   └── plugins
│       ├── configs
│       ├── init.lua
│       └── themes
├── readme.md
└── snippets
    ├── cpp.json
    ├── package.json
    └── README.md

10 directories, 13 files

nvim on git main [x!] via lua 
> pwd                           
/Users/n/.config/nvim

nvim on git main [x!] via lua 
> 
```