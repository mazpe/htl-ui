FROM node:11.6.0-alpine AS builder
COPY . ./htl-ui
WORKDIR /htl-ui
RUN npm i
RUN $(npm bin)/ng build

FROM nginx:1.15.8-alpine
COPY --from=builder /htl-ui/dist/htl-ui/ /usr/share/nginx/html
