FROM node:12.19.0-alpine

WORKDIR /var/app

COPY . .

RUN npm ci

CMD ["npm", "start"]
