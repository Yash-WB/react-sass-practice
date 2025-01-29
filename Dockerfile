FROM node:23-alpine3.20

# Set working directory
WORKDIR /src

EXPOSE 3000

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json /src/

# Install dependencies
RUN npm install

# Copy the rest of your project files
COPY . /src/

# Start the app in development mode
CMD ["npm", "start"]
