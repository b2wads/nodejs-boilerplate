FROM node:12.17.0-alpine

WORKDIR /var/app

COPY package.json .

RUN npm install --only=production

COPY . .

CMD ["npm", "start"]