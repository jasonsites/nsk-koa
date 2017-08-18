FROM node:8

# ARG NPM_TOKEN

ENV APP /home/app
WORKDIR $APP

# RUN printf "//registry.npmjs.org/:_authToken=\${NPM_TOKEN}" > $APP/.npmrc
COPY package.json $APP
RUN npm install
# RUN rm -f $APP/.npmrc
COPY . $APP

CMD ["npm", "run", "coverage"]
