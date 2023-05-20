FROM node:10.21.0-alpine3.9

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]