#### Git 修改远程地址

> git remote set-url XXX(origin) http://XXXXX

#### Git 提交报错：找不到分支

> rm -rf ./.git/
> git init
> git remote add origin XXXXXX  
> git add .
> git commit -m “Commit message”
> git push -f origin master

#### Git 添加远程地址

> git remote add [origin] http://192.168.100.235:9797/john/git_test.git

#### Git 报错：The file will have its original line endings in your working directory

> git rm -r --cached .
> git config core.autocrlf false
> git add .