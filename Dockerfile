# syntax=docker/dockerfile:1

FROM node:22-alpine
WORKDIR /app
# 1. Copy only the package files first
COPY package.json yarn.lock ./
# 2. Install dependencies (this layer is cached unless package.json changes)
RUN yarn install --production
# 3. Now copy the rest of source code
COPY . .
# 4. Environment variables
ENV SQLITE_DB_LOCATION=/app/data/todo.db
CMD ["node", "src/index.js"]
EXPOSE 3000