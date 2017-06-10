# Version 1.0
# 8/27/16
#
FROM node:slim
MAINTAINER Kevin McGill <kevin@mcgilldevtech.com>

WORKDIR /app

COPY ./app.js /app
COPY ./package.json /app

RUN npm install

EXPOSE 3000
CMD ["node", "/app/app.js"]
