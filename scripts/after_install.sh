#!/bin/bash

cd /home/ec2-user/app
npm install -g npm@latest
rm -rf node_modules package-lock.json && npm install

npm install pm2 -g