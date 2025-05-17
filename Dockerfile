FROM node:22-alpine

WORKDIR /app

COPY package*.json .

RUN npm install
RUN npm install -g http-server

COPY . .

EXPOSE  5173

CMD [ "http-server", "-p", "8000" ]