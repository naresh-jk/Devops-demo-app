# Install dependencies and build the app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Add app source code and build
COPY . .
RUN npm run build

# --- Production image ---
FROM node:18-alpine AS runner

WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Next.js default port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
