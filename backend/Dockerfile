FROM node:18.4.0-alpine

WORKDIR /backend

COPY ./backend/package*.json /backend/

RUN npm install && npm cache clean --force

COPY ./backend .

ENV HOST 0.0.0.0

EXPOSE 8000

ENV PATH ./node_modules/.bin/:$PATH