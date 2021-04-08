FROM mhart/alpine-node:14

LABEL version="14.16"
LABEL description="Game Project Backend for the Dropthebit Game"

RUN mkdir /app
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install && npm cache clean --force && npm install -g pm2

COPY . .

EXPOSE 5000

CMD pm2-runtime start ./bin/www.js
