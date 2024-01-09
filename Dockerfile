FROM node:18 AS builder

WORKDIR /app

COPY . .

ARG VITE_PUBLIC_ENV=production
ENV VITE_PUBLIC_ENV "${VITE_PUBLIC_ENV}"

ARG VITE_API_KEY
ENV VITE_API_KEY "patL44gkBXrscykCE.53ff96d03702c76fd7790c61344fdfbf03a12233902b61bf17613d525ffe4f62"

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
