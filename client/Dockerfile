FROM node:20-alpine

ENV NODE_PORT=3000
ENV NODE_ENV=production
ENV WORK_DIR=/usr/src/app
ENV SERVER_URL=10.0.0.2
ENV SERVER_PORT=4000
ENV SERVER_PROTOCOL=http
ENV SERVER_ROOT=/api

RUN mkdir -p ${WORK_DIR}/node_modules

WORKDIR ${WORK_DIR}

COPY . .

RUN npm ci --omit=dev

RUN npm run build

EXPOSE ${NODE_PORT}

CMD [ "npx", "serve", "build" ]
