#!/bin/bash

# download node and npm
curl -sL https://rpm.nodesource.com/setup_14.x | bash 
apt install nodejs npm

# create working directory if it doesn't exist
DIR="home/ubuntu/app"
if [ -d "DIR" ]; then
    echo "${DIR} exists"
else
    echo "Creating ${DIR} directory"
    mkdir ${DIR}
fi