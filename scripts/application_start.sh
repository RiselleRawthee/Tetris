#!/bin/bash

cd /home/ec2-user/app

# end any running apps
pm2 delete all

pm2 start npm --name "tetris" -- start
pm2 startup
pm2 save
pm2 restart all

# start app
# npm start
cd src/server
pm2 start node api-server.js
pm2 startup
pm2 save
pm2 restart all