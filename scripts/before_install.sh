#!/bin/bash

# download node and npm
curl -sL https://rpm.nodesource.com/setup_14.x | bash 
yum -y install nodejs npm

# create working directory if it doesn't exist
DIR="home/ec2-user/app"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR}
fi