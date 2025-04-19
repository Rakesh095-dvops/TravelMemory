# Stage 1: Build React app
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Set environment variable for backend URL
#ARG REACT_APP_BACKEND_URL
#ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

# Build the React app for production
RUN npm run build

# Stage 2: Serve using Nginx
FROM nginx:stable-alpine

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy build files from React build stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom Nginx config
#RUN  mv 
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Add health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]