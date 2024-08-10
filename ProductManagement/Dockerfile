FROM node:18-alpine

RUN mkdir -p /home
WORKDIR /home

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]