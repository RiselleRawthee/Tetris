#!/bin/bash

cd /home/ec2/app

# # end any running apps
# pm2 delete all

# start app
pm2 start npm --name "tetris" -- start
pm2 startup
pm2 save
pm2 restart all