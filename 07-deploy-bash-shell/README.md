# 自动化部署脚本
## 思路
本地打包上传  
>git pull -> npm install -> 整体打包成tar包 -> scp上传到目标服务器 -> 解压 -> 生成一份备份 -> 覆盖线上文件 -> pm2 restart

基于git


## 参考资料
[PM2官方自动部署方式](https://github.com/Unitech/PM2/blob/master/ADVANCED_README.md#deployment)
[Auto-deploy with GitHub's WebHooks and Node](http://fideloper.com/node-github-autodeploy)