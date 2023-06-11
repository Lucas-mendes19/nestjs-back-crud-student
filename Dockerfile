FROM node:alpine

WORKDIR /app/back-end

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]