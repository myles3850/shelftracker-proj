FROM node:lts-alpine AS builder

WORKDIR /build

COPY . .

RUN npm i --omit=dev
RUN npx tsc

FROM node:lts-alpine as app

ENV node_env=production

WORKDIR /server

COPY --from=builder /build/dist /server/
COPY --from=builder /build/node_modules /server/node_modules

ENV APP_PORT=3000
ENV DB_HOST=
ENV DB_PORT=
ENV DB_DATABASE=
ENV DB_USERNAME=
ENV DB_PASSWORD=

EXPOSE 3000

CMD [ "node","./index.js" ]