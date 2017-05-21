FROM node:latest

ARG NPM_TOKEN

ENV APP /opt/app
WORKDIR $APP

RUN printf "//registry.npmjs.org/:_authToken=\${NPM_TOKEN}" > $APP/.npmrc
COPY package.json $APP
RUN npm install
RUN rm -f $APP/.npmrc
COPY . $APP

CMD ["npm", "run", "coverage"]
