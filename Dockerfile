# Version 1.0
# 8/27/16
#
FROM node:slim
MAINTAINER Kevin McGill <kevin@mcgilldevtech.com>

COPY ./app.js /
COPY ./package.json /

RUN npm install

EXPOSE 3000
CMD ["node", "app.js"]
