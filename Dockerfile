FROM node:14.15.5-alpine

WORKDIR /var/app

COPY . .

RUN npm ci

CMD ["npm", "start"]
