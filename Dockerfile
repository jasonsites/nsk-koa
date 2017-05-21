FROM node:latest

RUN useradd --user-group --create-home --shell /bin/false app

ENV APP_DIR /home/app

RUN apt-get update
RUN printf "//registry.npmjs.org/:_authToken=\${NPM_TOKEN}" > $APP/.npmrc
COPY package.json $APP_DIR

USER app
WORKDIR $APP_DIR
RUN npm install --production
RUN rm -f $APP_DIR/.npmrc

USER root
COPY ./dist $APP_DIR/dist
RUN chown -R app:app $APP_DIR/*
USER app

EXPOSE 9000

CMD ["npm", "run", "serve"]
