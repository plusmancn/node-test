#!/bin/sh
DIR=`pwd`
NODE=`which node`

# get action
ACTION=$1

# help
usage(){
  echo "Usage ./appctl.sh {start|stop|restart}"
  exit 1;
}

get_pid(){
  if [ -f ]
}