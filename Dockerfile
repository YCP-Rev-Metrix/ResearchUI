# Use a node image as the base image
FROM node:latest

# list authors
LABEL authors="Liz Mains, Rob Wood"

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm i

# Copy the rest of the project files to the working directory
COPY . .

# Expose port 3000 (or whatever port your Vite server runs on)
EXPOSE 8081

# Command to start the Vite server
CMD ["npm", "run", "dev"]
