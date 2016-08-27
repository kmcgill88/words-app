# Version 1.0
# 8/27/16
#
FROM node
MAINTAINER Kevin McGill <kevin@mcgilldevtech.com>


COPY ["./app.js", "./package.json"]

RUN apt-get update && \
    apt-get install -y \
    npm install

EXPOSE 3000
CMD ["node", "app.js"]
