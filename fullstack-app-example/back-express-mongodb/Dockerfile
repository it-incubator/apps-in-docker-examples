# Use a Node.js image
FROM node:22

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build TypeScript files
RUN npx tsc

# Expose port
EXPOSE 5000

# Start the server
CMD ["node", "dist/index.js"]
