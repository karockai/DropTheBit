FROM mhart/alpine-node:14

LABEL version="14.16"
LABEL description="Game Project Backend for the Dropthebit Game"

RUN mkdir /app
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "dev" ]
