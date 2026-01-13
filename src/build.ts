/**
 * 构建脚本
 *
 * 将 TypeScript 模块化主题编译为 VS Code 主题 JSON 文件
 * 输出到 themes/ 目录
 */

import * as fs from "fs";
import * as path from "path";
import { theme } from "./index";
import { validateAllContrasts } from "./palette";

/**
 * 输出目录
 */
const OUTPUT_DIR = path.resolve(__dirname, "..", "themes");

/**
 * 输出文件名
 */
const OUTPUT_FILE = "lesser.json";

/**
 * 验证颜色值格式
 *
 * @param color - 颜色值字符串
 * @returns 是否为有效的十六进制颜色值
 */
function isValidHexColor(color: string): boolean {
  // 支持 #RGB, #RGBA, #RRGGBB, #RRGGBBAA 格式
  return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(color);
}

/**
 * 验证颜色对比度
 */
function validateContrasts(): boolean {
  console.log("🎨 验证颜色对比度 (WCAG AA)...");
  
  const results = validateAllContrasts();
  let allPassed = true;
  
  for (const result of results) {
    const status = result.valid ? "✓" : "✗";
    const ratioStr = result.ratio.toFixed(2);
    const requiredStr = result.required.toFixed(1);
    
    if (!result.valid) {
      allPassed = false;
      console.log(`   ${status} ${result.name}: ${ratioStr}:1 (需要 ${requiredStr}:1)`);
    }
  }
  
  if (allPassed) {
    console.log("✅ 所有颜色对比度验证通过");
  } else {
    console.log("⚠️ 部分颜色对比度不符合 WCAG AA 标准");
  }
  
  return allPassed;
}

/**
 * 验证主题结构
 *
 * @param themeObj - 主题对象
 * @throws 如果主题结构无效则抛出错误
 */
function validateTheme(themeObj: typeof theme): void {
  console.log("🔍 验证主题结构...");

  // 验证必需字段
  if (!themeObj.name || typeof themeObj.name !== "string") {
    throw new Error("主题缺少有效的 name 字段");
  }

  if (!themeObj.colors || typeof themeObj.colors !== "object") {
    throw new Error("主题缺少有效的 colors 字段");
  }

  if (typeof themeObj.semanticHighlighting !== "boolean") {
    throw new Error("主题缺少有效的 semanticHighlighting 字段");
  }

  if (!themeObj.semanticTokenColors || typeof themeObj.semanticTokenColors !== "object") {
    throw new Error("主题缺少有效的 semanticTokenColors 字段");
  }

  if (!Array.isArray(themeObj.tokenColors)) {
    throw new Error("主题缺少有效的 tokenColors 字段");
  }

  // 验证 UI 颜色值格式
  let invalidColors: string[] = [];
  for (const [key, value] of Object.entries(themeObj.colors)) {
    if (value && !isValidHexColor(value)) {
      invalidColors.push(`${key}: ${value}`);
    }
  }

  if (invalidColors.length > 0) {
    console.warn(`⚠️ 发现 ${invalidColors.length} 个无效的颜色值:`);
    invalidColors.slice(0, 5).forEach((c) => console.warn(`   - ${c}`));
    if (invalidColors.length > 5) {
      console.warn(`   ... 还有 ${invalidColors.length - 5} 个`);
    }
  }

  // 验证 token 颜色
  for (const token of themeObj.tokenColors) {
    if (!token.name) {
      console.warn(`⚠️ Token 规则缺少 name 字段: ${JSON.stringify(token.scope)}`);
    }
    if (!token.scope) {
      throw new Error(`Token 规则缺少 scope 字段: ${token.name}`);
    }
    if (token.settings.foreground && !isValidHexColor(token.settings.foreground)) {
      console.warn(`⚠️ Token "${token.name}" 的颜色值无效: ${token.settings.foreground}`);
    }
  }

  console.log("✅ 主题结构验证通过");
}

/**
 * 构建主题 JSON 文件
 */
function build(): void {
  console.log("🚀 开始构建主题...\n");

  // 验证对比度
  validateContrasts();
  console.log("");

  // 验证主题
  validateTheme(theme);

  // 确保输出目录存在
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`📁 创建输出目录: ${OUTPUT_DIR}`);
  }

  // 构建输出对象（不包含 type 字段，VS Code 主题 JSON 不需要）
  const output = {
    name: theme.name,
    colors: theme.colors,
    semanticHighlighting: theme.semanticHighlighting,
    semanticTokenColors: theme.semanticTokenColors,
    tokenColors: theme.tokenColors,
  };

  // 写入 JSON 文件
  const outputPath = path.join(OUTPUT_DIR, OUTPUT_FILE);
  const jsonContent = JSON.stringify(output, null, 4);

  fs.writeFileSync(outputPath, jsonContent, "utf-8");

  // 输出统计信息
  console.log("\n📊 构建统计:");
  console.log(`   - 主题名称: ${theme.name}`);
  console.log(`   - UI 颜色数量: ${Object.keys(theme.colors).length}`);
  console.log(`   - 语义 Token 数量: ${Object.keys(theme.semanticTokenColors).length}`);
  console.log(`   - Token 规则数量: ${theme.tokenColors.length}`);
  console.log(`   - 输出文件大小: ${(Buffer.byteLength(jsonContent) / 1024).toFixed(2)} KB`);

  console.log(`\n✅ 构建完成: ${outputPath}`);
}

// 执行构建
build();
