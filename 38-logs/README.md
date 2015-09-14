## sentry安装指南
https://docs.getsentry.com/on-premise/server/installation/


## cache配置
https://github.com/getsentry/sentry/issues/1482

## postgres使用配置
PostgreSQL-Ubuntu   https://help.ubuntu.com/community/PostgreSQL 
阮一峰   http://www.ruanyifeng.com/blog/2013/12/getting_started_with_postgresql.html
创建用户  http://www.cyberciti.biz/faq/howto-add-postgresql-user-account/

## 在线访问地址
http://121.43.232.106:9000/


http://stackoverflow.com/questions/13868730/socket-file-var-pgsql-socket-s-pgsql-5432-missing-in-mountain-lion-os-x-ser


// Install postgre
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-12-04

// 启动服务
SENTRY_CONF=./sentry.conf.py sentry start
SENTRY_CONF=./sentry.conf.py sentry celery worker -B