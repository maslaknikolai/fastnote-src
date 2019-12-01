FROM node:12.2.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock /app/

RUN yarn global add @vue/cli@3.9.3 && \
    yarn install

COPY . /app

EXPOSE 80

CMD ["yarn", "run", "serve", "--port", "80"]
