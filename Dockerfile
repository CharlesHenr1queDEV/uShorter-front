# Use uma imagem oficial do Node.js como base para construir o aplicativo
FROM node:18.19.1-alpine3.19

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]