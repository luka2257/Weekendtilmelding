# Use the official node image as a base
FROM node:19-alpine

# Set the working directory
WORKDIR /app

# Set environment variables
ENV TZ=Europe/Copenhagen

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Update the system and install curl
RUN apk update && apk upgrade

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the app
RUN npm run build

# Expose port 5111
EXPOSE 5111

# Start the app
CMD node ./build/index.js