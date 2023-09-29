FROM node:18.4.0-alpine

WORKDIR /frontend


COPY ./frontend/package*.json /frontend/

RUN npm install && npm cache clean --force

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY ./frontend .


ENV HOST 0.0.0.0

EXPOSE 3000

ENV PATH ./node_modules/.bin/:$PATH
