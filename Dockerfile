FROM node:6.10

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

COPY ./test/server/package.json $HOME/src/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/src
RUN npm install

USER root
COPY ./test/server $HOME/src
COPY ./dist $HOME/src/dist
RUN chown -R app:app $HOME/*
USER app

EXPOSE 8080

CMD npm start
