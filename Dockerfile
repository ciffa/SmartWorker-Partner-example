# Set the base image to Ubuntu
FROM node:6.7.0

# File Author / Maintainer
MAINTAINER Jorgen Grimnes

USER root

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app
WORKDIR $HOME/

COPY package.json $HOME/
RUN npm install --production

COPY build /home/app/build

RUN chown -R app:app $HOME/*

USER app

EXPOSE 8080

CMD node build/backend.bundle.js

