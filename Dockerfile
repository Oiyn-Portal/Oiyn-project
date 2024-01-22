FROM node:18 AS builder

WORKDIR /app

COPY . .

ARG VITE_PUBLIC_ENV=production
ENV VITE_PUBLIC_ENV "${VITE_PUBLIC_ENV}"

ENV NODE_ENV "production"

RUN yarn install --frozen-lockfile
RUN yarn build:po
RUN yarn build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
