FROM node:10

ENV APP=/opt/app
WORKDIR $APP

COPY package.json package-lock.json $APP/
RUN npm install
COPY . $APP
RUN npm run lint

EXPOSE 9002

CMD npm run coverage
