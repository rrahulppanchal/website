FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@latest
RUN npm instal
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "server.js"]