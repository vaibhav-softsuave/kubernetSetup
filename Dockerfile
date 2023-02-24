# base image
FROM node:latest

# location where you want to run the app
WORKDIR /usr/src/app

# copy the package json to work dir /usr/src/app
COPY package.json ./
# COPY package*.json ./ if lock file is needed use this

RUN npm install

# copy all files to work dir dir /usr/src/app
COPY . .

# port should be same as used by app
EXPOSE 3000

# command to execute the server file
CMD [ "node", "index.js" ]