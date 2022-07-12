#!/bin/bash

cd /home/ec2-user/app

# install dependencies
npm install

# pm2 is a production process manager for node to keep our app running after closing our terminal or disconnecting from remote server
npm install pm2 -g

# npm install --save react react-dom react-scripts react-particles-js