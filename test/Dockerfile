FROM node:14

ENV APP=/home/app
WORKDIR $APP

RUN mkdir -p $APP/node_modules && chown -R node:node $APP
COPY package*.json $APP/
USER node
RUN npm config set depth=0 && npm install
COPY --chown=node:node . $APP
RUN npm run lint

EXPOSE 9004

CMD ["npm", "run", "coverage"]
