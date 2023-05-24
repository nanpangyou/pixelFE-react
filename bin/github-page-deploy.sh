#!/usr/bin/env bash
rm -rf ./dist
pnpm build:preview
cd dist
git init
git add .
git commit -m "deploy"
git remote add origin git@github.com:nanpangyou/pixelFE-react-preview.git
git push -f origin main
cd - # 退回开始所在目录
