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

#### Git 只clone某个目录
> mkdir XXXX & cd XXXX #创建项目目录 
> git init #初始化空库 ，生成.git目录
> git remote add -f origin http://XXXX.git #添加远程remote地址
> git config core.sparsecheckout true   #设置允许git克隆子目录
> echo "目录或者文件名" >> .git/info/sparse-checkout   #设置需要pull的目录，*表示所有，!表示匹配相反的
> git pull origin master  #更新