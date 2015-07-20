# Linux基础命令

---
[Linux Today][1]

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


## 添加用户


## 查看端口占用
```shell
netstat -apn | grep 
```


## 服务器运行状态监控
[20 Command Line Tools to Monitor Linux Performance][2]


  [1]: http://man.linuxde.net/
  [2]: http://www.tecmint.com/command-line-tools-to-monitor-linux-performance/