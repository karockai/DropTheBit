FROM mhart/alpine-node:14


LABEL version="14.16"
LABEL description="Game Project Backend for the Dropthebit Game"

WORKDIR /app

COPY package.json ./

RUN npm install && npm run buildDocker

COPY ./build ./build

