## 部署

1. vercel
2. 使用github pages
	在命令行中执行 `sh bin/github-pages-deploy.sh` 即可(该脚本通过打包生成的dist目录中的文件，将其推送到另一个github仓库中，并将该仓库的main分支设置为github pages的源)