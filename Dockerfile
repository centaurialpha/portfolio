FROM node:alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

COPY . ./

RUN npm install --force && npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
