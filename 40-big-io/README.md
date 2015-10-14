Examples of writable streams include:
http requests, on the client
http responses, on the server
fs write streams
zlib streams
crypto streams
tcp sockets
child process stdin
process.stdout, process.stderr


# 启动进程带 harmony 参数
pm2 start app.js --node-args="--harmony"

kill -USR2 34226