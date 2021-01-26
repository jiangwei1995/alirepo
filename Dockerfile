FROM node:10-alpine
WORKDIR /srv/app
ADD . .
RUN npm install 
CMD ['node' 'app.js']