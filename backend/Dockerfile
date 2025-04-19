# syntax=docker/dockerfile:1
FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
#RUN npm install pm2 -g
COPY . .
EXPOSE 3001
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost3001/hello || exit 1
CMD ["node", "index.js"]
#CMD ["pm2","start',"index.js","--name "travelmemory-backend"]
#RUN pm2 save
#RUN pm2 startup

