FROM node:carbon

ENV APP=/home/app/nsk-koa
WORKDIR $APP

COPY package.json package-lock.json $APP/
RUN npm i
COPY . $APP

CMD npm run coverage
