FROM node:14-alpine
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm i
CMD [ "node", "index.js" ]