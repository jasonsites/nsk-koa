FROM node:10

ENV APP=/opt/app
WORKDIR $APP

COPY package.json package-lock.json $APP/
RUN npm i
COPY . $APP

CMD npm run coverage
