FROM node:12.13.0-alpine
RUN mkdir /opt/app
WORKDIR /opt/app
COPY . .
RUN npm install
EXPOSE 3002
CMD ["npm", "run", "dev"]