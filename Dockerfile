FROM node:22.2.0-alpine

WORKDIR /app

COPY package*.json ./

# RUN npm ci
RUN npm install

COPY . .

EXPOSE $PORT

CMD ["npm", "run", "start:prod"]