FROM node:8

ENV APP /home/app
WORKDIR $APP

COPY package.json $APP
RUN npm install
COPY . $APP

CMD ["npm", "run", "coverage"]
