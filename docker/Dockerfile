FROM node:14.15.4-alpine3.12

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli && npm link webpack

USER node

WORKDIR /home/node/app

