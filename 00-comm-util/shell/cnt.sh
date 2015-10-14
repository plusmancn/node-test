#!/bin/sh

# help()
# {
# cat << HELP
#   b2d - convert binary to decimal
#   USAGE: b2d [-h] binarynum
#   OPTIONS: -h help text
#   EXAMPLE: b2d 11010
#   will return 58
# HELP
#   exit 0
# }

# error()
# {
#   echo "$1"
#   exit 1
# }

# lastchar()
# {
#   if [ -z "$1" ]; then
#       rval=""
#       return
#   fi

#   numofchar=$(echo -n "$1" | wc -c | sed 's/ //g')

#   rval=$(echo -n "$1" | cut -b "$numofchar")
# }

# chop()
# {
#   if [ -z "$1" ]; then
#     rval=""
#     return
#   fi

#   numofchar=$(echo -n "$1" | wc -c | sed 's/ //g')
#   if [ "$numofchar" = "1" ];then
#     rval=""
#     return
#   fi

#   numofcharminus1=$(expr "$numofchar" -1)

#   rval=$(echo -n "$1" | cut -b 1-${numofcharminus1})
# }

# while [ -n "$1"];do
#   case $1 in
#     -h) help; shift;;
#     --) shift; break;;
#     -*) error "error: no such option $1. -h for help";;
#     *) break;;
#   esac
# done

# sum=0;
# weight=1;

# [ -z "$1" ] && help

# binnum="$1"
# binnumorig="$1"

# while [ -n "$binnum" ]; do
#   lastchar "$binnum"
#   if [ "$rval" = "1" ]; then
#     sum=$(expr "$weight" + "$sum")
#   fi

#   chop $binnum
#   binnum=$rval
#   echo $binnum

#   weight=$(expr "$weight" "*" 2)
#   echo $weight
# done

# echo -e "Hello, $USER. \n\nBinary $binnumorig is decimal $sum"


# weight=1
# ((weight=$weight+1))
# echo $weight

# seconds=0
# echo -n "Enter number of seconds > "
# read seconds
# hours=$((seconds / 3600))
# seconds=$((seconds % 3600))
# minutes=$((seconds / 60))
# seconds=$((seconds % 60))
# echo -e "$hours hour(s) $minutes minute(s) $seconds second(s)"


# case $1 in
#   "aa" )
#     echo 'aa'
#     ;;
#   "bb" )
#     echo 'bb'
#     ;;
#   * ) 
#     echo 'all'
#     ;;
# esac


# echo $@
# 
# test()
# {
#   echo 'From Function: '$0
# }
# 
# test ih fwe

# while [ -n "$1" ]; do
#     echo $1;
#     shift;
# done;

# while read param1;do
# if [ -z $param1  ]; then
#   break;
# else
#   echo $param1;
# fi
# done
``

# num=
# if [ "$num" = "1" ]; then
#   echo "Number is 1"
# elseo $
#   echo "number is not 1"
# fi

# contro_c()
# {
#   echo -en "\n***dear，not leave me alone"
#   exit $?
# }
# 
# trap contro_c SIGINT
# 
# while true;do read x echo $?;done;

# num=1
# ((num++))
# echo $num;

n=$#
eval echo \${$n};
