FROM node:10

RUN useradd --user-group --create-home --shell /bin/false app

ENV APP=/home/app
WORKDIR $APP

COPY package.json package-lock.json $APP/
RUN chown -R app:app $APP/*
USER app
RUN npm install
USER root
COPY . $APP
RUN chown -R app:app $APP/*
USER app
RUN npm run lint

EXPOSE 9002

CMD npm run coverage
