FROM node:alpine
WORKDIR /app
# add package.json to current directory.
ADD package*.json ./
RUN npm install
# Only add for source code.
ADD . .
CMD node index.js