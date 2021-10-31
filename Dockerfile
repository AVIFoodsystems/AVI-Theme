FROM node:17-alpine3.12

RUN npm install less -g

WORKDIR /assets

CMD lessc
