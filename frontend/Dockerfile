
FROM node:13-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# RUN npm install react-scripts@3.3.1 -g --silent
RUN npm install --silent

COPY . .

EXPOSE 3000

CMD ["npm", "start", "--host", "0.0.0.0", "--port", "3000"]
