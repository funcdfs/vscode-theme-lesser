/**
 * Vim / Neovim 配色构建脚本
 *
 * 与 VS Code 主题共用 src/palette.ts，输出到 vim/ 和 nvim/ 目录
 */

import * as fs from "fs";
import * as path from "path";
import {
  uiSections,
  syntaxSections,
  nvimSections,
  pluginSections,
  terminalColors,
} from "./editors/groups";
import { renderVim, renderLua, renderLightline } from "./editors/render";

/** 仓库根目录 */
const ROOT = path.resolve(__dirname, "..");

/** 待写出的文件 */
const outputs: Array<{ file: string; content: string; label: string }> = [
  {
    file: path.join(ROOT, "vim", "colors", "lesser.vim"),
    content: renderVim([...uiSections, ...syntaxSections], terminalColors),
    label: "Vim 配色",
  },
  {
    file: path.join(ROOT, "vim", "autoload", "lightline", "colorscheme", "lesser.vim"),
    content: renderLightline(),
    label: "lightline 状态栏",
  },
  {
    file: path.join(ROOT, "nvim", "colors", "lesser.lua"),
    content: renderLua(
      [...uiSections, ...syntaxSections, ...nvimSections, ...pluginSections],
      terminalColors
    ),
    label: "Neovim 配色",
  },
];

/**
 * 统计一份内容里的高亮组数量
 */
function countGroups(content: string): number {
  return content.split("\n").filter((line) => /^(hi |hi! link |hl\(0, )/.test(line)).length;
}

/**
 * 构建 Vim / Neovim 配色
 */
function build(): void {
  console.log("🚀 开始构建 Vim / Neovim 配色...\n");

  for (const { file, content, label } of outputs) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content, "utf-8");

    const relative = path.relative(ROOT, file);
    const groups = countGroups(content);
    const size = (Buffer.byteLength(content) / 1024).toFixed(2);
    console.log(`   ✓ ${label}: ${relative}`);
    console.log(`     ${groups} 个高亮组，${size} KB`);
  }

  console.log("\n✅ Vim / Neovim 配色构建完成");
}

// 执行构建
build();
