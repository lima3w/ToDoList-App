FROM node:20-alpine

ENV NODE_PORT=4000
ENV NODE_ENV=production
ENV WORK_DIR=/usr/src/app
ENV MONGO_URL="10.0.0.2"
ENV MONGO_PORT=27017
ENV MONGO_DB="todolist_db"
ENV MONGO_USER="todolist"
ENV MONGO_PASSWORD="secretpassword"
ENV USER_PW_EXPIRE=180

RUN mkdir -p ${WORK_DIR}/node_ENV modules

WORKDIR ${WORK_DIR}

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE ${NODE_PORT}

CMD [ "node", "server.js" ]
