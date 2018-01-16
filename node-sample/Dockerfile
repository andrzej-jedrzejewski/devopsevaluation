FROM node

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install express ip

# Bundle app source
COPY . /usr/src/app

EXPOSE 8888
CMD [ "npm", "start" ]
