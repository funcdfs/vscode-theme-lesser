/**
 * Vim / Neovim / lightline 配色文件的渲染器
 *
 * 三个渲染器共用 groups.ts 里的同一份高亮定义，
 * 保证 Vim 与 Neovim 两份配色不会各自漂移
 */

import type { HighlightGroup, HighlightSection } from "./types";
import { fg, bg, border, accent } from "../palette";

/** 生成文件头注释，提醒不要手改 */
function banner(comment: string): string {
  return [
    `${comment} Lesser`,
    `${comment}`,
    `${comment} 由 src/editors/ 自动生成，请勿直接编辑本文件。`,
    `${comment} 修改颜色请改 src/palette.ts 或 src/editors/groups.ts，然后运行 npm run build。`,
    "",
  ].join("\n");
}

// ============================================
// Vim
// ============================================

/** 渲染一条 Vim 高亮语句 */
function vimLine(g: HighlightGroup): string {
  if (g.link) {
    return `hi! link ${g.name} ${g.link}`;
  }
  const parts: string[] = [];
  parts.push(`guifg=${g.fg ?? "NONE"}`);
  parts.push(`guibg=${g.bg ?? "NONE"}`);
  if (g.sp) {
    parts.push(`guisp=${g.sp}`);
  }
  parts.push(`gui=${g.style && g.style.length > 0 ? g.style.join(",") : "NONE"}`);
  return `hi ${g.name} ${parts.join(" ")}`;
}

/**
 * 渲染 Vim 配色文件
 *
 * 只包含 Vim 8 认识的高亮组，不含 Treesitter / LSP 捕获组
 */
export function renderVim(sections: HighlightSection[], terminal: string[]): string {
  const out: string[] = [];

  out.push(banner('"'));
  out.push('hi clear');
  out.push('if exists("syntax_on")');
  out.push("  syntax reset");
  out.push("endif");
  out.push("");
  out.push("set background=dark");
  out.push('let g:colors_name = "lesser"');
  out.push("");

  for (const section of sections) {
    out.push(`" === ${section.title} ===`);
    for (const group of section.groups) {
      out.push(vimLine(group));
    }
    out.push("");
  }

  out.push('" === 终端 ANSI 颜色 ===');
  out.push(`let g:terminal_ansi_colors = [${terminal.map((c) => `'${c}'`).join(", ")}]`);
  out.push("");

  return out.join("\n");
}

// ============================================
// Neovim
// ============================================

/** 渲染一条 Neovim 高亮语句 */
function luaLine(g: HighlightGroup): string {
  if (g.link) {
    return `hl(0, "${g.name}", { link = "${g.link}" })`;
  }
  const parts: string[] = [];
  if (g.fg) {
    parts.push(`fg = "${g.fg}"`);
  }
  if (g.bg) {
    parts.push(g.transparent ? `bg = tp("${g.bg}")` : `bg = "${g.bg}"`);
  }
  if (g.sp) {
    parts.push(`sp = "${g.sp}"`);
  }
  for (const style of g.style ?? []) {
    parts.push(`${style} = true`);
  }
  if (parts.length === 0) {
    return `hl(0, "${g.name}", {})`;
  }
  return `hl(0, "${g.name}", { ${parts.join(", ")} })`;
}

/**
 * 渲染 Neovim 配色文件
 *
 * 支持 vim.g.lesser_transparent 开启透明背景
 */
export function renderLua(sections: HighlightSection[], terminal: string[]): string {
  const out: string[] = [];

  out.push(banner("--"));
  out.push('vim.cmd("hi clear")');
  out.push('if vim.fn.exists("syntax_on") == 1 then');
  out.push('  vim.cmd("syntax reset")');
  out.push("end");
  out.push("");
  out.push('vim.o.background = "dark"');
  out.push('vim.g.colors_name = "lesser"');
  out.push("");
  out.push("-- 透明背景：在加载配色前设置 vim.g.lesser_transparent = true 即可");
  out.push("local transparent = vim.g.lesser_transparent == true or vim.g.lesser_transparent == 1");
  out.push("");
  out.push("local hl = vim.api.nvim_set_hl");
  out.push("");
  out.push("--- 透明模式下把背景置空，否则原样返回");
  out.push("local function tp(color)");
  out.push('  return transparent and "NONE" or color');
  out.push("end");
  out.push("");

  for (const section of sections) {
    out.push(`-- === ${section.title} ===`);
    for (const group of section.groups) {
      out.push(luaLine(group));
    }
    out.push("");
  }

  out.push("-- === 终端 ANSI 颜色 ===");
  terminal.forEach((color, index) => {
    out.push(`vim.g.terminal_color_${index} = "${color}"`);
  });
  out.push("");

  return out.join("\n");
}

// ============================================
// lightline
// ============================================

/** 把十六进制颜色近似到 xterm-256 色号，供 lightline 的 cterm 使用 */
function toCterm256(hex: string): number {
  const h = hex.startsWith("#") ? hex.slice(1) : hex;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);

  // 优先匹配 232-255 的灰阶
  if (Math.abs(r - g) < 10 && Math.abs(g - b) < 10) {
    const gray = Math.round((r + g + b) / 3);
    if (gray < 8) {
      return 16;
    }
    if (gray > 248) {
      return 231;
    }
    return 232 + Math.round(((gray - 8) / 247) * 23);
  }

  // 否则落到 16-231 的 6x6x6 色立方
  const level = (v: number) => Math.round(Math.max(0, v - 55) / 40);
  return 16 + 36 * level(r) + 6 * level(g) + level(b);
}

/** 组装一个 lightline 色块：[guifg, guibg, ctermfg, ctermbg] */
function pair(foreground: string, background: string): string {
  return `[ '${foreground}', '${background}', ${toCterm256(foreground)}, ${toCterm256(background)} ]`;
}

/**
 * 渲染 lightline 状态栏配色
 */
export function renderLightline(): string {
  const out: string[] = [];

  out.push(banner('"'));
  out.push("let s:p = {'normal': {}, 'inactive': {}, 'insert': {}, 'replace': {}, 'visual': {}, 'tabline': {}}");
  out.push("");

  const rows: Array<[string, string[]]> = [
    ["s:p.normal.left", [pair(bg.base, accent.violet), pair(fg.primary, bg.elevated)]],
    ["s:p.normal.right", [pair(bg.base, accent.violet), pair(fg.secondary, bg.elevated)]],
    ["s:p.normal.middle", [pair(fg.muted, bg.elevated)]],
    ["s:p.normal.error", [pair(bg.base, accent.coral)]],
    ["s:p.normal.warning", [pair(bg.base, accent.yellow)]],
    ["s:p.insert.left", [pair(bg.base, accent.green), pair(fg.primary, bg.elevated)]],
    ["s:p.insert.right", [pair(bg.base, accent.green), pair(fg.secondary, bg.elevated)]],
    ["s:p.insert.middle", [pair(fg.muted, bg.elevated)]],
    ["s:p.replace.left", [pair(bg.base, accent.coral), pair(fg.primary, bg.elevated)]],
    ["s:p.replace.right", [pair(bg.base, accent.coral), pair(fg.secondary, bg.elevated)]],
    ["s:p.replace.middle", [pair(fg.muted, bg.elevated)]],
    ["s:p.visual.left", [pair(bg.base, accent.cyan), pair(fg.primary, bg.elevated)]],
    ["s:p.visual.right", [pair(bg.base, accent.cyan), pair(fg.secondary, bg.elevated)]],
    ["s:p.visual.middle", [pair(fg.muted, bg.elevated)]],
    ["s:p.inactive.left", [pair(fg.disabled, bg.elevated), pair(fg.disabled, bg.elevated)]],
    ["s:p.inactive.right", [pair(fg.disabled, bg.elevated), pair(fg.disabled, bg.elevated)]],
    ["s:p.inactive.middle", [pair(fg.disabled, bg.elevated)]],
    ["s:p.tabline.left", [pair(fg.muted, bg.elevated)]],
    ["s:p.tabline.tabsel", [pair(fg.primary, bg.base)]],
    ["s:p.tabline.middle", [pair(border.default, bg.elevated)]],
    ["s:p.tabline.right", [pair(fg.muted, bg.elevated)]],
  ];

  for (const [key, values] of rows) {
    out.push(`let ${key} = [ ${values.join(", ")} ]`);
  }

  out.push("");
  out.push("let g:lightline#colorscheme#lesser#palette = lightline#colorscheme#flatten(s:p)");
  out.push("");

  return out.join("\n");
}
