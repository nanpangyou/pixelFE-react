#!/usr/bin/env bash
rm -rf ./dist
pnpm build
cd dist
git init
git add .
git commit -m "deploy"
git remote add origin git@github.com:nanpangyou/pixelFE-react.git
git push -f origin main:main
git push
cd - # 退回开始所在目录
