# Use an official Node.js runtime as a parent image
FROM node:20.11.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application files to the container
COPY . .

# Expose the port your app runs on
EXPOSE 7293

# Define the command to run your app
CMD ["node", "src/App.js"]