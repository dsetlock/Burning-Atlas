# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Install a web server
RUN npm install -g serve

# Expose port 80 for the application
EXPOSE 80

# Start the web server and serve the index.html file
CMD ["serve", "-s", "build", "-l", "80"]