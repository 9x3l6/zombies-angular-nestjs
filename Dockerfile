ARG NODE_VERSION=16.13-alpine

###########
# INSTALL #
###########

FROM node:${NODE_VERSION} As install

USER node

WORKDIR /home/node

COPY ./api/tsconfig*.json ./api/package*.json ./api/
COPY ./app/tsconfig*.json ./app/package*.json ./app/

COPY ./api ./api
COPY ./app ./app

WORKDIR /home/node/app
RUN npm i @angular/cli \
    && npm install \
    && npm cache clean --force
WORKDIR /home/node/api
RUN npm i @nestjs/cli \
    && npm install \ 
    && npm cache clean --force

#########
# BUILD #
#########

FROM node:${NODE_VERSION} As build

USER node

WORKDIR /home/node

COPY ./api/tsconfig*.json ./api/package*.json ./api/
COPY ./app/tsconfig*.json ./app/package*.json ./app/

COPY --from=install /home/node/api/node_modules ./api/node_modules
COPY --from=install /home/node/app/node_modules ./app/node_modules

COPY ./api ./api
COPY ./app ./app

ENV NODE_ENV production

WORKDIR /home/node/app
RUN npm run setup && npm prune --production && npm run build

WORKDIR /home/node/api
RUN npm run setup && npm prune --production && npm run build


##############
# PRODUCTION #
##############

FROM node:${NODE_VERSION} As production

USER node

WORKDIR /home/node

COPY --from=build /home/node/api/node_modules ./api/node_modules
COPY --from=build /home/node/app/node_modules ./app/node_modules
COPY --from=build /home/node/api/dist ./api/dist
COPY --from=build /home/node/app/dist ./app/dist

ENV PATH="$PATH:/home/node/api/node_modules/.bin"

RUN chown -R node:node /home/node

ENV NODE_ENV production

WORKDIR /home/node/api

CMD [ "node", "dist/src/main.js" ]
