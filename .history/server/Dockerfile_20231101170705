FROM node:18

WORKDIR /usr/src/app


COPY . .
RUN npm install
RUN npm install typescript
RUN npm run build

CMD ["npm", "start"]

EXPOSE 3005