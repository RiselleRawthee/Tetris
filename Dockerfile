FROM node:18-alpine

COPY package.json /app/package.json
WORKDIR /app

RUN npm install

COPY index.js /app/index.js
COPY public /app/public

EXPOSE 8080

WORKDIR /app

CMD [ "node", "index.js" ]