#! /bin/bash

echo "Total Param= $#,  PROG: $0, param1 = $1, param2 = $2, param3 = $3";

# Update Git
git pull origin moo

for var in "$@"
    do
    if [ $var == "front" ];then
    cd "/home/sunghyun/MoneyTree/DropTheBit/PartyPeople"
    npm run build
    cd "./build"
    python3 "/home/sunghyun/.local/bin/aws" s3 sync . s3://dropthebit.club/ --acl public-read

    elif [ $var == "back" ];then
    cd "/home/sunghyun/MoneyTree/DropTheBit/GameDJ"
    echo $PWD
    docker build -t sunghyun0714/nginx:server .
    docker push sunghyun0714/nginx:server
    
    elif [ $var == "lobby" ];then
    cd "/home/sunghyun/MoneyTree/DropTheBit/Lobby"
    echo $PWD
    docker build -t sunghyun0714/nginx:lobby .
    docker push sunghyun0714/nginx:lobby
    fi
done