# Linux基础命令

---
[Linux Today][1]  
[Linux Tools Quick Tutorial](http://linuxtools-rst.readthedocs.org/zh_CN/latest/tool/crontab.html)
---
## ln
```shell
ls -s [源文件][目标文件]  # 创建软链接，需要填写完整路径
```

## System Info
```shell
cat /proc/cpuinfo   # 查看cpu信息
cat /proc/meminfo   # 查看内存信息
free                # 查看内存信息
df -h               # 查看系统存储
```

## ps
```shell
ps -ef|grep svn
ps -aux|grep svn
kill -9 pid
```

## curl
With fields:
```shell
curl --data "param1=value1&param2=value2" https://example.com/resource.cgi
```

Multipart:
```
curl --form "fileupload=@my-file.txt" https://example.com/resource.cgi
```

Multipart with fields and a filename:
```shell
curl --form "fileupload=@my-file.txt;filename=desired-filename.txt" --form param1=value1 --form param2=value2 https://example.com/resource.cgi
```

Without data:
```shell
curl --data '' https://example.com/resource.cgi
# -X 指定请求方式
curl -X POST https://example.com/resource.cgi
curl --request POST https://example.com/resource.cgi
```


## tar 使用
```shell
# 打包，gz格式
tar -zcvf rsync2pub.tar.gz rsync2pub/
# 解压缩
tar -xvf rsync2pub.tar.gz
```

## nohup
```shell
nohup command &  # & -> 后台挂起，不给你机会按ctrl+c；
# 如果nohup在前台运行的时候，发送ctrl+c信号，是可以终止程序的。
```
在没有关闭session窗口的情况下可以前置进程，对nohup似乎没有多大意义
```shell
jobs # 查看任务
fg %n # 前置任务
```
所以，如果需要终止运行，请用，ps + kill 命令杀死进程。


## kill - num
信号量发送，各种终端
```shell
  The following pids have special meanings:
  -1      If superuser, broadcast the signal to all processes; otherwise broadcast to all processes belonging to the user.

  Some of the more commonly used signals:
  1       HUP (hang up)
  2       INT (interrupt)
  3       QUIT (quit)
  6       ABRT (abort)
  9       KILL (non-catchable, non-ignorable kill) // 9 进行资源回收
  14      ALRM (alarm clock)
  15      TERM (software termination signal)
```

## 查看端口占用
```shell
netstat -apn | grep 
```
## 开机启动服务
```

```

## 服务器运行状态监控
[20 Command Line Tools to Monitor Linux Performance][2]


  [1]: http://man.linuxde.net/
  [2]: http://www.tecmint.com/command-line-tools-to-monitor-linux-performance/