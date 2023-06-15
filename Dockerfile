# Stage 1: Build the application
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
CMD ["npm", "run", "dev"]
