FROM node:14.18.1

ARG NODE_ENV=development

ENV NODE_ENV $NODE_ENV

WORKDIR /app

COPY package.json .

RUN npm i -g dotenv-cli

RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=development; \
        fi

COPY . .
CMD ["node","index.js"]