FROM node:18.13.0
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
