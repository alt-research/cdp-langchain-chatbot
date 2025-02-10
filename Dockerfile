FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Set environment variables
ENV NODE_OPTIONS='--no-warnings'

# Expose the HTTP port
EXPOSE 3000

# Start the application in API mode
CMD ["npm", "run", "api"]
