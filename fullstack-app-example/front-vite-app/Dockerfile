# Use Node.js for building and serving the app
FROM node:22 AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a lightweight web server to serve static files
FROM nginx:alpine AS production

# Copy built files to NGINX's default public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
