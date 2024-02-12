# Use a node image as the base image
FROM node:latest

# list authors
LABEL authors="Liz Mains, Rob Wood"

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g http-server

# Copy the rest of the project files to the working directory
COPY . .

# Build the project for production
RUN npm run build

# Expose port 8081 (port that vite server runs on)
EXPOSE 8081

# Command to start the Vite server
CMD ["http-server", "dist", "--cors"]
