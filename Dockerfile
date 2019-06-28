FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./
COPY --chown=node:node . .

RUN npm install
RUN npm run build

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
