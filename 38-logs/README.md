## sentry安装指南
https://docs.getsentry.com/on-premise/server/installation/
https://botbot.me/freenode/sentry/2015-09-11/?page=1

## cache配置
https://github.com/getsentry/sentry/issues/1482

## postgres使用配置
PostgreSQL-Ubuntu   https://help.ubuntu.com/community/PostgreSQL 
阮一峰   http://www.ruanyifeng.com/blog/2013/12/getting_started_with_postgresql.html
创建用户  http://www.cyberciti.biz/faq/howto-add-postgresql-user-account/

## 在线访问地址
http://121.43.232.106:9000/


http://stackoverflow.com/questions/13868730/socket-file-var-pgsql-socket-s-pgsql-5432-missing-in-mountain-lion-os-x-ser

## Install postgre
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-12-04

## 启动服务
SENTRY_CONF=./sentry.conf.py sentry start
export C_FORCE_ROOT="true"
SENTRY_CONF=./sentry.conf.py sentry celery worker -B

# 挂起
nohup sentry --config=./sentry.conf.py start &

# 开启监控环境
source /var/www/sentry/bin/activate

# 开机启动命令
# 启动redis
cd ~/redis-3.0.4/
nohup src/redis-server conf/redis.conf > nohup-redis.log &
# sentry
cd /var/www/sentry/
source /var/www/sentry/bin/activate
nohup sentry --config=./sentry.conf.py start > nohup-web.log &

export C_FORCE_ROOT="true"
nohup sentry --config=./sentry.conf.py celery worker -B > nohup-worker.log &