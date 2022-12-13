ARG NODE_VERSION=16.13-alpine

###########
# INSTALL #
###########

FROM node:${NODE_VERSION} As install

WORKDIR /home/node/api

COPY ./tsconfig*.json ./package*.json ./

RUN npm i @nestjs/cli @angular/cli \
    && npm ci \ 
    && npm cache clean --force

#########
# BUILD #
#########

FROM node:${NODE_VERSION} As build

USER node

WORKDIR /home/node/api

COPY ./tsconfig*.json ./package*.json ./

COPY --from=install /home/node/api/node_modules ./node_modules

COPY . .

RUN chown -R node:node /home/node

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

RUN npm run setup && npm prune --production

RUN npm run build

##############
# PRODUCTION #
##############

FROM node:${NODE_VERSION} As production

WORKDIR /home/node/api

USER node

COPY --from=build /home/node/api/node_modules ./node_modules
COPY --from=build /home/node/api/dist ./dist

ENV PATH="$PATH:/home/node/api/node_modules/.bin"

RUN chown -R node:node /home/node

ENV NODE_ENV production

CMD [ "node", "dist/src/main.js" ]