#!/bin/bash

# Lesser 主题构建和打包脚本

set -e

echo "🔨 构建主题..."
npm run build

echo "📦 打包 VSIX..."
npx vsce package

echo "✅ 完成！"
ls -la *.vsix
