FROM node:10.1-alpine

RUN apk --update add git openssh && \
    rm -rf /var/lib/apt/lists/* && \
    rm /var/cache/apk/*

ENV APP_DIR /src/app/

RUN mkdir -p $APP_DIR

ADD ./package.json ${APP_DIR}

WORKDIR $APP_DIR

RUN ["npm", "install"]

COPY . .
